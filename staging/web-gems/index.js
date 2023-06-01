import { updateBetweenTemplates } from "./interpolations.js"


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
