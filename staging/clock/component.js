import { states, html, tag } from "../taggedjs/bundle.js"
import { countdown } from "./countdown.tag.js"
import { qrCodeDisplay } from "../qrCode.tag.js"
import { getGoogleInviteLink, getOutlookInviteLink, getICalContent } from "./calendar.utils.js"

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
}) => {
  date = new Date(date)

  let showQrCodes = false
  
  states(get => showQrCodes = get(showQrCodes))

  const estTime = formatTime(date, 'America/New_York'); // Eastern Standard Time
  const cstTime = formatTime(date, 'America/Chicago');  // Central Standard Time
  const pstTime = formatTime(date, 'America/Los_Angeles'); // Pacific Standard Time

  // created using https://parcel.io/tools/calendar
  // Do not forget to update cary-hardy-meetup.ics

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
    <style>
    .countdown {
      /*line-height: 1.75em;*/
      background: black;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      font-family: Arial, sans-serif;
      padding: .3em;
      border:1px solid white;
      border-left:0;
      border-right:0;
      gap: .5em;
    }

    .digit-container {
      display: flex;
      justify-content: center;
      align-items: center;
      color:black;
    }

    .digit {
      position:relative;
      margin: 0.1rem;
    }

    .digit .wrap, .digit .placeholder {
      box-shadow: inset 0 5px 10px rgba(0, 0, 0, 0.1), inset 0 -5px 10px rgba(0, 0, 0, 0.1);
      margin:0;
      text-align: center;
      font-weight: bold;
      font-size: 2rem;
      padding: .3em;
      border: 2px solid black;
      border-radius: 5px;
      background-color: white;
      display:flex;
    }

    .digit .wrap{
      position: absolute;
    }

    .digit .wrap.changed {
      animation: fade-out 130ms ease forwards;
      z-index:1
    }

    .digit .line {
      z-index:2;
      position:absolute;
      top:50%;
      border-top:1px solid black;
      opacity: .2;
      width: 100%;
    }

    .label {
      color:white;
      text-align: center;
    }

    @keyframes fade-out {
      0% {
        opacity: 1;
      }
      
      100% {
        transform: rotateX(90deg);
        opacity: 1;
      }
    }
    </style>

    <div style="padding:.5em;">
      Countdown until the next, Patreon LE only, group meetup
    </div>

    ${countdown({date})}

    <div style="font-size:.65em;opacity:.7">
      ${estTime} / ${cstTime} / ${pstTime}
    </div>

    <br />
    <div>
      <span>🗓️ ${date.toLocaleString('default', { weekday: 'long' })}, ${ date.toLocaleString('default', { month: 'long' }) } ${ date.getDate() }${getDaySuffix(date)}</span>
    </div>

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

function formatTime(date, timeZone) {
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    timeZone,
    timeZoneName: 'short'
  };

  return new Intl.DateTimeFormat('en-US', options).format(date);
}

function getDaySuffix(date) {
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
