import { a, button, callback, div, noElement, output, tag } from 'taggedjs'

export const adminNavButtons = tag((onSignout) => {
  adminNavButtons.inputs(([_onSignout]) => {
    onSignout = output(_onSignout)
  })

  let menuOpen = false
  const refresh = callback(() => {})

  const closeMenu = () => {
    menuOpen = false
    refresh()
  }

  const toggleMenu = () => {
    menuOpen = !menuOpen
    refresh()
  }

  return noElement(
    div.class`admin-nav-layout`(
      div.class`admin-nav-left`(
        button.type`button`.class`top-nav-pill`.attr('aria-expanded', _ => menuOpen ? 'true' : 'false').onClick(toggleMenu)('☰ menu')
      ),
      div(),
      div.class`admin-nav-right`(
        a.href`/index.html`.class`top-nav-pill`('🏠 home'),
        button.type`button`.class`top-nav-pill`.onClick(onSignout)('🚪 logout')
      )
    ),
    _ => menuOpen
      ? noElement(
          button.type`button`.class`admin-menu-backdrop`.onClick(closeMenu).attr('aria-label', 'Close menu')(''),
          div.class`admin-menu-panel`.attr('role', 'menu')(
            a.href`/admin.html`.class`top-nav-pill`.attr('role', 'menuitem')('🏠 admin home'),
            a.href`/admin/qr-maker.html`.class`top-nav-pill`.attr('role', 'menuitem')('🔗 qr maker'),
            a.href`/admin/meeting-tools.html`.class`top-nav-pill`.attr('role', 'menuitem')('📅 meeting tools'),
            a.href`/admin/current-games.html`.class`top-nav-pill`.attr('role', 'menuitem')('🎮 current lineup'),
            a.href`/admin/past-owned-games.html`.class`top-nav-pill`.attr('role', 'menuitem')('📜 past games'),
            a.href`/admin/games.html`.class`top-nav-pill`.attr('role', 'menuitem')('🕹️ games'),
            a.href`/admin/manufacturers.html`.class`top-nav-pill`.attr('role', 'menuitem')('🏭 manufacturers'),
            a.href`/admin/game-ratings.html`.class`top-nav-pill`.attr('role', 'menuitem')('⭐ ratings'),
            a.href`/admin/user.html`.class`top-nav-pill`.attr('role', 'menuitem')('👥 users'),
            a.href`https://github.com/AckerApple/cary-hardy`.class`top-nav-pill`.attr('role', 'menuitem').attr('target', '_blank').attr('rel', 'noopener noreferrer')('🔗 code base')
          )
        )
      : ''
  )
})
