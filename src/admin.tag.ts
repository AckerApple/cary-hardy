import config from './config'
import {
  a,
  br,
  button,
  div,
  fieldset,
  h3,
  h4,
  hr,
  input,
  label,
  legend,
  small,
  tag,
  htmlTag,
  watch,
  output,
} from "taggedjs"
import { ClockComponent, content } from "./clock/clock.tag"
import { qrCodeDisplay } from "./qrCode.tag"
import { getGoogleInviteLink, getICalContent, getOutlookInviteLink } from './clock/calendar.utils'
import { copyText } from './copyText.function'

const svg = htmlTag('svg')
const path = htmlTag('path')
const polygon = htmlTag('polygon')
const rect = htmlTag('rect')
const title = htmlTag('title')

export const adminTag = tag(() => {
  let {date, time} = timestampToValues(Number(config.nextMeetupDate))
  
  function updateDateTime() {
    const x = timestampToValues(Number(config.nextMeetupDate))
    date = x.date
    time = x.time
    console.log('updated')
  }

  let qrUrl = ''

  return div(
    h3('Hardy Tools'),
    div.style`display:flex;flex-wrap:wrap;gap:1em;text-align:left;`(
      fieldset.style`flex-grow:1`(
        legend('QR Maker'),
        input
          .type`text`
          .value(_=> qrUrl)
          .attr('maxlength', '1000')
          .onKeyup((e: any) => qrUrl = e.target.value),
        div.style`display:flex;justify-content: center;`(
          _=> qrUrl && qrCodeDisplay(qrUrl)
        )
      ),
      fieldset.style`flex-grow:2`(
        legend('Invite Maker'),
        _=> inviteMaker(
          date,
          time,
          dateNum => {
            config.nextMeetupDate = dateNum
            updateDateTime()
          }
        )
      ),
      fieldset.style`flex-grow:2`(
        legend('Calendar Links'),
        _=> calendarLinks(qrUrl)
      ),
      fieldset.style`flex:1`(
        legend('meeting tools'),
        div(
          'UTC: ',
          _=> new Date(config.nextMeetupDate).getTime(),
          div.style`font-size:0.7em;`(
            small('(📋 copy/paste above value into config.json.ts & npm run deploy)')
          )
        ),
        br,
        hr,
        br,
        div.style`text-align:center;`(
          ClockComponent({date: config.nextMeetupDate})
        )
      )
    ),
    br,
    a.href`./index.html`.style`color:white;`('🏠 home'),
    '\u00A0\u00A0\u00A0',
    a.href`https://github.com/AckerApple/cary-hardy`.style`color:white;`('🔗 code base')
  )
})

export function timestampToValues(timestamp: any) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return {
      date: `${year}-${month}-${day}`,
      time: `${hours}:${minutes}`
  };
}

export const inviteMaker = tag((
  date: string,
  time: string,
  onDate: (dateNum: number) => any,
) => {
  inviteMaker.updates(x => {
    [date,time,onDate]=x
    onDate = output(onDate)
  })
  onDate = output(onDate)

  const elmChangeDate = (event: any) => {
    const newDateString = event.target.value
    onDate(new Date(newDateString + ' ' + time).getTime())
  }

  const elmChangeTime = (event: any) => {
    const newTimeString = event.target.value
    onDate(new Date(date + ' ' + newTimeString).getTime())
  }

  const dateTime = watch([date, time], () => {
    return new Date(date + ' ' + time).getTime()
  })

  return div.style`display:flex;flex-wrap:wrap;gap:1em`(
    div(
      label('Date'),
      div(
        input
          .type`date`
          .value(date)
          .onChange(elmChangeDate)
          .style`width:100%`
      )
    ),
    div(
      label.attr('for', 'time')('Time'),
      div(
        input
          .type`time`
          .value(time)
          .onChange(elmChangeTime)
          .style`width:100%`
      )
    ),
    div(
      label.attr('for', 'time')('UTC'),
      div(_=> dateTime)
    )
  )
})

