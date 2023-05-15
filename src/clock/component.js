import { ElementComponent } from "../ElementComponent.js"

export class CountClock extends ElementComponent {
  date

  constructor() {
    super()
    
    this.imports({
      template: new URL('template.html', import.meta.url),
      styles: new URL('styles.css', import.meta.url),
    }).then(this.load)
  }

  load(imports) {
    const shadow = this.attachShadow({ mode: 'open' })
    const template = document.createElement('div')
    const style = document.createElement('style')

    style.textContent = imports.styles;
    shadow.appendChild(style);

    template.innerHTML = imports.template;
    shadow.appendChild(template.cloneNode(true))
    this.run(shadow)
  }

  run(shadow) {
    const date = this.date = this.date || new Date()
    function updateCountdown() {
      const now = new Date();
      const remaining = date - now;
    
      let days = Math.floor(remaining / (1000 * 60 * 60 * 24));
      let hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((remaining % (1000 * 60)) / 1000);
      
      const daysEl = shadow.querySelector('.days');
      const hoursEl = shadow.querySelector('.hours');
      const minutesEl = shadow.querySelector('.minutes');
      const secondsEl = shadow.querySelector('.seconds');
    
      if (daysEl.getAttribute('data-value') !== String(days)) {
        animateDigits(daysEl, days);
      }
      if (hoursEl.getAttribute('data-value') !== String(hours)) {
        animateDigits(hoursEl, hours);
      }
      if (minutesEl.getAttribute('data-value') !== String(minutes)) {
        animateDigits(minutesEl, minutes);
      }
      if (secondsEl.getAttribute('data-value') !== String(seconds)) {
        animateDigits(secondsEl, seconds);
      }
    
      daysEl.setAttribute('data-value', days);
      hoursEl.setAttribute('data-value', hours);
      minutesEl.setAttribute('data-value', minutes);
      secondsEl.setAttribute('data-value', seconds);
    }
    
    function animateDigits(element, value) {
      const [digit1, digit2] = element.children;
    
      const d2 = value % 10
      const d1 = Math.floor(value / 10)
    
      animateDigit(d1, digit1)
      animateDigit(d2, digit2)
    }
    
    function animateDigit(d, digit) {
      const old = digit.children[1]
      
      if ( old.textContent == d.toString() ) {
        return
      }
    
      const clone = old.cloneNode()
    
      clone.textContent = d
      digit.appendChild(clone)
      old.classList.add('changed')
    
      setTimeout(() => {
        digit.removeChild(old)
      }, 500);
    }
    
    setInterval(updateCountdown, 1000);
    
  }
}