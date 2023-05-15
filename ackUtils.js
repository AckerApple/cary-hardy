import ackModule from "./ackApp.js";

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
  parent, // :{parent?: HTMLElement, component: HTMLElement}
  name // :string
) {
  if (!parent.component) {
    return // nothing to get from
  }

  const names = name.split('.')
  const firstName = names.shift()
  if (parent.component[firstName] !== undefined) {
    const result = names.reduce((all, now) => {
      return all === undefined ? undefined : all[now]
    }, parent.component[firstName])
    return result // good value
  }

  if (!parent.parent) {
    return // no more up to go
  }

  return getParentVar(parent.parent, name)
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
