import { button, output, tag } from 'taggedjs'

export const adminNavButtons = tag((onSignout) => {
  adminNavButtons.inputs(([_onSignout]) => {
    onSignout = output(_onSignout)
  })

  const goHome = () => {
    window.location.href = '/index.html'
  }

  const openRepo = () => {
    window.open('https://github.com/AckerApple/cary-hardy', '_blank')
  }

  const goUsers = () => {
    window.location.href = '/admin/user.html'
  }

  return [
    button.type`button`.class`top-nav-pill`.onClick(goHome)('🏠 home'),
    button.type`button`.class`top-nav-pill`.onClick(() => {
        window.location.href = '/admin.html'
      })('⭐️ admin home'),
    button.type`button`.class`top-nav-pill`.onClick(openRepo)('🔗 code base'),
    button.type`button`.class`top-nav-pill`.onClick(goUsers)('👥 users'),
    button.type`button`.class`top-nav-pill`.onClick(onSignout)('🚪 logout'),
  ]
})