function calendarLinks(qrUrl: string) {
  const googleLink = getGoogleInviteLink({
    startDateTime: config.nextMeetupDate, message: content.message, subject: content.subject,
  })

  const outlookLink = getOutlookInviteLink({
    startDateTime: config.nextMeetupDate, message: content.message, subject: content.subject,
  })

  const iCalLink = getICalContent({
    startDateTime: config.nextMeetupDate, message: content.message, subject: content.subject,
  })

  return div(
    h4('Calendar links'),
    div.style`display:flex;flex-wrap:wrap;gap:1em`(
      div(
        label('Message'),
        div(
          input
            .type`text`
            .value(_=> content.message)
            .onChange((e: any) => content.message = e.target.value)
            .style`width:100%`
        )
      ),
      div(
        label('Subject'),
        div(
          input
            .type`text`
            .value(_=> content.subject)
            .onChange((e: any) => content.subject = e.target.value)
            .style`width:100%`
        )
      )
    ),
    br,
    br,
    div.style`display:flex;flex-wrap:wrap;gap:1em;flex-direction:column;`(
      div.style`display:flex;flex-grow:1`(
        svg
          .attr('xmlns', 'http://www.w3.org/2000/svg')
          .attr('viewBox', '0 0 48 48')
          .attr('width', '48')
          .attr('height', '48')(
            rect.attr('width', '22').attr('height', '22').attr('x', '13').attr('y', '13').attr('fill', '#fff'),
            polygon.attr('fill', '#1e88e5').attr('points', '25.68,20.92 26.688,22.36 28.272,21.208 28.272,29.56 30,29.56 30,18.616 28.56,18.616'),
            path.attr('fill', '#1e88e5').attr('d', 'M22.943,23.745c0.625-0.574,1.013-1.37,1.013-2.249c0-1.747-1.533-3.168-3.417-3.168 c-1.602,0-2.972,1.009-3.33,2.453l1.657,0.421c0.165-0.664,0.868-1.146,1.673-1.146c0.942,0,1.709,0.646,1.709,1.44 c0,0.794-0.767,1.44-1.709,1.44h-0.997v1.728h0.997c1.081,0,1.993,0.751,1.993,1.64c0,0.904-0.866,1.64-1.931,1.64 c-0.962,0-1.784-0.61-1.914-1.418L17,26.802c0.262,1.636,1.81,2.87,3.6,2.87c2.007,0,3.64-1.511,3.64-3.368 C24.24,25.281,23.736,24.363,22.943,23.745z'),
            polygon.attr('fill', '#fbc02d').attr('points', '34,42 14,42 13,38 14,34 34,34 35,38'),
            polygon.attr('fill', '#4caf50').attr('points', '38,35 42,34 42,14 38,13 34,14 34,34'),
            path.attr('fill', '#1e88e5').attr('d', 'M34,14l1-4l-1-4H9C7.343,6,6,7.343,6,9v25l4,1l4-1V14H34z'),
            polygon.attr('fill', '#e53935').attr('points', '34,34 34,42 42,34'),
            path.attr('fill', '#1565c0').attr('d', 'M39,6h-5v8h8V9C42,7.343,40.657,6,39,6z'),
            path.attr('fill', '#1565c0').attr('d', 'M9,42h5v-8H6v5C6,40.657,7.343,42,9,42z')
          ),
        input
          .type`text`
          .style`width:100%`
          .value(googleLink),
        button.onClick(() => copyText(googleLink))('copy'),
        button.onClick(() => qrUrl = googleLink)('qr')
      ),
      div.style`display:flex;flex:1`(
        svg
          .attr('xmlns', 'http://www.w3.org/2000/svg')
          .attr('viewBox', '0 0 48 48')
          .attr('width', '48')
          .attr('height', '48')(
            path.attr('fill', '#03A9F4').attr('d', 'M21,31c0,1.104,0.896,2,2,2h17c1.104,0,2-0.896,2-2V16c0-1.104-0.896-2-2-2H23c-1.104,0-2,0.896-2,2V31z'),
            path.attr('fill', '#B3E5FC').attr('d', 'M42,16.975V16c0-0.428-0.137-0.823-0.367-1.148l-11.264,6.932l-7.542-4.656L22.125,19l8.459,5L42,16.975z'),
            path.attr('fill', '#0277BD').attr('d', 'M27 41.46L6 37.46 6 9.46 27 5.46z'),
            path.attr('fill', '#FFF').attr('d', 'M21.216,18.311c-1.098-1.275-2.546-1.913-4.328-1.913c-1.892,0-3.408,0.669-4.554,2.003c-1.144,1.337-1.719,3.088-1.719,5.246c0,2.045,0.564,3.714,1.69,4.986c1.126,1.273,2.592,1.91,4.378,1.91c1.84,0,3.331-0.652,4.474-1.975c1.143-1.313,1.712-3.043,1.712-5.199C22.869,21.281,22.318,19.595,21.216,18.311z M19.049,26.735c-0.568,0.769-1.339,1.152-2.313,1.152c-0.939,0-1.699-0.394-2.285-1.187c-0.581-0.785-0.87-1.861-0.87-3.211c0-1.336,0.289-2.414,0.87-3.225c0.586-0.81,1.368-1.211,2.355-1.211c0.962,0,1.718,0.393,2.267,1.178c0.555,0.795,0.833,1.895,0.833,3.31C19.907,24.906,19.618,25.968,19.049,26.735z')
          ),
        input
          .type`text`
          .style`width:100%`
          .value(outlookLink),
        button.onClick(() => copyText(outlookLink))('copy'),
        button.onClick(() => qrUrl = outlookLink)('qr')
      ),
      div.style`display:flex;flex:1`(
        svg.attr('viewBox', '0 0 170 170').attr('fill', 'currentColor').attr('width', '48').attr('height', '48')(
          title('Apple Logo'),
          path.attr('d', 'M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.197-2.12-9.973-3.17-14.34-3.17-4.58 0-9.492 1.05-14.746 3.17-5.262 2.13-9.501 3.24-12.742 3.35-4.929.21-9.842-1.96-14.746-6.52-3.13-2.73-7.045-7.41-11.735-14.04-5.032-7.08-9.169-15.29-12.41-24.65-3.471-10.11-5.211-19.9-5.211-29.378 0-10.857 2.346-20.221 7.045-28.068 3.693-6.303 8.606-11.275 14.755-14.925s12.793-5.51 19.948-5.629c3.915 0 9.049 1.211 15.429 3.591 6.362 2.388 10.447 3.599 12.238 3.599 1.339 0 5.877-1.416 13.57-4.239 7.275-2.618 13.415-3.702 18.445-3.275 13.63 1.1 23.87 6.473 30.68 16.153-12.19 7.386-18.22 17.731-18.1 31.002.11 10.337 3.86 18.939 11.23 25.769 3.34 3.17 7.07 5.62 11.22 7.36-.9 2.61-1.85 5.11-2.86 7.51zM119.11 7.24c0 8.102-2.96 15.667-8.86 22.669-7.12 8.324-15.732 13.134-25.071 12.375a25.222 25.222 0 0 1-.188-3.07c0-7.778 3.386-16.102 9.399-22.908 3.002-3.446 6.82-6.311 11.45-8.597 4.62-2.252 8.99-3.497 13.1-3.71.12 1.083.17 2.166.17 3.24z')
        ),
        input
          .type`text`
          .style`width:100%`
          .value(iCalLink),
        button.onClick(() => copyText(iCalLink))('copy')
      )
    )
  )
}
