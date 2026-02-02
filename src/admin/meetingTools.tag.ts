import { button, div, fieldset, hr, input, label, onDestroy, output, tag } from 'taggedjs'
import { ClockComponent } from '../clock/clock.tag'

export const meetingToolsSection = tag(({
  nextMeetupDate,
  date,
  time,
  onDate,
  onSave,
}: {
  nextMeetupDate: number
  date: string
  time: string
  onDate: (dateNum: number) => any
  onSave: () => void
}) => {
  meetingToolsSection.inputs((x) => {
    [{ nextMeetupDate, date, time, onDate, onSave }] = x
    onDate = output(onDate)
    onSave = output(onSave)
  })

  return fieldset.style`border:0;padding:0;margin:0;`(
    _ => {
      return inviteMaker({
        date,
        time,
        onDate,
      })
    },
    div.style`margin-top:0.6em;`(
      button.onClick(onSave)('save to firestore')
    ),
    hr,
    div.style`text-align:center;`(
      _ => ClockComponent({ date: nextMeetupDate })
    )
  )
})

export const inviteMaker = tag(({
  date,
  time,
  onDate,
}: {
  date: string
  time: string
  onDate: (dateNum: number) => any
}) => {
  let dateTime = new Date(date + ' ' + time).getTime()

  inviteMaker.inputs(x => {
    ;[{ date, time, onDate }] = x
    onDate = output(onDate)
    dateTime = new Date(date + ' ' + time).getTime()
  })

  const elmChangeDate = (event: any) => {
    const newDateString = event.target.value
    onDate(new Date(newDateString + ' ' + time).getTime())
  }

  const elmChangeTime = (event: any) => {
    const newTimeString = event.target.value
    onDate(new Date(date + ' ' + newTimeString).getTime())
  }

  return div.style`display:flex;flex-wrap:wrap;gap:1em`(
    div(
      label('Date'),
      div(
        input
          .type`date`
          .value(_ => date)
          .onChange(elmChangeDate)
          .style`width:100%`
      )
    ),
    div(
      label.attr('for', 'time')('Time'),
      div(
        input
          .type`time`
          .value(_ => time)
          .onChange(elmChangeTime)
          .style`width:100%`
      )
    ),
    div(
      label.attr('for', 'time')('UTC'),
      div(_ => dateTime)
    )
  )
})
