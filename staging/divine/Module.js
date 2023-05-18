import { ElementComponent } from "../ElementComponent.js";
import { ackApp } from "./ackApp.js";
import AContainer from "./AContainer.js";

class AAPP extends ElementComponent {
  people = [{
    firstName: 'acker',
    relatives: [{ firstName: 'dad' }, { firstName: 'mom' }]
  }, {
    firstName: 'shelby',
    relatives: [{ firstName: 'jim' }, { firstName: 'beth' }]
  }, {
    firstName: 'jordi',
    relatives: [{ firstName: 'lolo' }, { firstName: 'grandma' }]
  }]
}

const ackModule = ackApp({
  App: AAPP,
  components: {
    'a-app': AAPP,
    'a-container': AContainer,
  }
})

export default ackModule