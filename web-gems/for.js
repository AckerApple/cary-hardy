import { addInterpolateIdsForTemplates, interpolateTemplateVariableId } from "./interpolations.js"

export function createElementVarSuffix(element) {
  const id = performance.now()
  return element.constructor.name + '-' + id
}

export function forAttribute(value, element) {
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

  // remove template so that other parents won't see my hidden template
  template.parentNode.removeChild(template)

  // Replace all ${x} variables in template with a proper naming convention
  // identify all variables I claim
  const varSuffix = createElementVarSuffix(element)
  new Array(...template.content.children).forEach(child => 
    addInterpolateIdsForTemplates(child, varSuffix, eachAsName)
  )

  // old way to interpolate
  //const newTemplateContent = addInterpolateIdsFor(template.innerHTML, varSuffix, eachAsName)
  //template.innerHTML = newTemplateContent
 
  if (!array) {
    return // no array to loop
  }

  array.map((item, index) => {
    // do NOT change to xApp
    // app = { parent: element, component: {} }
    // app.component[eachAsName] = item

    interpolateTemplateVariableId(template.content, item, eachAsName, varSuffix)

    /*
    // Replace all ${x} variables with your own variables
    const content = interpolateWithVariableId(template.innerHTML, item, eachAsName, varSuffix)

    // ADD EACH TO DOM: HOWEVER, element may cause things to double register
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
    */
    const clone = template.content.cloneNode(true)
    
    new Array(...clone.children).forEach(child => {
      child.isAckForElm = true
      child.ackForVars = {
        [eachAsName]: item
      }
    })
    
    element.appendChild( clone )
  })

  console.log('for is down')
}