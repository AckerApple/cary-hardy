import {
  a,
  br,
  callback,
  div,
  h3,
  img,
  output,
  tag,
} from 'taggedjs'
import { loadNextMeetupDate, saveNextMeetupDate, signOutUser } from '../firebase'
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
  { date, time } = timestampToValues(Number(nextMeetupDate))
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

    return div.style`flex:${flex};min-width:500px;background:#1f1f1f;border:1px solid rgba(255,255,255,0.3);border-radius:0.8em;overflow:hidden;`(
      div.onClick(toggle).style`cursor:pointer;padding:0.75em 1em;color:#fff;user-select:none;font-weight:600;display:flex;gap:0.6em;align-items:center;`(
        div.style`width:1em;text-align:center;`(() => (show ? '▼' : '▶')),
        div(labelText)
      ),
      () => show
        ? div.style`padding:0.8em 1em;border-top:1px solid rgba(255,255,255,0.2);`(
            _=> contentNode
          )
        : ''
    )
  })

  return div.style`max-width:1200px;margin:0 auto;padding:0 1em;`(
    h3(
      img.src`assets/media/icon.png`.style`width:40px;margin-right:10px;`,
      'Hardy Tools'
    ),
    div.style`display:flex;flex-wrap:wrap;gap:1em;text-align:left;`(
      _=> collapsibleSection({
        labelText: 'QR Maker',
        flex: '1',
        contentNode: qrMakerSection({
          qrUrl,
          onQrUrlChange: (value) => {
            qrUrl = value
          },
        }),
      }),
      _=> collapsibleSection({
        labelText: 'Calendar Links',
        flex: '2',
        contentNode: calendarLinksSection({
          nextMeetupDate,
          onQrUrlChange: (value) => {
            qrUrl = value
          },
        }),
      }),
      _=> collapsibleSection({
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
      
      _=> collapsibleSection({
        labelText: 'admin users',
        flex: '1',
        contentNode: adminUsersSection,
      }),
      div.style`flex:1;min-width:320px;background:#1f1f1f;border:1px solid rgba(255,255,255,0.3);border-radius:0.8em;overflow:hidden;`(
        a({
          href: 'admin/user.html',
          style: 'display:block;padding:0.9em 1em;color:#fff;text-decoration:none;font-weight:600;text-align:center;',
        }, 'Open Users Admin')
      )
    ),
    br
  )
})
