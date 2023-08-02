import { Subject } from "../web-gems/Subject.js"
import { ElementComponent } from "../web-gems/ElementComponent.js"

export class CountClock extends ElementComponent {
  date

  clockDisplaySpeed = 1000

  time = {
    days: [{
      speed: this.clockDisplaySpeed * 60 * 60 * 24 * 10,
      value$: new Subject(),
    },{
      speed: this.clockDisplaySpeed * 60 * 60 * 24,
      value$: new Subject(),
    }],
    hours: [{
      speed: this.clockDisplaySpeed * 60 * 60 * 10,
      value$: new Subject(),
    },{
      speed: this.clockDisplaySpeed * 60 * 60,
      value$: new Subject(),
    }],
    minutes: [{
      speed: this.clockDisplaySpeed * 60 * 10,
      value$: new Subject(),
    },{
      speed: this.clockDisplaySpeed * 60,
      value$: new Subject(),
    }],
    seconds: [{
      speed: this.clockDisplaySpeed * 10,
      value$: new Subject(),
    },{
      speed: this.clockDisplaySpeed,
      value$: new Subject(),
    }]
  }

  constructor() {
    super()
    
    this.imports({
      template: new URL('template.html', import.meta.url),
      styles: new URL('styles.css', import.meta.url),
    }).then(this.displayImports.bind(this)).then(this.load)
  }

  load() {
    this.run(this.shadowRoot)
  }

  changeMe(element, value, map) {
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
  
  run() {
    const date = this.date = this.date || new Date()
    function updateCountdown() {
      const now = new Date();
      const remaining = date - now;

      if ( remaining < 0 ) {
        this.setTo({days: 0,hours: 0,minutes: 0, seconds: 0})
        clearInterval(interval)
        return
      }
    
      const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

      this.setTo({days,hours,minutes,seconds})
    }
        
    const interval = setInterval(updateCountdown.bind(this), this.clockDisplaySpeed)
  }

  setTo(
    dateData // {days,hours,minutes,seconds}
  ) {
    Object.entries(dateData).forEach(([key, value]) => {
      const digits = getDigits(value)
      if (digits[0] != this.time[key][0].value$.value) {
        this.time[key][0].value$.next( digits[0] )
      }

      if (digits[1] != this.time[key][1].value$.value) {        
        this.time[key][1].value$.next(digits[1])
      }    
    })
  }
}

function getDigits(value) {
  const d2 = value % 10
  const d1 = Math.floor(value / 10)

  return [d1, d2]
}
