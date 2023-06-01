import { evaluateExpression, updateBetweenIdTags } from "./index.js";
import { interpolateToTemplates } from "./interpolations.js";
import { shadowMemory } from "./shadowMemory.js";

/** binds all functions to this */
export class ElementComponent extends HTMLElement {
  webGems = {
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

    this.webGems.ackShadowId = shadowMemory.add(this)

    /*if ( this.children.length ) {
      const children = new Array(...this.children)
      console.log('this', children.length, children[0])
      
      const isRenderControlled = this.getAttribute('*for') || this.getAttribute('*if')
      if ( isRenderControlled ) {
        return // not for me to control
      }
      
      const stackedVars = getParentVarsStacked(this)
      interpolateChildren(this.children, stackedVars, this)
    }*/
  }

  disconnectedCallback() {
    shadowMemory.delete(this)
  }

  imports = imports
  
  displayImports(imports) {
    const shadow = this.attachShadow({ mode: 'open' })

    this.webGems.interpolated = interpolateToTemplates(imports.template, this)

    const template = document.createElement('template')
    template.innerHTML = this.webGems.interpolated.string;
    
    shadow.appendChild( template.cloneNode(true) )
    
    // all direct children need a memory link
    new Array(...template.content.children).forEach(child => {
      child.setAttribute('AckShadowId', this.webGems.ackShadowId)  
      shadow.appendChild( child )
    })

    // add css template (must come after template)
    const style = document.createElement('style')
    style.textContent = imports.styles
    shadow.appendChild(style)

    this.updateDisplay()
  }
  
  updateDisplay() {
    this.webGems.interpolated.keys.forEach(key => 
      updateBetweenIdTags(key, evaluateExpression(key, this), this.shadowRoot)
    )
  }
}

/** fetch files */
export async function imports(namedImports) {
  const results = {}

  const promises = Object.entries(namedImports).map(([name, url]) => {
    return fetch(url)
      .then(response => response.text())
      .then(result => {
        return results[name] = result
      })
  })

  await Promise.all(promises)
  return results
}