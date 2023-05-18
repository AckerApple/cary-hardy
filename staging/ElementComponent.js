import { evaluateExpression, interpolateToTemplates, updateBetweenIdTags } from "./divine/index.js";
import { shadowMemory } from "./divine/shadowMemory.js";

/** binds all functions to this */
export class ElementComponent extends HTMLElement {
  divine = {
    interpolated: {string: [], keys: [], },
    ackShadowId: this.constructor.name
  }

  constructor() {
    super()

    for (const key of Object.getOwnPropertyNames(this.constructor.prototype)) {
      const prop = this[key];
      if (typeof prop === 'function' && key !== 'constructor') {
        this[key] = prop.bind(this);
      }
    }

    this.divine.ackShadowId = shadowMemory.add(this)
  }

  disconnectedCallback() {
    shadowMemory.delete(this)
  }

  imports = imports
  
  displayImports(imports) {
    const shadow = this.attachShadow({ mode: 'open' })

    this.divine.interpolated = interpolateToTemplates(imports.template, this)

    const template = document.createElement('template')
    template.innerHTML = this.divine.interpolated.string;
    
    shadow.appendChild( template.cloneNode(true) )
    
    // all direct children need a memory link
    new Array(...template.content.children).forEach(child => {
      child.setAttribute('AckShadowId', this.divine.ackShadowId)  
      shadow.appendChild( child )
    })

    // add css template (must come after template)
    const style = document.createElement('style')
    style.textContent = imports.styles
    shadow.appendChild(style)

    this.updateDisplay()
  }
  
  updateDisplay() {
    this.divine.interpolated.keys.forEach(key => 
      updateBetweenIdTags(key, evaluateExpression(key, this), this.shadowRoot)
    )
  }
}

export async function imports(namedImports) {
  const results = {}

  const promises = Object.entries(namedImports).map(([name, url]) => {
    return fetch(url)
      .then(response => response.text())
      .then(css => {
        return results[name] = css
      })
  })

  await Promise.all(promises)
  return results
}