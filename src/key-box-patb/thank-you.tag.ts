import { a, div, h1, p, tag } from 'taggedjs'
import { topNavBar } from '../ui/topNav.tag'
import { publicNavButtons } from '../ui/publicNavButtons.tag'

export const thankYouTag = tag(() => {
  const params = new URLSearchParams(window.location.search)
  const sessionId = params.get('session_id') || ''

  return div(
    topNavBar(() => publicNavButtons()),
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
