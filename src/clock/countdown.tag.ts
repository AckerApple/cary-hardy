import { Subject, watch, states, html, tag, callbackMaker, onInit } from "taggedjs"

export const countdown = tag(({date}) => {
  const callback = callbackMaker()
  let interval: any = null
  states(get => ([interval] = get(interval)))

  onInit(run)

  watch.noInit([date], (x) => {
    console.debug('⏳ date changed, restart clock')
    start()
    updateCountdown()
  })

  date = date || new Date()
  function updateCountdown() {
    const now = new Date() as any
    const remaining = date - now;

    if ( remaining < 0 ) {
      setTo({days: 0,hours: 0,minutes: 0, seconds: 0})
      stop()
      console.debug('⌛️ clock stopped, meeting in past')
      return
    }
  
    const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

    setTo({days,hours,minutes,seconds})
  }

  function run() {
    interval = setInterval(callback(updateCountdown), clockDisplaySpeed)
  }

  function stop() {
    clearInterval(interval)
    interval = null
  }

  function start() {
    stop()
    run()
  }

  function changeMe(element: any, value: any, map: any) {
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
    dateData: any // {days,hours,minutes,seconds}
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
        <div class="label" oncontextmenu=${start}>Minutes</div>
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
        <div class="label" oncontextmenu=${stop}>Seconds</div>
      </div>
    </div>
  `
})

function getDigits(value: any) {
  const d2 = value % 10
  const d1 = Math.floor(value / 10)

  return [d1, d2]
}

const clockDisplaySpeed = 1000
const time: any = {
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
