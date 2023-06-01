export class ShadowMemory {
  memory = {}

  add(component) {
    const name = this.constructor.name + '-' +performance.now()
    this.memory[name] = component
    return name
  }

  getById(id) {
    return this.memory[id]
  }

  delete(component) {
    Object.entries(this.memory).forEach(([name, value]) => {
      if ( value === component ) {
        delete this.memory[name]
      }
    })
  }
}

export const shadowMemory = new ShadowMemory()
