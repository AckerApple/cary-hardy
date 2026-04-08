import { div, noElement, style, tag } from 'taggedjs'

let stylesInjected = false

export const topNavStyles = tag(() => {
  if (stylesInjected) return ''
  stylesInjected = true

  return style(`
    .top-nav {
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;
      background: rgba(0, 0, 0, 0.95);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      gap: 0.45em;
      justify-content: flex-start;
      align-items: center;
      padding: 0.45em 0.8em;
      z-index: 200;
      flex-wrap: nowrap;
      overflow-x: auto;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;
    }
    .top-nav-fixed {
      width: 100%;
      max-width: 100vw;
      box-sizing: border-box;
      position: sticky;
      top: 0;
    }
    .top-nav-pill {
      padding: 0.12em 0.55em;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: white;
      font-size: 0.5em;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      text-decoration: none;
      transition: transform 0.2s ease, background 0.2s ease;
      white-space: nowrap;
      flex: 0 0 auto;
    }
    .top-nav-pill:hover {
      transform: translateY(-1px);
      background: rgba(255, 255, 255, 0.2);
    }
    @media (max-height: 450px) {
      .top-nav {
        padding: 0.3em 0.6em;
        gap: 0.35em;
      }
      .top-nav-pill {
        font-size: 0.45em;
        padding: 0.1em 0.45em;
      }
    }
  `)
})

export const topNav = tag(({
  className = 'top-nav',
  content,
}: {
  className?: string
  content: any
}) => {
  topNav.inputs((args) => {
    ;[{ className, content }] = args
  })

  return div.class`${className}`(
    typeof content === 'function' ? content() : content
  )
})

export const topNavBar = tag((content) => {
  topNavBar.inputs((args) => {
    ;[content] = args
  })

  return noElement(
    topNavStyles(),
    topNav({
      className: 'top-nav top-nav-fixed',
      content,
    })
  )
})
