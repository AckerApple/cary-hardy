import { a, div, h1, h2, img, p, tag } from 'taggedjs'
import { topNavBar } from '../ui/topNav.tag'

const images = [
  '/assets/media/product-images/key-box/IMG_1477.heic.jpeg',
  '/assets/media/product-images/key-box/Main.jpg',
  '/assets/media/product-images/key-box/IMG_1472.heic.jpeg',
  '/assets/media/product-images/key-box/IMG_1474.heic.jpeg',
  '/assets/media/product-images/key-box/IMG_1475.heic.jpeg',
]

export const keyBoxPatbTag = tag(() => {
  let currentImage = images[0]

  return div(
    topNavBar(() => [
      a.href`#links`.class`top-nav-pill`('links'),
      a.href`#merch`.class`top-nav-pill`('merch & more'),
      a.href`#youtube`.class`top-nav-pill`('youtube'),
      a.href`#awards`.class`top-nav-pill`('awards'),
      a.href`/admin.html`.class`top-nav-pill`('👤'),
    ]),
    div.class`product-wrap`(
      div.class`product-hero`(
        div.class`product-info`(
          h1('Key Box - PATB LE Only Pickup'),
          p('Limited edition key box for Pinball at the Beach supporters.'),
          h2('$15.00'),
          a
            .href`https://buy.stripe.com/test_eVq4gygMd2Ru9GmcVodnW01`
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
