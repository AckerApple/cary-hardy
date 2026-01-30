import { button, div, output, tag } from 'taggedjs'

export const adminNavButtons = tag((onSignout) => {
  adminNavButtons.inputs(([_onSignout]) => {
    onSignout = output(_onSignout)
  })

  const goHome = () => {
    window.location.href = './index.html'
  }

  const openRepo = () => {
    window.open('https://github.com/AckerApple/cary-hardy', '_blank')
  }

  return div.style`display:flex;gap:0.6em;align-items:center;flex-wrap:wrap;justify-content:center;width:100%;`(
    button.onClick(goHome)('🏠 home'),
    button.onClick(openRepo)('🔗 code base'),
    button.onClick(onSignout)('🚪 logout')
  )
})
