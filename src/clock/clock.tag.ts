import { a, br, button, div, p, small, tag, noElement, htmlTag, states, Tag } from 'taggedjs'
import { qrCodeDisplay } from '../qrCode.tag'
import { getGoogleInviteLink, getOutlookInviteLink, getICalContent } from './calendar.utils'
import { labeledCountdown } from './timeZoneTimes.tag'

const img = htmlTag('img')
const svg = htmlTag('svg')
const title = htmlTag('title')
const u = htmlTag('u')

export const content = {
  subject: 'Cary Hardy Patreon meetup',
  message: `
    Link to virtual meeting is posted to Patreon on a day of meeting
  
    https://www.patreon.com/caryhardy
  `.trim().replace(/    /g,'')
}

export const ClockComponent = tag(({
  date,
  showLearnMore = true
}: any) => {
  date = new Date(date)

  let showQrCodes = false
  
  states(get => [showQrCodes] = get(showQrCodes))

  const googleLink = getGoogleInviteLink({
    startDateTime: date, message: content.message, subject: content.subject,
  })

  const outlookLink = getOutlookInviteLink({
    startDateTime: date, message: content.message, subject: content.subject,
  })

  const calLinks = [{
    type:'google',
    url: googleLink,
  }, {
    type:'outlook',
    url: outlookLink,
  }]
  
  const icalContent = getICalContent({
    startDateTime: date,
    message: content.message, subject: content.subject,
  })

  // Create a Blob containing the string data
  var blob = new Blob([icalContent], { type: 'text/calendar' })

  // Set the download attribute and create a link to the Blob
  const downloadString = window.URL.createObjectURL(blob)

  return noElement(
    div({style: 'padding:.5em;'},
      'Countdown until the next, Patreon LE only, group meetup'
    ),
    labeledCountdown(date),
    div({style: 'white-space:nowrap;font-size:.7em;opacity:.8'},
      'save meetup to your calendar using links below 👇'
    ),
    div({style: 'background-color:black;padding:0 0 .2em 0;'},
      div({style: 'white-space:nowrap;font-size:.5em;opacity:.6'},
        'choose your calendar type below'
      ),
      div({style: 'display:flex;gap:1em;justify-content: center;'},
        calLinks.map(item => getIconAndLabel(
          item.type,
          {href: item.url},
          item.type === 'google'
            ? img({src: 'assets/media/gmail-logo-2.png', alt: '', width: '48', height: '48', border: '0'})
            : img({src: 'assets/media/outlook-icon.png', alt: '', width: '48', height: '48', border: '0'})
        ).key(item)),
        getIconAndLabel(
          'ical',
          {href: downloadString, download: 'cary-hardy-meetup.ics'},
          svg({viewBox: '0 0 170 170', fill: 'currentColor', width: '48', height: '48'},
            title('Apple Logo'),
            img({src: 'assets/media/ical.png', alt: '', width: '48', height: '48', border: '0'})
          )
        )
      ),
      br,
      div(
        small({style: 'font-size:0.7em;'},
          u(
            a({onClick: () => showQrCodes = !showQrCodes, style: 'color:white;'}, '⬜️ qr invite codes here')
          )
        )
      ),
      _=> showQrCodes && noElement(
        br,
        div({style: 'display:flex;flex-wrap:wrap;gap:1em;text-align:center;justify-content: center;'},
          div(
            qrCodeDisplay(googleLink),
            img({src: 'assets/media/gmail-logo-2.png', alt: '', width: '48', height: '48', border: '0'})
          ),
          div(
            qrCodeDisplay(outlookLink),
            img({src: 'assets/media/outlook-icon.png', alt: '', width: '48', height: '48', border: '0'})
          )
        )
      )
    ),
    p({style: 'font-size:0.8em;opacity:0.7;line-height:0.9em;'},
      small('🔗 A link to virtual meetup is posted on day of meetup,', br, 'in the LE ONLY 💬 chat on Patreon.')
    ),
    _=> showLearnMore && div({style: 'padding:.8em;font-size: .7em;'},
      a({class: 'no-a-style', href: 'meetup.html'},
        button({type: 'button'}, 'learn more')
      )
    )
  )
})

export function getDaySuffix(date: Date) {
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

const getIconAndLabel = (
  label: string,
  linkAttrs: Record<string, string>,
  iconHtml: Tag,
) => 
  a({class: 'small-icon-link', ...linkAttrs, target: '_blank'},
    div({class: 'small-icon'}, iconHtml),
    small({style: 'font-size:0.5em;'}, label)
  )
