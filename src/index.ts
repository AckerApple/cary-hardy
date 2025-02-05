import { ClockComponent } from "./clock/clock.tag"
import { countdown } from "./clock/countdown.tag"
import { html, tagElement } from "taggedjs"
import { adminTag } from "./admin.tag"
import { homeTag } from "./home.tag"
import { meetupTag } from "./meetup.tag"
import config from './config'

export { countdown, meetupTag, adminTag, homeTag, tagElement, html }


const date = new Date(config.nextMeetupDate) // 'July 24, 2023 21:00:00 EDT'

setTimeout(() => {
  const clockElm = document.getElementById('count-clock') as HTMLElement
  console.log('clockElm', clockElm)
  tagElement(ClockComponent, clockElm, {
    date,
    showLearnMore: !window.location.href.includes('meetup.html')
  })
}, 0)
