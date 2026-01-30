import {
  br,
  details,
  div,
  h3,
  img,
  output,
  summary,
  tag,
} from 'taggedjs'
import { loadAdmins, loadNextMeetupDate, saveAdminEmails, saveNextMeetupDate, signOutUser } from '../firebase'
import { adminNavButtons } from './adminNavButtons.tag'
import { adminUsersSection } from './adminUsers.tag'
import { calendarLinksSection } from './calendarLinks.tag'
import { meetingToolsSection } from './meetingTools.tag'
import { qrMakerSection } from './qrMaker.tag'
import { timestampToValues } from './utils'

let meetupLoaded = false

export const adminTools = tag((
  onSignedOut
) => (
  nextMeetupDate = Date.now(),
  qrUrl = '',
  { date, time } = timestampToValues(Number(nextMeetupDate)),
  adminUsers = [] as string[]
) => {
  adminTools.inputs(([_onSignedOut]) => {
    onSignedOut = output(_onSignedOut)
  })

  function updateDateTime() {
    const x = timestampToValues(Number(nextMeetupDate))
    date = x.date
    time = x.time
  }

  if (!meetupLoaded) {
    meetupLoaded = true
    tag.promise = loadNextMeetupDate()
      .then((loadedDate) => {
        if (typeof loadedDate === 'number') {
          nextMeetupDate = loadedDate
          updateDateTime()
        }
      })
      .catch((error) => {
        console.error('Failed to load next meetup date', error)
      })
  }

  tag.promise = loadAdmins()
    .then((loadedAdmins) => {
      adminUsers = Array.isArray(loadedAdmins) ? loadedAdmins : []
    })
    .catch((error) => {
      console.error('Failed to load admin list', error)
    })

  const saveMeetupDate = () =>
    saveNextMeetupDate(Number(nextMeetupDate))
      .then(() => {
        alert('saved')
      })
      .catch((error) => {
        console.error('Failed to save meetup date', error)
      })

  const signoutClick = () => signOutUser().then(onSignedOut).catch((error) => {
    console.error('Failed to sign out', error)
  })

  const saveAdminUsers = () =>
    saveAdminEmails(adminUsers)
      .then(() => {
        alert('saved')
      })
      .catch((error) => {
        console.error('Failed to save admin list', error)
      })

  const collapsibleSection = ({
    labelText,
    flex,
    contentNode,
  }: {
    labelText: string
    flex: string
    contentNode: any
  }) => details.style`flex:${flex};min-width:500px;background:#1f1f1f;border:1px solid rgba(255,255,255,0.3);border-radius:0.8em;overflow:hidden;`(
    summary.style`cursor:pointer;padding:0.75em 1em;color:#fff;user-select:none;font-weight:600;`(
      labelText
    ),
    div.style`padding:0.8em 1em;border-top:1px solid rgba(255,255,255,0.2);`(contentNode),
  )

  return div.style`max-width:1200px;margin:0 auto;padding:0 1em;`(
    h3(
      img.src`assets/media/icon.png`.style`width:40px;margin-right:10px;`,
      'Hardy Tools'
    ),
    adminNavButtons(signoutClick),
    br,
    div.style`display:flex;flex-wrap:wrap;gap:1em;text-align:left;`(
      collapsibleSection({
        labelText: 'QR Maker',
        flex: '1',
        contentNode: qrMakerSection({
          qrUrl,
          onQrUrlChange: (value) => {
            qrUrl = value
          },
        }),
      }),
      collapsibleSection({
        labelText: 'Calendar Links',
        flex: '2',
        contentNode: calendarLinksSection({
          nextMeetupDate,
          onQrUrlChange: (value) => {
            qrUrl = value
          },
        }),
      }),
      collapsibleSection({
        labelText: 'meeting tools',
        flex: '1',
        contentNode: meetingToolsSection({
          nextMeetupDate,
          date,
          time,
          onDate: (dateNum) => {
            nextMeetupDate = dateNum
            updateDateTime()
          },
          onSave: saveMeetupDate,
        }),
      }),
      collapsibleSection({
        labelText: 'admin users',
        flex: '1',
        contentNode: () => adminUsersSection({
          users: adminUsers,
          onChange: (index, value) => {
            adminUsers = adminUsers.map((entry, i) => (i === index ? value : entry))
          },
          onAdd: () => {
            adminUsers = [...adminUsers, '']
          },
          onRemove: (index) => {
            adminUsers = adminUsers.filter((_, i) => i !== index)
          },
          onSave: saveAdminUsers,
        }),
      })
    ),
    br,
    adminNavButtons(signoutClick)
  )
})
