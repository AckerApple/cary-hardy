/** replaces ${x} with <template id="x-start"></template><template id="x-end"></template> */
export function interpolateToTemplates(template, variables) {
  const keys = []
  const string = template.replace(/\${(.*?)}/g, (match, expression) => {
    // const value = evaluateExpression(expression.trim(), variables);
    // return value !== undefined ? value : match;
    const id = expression.trim()
    keys.push(id)
    return `<template id="${id}-start"></template><template id="${id}-end"></template>`
  })

  return { string, keys }
}

export function evaluateExpression(expression, variables) {
  const parts = expression.split(/\.|\[("|'|)(.*?)\1\]/).filter(part => part && part !== '');
  let value = variables;

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];

    if (typeof value === 'object' && value !== null) {
      if (Array.isArray(value) && /^\d+$/.test(part)) {
        value = value[parseInt(part, 10)];
      } else {
        value = value[part];
      }
    } else {
      value = undefined;
      break;
    }
  }

  return value;
}

export function updateBetweenIdTags(
  name,
  value,
  document,
) {
  const startTemplate = document.getElementById(`${name}-start`);
  const endTemplate = document.getElementById(`${name}-end`);
  
  // const startTemplate = document.querySelector(`#${name}-start`);
  // const endTemplate = document.querySelector(`#${name}-start`);
  
  updateBetweenTemplates(value, startTemplate, endTemplate)
}

// Function to update the value of x
function updateBetweenTemplates(
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