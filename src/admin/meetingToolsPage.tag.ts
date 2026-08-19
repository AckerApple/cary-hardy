import { callback, div, h3, img, noElement, output, tag } from 'taggedjs'
import { loadNextMeetupDate, saveNextMeetupDate, signOutUser } from '../firebase'
import { topNavBar } from '../ui/topNav.tag'
import { adminNavButtons } from './adminNavButtons.tag'
import { createAdminAuthTag } from './adminPageShell.tag'
import { meetingToolsSection } from './meetingTools.tag'
import { timestampToValues } from './utils'

let meetupLoaded = false
let latestMeetupDate: number | null = null

export const meetingToolsAdminPageTag = createAdminAuthTag((onSignedOut) => meetingToolsAdminPage(onSignedOut))

export const meetingToolsAdminPage = tag((onSignedOut) => {
  let nextMeetupDate = latestMeetupDate
  let { date, time } = nextMeetupDate === null
    ? { date: '', time: '' }
    : timestampToValues(nextMeetupDate)

  meetingToolsAdminPage.inputs(([_onSignedOut]) => {
    onSignedOut = output(_onSignedOut)
  })

  function updateDateTime() {
    if (nextMeetupDate === null) return
    const nextValues = timestampToValues(nextMeetupDate)
    date = nextValues.date
    time = nextValues.time
  }

  if (!meetupLoaded) {
    meetupLoaded = true
    tag.promise = loadNextMeetupDate()
      .then((loadedDate) => {
        if (typeof loadedDate === 'number') {
          nextMeetupDate = loadedDate
          latestMeetupDate = loadedDate
          updateDateTime()
          console.log('nextMeetupDate', {nextMeetupDate})
        }
      })
      .catch((error) => {
        console.error('Failed to load next meetup date', error)
      })
  }

  const signoutClick = () =>
    signOutUser()
      .then(onSignedOut)
      .catch((error) => {
        console.error('Failed to sign out', error)
      })

  const saveMeetupDate = () => {
    if (nextMeetupDate === null) return
    return saveNextMeetupDate(nextMeetupDate)
      .then(() => {
        latestMeetupDate = nextMeetupDate
        alert('saved')
      })
      .catch((error) => {
        console.error('Failed to save meetup date', error)
      })
  }

  return noElement(
    topNavBar(() => adminNavButtons(signoutClick)),
    div.class`admin-crud-page`(
      div.class`admin-crud-header`(
        h3(
          img.src`../assets/media/icon.png`.style`width:40px;margin-right:10px;`,
          '📅 Meeting Tools'
        )
      ),
      div.class`admin-crud-card`(
        _=> nextMeetupDate === null
          ? div.style`opacity:0.7;`('Loading saved meetup time...')
          : meetingToolsSection({
              nextMeetupDate,
              date,
              time,
              onDate: (dateNum) => {
                nextMeetupDate = dateNum
                latestMeetupDate = dateNum
                updateDateTime()
              },
              onSave: saveMeetupDate,
            })
      )
    )
  )
})
