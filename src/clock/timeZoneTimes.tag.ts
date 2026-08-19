import { countdown } from './countdown.tag'
import { getDaySuffix } from './clock.tag'
import { div, span, tag } from 'taggedjs'

export const labeledCountdown = tag((date: Date | number) => {
  labeledCountdown.inputs(x => [date] = x)

  return div.style`text-align:center;`(
    _ => {
      const displayDate = new Date(date)
      return div(
        span(
          '🗓️ ',
          displayDate.toLocaleString('default', { weekday: 'long' }),
          ', ',
          displayDate.toLocaleString('default', { month: 'long' }),
          ' ',
          displayDate.getDate(),
          getDaySuffix(displayDate)
        )
      )
    },
    _=> countdown({date}),
    _ => smallTimeZoneTimes(new Date(date))
  )
})

export function smallTimeZoneTimes(date: Date) {
  return div.style`font-size:.65em;opacity:.7`(timeZoneTimes(date))
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
