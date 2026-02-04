import { a, div, h1, p, tag } from 'taggedjs'
import { topNavBar } from '../ui/topNav.tag'

export const thankYouTag = tag(() => {
  const params = new URLSearchParams(window.location.search)
  const sessionId = params.get('session_id') || ''

  return div(
    topNavBar(() => [
      a.href`#links`.class`top-nav-pill`('links'),
      a.href`#merch`.class`top-nav-pill`('merch & more'),
      a.href`#youtube`.class`top-nav-pill`('youtube'),
      a.href`#awards`.class`top-nav-pill`('awards'),
      a.href`/admin.html`.class`top-nav-pill`('👤'),
    ]),
    div.class`wrap`(
      div.class`card`(
        h1('Thank you!'),
        p('Your payment was received successfully.'),
        p.class`muted`(
          sessionId ? `Session ID: ${sessionId}` : 'Session ID not found.'
        ),
        a.class`cta`.href`/index.html`('Back to CaryHardy.com')
      )
    )
  )
})
