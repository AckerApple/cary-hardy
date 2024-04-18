export function getGoogleInviteLink({
  startDateTime, message, subject
}) {
  startDateTime = new Date(startDateTime)
  const {year, month} = dateNames(startDateTime)
  const googleDay = ('0' + (startDateTime.getDate() + 1)).slice(-2)
  const utcStartTime = convertToT000000Z(startDateTime) // 'T010000Z' // T020000Z
  const end = new Date(new Date(startDateTime).setHours(startDateTime.getHours() + 2))
  const utcEndTime = convertToT000000Z(end) // T040000Z
  const urlMessage = encodeURIComponent(message)
  const urlSubject = encodeURIComponent(subject)

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${year}${month}${googleDay}${utcStartTime}%2F${year}${month}${googleDay}${utcEndTime}&details=${urlMessage}&location=&text=${urlSubject}`
}

export function getOutlookInviteLink({
  startDateTime, message, subject
}) {
  startDateTime = new Date(startDateTime)
  const {year, month, day, hours} = dateNames(startDateTime)
  const end = new Date(new Date(startDateTime).setHours(startDateTime.getHours() + 2))
  const endHours = end.getHours()
  const urlMessage = encodeURIComponent(message.replace(/\n/g,'<br>'))
  const urlSubject = encodeURIComponent(subject)

  return `https://outlook.live.com/calendar/0/action/compose?allday=false&body=${urlMessage}&enddt=${year}-${month}-${day}T${endHours}%3A00%3A00&location=&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=${year}-${month}-${day}T${hours}%3A00%3A00&subject=${urlSubject}`
}

export function getICalContent({
  startDateTime, message, subject
}) {
  startDateTime = new Date(startDateTime)
  const {year, month} = dateNames(startDateTime)
  const googleDay = ('0' + (startDateTime.getDate() + 1)).slice(-2)
  const utcStartTime = convertToT000000Z(startDateTime) // 'T010000Z' // T020000Z
  const end = new Date(new Date(startDateTime).setHours(startDateTime.getHours() + 2))
  const utcEndTime = convertToT000000Z(end) // T040000Z

  return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:${subject}
BEGIN:VEVENT
DTSTART:${year}${month}${googleDay}${utcStartTime}
DTEND:${year}${month}${googleDay}${utcEndTime}
DTSTAMP:${year}${month}14T181547Z
SUMMARY:${subject}
DESCRIPTION:${message.replace(/\n/g,'\\n')}
UID:79992
END:VEVENT
END:VCALENDAR`
}

function dateNames(date) {
  date = new Date(date)
  const year = date.getFullYear()
  const month = ('0' + (date.getMonth() + 1)).slice(-2)
  const day = ('0' + (date.getDate())).slice(-2)
  const hours = date.getHours()

  return {year, month, day, hours}
}

function convertToT000000Z(date) {
  // Get the individual components of the date
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');
  
  // Construct the formatted string
  const formattedDate = `T${hours}${minutes}${seconds}Z`;

  return formattedDate;
}
