import { button, div, small, tag } from 'taggedjs'

export type UserRecord = {
  id: string
  email?: string
  firstName?: string
  lastName?: string
  userType?: string
  createdAt?: any
}

export const userDisplay = tag(({
  user,
  onEdit,
  formatCreatedAt,
}: {
  user: UserRecord
  onEdit: () => void
  formatCreatedAt: (value: any) => string
}) => {
  userDisplay.inputs((args) => {
    ;[{ user, onEdit, formatCreatedAt }] = args
  })

  return div.style`display:grid;grid-template-columns:1.1fr 1.4fr 0.7fr 0.7fr auto;gap:0.6em;align-items:center;padding:0.4em 0;`(
    div(`${user.firstName || ''} ${user.lastName || ''}`.trim() || '—'),
    div.style`opacity:0.85;`(user.email || '—'),
    small.style`opacity:0.85;color:${user.userType === 'verified' ? '#6fe3a1' : '#f26d6d'};`(
      user.userType || 'unverified'
    ),
    small.style`opacity:0.7;`(formatCreatedAt(user.createdAt)),
    button
      .type`button`
      .onClick(onEdit)
      .style`border:0;background:transparent;color:#fff;cursor:pointer;font-size:1.1em;`
      .attr('title', 'Edit user')('✏️')
  )
})
