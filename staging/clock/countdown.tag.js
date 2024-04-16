import { Subject } from "../web-gems/Subject.js"
import { html, tag, getCallback, onInit } from "../taggedjs/bundle.js"

export const countdown = tag(({date}) => {
  const callback = getCallback()

  onInit(() => {
    run()
  })

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
        
    const interval = setInterval(callback(updateCountdown), clockDisplaySpeed)
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

  return html`
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
