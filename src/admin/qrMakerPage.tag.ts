import { callback, div, h3, img, noElement, output, tag } from 'taggedjs'
import { signOutUser } from '../firebase'
import { topNavBar } from '../ui/topNav.tag'
import { adminNavButtons } from './adminNavButtons.tag'
import { createAdminAuthTag } from './adminPageShell.tag'
import { qrMakerSection } from './qrMaker.tag'

export const qrMakerAdminPageTag = createAdminAuthTag((onSignedOut) => qrMakerAdminPage(onSignedOut))

export const qrMakerAdminPage = tag((onSignedOut) => (
  qrUrl = new URLSearchParams(window.location.search).get('url') || ''
) => {
  qrMakerAdminPage.inputs(([_onSignedOut]) => {
    onSignedOut = output(_onSignedOut)
  })

  const refresh = callback(() => {})

  const signoutClick = () =>
    signOutUser()
      .then(onSignedOut)
      .catch((error) => {
        console.error('Failed to sign out', error)
      })

  return noElement(
    topNavBar(() => adminNavButtons(signoutClick)),
    div.class`admin-crud-page`(
      div.class`admin-crud-header`(
        h3(
          img.src`../assets/media/icon.png`.style`width:40px;margin-right:10px;`,
          '🔗 QR Maker'
        )
      ),
      div.class`admin-crud-card`(
        qrMakerSection({
          qrUrl,
          onQrUrlChange: (value) => {
            qrUrl = value
            refresh()
          },
        })
      )
    )
  )
})
