import ackModule from "./Module.js"
import { evalWith, forAttribute, getParentAckElmBy, getParentVar, getParentVarsStacked, getParents, loopAttributes } from "./ack.utils.js"

// ensure we register Ack web components only once
let hasAckApp = false

export function ackApp(config) {
  const { App, components } = config

  const returnFunc = function () {
    if ( !hasAckApp ) {
      hasAckApp = true
      ackModule()
    }

    Object.entries(components).forEach(([name, Component]) => {
      const isApp = Component === App
      
      Component.isAckElm=true

      class Component2 extends Component {       
        constructor() {
          super()

          const parentApp = getParentAckElmBy(this)
          
          /** SCOPE */
          const scope = getScopeBy(Component)
          scope.subscriptions = []

          /* Inputs */
          loopAttributes(this.attributes, (name, value) => {
            // [something] = "x"
            if (name.search(/^\[.*\]/) >= 0) {
              const realName = name.replace(/(^\[|\])/g, '')
              const realValue = getParentVar(parentApp, value)
              this[realName] = realValue
              return
            }

            // something: = "new Date()"
            if (name.search(/:$/) >= 0) {
              const realName = name.replace(/:$/g, '')
              const result = evalWith(value, this)
              this[realName] = result
              return
            }

            // (something) = "this.style.display = something"
            if (name.search(/^\([^()]+\)$/) >= 0) {
              const realName = name.replace(/^\(([^()]+)\)$/g, '$1')
              const result = () => {
                const parentVariableStack = getParentVarsStacked(this)
                // console.log('this*******', this, this.value, this.appendChild)
                evalWith(value, parentVariableStack, this, false)
              }
              this[realName] = result
              return
            }
          })

          // bind ()="" (NEEDS to run before children are put down)
          loopAttributes(this.attributes, (name, value) => {
            if (name === '()') {
              evalWith(value, this) // run loading function
            }
          })

          // bind *if=""
          loopAttributes(this.attributes, (name, value) => {
            if (name === '*if') {
              const template = this.getElementsByTagName('template')[0]
              if (!template) {
                throw '*if has no template within it'
              }

              const result = evalWith(value, this)
              if (!result) {
                return
              }

              const toAppend = template.content.cloneNode(true)
              // 🔒 Prevent anyone from editing template which would cause that content to be executable
              this.removeChild(template)
              this.appendChild(toAppend)
            }
          })

          // bind *for="" // TODO ????need to interpolate template just as *if?????
          loopAttributes(this.attributes, (name, value) => {         
            if (name === '*for') {
              forAttribute(value, this)
            }

            if ( name === '*subscribe' ) {
              const subscribeTo = getParentVar(parentApp, value)
              const as = this.getAttribute('as')

              if ( !as ) {
                throw new Error('*subscribe requires attribute string "as"')
              }

              scope.subscriptions.push(
                subscribeTo.subscribe((newValue) => {
                  this[as] = newValue
                  this.next()
                })
              )
            }
          })

          if (isApp && this.children.length) {
            const template = this.children[0]

            if (this.children.length > 1 || template.tagName !== 'TEMPLATE') {
              throw `The first child element within an app must be a <template>. The template must also be the only direct child. Got: ${template.tagName}`
            }

            // TODO: interpolate jere

            const toAppend = template.content.cloneNode(true)

            // 🔒 Prevent anyone from editing template which would cause that content to be executable
            this.removeChild(template)
            this.appendChild(toAppend)
          }
        }

        disconnectedCallback() {
          const scope = getScopeBy(Component)
          scope.subscriptions.forEach(sub => sub.unsubscribe())
          scope.subscriptions.length = 0
        }
      }

      Object.getOwnPropertyNames(Component.prototype).forEach(key => {
        Component2.prototype[key] = Component.prototype[key]
      })

      customElements.define(name, Component2)
    })
  }

  returnFunc.config = config

  return returnFunc
}

const scopes = []
function getScopeBy(component) {
  const index = scopes.findIndex(x => x.component === component)
  
  if ( index<0 ) {
    scopes.push({component, scope: {}})
    return scopes
  }

  return scopes[index].scope
}