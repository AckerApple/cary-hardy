import {
  a,
  br,
  callback,
  div,
  h3,
  img,
  output,
  p,
  tag,
} from 'taggedjs'
import { loadNextMeetupDate, signOutUser } from '../firebase'
import { adminUsersSection } from './adminUsers.tag'
import { calendarLinksSection } from './calendarLinks.tag'

let meetupLoaded = false

export const adminTools = tag((
  onSignedOut
) => {
  let nextMeetupDate = Date.now()
  adminTools.inputs(([_onSignedOut]) => {
    onSignedOut = output(_onSignedOut)
  })

  if (!meetupLoaded) {
    meetupLoaded = true
    tag.promise = loadNextMeetupDate()
      .then((loadedDate) => {
        if (typeof loadedDate === 'number') {
          nextMeetupDate = loadedDate
        }
      })
      .catch((error) => {
        console.error('Failed to load next meetup date', error)
      })
  }

  const signoutClick = () => signOutUser().then(onSignedOut).catch((error) => {
    console.error('Failed to sign out', error)
  })

  return div.style`max-width:1200px;margin:0 auto;padding:0 1em;`(
    h3(
      img.src`assets/media/icon.png`.style`width:40px;margin-right:10px;`,
      'Hardy Tools'
    ),
    div.style`display:flex;flex-wrap:wrap;gap:1em;text-align:left;`(
      adminHomeLinkCard({
        href: '/admin/qr-maker.html',
        title: '🔗 QR Maker',
        description: 'Create a QR code from any link and preview the encoded URL before using it.',
      }),
      _=> collapsibleSection({
        labelText: 'Calendar Links',
        flex: '2',
        contentNode: calendarLinksSection({
          nextMeetupDate,
          onQrUrlChange: (value) => {
            window.location.href = `/admin/qr-maker.html?url=${encodeURIComponent(value)}`
          },
        }),
      }),
      adminHomeLinkCard({
        href: '/admin/meeting-tools.html',
        title: '📅 Meeting Tools',
        description: 'Update the next meetup date, save it to Firestore, and preview the public countdown.',
      }),
      
      _=> collapsibleSection({
        labelText: 'admin users',
        flex: '1',
        contentNode: adminUsersSection,
      }),
      adminHomeLinkCard({
        href: '/admin/user.html',
        title: '👥 Open Users Admin',
        description: 'Manage authorized admin users and account access.',
      }),
      adminHomeLinkCard({
        href: '/admin/current-games.html',
        title: '⚪️ Current Game Lineup',
        description: 'Choose which games appear in the public current lineup.',
      }),
      adminHomeLinkCard({
        href: '/admin/past-owned-games.html',
        title: '📜 Past Games Owned',
        description: 'Track previously owned games and sync new items from Pinside history.',
      }),
      adminHomeLinkCard({
        href: '/admin/games.html',
        title: '🕹️ Games Database',
        description: 'Maintain canonical game details used by lineup and ratings.',
      }),
      adminHomeLinkCard({
        href: '/admin/manufacturers.html',
        title: '🏭 Manufacturers Database',
        description: 'Edit manufacturer records and logos for the game database.',
      }),
      adminHomeLinkCard({
        href: '/admin/game-ratings.html',
        title: '⭐ Game Ratings',
        description: 'Create and update public ratings, reviews, and related videos.',
      })
    ),
    br
  )
})

const adminHomeLinkCard = tag(({
  href,
  title,
  description,
}: {
  href: string
  title: string
  description: string
}) => {
  adminHomeLinkCard.inputs((x) => {
    ;[{ href, title, description }] = x
  })

  return div.style`flex:1;min-width:min(320px, 100%);background:#1f1f1f;border:1px solid rgba(255,185,62,0.55);border-radius:0.8em;overflow:hidden;`(
    a
      .href`${href}`
      .style`display:block;padding:0.9em 1em;color:#fff;text-decoration:none;`
      (
        div.style`font-weight:800;text-align:center;`(title),
        p.style`margin:0.45em 0 0;color:rgba(255,255,255,0.72);font-size:0.82em;line-height:1.35;text-align:center;`(description)
      )
  )
})

const collapsibleSection = tag(({
  labelText,
  flex,
  contentNode,
}: {
  labelText: string
  flex: string
  contentNode: any
}) => {
  collapsibleSection.inputs(x => [{
    labelText,
    flex,
    contentNode,
  }] = x)

  let show = false

  const toggle = () => {
    show = !show
  }

  return div.style`flex:${flex};min-width:min(500px, 100%);background:#1f1f1f;border:1px solid rgba(255,255,255,0.3);border-radius:0.8em;overflow:hidden;`(
    div
      .onClick(toggle)
      .style`cursor:pointer;padding:0.75em 1em;color:#fff;user-select:none;font-weight:600;display:flex;gap:0.6em;align-items:center;`
      (
        div.style`width:1em;text-align:center;`(() => (show ? '▼' : '▶')),
        div(labelText)
      ),
    () => {
      return show
      ? div.style`padding:0.8em 1em;border-top:1px solid rgba(255,255,255,0.2);`(
          _=> contentNode
        )
      : ''}
  )
})
