import ackModule from "./Module.js"
import { evalWith, getParentAckElmBy, getParentVar, getParentVarsStacked, loopAttributes } from "./ack.utils.js"
import { forAttribute } from "./for.js"
import { interpolateTemplateVariableId, interpolateToTemplates } from "./interpolations.js"

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
      // const isApp = Component === App
      
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

              // 🔒 Prevent anyone from editing template which would cause that content to be executable
              this.removeChild(template)
              
              const result = evalWith(value, this)
              if (!result) {
                return
              }

              const toAppend = template.content.cloneNode(true)              
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

          // interpolation that converts ${a} into <template interpolate start id="a"><template><template interpolate end id="a"><template>
          if (this.children.length) {
            const stackedVars = getParentVarsStacked(this)
            interpolateChildren(this.children, stackedVars, this)

            interpolateChildrenAttributes(this.children, stackedVars, this)
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

// converts <a href={url}></a> into <a href="http://googe.com"></a>
export function interpolateChildrenAttributes(
  children,
  context, // variables used to evaluate
  _owner // this aka element
) {
  new Array(...children).forEach(child => {
      child.getAttributeNames().forEach(attrName => {
        const value = child.getAttribute(attrName)
        if ( value.search(/^\s*{/) >= 0 && value.search(/}\s*$/) >= 0 ) {
          const code = value.replace('{','').split('').reverse().join('').replace('}','').split('').reverse().join('')
          const result = evalWith(code, context, context, true)
          child.setAttribute(attrName, result)
        }
      })

      interpolateChildrenAttributes(child.children, context, child)
  })
}

export function interpolateChildren(
  children,
  context, // variables used to evaluate
  owner // this aka element
) {
  new Array(...children).forEach(child => {
    if (child.tagName !== 'TEMPLATE') {
      return // not for me
    }

    const toAppend = child.content.cloneNode(true)
    if ( !toAppend.children.length ) {
      return // no inner templates
    }

    new Array(...toAppend.children).forEach(child => {      
      const html = child.innerHTML
      const result = interpolateToTemplates(html, context)
      child.innerHTML = result.string
    
      // 🔒 Prevent anyone from editing template which would cause that content to be executable
      owner.appendChild(toAppend)
    })
    
    owner.removeChild(child)
    interpolateTemplateVariableId(owner, context, undefined, undefined)
  })
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