import { Subject } from "../web-gems/Subject.js"
import { html, tag } from "../taggedjs/index.js"


export const ClockComponent = tag(({
  date,
  showLearnMore = true
}) => ({async, init}) => {
  init(() => run())

  function run() {
    date = date || new Date()
    function updateCountdown() {
      const now = new Date();
      const remaining = date - now;

      if ( remaining < 0 ) {
        setTo({days: 0,hours: 0,minutes: 0, seconds: 0})
        clearInterval(interval)
        return
      }
    
      const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

      setTo({days,hours,minutes,seconds})
    }
        
    const interval = setInterval(async(updateCountdown), clockDisplaySpeed)
  }

  function changeMe(element, value, map) {
    const span = document.createElement('span')
    span.classList.add('wrap')
    span.innerText = value
    
    element.appendChild(span)

    if ( element.children.length === 1 ) {
      return // no need to remove when only 1
    }

    function remove() {
      requestAnimationFrame(() => {
        span.classList.add('changed')
        
        requestAnimationFrame(() => {
          setTimeout(() => {
            element.removeChild(span)
          }, 200)
        })
      })      
    }

    setTimeout(remove, map.speed-1)
  }

  function setTo(
    dateData // {days,hours,minutes,seconds}
  ) {
    Object.entries(dateData).forEach(([key, value]) => {
      const digits = getDigits(value)
      const scope = time[key]
      if (digits[0] != scope[0].value$.value) {
        scope[0].value$.next( digits[0] )
        changeMe(document.getElementById(`${key}-0`), digits[0], scope[0])
      }

      if (digits[1] != scope[1].value$.value) {
        scope[1].value$.next(digits[1])
        changeMe(document.getElementById(`${key}-1`), digits[1], scope[1])
      }    
    })
  }

  const estTime = formatTime(date, 'America/New_York'); // Eastern Standard Time
  const cstTime = formatTime(date, 'America/Chicago');  // Central Standard Time
  const pstTime = formatTime(date, 'America/Los_Angeles'); // Pacific Standard Time

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
      Countdown until the next, Patreon only, group meetup
      <!--Countdown until the next, Patreon LE only, group meetup-->
    </div>

    <div class="countdown">
      <div>
        <div class="digit-container">
          <span class="digit">
            <div class="line"></div>
            <span id="days-0"></span>
            <span class="placeholder">0</span>
          </span>
          <span class="digit">
            <div class="line"></div>
            <span id="days-1"></span>
            <span class="placeholder">0</span>
          </span>
        </div>
        <div class="label">Days</div>
      </div>

      <div>
        <div class="digit-container">
          <span class="digit">
            <div class="line"></div>
            <span id="hours-0"></span>
            <span class="placeholder">0</span>
          </span>
          
          <span class="digit">
            <div class="line"></div>
            <span id="hours-1"></span>
            <span class="placeholder">0</span>
          </span>
        </div>
        <div class="label">Hours</div>
      </div>

      <div>
        <div class="digit-container">
          <span class="digit">
            <div class="line"></div>
            <span id="minutes-0"></span>
            <span class="placeholder">0</span>
          </span>

          <span class="digit">
            <div class="line"></div>
            <span id="minutes-1"></span>
            <span class="placeholder">0</span>
          </span>
        </div>
        <div class="label">Minutes</div>
      </div>

      <div>
        <div class="digit-container">
          <span class="digit">
            <div class="line"></div>
            <span id="seconds-0"></span>
            <span class="placeholder">0</span>
          </span>
          
          <span class="digit">
            <div class="line"></div>
            <span id="seconds-1"></span>
            <span class="placeholder">0</span>
          </span>
        </div>
        <div class="label">Seconds</div>
      </div>
    </div>
    <div style="font-size:.65em;opacity:.7">
      ${estTime} / ${cstTime} / ${pstTime}
    </div>

    <br />
    <div style="white-space:nowrap;">
      👇 <u>save meetup to your calendar</u> 👇
    </div>
    <div style="display:flex;gap:1em;justify-content: center;padding-top:.6em;">
      ${calLinks.map(item => {
        return html`
          <a href=${item.url} target="_blank" style="color:inherit;text-decoration:none;">
            ${item.type === 'google' && html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48"><rect width="22" height="22" x="13" y="13" fill="#fff"></rect><polygon fill="#1e88e5" points="25.68,20.92 26.688,22.36 28.272,21.208 28.272,29.56 30,29.56 30,18.616 28.56,18.616"></polygon><path fill="#1e88e5" d="M22.943,23.745c0.625-0.574,1.013-1.37,1.013-2.249c0-1.747-1.533-3.168-3.417-3.168 c-1.602,0-2.972,1.009-3.33,2.453l1.657,0.421c0.165-0.664,0.868-1.146,1.673-1.146c0.942,0,1.709,0.646,1.709,1.44 c0,0.794-0.767,1.44-1.709,1.44h-0.997v1.728h0.997c1.081,0,1.993,0.751,1.993,1.64c0,0.904-0.866,1.64-1.931,1.64 c-0.962,0-1.784-0.61-1.914-1.418L17,26.802c0.262,1.636,1.81,2.87,3.6,2.87c2.007,0,3.64-1.511,3.64-3.368 C24.24,25.281,23.736,24.363,22.943,23.745z"></path><polygon fill="#fbc02d" points="34,42 14,42 13,38 14,34 34,34 35,38"></polygon><polygon fill="#4caf50" points="38,35 42,34 42,14 38,13 34,14 34,34"></polygon><path fill="#1e88e5" d="M34,14l1-4l-1-4H9C7.343,6,6,7.343,6,9v25l4,1l4-1V14H34z"></path><polygon fill="#e53935" points="34,34 34,42 42,34"></polygon><path fill="#1565c0" d="M39,6h-5v8h8V9C42,7.343,40.657,6,39,6z"></path><path fill="#1565c0" d="M9,42h5v-8H6v5C6,40.657,7.343,42,9,42z"></path></svg>`}
            ${item.type === 'outlook' && html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48"><path fill="#03A9F4" d="M21,31c0,1.104,0.896,2,2,2h17c1.104,0,2-0.896,2-2V16c0-1.104-0.896-2-2-2H23c-1.104,0-2,0.896-2,2V31z"></path><path fill="#B3E5FC" d="M42,16.975V16c0-0.428-0.137-0.823-0.367-1.148l-11.264,6.932l-7.542-4.656L22.125,19l8.459,5L42,16.975z"></path><path fill="#0277BD" d="M27 41.46L6 37.46 6 9.46 27 5.46z"></path><path fill="#FFF" d="M21.216,18.311c-1.098-1.275-2.546-1.913-4.328-1.913c-1.892,0-3.408,0.669-4.554,2.003c-1.144,1.337-1.719,3.088-1.719,5.246c0,2.045,0.564,3.714,1.69,4.986c1.126,1.273,2.592,1.91,4.378,1.91c1.84,0,3.331-0.652,4.474-1.975c1.143-1.313,1.712-3.043,1.712-5.199C22.869,21.281,22.318,19.595,21.216,18.311z M19.049,26.735c-0.568,0.769-1.339,1.152-2.313,1.152c-0.939,0-1.699-0.394-2.285-1.187c-0.581-0.785-0.87-1.861-0.87-3.211c0-1.336,0.289-2.414,0.87-3.225c0.586-0.81,1.368-1.211,2.355-1.211c0.962,0,1.718,0.393,2.267,1.178c0.555,0.795,0.833,1.895,0.833,3.31C19.907,24.906,19.618,25.968,19.049,26.735z"></path></svg>`}
          </a>
          `
      })}
      <a href="cary-hardy-meetup.ics" target="_blank" download="cary-hardy-meetup.ics" style="color:inherit;text-decoration:none;">
        <svg viewBox="0 0 170 170" fill="currentColor" width="48" height="48">
          <title>Apple Logo</title>
          <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.197-2.12-9.973-3.17-14.34-3.17-4.58 0-9.492 1.05-14.746 3.17-5.262 2.13-9.501 3.24-12.742 3.35-4.929.21-9.842-1.96-14.746-6.52-3.13-2.73-7.045-7.41-11.735-14.04-5.032-7.08-9.169-15.29-12.41-24.65-3.471-10.11-5.211-19.9-5.211-29.378 0-10.857 2.346-20.221 7.045-28.068 3.693-6.303 8.606-11.275 14.755-14.925s12.793-5.51 19.948-5.629c3.915 0 9.049 1.211 15.429 3.591 6.362 2.388 10.447 3.599 12.238 3.599 1.339 0 5.877-1.416 13.57-4.239 7.275-2.618 13.415-3.702 18.445-3.275 13.63 1.1 23.87 6.473 30.68 16.153-12.19 7.386-18.22 17.731-18.1 31.002.11 10.337 3.86 18.939 11.23 25.769 3.34 3.17 7.07 5.62 11.22 7.36-.9 2.61-1.85 5.11-2.86 7.51zM119.11 7.24c0 8.102-2.96 15.667-8.86 22.669-7.12 8.324-15.732 13.134-25.071 12.375a25.222 25.222 0 0 1-.188-3.07c0-7.778 3.386-16.102 9.399-22.908 3.002-3.446 6.82-6.311 11.45-8.597 4.62-2.252 8.99-3.497 13.1-3.71.12 1.083.17 2.166.17 3.24z"/>
        </svg>
      </a>
    </div>

    <br />
    <div>
      <!--
        <a href={calInviteUrl}>test</a>
      -->
      <!--
        <a href="data:text/calendar;charset=utf-8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ADTSTART:20230810T120000%0ADTEND:20230810T130000%0ASUMMARY:Your Event Name%0ADESCRIPTION:Description of the event.%0ALOCATION:Event Location%0AEND:VEVENT%0AEND:VCALENDAR" download="event.ics">
          <span>🗓️ ${date.toLocaleString('default', { weekday: 'long' })}, ${ date.toLocaleString('default', { month: 'long' }) } ${ date.getDate() }${getDaySuffix(date)}</span>
        </a>
      -->
      <span>🗓️ ${date.toLocaleString('default', { weekday: 'long' })}, ${ date.toLocaleString('default', { month: 'long' }) } ${ date.getDate() }${getDaySuffix(date)}</span>
    </div>

    ${showLearnMore && html`
      <div style="padding:.8em;font-size: .7em;">
        <a class="no-a-style" href="meetup.html">
          <button type="button">learn more</button>
        </a>                
      </div>
    `}
  `
})

function getDigits(value) {
  const d2 = value % 10
  const d1 = Math.floor(value / 10)

  return [d1, d2]
}

const clockDisplaySpeed = 1000
const time = {
  days: [{
    speed: clockDisplaySpeed * 60 * 60 * 24 * 10,
    value$: new Subject(),
  },{
    speed: clockDisplaySpeed * 60 * 60 * 24,
    value$: new Subject(),
  }],
  hours: [{
    speed: clockDisplaySpeed * 60 * 60 * 10,
    value$: new Subject(),
  },{
    speed: clockDisplaySpeed * 60 * 60,
    value$: new Subject(),
  }],
  minutes: [{
    speed: clockDisplaySpeed * 60 * 10,
    value$: new Subject(),
  },{
    speed: clockDisplaySpeed * 60,
    value$: new Subject(),
  }],
  seconds: [{
    speed: clockDisplaySpeed * 10,
    value$: new Subject(),
  },{
    speed: clockDisplaySpeed,
    value$: new Subject(),
  }]
}

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

// created using https://parcel.io/tools/calendar
// Do not forget to update cary-hardy-meetup.ics
const calLinks = [{
  type:'google',
  url: 'https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20231228T020000Z%2F20231228T040000Z&details=Cary%20Hardy%20LE%20meet%20up%0A%0AGoogle%20Meet%20joining%20info%0AVideo%20call%20link%3A%20https%3A%2F%2Fmeet.google.com%2Fkgt-rfhm-kdk%0AOr%20dial%3A%20%E2%80%AA%28US%29%20%2B1%20502-632-7399%E2%80%AC%20PIN%3A%20%E2%80%AA147%20215%20371%E2%80%AC%23%0AMore%20phone%20numbers%3A%20https%3A%2F%2Ftel.meet%2Fkgt-rfhm-kdk%3Fpin%3D4548775831101&location=&text=Cary%20Hardy%20Patreon%20meetup',
}, {
  type:'outlook',
  url: 'https://outlook.live.com/calendar/0/action/compose?allday=false&body=Cary%20Hardy%20LE%20meet%20up%0A%0AGoogle%20Meet%20joining%20info%0AVideo%20call%20link%3A%20https%3A%2F%2Fmeet.google.com%2Fkgt-rfhm-kdk%0AOr%20dial%3A%20%E2%80%AA%28US%29%20%2B1%20502-632-7399%E2%80%AC%20PIN%3A%20%E2%80%AA147%20215%20371%E2%80%AC%23%0AMore%20phone%20numbers%3A%20https%3A%2F%2Ftel.meet%2Fkgt-rfhm-kdk%3Fpin%3D4548775831101&enddt=2023-12-27T23%3A00%3A00&location=&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2023-12-27T21%3A00%3A00&subject=Cary%20Hardy%20Patreon%20meetup',
}]
