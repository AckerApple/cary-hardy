import { ackApp } from "./web-gems/ackApp.js"
import { CountClock } from "./clock/component.js"

class CaryApp extends HTMLElement {
  now = new Date()
  date = new Date('June 26, 2023 21:00:00 EDT')

  getDaySuffix(date) {
    var day = date.getDate();
    var suffix = 'th';
  
    if (day === 1 || day === 21 || day === 31) {
      return 'st';
    } else if (day === 2 || day === 22) {
      return 'nd';
    } else if (day === 3 || day === 23) {
      return 'rd';
    }
  
    return suffix;
  }
}

const app = ackApp({
  App: CaryApp,
  components: {
    'cary-app': CaryApp,
    'count-clock': CountClock
  },
  defaultTemplate: 'home.html',

  // TODO: Make this ALSO based on folder structure and load routes automatically
  routes: [{
    path: ".",
    template: 'home.html'
  }, {
    path: "meetup",
    template: "meetup.html"
  }, {
    path: "test",
    template: "test.html"
  }]
})

export default app