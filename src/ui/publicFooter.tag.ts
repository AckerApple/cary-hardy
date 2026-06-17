import { a, div, noElement, style, tag } from 'taggedjs'

let stylesInjected = false

export const publicFooterStyles = tag(() => {
  if (stylesInjected) return ''
  stylesInjected = true

  return style(`
    .public-footer {
      width: 100%;
      box-sizing: border-box;
      margin-top: 3em;
      padding: 0.65em 0.9em;
      background: #000;
      border-top: 1px solid rgba(255,255,255,0.14);
      color: rgba(255,255,255,0.82);
      font-size: 0.58em;
    }
    .public-footer-inner {
      width: min(1120px, 100%);
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1em;
    }
    .public-footer a {
      color: rgba(255,255,255,0.9);
      text-decoration: none;
    }
    .public-footer a:hover {
      color: #fff;
      text-decoration: underline;
      text-underline-offset: 0.18em;
    }
  `)
})

export const publicFooter = tag(() =>
  noElement(
    publicFooterStyles(),
    div.class`public-footer`(
      div.class`public-footer-inner`(
        a.href`mailto:hardypinball@gmail.com?subject=website contact&body=Hello, found your email through your website%0A%0A%0A`('📧 hardypinball@gmail.com'),
        a.href`#top`.onClick((event: Event) => {
          event.preventDefault()
          window.scrollTo({ top: 0, behavior: 'smooth' })
        })('⬆️ Top')
      )
    )
  )
)
