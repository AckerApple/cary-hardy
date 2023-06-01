import { evalWith, getParentVar } from "./ack.utils.js"

//export const interpolateReplace = /\${(.*?)}/g
export const interpolateReplace = /\${((?:[^{}]|(?:\{[^{}]*\}))*?)}/g

/** replaces ${x} with <template id="x-start"></template><template id="x-end"></template> */
export function interpolateToTemplates(template) {
  const keys = []
  const string = template.replace(interpolateReplace, (_match, expression) => {
    const id = expression.trim()
    keys.push(id)
    return `<template interpolate start id="${id}"></template><template interpolate end id="${id}"></template>`
  })

  return { string, keys }
}

export function addInterpolateIdsForTemplates(
  element,
  id, // Will make ${x} become ${x:id}
  onlyName, // Only modify variables with ${onlyName}
) {
  element.querySelectorAll('template[interpolate]')
    .forEach(template => {
      if ( !template.hasAttribute('start') ) {
        return // only care about starts
      }

      const variableName = template.getAttribute('id')      
      if ( !isInterpolatedFor(variableName, onlyName) ) {
        return // not for me
      }

      template.setAttribute('parent', id)
    })
}

/** replaces a string's ${x} with ${x:id} when x matches `onlyName` */
export function addInterpolateIdsFor(
  string, // string with ${x}
  id, // Will make ${x} become ${x:id}
  onlyName, // Only modify variables with ${onlyName}
) {
  return string.replace(interpolateReplace, (_match, variableName) => {
    return '${' + getInterpolatedIdFor(variableName, id, onlyName) + '}'
  })
}

function isInterpolatedFor(
  variableName, onlyName
) {
  const parts = variableName.split('.')
  return !onlyName || parts[0] === onlyName
}

function getInterpolatedIdFor(
  variableName, id, onlyName
) {

  if (!isInterpolatedFor(variableName, onlyName)) {
    return variableName // not for me, move on
  }

  return variableName + ':' + id
}

export function interpolateTemplateVariableId(
  element,
  variable, // the value that will replace
  onlyName, // Only modify variables with ${onlyName}
  id, // Will make ${x} become ${x:id}
) {
  const templates = element.querySelectorAll('template[interpolate]')

  templates.forEach((template, index) => {
    if ( !template.hasAttribute('start') ) {
      return // only care about starts
    }

    const parent = template.getAttribute('parent')
    const isMine = !parent || parent === id
    if ( !isMine ) {
      return // not for me, for someone else
    }

    const variableName = template.getAttribute('id')
    const onlyMatch = isInterpolatedFor(variableName, onlyName)
    if ( !onlyMatch ) {
      return // not for my for looping
    }

    const parts = variableName.split('.')
    
    if ( onlyName ) {
      parts.shift()
    }
    
    const targets = parts.join('.')
    const result = evalWith(targets, variable, variable, true)

    updateBetweenTemplates(result, template, templates[index+1])
  })
}


// Function to update the value of x
export function updateBetweenTemplates(
  value,
  startTemplate,
  endTemplate,
) {
  const parent = startTemplate.parentNode;

  // Remove the content between the templates
  let sibling = startTemplate.nextSibling;
  while (sibling && sibling !== endTemplate) {
    parent.removeChild(sibling);
    sibling = startTemplate.nextSibling;
  }

  // Insert the new value
  const textNode = document.createTextNode(value);
  parent.insertBefore(textNode, endTemplate);
}

export function interpolateWithVariableId(
  string, // string with ${x}
  variable, // the value that will replace
  onlyName, // Only modify variables with ${onlyName}
  id, // Will make ${x} become ${x:id}
) {
  return string.replace(interpolateReplace, (match, variableName) => {
    const was = '${' + variableName + '}'
    const isVarScoped = variableName.includes(':')
    const idParts = variableName.split(':')
    let parts = variableName.split('.')

    if ( onlyName ) {
      if (!isVarScoped) {
        return was // not a scoped variable
      }
  
      const iId = idParts.pop()
      const mine = iId == id
      if (!mine) {
        return was // not scoped for me, var is for someone else
      }
  
      const justVarPart = idParts.join(':')
      parts = justVarPart.split('.')
      const firstNameMatch = parts[0] === onlyName
      if (!firstNameMatch) {
        return was // not for me
      }
  
      parts.shift() // remove the first dot notation cause its good
    } else if ( isVarScoped ) {
      return was // this var has already been claimed elsewhere
    }

    const result = parts.reduce((all, part) => {
      return all[part]
    }, variable)

    return result || was;
  })
}
