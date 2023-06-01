import { addInterpolateIdsFor } from "./interpolations.js";
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
  parents.reverse().forEach(parent => {
    // this wont move functions
    // Object.assign(parentObjects, parent)
    
    // make all variables available
    for(let x in parent){
      parentObjects[x] = parent[x]
    }
  })
  
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

