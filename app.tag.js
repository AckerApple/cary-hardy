import config from './config.js'
import { html, tag } from "./taggedjs/bundle.js"
import { ClockComponent } from "./clock/clock.tag.js"

export const adminTag = tag(() => {
  const {date, time} = timestampToValues(Number(config.nextMeetupDate))

  console.log('date, time', date, time)

  return html`
    <h3>Hardy Tools</h3>

    <fieldset>
      <legend>meeting tools</legend>
      
      <div>
        <label for="date">Date:</label>
        <input type="date" value=${date}>
      </div>
      
      <div>
        <label for="time">Time:</label>
        <input type="time" value=${time}>
      </div>
      ${config.nextMeetupDate}
  
      ${ClockComponent({date: config.nextMeetupDate})}
  
      <div>
        UTC: ${new Date(config.nextMeetupDate).getTime()}
        <div>
          <small>(copy/paste the above value into config.json.js)</small>
        </div>
      </div>
    </fieldset>
  `
})

function timestampToValues(timestamp) {
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
