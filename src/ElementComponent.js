/** binds all functions to this */
export class ElementComponent extends HTMLElement {
  constructor() {
    super()

    for (const key of Object.getOwnPropertyNames(this.constructor.prototype)) {
      const prop = this[key];
      if (typeof prop === 'function' && key !== 'constructor') {
        this[key] = prop.bind(this);
      }
    }
  }

  imports = imports
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