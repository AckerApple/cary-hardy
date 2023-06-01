import { shadowMemory } from "./shadowMemory.js";

export function evalWith(
  string,
  context,
  bindTo,
  captureResult = true
) {
  // create a string that has a `const ${key} = context['${key}']
  const varString = objectToConsts(context, 'context');

  // add all the consts and the eval together
  const contextSwitched = string // string.replace(/this(\.|\[)/g, (match, p1) => "this$" + p1)

  // now anything changed needs to be set back (just reset all)
  const setBackToObject = constsToObject(context, 'context')
  let resultCapture = 'const evalWithResult=' + contextSwitched + ';'

  if ( !captureResult ) {
    resultCapture = '(() => {' + contextSwitched + '}).bind(this)();'
  }
  
  let finalString = varString + resultCapture + setBackToObject
  
  if ( captureResult ) {
    finalString += ';evalWithResult'
  }

  
  return (function() {    
    // THIS IS USED by the evaluated so that the true "this" is not used
    const this$ = context
    return eval(finalString)
  }).bind(bindTo || context)()
}

export function loopAttributes(attributes, callback) {
  for (let i = 0; i < attributes.length; i++) {
    const attribute = attributes[i];
    const name = attribute.name
    const value = attribute.value
    callback(name, value)
  }
}

export function getParentVarsStacked(
  component
) {
  const parentObjects = {}

  const parents = getParents(component)  
  parents.reverse().forEach(parent =>
    Object.assign(parentObjects, parent)
  )
  
  return parentObjects
}

export function getParents(
  parent, // HTMLElement
  parentStorage = [],
) {
  if (!parent) {
    return parentStorage// nothing to get from
  }

  parentStorage.push(parent)

  const foundParent = getParentAckElmBy(parent)
  if ( !foundParent ) {
    return parentStorage // no more up to go
  }

  return getParents(foundParent, parentStorage)
}

export function getParentVar(
  // parent, // :{parent?: HTMLElement, component: HTMLElement}
  parent, // HTMLElement
  name // :string
) {
  if (!parent) {
    return // nothing to get from
  }

  // const shadowId = parent.getAttribute('AckShadowId') && !shadowId
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
  return string.replace(/\${(.*?)}/g, (match, variableName) => {
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
  return string.replace(/\${(.*?)}/g, (match, variableName) => {
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

export function getParentAckElmBy(element) {
  if ( !element.parentNode ) {
    return
  }

  if ( element.parentNode.constructor.isAckElm || element.parentNode.isAckForElm ) {
    return element.parentNode
  }

  const shadowId = element.parentNode.getAttribute && element.parentNode.getAttribute('AckShadowId')
  if ( shadowId ) {
    return shadowMemory.getById(shadowId)
  }

  
  return getParentAckElmBy(element.parentNode)
}

export function forAttribute(value, element) {
  const id = performance.now()
  const varSuffix = element.constructor.name + '-' + id

  const definition = value.split(':')
  const arrayName = definition[0]
  const array = element[arrayName]

  const eachAsName = definition[1]
  if (!eachAsName) {
    throw '*for not given each a name'
  }
  // const eachAs = element[eachAsName]
  // const indexName = definition[2] || 'index'

  const template = element.getElementsByTagName('template')[0]
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
    // app = { parent: element, component: {} }
    // app.component[eachAsName] = item

    // Replace all ${x} variables with your own variables
    const content = interpolateWithVariableId(template.innerHTML, item, eachAsName, varSuffix)

    /* ADD EACH TO DOM: HOWEVER, element may cause things to double register */
    const div = document.createElement('div')
    div.isAckForElm = true
    div.ackForVars = {
      [eachAsName]: item
    }
    
    // give it parents so parent app can be found
    element.appendChild(div)
    
    div.ackArrayIndex = index                
    div.innerHTML = content
    
    // Loop over all child nodes of the source element
    while (div.childNodes.length > 0) {
      // Remove the first child node from the source element
      const child = div.removeChild(div.firstChild);

      // Append the child node to the destination element
      element.appendChild(child)
    }

    // remove placeholder div
    element.removeChild(div)
  })
}
