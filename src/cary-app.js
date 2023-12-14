import { ackApp } from "./web-gems/ackApp.js"
import { ClockComponent } from "./clock/component.js"
import config from './config.js'
import { renderAppToElement } from "./taggedjs/index.js"

class CaryApp extends HTMLElement {
  now = new Date()
  date = new Date(config.nextMeetupDate) // 'July 24, 2023 21:00:00 EDT'
  calInviteUrl = 'data:text/calendar;charset=utf-8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ADTSTART:20230810T120000%0ADTEND:20230810T130000%0ASUMMARY:Your Event Name%0ADESCRIPTION:Description of the event.%0ALOCATION:Event Location%0AEND:VEVENT%0AEND:VCALENDAR'

  constructor() {
    super()
    setTimeout(() => {
      const clockElm = document.getElementById('count-clock')
      console.log('clockElm',window.location.href)
      renderAppToElement(ClockComponent, clockElm, {
        date: this.date,
        showLearnMore: !window.location.href.includes('meetup.html')
      })
    }, 0)
  }

  // TODO: This exists elsewhere. Remove here
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
    // 'count-clock': CountClock
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