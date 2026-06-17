import { a, br, div, h1, p, span, tag } from 'taggedjs'
import { topNavBar } from '../ui/topNav.tag'
import { publicNavButtons } from '../ui/publicNavButtons.tag'
import { publicFooter } from '../ui/publicFooter.tag'

export const thankYouTag = tag(() => {
  const params = new URLSearchParams(window.location.search)
  const sessionId = params.get('session_id') || ''
  const sessionLabel = sessionId || 'not found'

  return div(
    topNavBar(() => publicNavButtons()),
    div.class`wrap`(
      div.class`card`(
        h1('Thank you!'),
        p('✅ Your payment was received successfully.'),
        br,
        p('We really appreciate your support as we grow CaryHardy.com'),
        br,
        p(
          'At Pinball at the Beach, please find Cary or Acker or email ',
          a.href`mailto:acker.dawn.apple@gmail.com?subject=PATB Cary key box`('acker.dawn.apple@gmail.com')
        ),
        br,
        p.class`muted`(
          'Session ID: ',
          span.class`session-id`(_=> sessionLabel)
        ),
        a.class`cta`.href`/index.html`('Back to CaryHardy.com')
      )
    ),
    publicFooter()
  )
})
