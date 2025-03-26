import { countdown } from './countdown.tag'
import { getDaySuffix } from './clock.tag'
import { html } from 'taggedjs'

export function labeledCountdown(date: Date | number) {
  const d = new Date(date)
  return html`
    <div style="text-align:center;">
      <div>
        <span>🗓️ ${d.toLocaleString('default', { weekday: 'long' })}, ${ d.toLocaleString('default', { month: 'long' }) } ${ d.getDate() }${getDaySuffix(d)}</span>
      </div>
      ${countdown({date})}
      ${smallTimeZoneTimes(d)}
    </div>
  `
}

export function smallTimeZoneTimes(date: Date) {
  return html`
    <div style="font-size:.65em;opacity:.7">
      ${timeZoneTimes(date)}
    </div>
  `
}
function formatTime(date: Date | number, timeZone: any) {
  const options = {
    hour: 'numeric' as 'numeric',
    minute: 'numeric' as 'numeric',
    hour12: true,
    timeZone,
    timeZoneName: 'short' as 'short'
  };

  return new Intl.DateTimeFormat('en-US', options).format(date);
}

export function timeZoneTimes(date: Date | number) {
  const estTime = formatTime(date, 'America/New_York'); // Eastern Standard Time
  const cstTime = formatTime(date, 'America/Chicago');  // Central Standard Time
  const pstTime = formatTime(date, 'America/Los_Angeles'); // Pacific Standard Time

  return `${estTime} / ${cstTime} / ${pstTime}`
}
