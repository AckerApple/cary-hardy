import ackModule from "./ackModule.js";
import { interpolateReplace } from "./src/web-gems/interpolations.js";

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

          // bind [something]="x" and something:="new Date()"
          loopAttributes(this.attributes, (name, value) => {
            if (name.search(/^\[.*\]/) >= 0) {
              const realName = name.replace(/(^\[|\])/g, '')
              const realValue = getParentVar(parentApp, value)
              this[realName] = realValue
              return
            }

            // its to set a dynamic variable
            if (name.search(/:$/) >= 0) {
              const realName = name.replace(/:$/g, '')
              const result = evalWith(value, this)
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
            this.id = performance.now()
            const varSuffix = this.constructor.name + '-' + this.id

            if (name === '*for') {
              const definition = value.split(':')
              const arrayName = definition[0]
              const array = this[arrayName]

              const eachAsName = definition[1]
              if (!eachAsName) {
                throw '*for not given each a name'
              }
              // const eachAs = this[eachAsName]
              // const indexName = definition[2] || 'index'

              const template = this.getElementsByTagName('template')[0]
              if (!template) {
                throw '*if has no template within it'
              }

              // Replace all ${x} variables in template with a proper naming convention
              // identify all variables I claim
              const newTemplateContent = addInterpolateIdsFor(template.innerHTML, varSuffix, eachAsName)
              template.innerHTML = newTemplateContent
              
              if (!array) {
                return // no array to loop
              }

              array.map((item, index) => {
                // do NOT change to xApp
                // app = { parent: this, component: {} }
                // app.component[eachAsName] = item

                // Replace all ${x} variables with your own variables
                const content = interpolateWithVariableId(template.innerHTML, item, eachAsName, varSuffix)

                /* ADD EACH TO DOM: HOWEVER, this may cause things to double register */
                const div = document.createElement('div')
                div.isAckForElm = true
                div.ackForVars = {
                  [eachAsName]: item
                }
                
                // give it parents so parent app can be found
                this.appendChild(div)
                
                div.ackArrayIndex = index                
                div.innerHTML = content
                
                // Loop over all child nodes of the source element
                while (div.childNodes.length > 0) {
                  // Remove the first child node from the source element
                  const child = div.removeChild(div.firstChild);

                  // Append the child node to the destination element
                  this.appendChild(child)
                }

                // remove placeholder div
                this.removeChild(div)
              })
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

function evalWith(string, context) {
  // create a string that has a `const ${key} = context['${key}']
  const varString = objectToConsts(context, 'context');

  // add all the consts and the eval together
  const contextSwitched = string.replace(/this(\.|\[)/g, (match, p1) => "this$" + p1)

  // now anything changed needs to be set back (just reset all)
  const setBackToObject = constsToObject(context, 'context')
  const finalString = varString + 'const evalWithResult=' + contextSwitched + ';' + setBackToObject + ';evalWithResult'

  // THIS IS USED by the evaluated so that the true "this" is not used
  const this$ = context
  const result = eval(finalString, context)

  return result;
}

function loopAttributes(attributes, callback) {
  for (let i = 0; i < attributes.length; i++) {
    const attribute = attributes[i];
    const name = attribute.name
    const value = attribute.value
    callback(name, value)
  }
}

function getParentVar(
  // parent, // :{parent?: HTMLElement, component: HTMLElement}
  parent, // HTMLElement
  name // :string
) {
  if (!parent) {
    return // nothing to get from
  }

  if ( !parent.isAckForElm && !parent.constructor.isAckElm ) {
    if (!parent.parentNode) {
      return // no more up to go
    }
    return getParentVar(parent.parentNode, name)
  }

  let vars = parent
  
  if ( parent.isAckForElm ) {
    vars = parent.ackForVars
  }

  const names = name.split('.')
  const firstName = names.shift()
  if (vars[firstName] !== undefined) {
    const result = names.reduce((all, now) => {
      return all === undefined ? undefined : all[now]
    }, vars[firstName])
    return result // good value
  }

  if (!parent.parentNode) {
    return // no more up to go
  }

  return getParentVar(parent.parentNode, name)
}

function objectToConsts(obj, objName) {
  return Object.getOwnPropertyNames(obj).map(key => `let ${key} = ${objName}['${key}'];\n`).join('')
}

function constsToObject(obj, objName) {
  return Object.getOwnPropertyNames(obj).map(key => `${objName}['${key}'] = ${key};\n`).join('')
}

/** replaces a string's ${x} with ${x:id} when x matches onlyName */
function addInterpolateIdsFor(
  string, // string with ${x}
  id, // Will make ${x} become ${x:id}
  onlyName, // Only modify variables with ${onlyName}
) {
  return string.replace(interpolateReplace, (match, variableName) => {
    const parts = variableName.split('.')

    if (parts[0] !== onlyName) {
      return '${' + variableName + '}' // not for me, move on
    }

    return '${' + variableName + ':' + id + '}'
  })
}

function interpolateWithVariableId(
  string, // string with ${x}
  variable, // the value that will replace
  onlyName, // Only modify variables with ${onlyName}
  id, // Will make ${x} become ${x:id}
) {
  return string.replace(interpolateReplace, (match, variableName) => {
    const was = '${' + variableName + '}'

    if (!variableName.includes(':')) {
      return was // not a scoped variable
    }

    const idParts = variableName.split(':')
    const iId = idParts.pop()
    const mine = iId == id
    if (!mine) {
      return was // not scoped for me, var is for someone else
    }

    const justVarPart = idParts.join(':')
    const parts = justVarPart.split('.')
    const firstNameMatch = parts[0] === onlyName
    if (!firstNameMatch) {
      return was
    }

    parts.shift() // remove the first dot notation cause its good

    const result = parts.reduce((all, part) => {
      return all[part]
    }, variable)

    return result || was;
  })
}

function getParentAckElmBy(element) {
  if ( !element.parentNode ) {
    return
  }

  if ( element.parentNode.constructor.isAckElm || element.parentNode.isAckForElm ) {
    return element.parentNode
  }
  
  return getParentAckElmBy(element.parentNode)
}