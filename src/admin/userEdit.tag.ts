import { button, div, input, label, option, select, small, tag } from 'taggedjs'

export type UserRecord = {
  id: string
  email?: string
  firstName?: string
  lastName?: string
  userType?: string
}

export const userEdit = tag(({
  userId,
  createdAtLabel,
  editUser,
  isSaving,
  isDeleting,
  onChange,
  onSave,
  onDelete,
  onCancel,
}: {
  userId: string
  createdAtLabel: string
  editUser: UserRecord
  isSaving: boolean
  isDeleting: boolean
  onChange: (nextUser: UserRecord) => void
  onSave: () => void
  onDelete: () => void
  onCancel: () => void
}) => {
  userEdit.inputs((args) => {
    ;[{
      userId,
      createdAtLabel,
      editUser,
      isSaving,
      isDeleting,
      onChange,
      onSave,
      onDelete,
      onCancel,
    }] = args
  })

  const updateUser = (patch: Partial<UserRecord>) => {
    onChange({ ...editUser, ...patch })
  }

  return div.style`margin-top:1em;padding-top:1em;border-top:1px solid rgba(255,255,255,0.15);display:grid;gap:0.6em;`(
    div.style`font-weight:600;`('Edit User'),
    small.style`opacity:0.6;`('User ID: ', _=> userId),
    small.style`opacity:0.6;`('Created at: ', _=> createdAtLabel),
    div.style`display:grid;grid-template-columns:120px 1fr;gap:0.6em;align-items:center;`(
      small.style`opacity:0.7;`('Email'),
      input
        .type`email`
        .value(_=> editUser?.email || '')
        .onInput((event: any) => {
          updateUser({ email: event?.target?.value || '' })
        })
        .style`padding:0.5em;border-radius:0.5em;border:1px solid rgba(255,255,255,0.2);background:#111;color:#fff;`(),
      small.style`opacity:0.7;`('First name'),
      input
        .type`text`
        .value(_=> editUser?.firstName || '')
        .onInput((event: any) => {
          updateUser({ firstName: event?.target?.value || '' })
        })
        .style`padding:0.5em;border-radius:0.5em;border:1px solid rgba(255,255,255,0.2);background:#111;color:#fff;`(),
      small.style`opacity:0.7;`('Last name'),
      input
        .type`text`
        .value(_=> editUser?.lastName || '')
        .onInput((event: any) => {
          updateUser({ lastName: event?.target?.value || '' })
        })
        .style`padding:0.5em;border-radius:0.5em;border:1px solid rgba(255,255,255,0.2);background:#111;color:#fff;`(),
      small.style`opacity:0.7;`('Status'),
      select
        .value(_=> editUser?.userType === 'verified' ? 'verified' : 'unverified')
        .onChange((event: any) => {
          updateUser({
            userType: event?.target?.value === 'verified' ? 'verified' : 'unverified',
          })
        })
        .style`padding:0.5em;border-radius:0.5em;border:1px solid rgba(255,255,255,0.2);background:#111;color:#fff;`(
          _=> option
            .value`unverified`
            .selected(_=> editUser.userType === 'unverified')('unverified'),
          _=> option
            .value`verified`
            .selected(_=> editUser.userType === 'verified')('verified')
        )
    ),
    div.style`display:flex;gap:0.6em;`(
      button
        .type`button`
        .onClick(onSave)
        .style`padding:0.5em 1em;border-radius:999px;border:1px solid rgba(255,255,255,0.3);background:#1b1b1b;color:#fff;cursor:pointer;`(
          _=> isSaving ? 'Saving...' : 'Save to Firestore'
        ),
      button
        .type`button`
        .onClick(onDelete)
        .style`padding:0.5em 1em;border-radius:999px;border:1px solid rgba(255,255,255,0.3);background:#4b1111;color:#fff;cursor:pointer;`(
          _=> isDeleting ? '🗑️ Deleting...' : '🗑️ Delete'
        ),
      button
        .type`button`
        .onClick(onCancel)
        .style`padding:0.5em 1em;border-radius:999px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;cursor:pointer;`('Cancel')
    )
  )
})
