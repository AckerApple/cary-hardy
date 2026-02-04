import { a, div, h1, h2, h3, img, p, span, tag } from 'taggedjs'
import { topNavBar } from '../ui/topNav.tag'
import { publicNavButtons } from '../ui/publicNavButtons.tag'

const images = [
  '/assets/media/product-images/key-box/IMG_1477.heic.jpeg',
  '/assets/media/product-images/key-box/Main.jpg',
  '/assets/media/product-images/key-box/IMG_1472.heic.jpeg',
  '/assets/media/product-images/key-box/IMG_1474.heic.jpeg',
  '/assets/media/product-images/key-box/IMG_1475.heic.jpeg',
]

const defaultCheckoutUrl = 'https://buy.stripe.com/aFabJ02XDe7K7GrgXv4F202'

export const keyBoxPatbTag = tag(() => {
  let currentImage = images[0]
  let checkoutUrl = defaultCheckoutUrl

  keyBoxPatbTag.inputs((args) => {
    ;[{ checkoutUrl = defaultCheckoutUrl } = {}] = args
  })

  return div(
    topNavBar(() => publicNavButtons()),
    div.class`product-wrap`(
      div.class`product-hero`(
        div.class`product-info`(
          h1('Cary Hardy Key Box'),
          h3('🏖️ PATB Pickup only. Priced for LE only members only'),
          p('Cary Hardy Key Box'),
          p('LE Members only pricing'),
          h2(
            '$15.00 ',
            span.style`font-size:0.6em;opacity:0.75;font-weight:400;`('+ $1 processing + tax')
          ),
          p.style`font-size:0.6em;opacity:0.75;margin:0.2em 0;`('🇺🇸 Made in America'),
          p.style`font-size:0.6em;opacity:0.75;margin:0.2em 0;`('🚫 🤖 No artificial intellegence used'),
          p.style`font-size:0.6em;opacity:0.75;margin:0.2em 0;`(
            '🥳 Fun to assemble Cary Hardy logo that is then functional as your pinball keys holder!'
          ),
          a
            .href(_=> checkoutUrl)
            .class`buy-button`
            .attr('target', '_blank')
            ('Buy Now')
        ),
        div.class`product-media`(
          img
            .attr('src', _=> currentImage)
            .attr('alt', 'Key Box main photo')
            .class`main-image`,
          div.class`gallery`(
            images.map((src) =>
              div.class`gallery-item`.class(_=> src === currentImage ? 'is-active' : '')
                .onClick(() => {
                  currentImage = src
                })(
                  img.attr('src', src).attr('alt', 'Key Box photo').class`gallery-image`
                )
            )
          )
        )
      )
    )
  )
})
