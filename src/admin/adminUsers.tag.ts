import { button, div, fieldset, input, output, tag } from 'taggedjs'

export const adminUsersSection = tag(({
  users,
  onChange,
  onAdd,
  onRemove,
  onSave,
}: {
  users: string[]
  onChange: (index: number, value: string) => void
  onAdd: () => void
  onRemove: (index: number) => void
  onSave: () => void
}) => {
  adminUsersSection.inputs((x) => {
    ;[{ users, onChange, onAdd, onRemove, onSave }] = x
    onChange = output(onChange)
    onAdd = output(onAdd)
    onRemove = output(onRemove)
    onSave = output(onSave)
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
