import { states, html, tag } from 'taggedjs'
import { qrCodeDisplay } from '../qrCode.tag'
import { getGoogleInviteLink, getOutlookInviteLink, getICalContent } from './calendar.utils'
import { labeledCountdown } from './timeZoneTimes.tag'

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

  return html`
    <div style="padding:.5em;">
      Countdown until the next, Patreon LE only, group meetup
    </div>

    ${labeledCountdown(date)}

    <div style="white-space:nowrap;font-size:.7em;opacity:.8">
      save meetup to your calendar using links below 👇
    </div>
    <div style="background-color:black;padding:0 0 .2em 0;">
      <div style="white-space:nowrap;font-size:.5em;opacity:.6">
        choose your calendar type below
      </div>
      
      <div style="display:flex;gap:1em;justify-content: center;">
        ${calLinks.map(item => html`
            <a href=${item.url} target="_blank"
              style="color:inherit;text-decoration:none;border:1px solid #666;border-radius:.3em;width:62px;height:62px;display:flex;align-items:center;justify-content: center;"
            >
              ${item.type === 'google' && html`<img src="assets/media/gmail-logo-2.png" alt="" width="48" height="48" border="0" />`}
              ${item.type === 'outlook' && html`<img src="assets/media/outlook-icon.png" alt="" width="48" height="48" border="0" />`}
            </a>
          `.key(item)
        )}

        <a href=${downloadString}
          download="cary-hardy-meetup.ics"
          style="color:inherit;text-decoration:none;border:1px solid #666;border-radius:.3em;width:62px;height:62px;display:flex;align-items:center;justify-content: center;"
        >
          <svg viewBox="0 0 170 170" fill="currentColor" width="48" height="48">
            <title>Apple Logo</title>
            <img src="assets/media/ical.png" alt="" width="48" height="48" border="0" />
          </svg>
        </a>
      </div>

      <br />
      
      <div>
        <small style="font-size:0.7em;">
          <u><a onclick=${() => showQrCodes = !showQrCodes} style="color:white;">⬜️ qr invite codes here</a></u>
        </small>
      </div>
  
      ${showQrCodes && html`
        <br />
        <div style="display:flex;flex-wrap:wrap;gap:1em;text-align:center;justify-content: center;">
          <div>
            ${qrCodeDisplay(googleLink)}
            <img src="assets/media/gmail-logo-2.png" alt="" width="48" height="48" border="0" />
          </div>
          <div>
            ${qrCodeDisplay(outlookLink)}
            <img src="assets/media/outlook-icon.png" alt="" width="48" height="48" border="0" />
          </div>
        </div>
      `}
    </div>

    <br />
    ${showLearnMore && html`
      <div style="padding:.8em;font-size: .7em;">
        <a class="no-a-style" href="meetup.html">
          <button type="button">learn more</button>
        </a>                
      </div>
    `}
  `
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
