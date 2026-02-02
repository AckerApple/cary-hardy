import { button, callback, div, fieldset, input, tag } from 'taggedjs'
import { loadAdmins, saveAdminEmails } from '../firebase'

export const adminUsersSection = tag(() => {
  let users: string[] = []
  const refresh = callback(() => {})

  tag.promise = loadAdmins()
    .then((loadedAdmins) => {
      users = Array.isArray(loadedAdmins) ? loadedAdmins : []
      refresh()
    })
    .catch((error) => {
      console.error('Failed to load admin list', error)
    })

  const onChange = (index: number, value: string) => {
    users = users.map((entry, i) => (i === index ? value : entry))
    refresh()
  }

  const onAdd = () => {
    users = [...users, '']
    refresh()
  }

  const onRemove = (index: number) => {
    users = users.filter((_, i) => i !== index)
    refresh()
  }

  const onSave = () =>
    saveAdminEmails(users)
      .then(() => {
        alert('saved')
      })
      .catch((error) => {
        console.error('Failed to save admin list', error)
      })

  return fieldset.style`border:0;padding:0;margin:0;`(
    div.style`display:flex;flex-direction:column;gap:0.6em;`(
      _ => (users.length ? users : ['']).map((email, index) =>
        div.style`display:flex;gap:0.6em;align-items:center;`(
          input
            .type`text`
            .value(_ => email)
            .onInput((e: any) => onChange(index, e.target.value))
            .style`width:100%`,
          button.onClick(() => onRemove(index))('remove')
        )
      )
    ),
    div.style`display:flex;gap:0.6em;align-items:center;margin-top:0.8em;flex-wrap:wrap;`(
      button.onClick(onAdd)('add'),
      button.onClick(onSave)('save to firestore')
    )
  )
})
