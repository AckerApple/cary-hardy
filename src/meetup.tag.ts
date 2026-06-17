import { ClockComponent, getDaySuffix } from './clock/clock.tag'
import { a, b, br, button, div, h1, h2, li, noElement, p, span, tag, tagElement, ul, htmlTag, callback } from "taggedjs"
import { loadNextMeetupDate } from "./firebase"
import { topNavBar } from './ui/topNav.tag'
import { publicNavButtons } from './ui/publicNavButtons.tag'
import { publicFooter } from './ui/publicFooter.tag'

const img = htmlTag('img')
let meetupLoaded = false

export const meetupTag = tag(() => {
  let meetupDate = Date.now() - 1000
  const refreshMeetup = callback(() => {})
  const getMeetupDate = () => new Date(meetupDate)

  const renderClock = () => {
    const clockElm = document.getElementById('count-clock') as HTMLElement
    if (!clockElm) return
    tagElement(ClockComponent, clockElm, {
      date: getMeetupDate(),
      showLearnMore: !window.location.href.includes('meetup.html')
    })
  }

  setTimeout(renderClock, 0)

  if (!meetupLoaded) {
    meetupLoaded = true
    tag.promise = loadNextMeetupDate()
      .then((loadedDate) => {
        if (typeof loadedDate === "number") {
          meetupDate = loadedDate
          refreshMeetup()
          renderClock()
        }
      })
      .catch((error) => {
        console.error("Failed to load next meetup date", error)
      })
  }
  
  /* TODO: Maybe toggle logic for all Patreon supporters meetings */
  return noElement(
    topNavBar(() => publicNavButtons()),
    img
      .class`bounce-in reflection`
      .alt`Cary Hardy logo`
      .src`https://cdn.shopify.com/s/files/1/0255/0271/1853/collections/Front_1200x1200.png`
      .style`--fx-index:0;width: 55vw;min-width: 200px;max-width: 400px;`,
    div.class`bounce-in`.style`--fx-index:1`(
      h1.style`line-height: 1.3;`('Meet & talk everything pinball!'),
      p('for Patreon LE supporters'),
      // <p>👉 LIT SPECIAL: <u>One time only</u> end of the year meetup is for <u>ALL Patreon supporters</u>!! 👈</p>
      div.style`font-size:.8em;opacity: .7;`('😎 come experience the hype')
    ),
    br,
    div.class`bounce-in`.style`--fx-index:2`(
      div.id`count-clock`
    ),
    br,
    div.class`bounce-in`.style`--fx-index:3;text-align: center;`(
      div.style`display: inline-block;`(
        div.style`\n          max-width: 900px;\n          background-color:#333;border-radius: .7em;\n          margin:.5em;text-align: justify;\n          border:1px solid rgba(255,255,255,.5);\n          color:rgba(255,255,255,.85);\n        `(
          div.style`padding:0em 2em;`(
            div.style`line-height: 1.5em;`(
              p('And if that sounds interesting to you, consider joining us!'),
              p(
                'By becoming a ',
                a.class`color-inherit`.href`https://www.patreon.com/caryhardy/membership`('Cary Hardy LE supporter'),
                ' before ',
                _=> getMeetupDate().toLocaleString('default', { month: 'long' }),
                ' ',
                _=> getMeetupDate().getDate(),
                _=> getDaySuffix(getMeetupDate()),
                ', you will receive an LE only Patreon ',
                span.style`white-space: nowrap;`('💬 message'),
                ', ',
                b('before the meeting start time'),
                ', with an invite ',
                span.style`white-space: nowrap;`('🔗 link'),
                ' to join this very exclusive meeting.'
              )
            ),
            br,
            h2('How does the meeting work?'),
            ul(
              li('🍺 It mostly works because of beer. Come 🍻 cheers with us!'),
              li('🛎️ Make sure you have Patreon notifications turned on to ensure you receive invite link 1 hour before meeting'),
              li('Meeting software is Google Meets, which is a browser based application. No installation will be required.'),
              li(
                'Link to meeting is provided 1 hour before meeting. Must be ',
                a.class`color-inherit`.href`https://www.patreon.com/caryhardy/membership`('Patreon LE member')
              )
            ),
            br,
            h2('😮 When issues arise'),
            ul(
              li('Watch your Patreon messages.'),
              li('In the event of meeting cancellation or disruption due to unforeseen circumstances, a makeup meeting will be communicated directly from Cary Hardy.')
            )
          ),
          div.style`text-align: center;`(
            '⚪️\u00A0',
            a.class`color-inherit`.href`https://www.patreon.com/caryhardy/membership`('Patreon memberships'),
            '\u00A0⚪️'
          )
        )
      )  
    ),
    br,
    br,
    div.class`bounce-in`.style`--fx-index:4;text-align: center;`(
      div.style`padding:.8em;font-size: .7em;`(
        a.class`no-a-style`.href`index.html`(
          button.type`button`('🔙 home')
        )
      )
    ),
    publicFooter()
  )
})
