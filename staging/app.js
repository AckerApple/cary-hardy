import { ackApp } from "./divine/ackApp.js"
import { CountClock } from "./clock/component.js"

class CaryApp extends HTMLElement {
  // now=new Date()
  // date=new Date('May 30, 2023 21:00:00 EDT')
}

const app = ackApp({
  App: CaryApp,
  components: {
    'cary-app': CaryApp,
    'count-clock': CountClock
  },
  defaultTemplate: 'home.html',
  routes: [{
    path: ".",
    template: 'home.html'
  }, {
    path: "meetup",
    template: "meetup.html"
  }]
})

export default app