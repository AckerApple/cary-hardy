import {
  a,
  button,
  callback,
  div,
  h3,
  img,
  input,
  label,
  noElement,
  onDestroy,
  output,
  p,
  small,
  span,
  strong,
  tag,
  textarea,
} from 'taggedjs'
import {
  deleteManufacturer,
  listManufacturers,
  listenManufacturers$,
  signOutUser,
  upsertManufacturer,
} from '../firebase'
import type { Manufacturer, ManufacturerInput } from '../manufacturers.types'
import { createAdminAuthTag } from './adminPageShell.tag'
import { adminNavButtons } from './adminNavButtons.tag'
import { topNavBar } from '../ui/topNav.tag'

const emptyManufacturer = (): ManufacturerInput => ({
  name: '',
  logoUrl: '',
  opinions: '',
})

let manufacturersLoaded = false
let latestManufacturers: Array<{ id: string } & Record<string, any>> | null = null
let manufacturersUnsubscribe: (() => void) | null = null
let manufacturersValueUnsubscribe: (() => void) | null = null

export const manufacturersAdminPageTag = createAdminAuthTag((onSignedOut) => manufacturersAdminPage(onSignedOut))

export const manufacturersAdminPage = tag((onSignedOut) => {
  manufacturersAdminPage.inputs(([_onSignedOut]) => {
    onSignedOut = output(_onSignedOut)
  })

  const signoutClick = () =>
    signOutUser()
      .then(onSignedOut)
      .catch((error) => console.error('Failed to sign out', error))

  let manufacturers = latestManufacturers
  let modalOpen = false
  let editingId: string | null = null
  let editManufacturer: ManufacturerInput = emptyManufacturer()
  let isSaving = false
  let isDeleting = false
  let errorMessage = ''
  let fieldErrors: Record<string, string> = {}

  const startManufacturersListener = () => {
    if (manufacturersUnsubscribe) manufacturersUnsubscribe()
    if (manufacturersValueUnsubscribe) manufacturersValueUnsubscribe()
    manufacturers = null
    latestManufacturers = null

    const manufacturers$ = listenManufacturers$()
    manufacturersUnsubscribe = (manufacturers$ as any)?.unsubscribe || null
    const subscription = manufacturers$.subscribe((items) => {
      manufacturers = items
      latestManufacturers = items
    })
    manufacturersValueUnsubscribe = () => subscription.unsubscribe()
  }

  const refreshManufacturers = () =>
    listManufacturers()
      .then((items) => {
        manufacturers = items
        latestManufacturers = items
      })
      .catch((error) => {
        console.error('Failed to refresh manufacturers', error)
        errorMessage = 'Saved, but failed to refresh manufacturers. Reload the page to confirm.'
      })

  tag.promise = refreshManufacturers()

  const updateManufacturerInList = (manufacturerId: string, nextManufacturer: ManufacturerInput) => {
    const currentManufacturers = manufacturers || latestManufacturers || []
    const nextItem = {
      ...(currentManufacturers.find((manufacturer) => manufacturer.id === manufacturerId) || {}),
      ...nextManufacturer,
      id: manufacturerId,
    }
    const hasExisting = currentManufacturers.some((manufacturer) => manufacturer.id === manufacturerId)
    const nextManufacturers = sortManufacturersByName(
      hasExisting
        ? currentManufacturers.map((manufacturer) => manufacturer.id === manufacturerId ? nextItem : manufacturer)
        : [...currentManufacturers, nextItem]
    )

    manufacturers = nextManufacturers
    latestManufacturers = nextManufacturers
  }

  const openAdd = () => {
    editingId = null
    editManufacturer = emptyManufacturer()
    errorMessage = ''
    fieldErrors = {}
    modalOpen = true
  }

  const openEdit = (manufacturer: Manufacturer) => {
    editingId = manufacturer.id
    editManufacturer = {
      id: manufacturer.id,
      name: manufacturer.name || '',
      logoUrl: manufacturer.logoUrl || '',
      opinions: manufacturer.opinions || '',
    }
    errorMessage = ''
    fieldErrors = {}
    modalOpen = true
  }

  const closeModal = () => {
    if (isSaving || isDeleting) return
    editingId = null
    editManufacturer = emptyManufacturer()
    errorMessage = ''
    fieldErrors = {}
    modalOpen = false
  }

  const validateManufacturer = () => {
    const nextFieldErrors: Record<string, string> = {}
    const nextManufacturerId = (editManufacturer.id || '').trim()
    if (editingId && !nextManufacturerId) nextFieldErrors.id = 'Manufacturer ID is required.'
    if (editingId && nextManufacturerId.includes('/')) nextFieldErrors.id = 'Manufacturer ID cannot include /.'
    if (editingId && nextManufacturerId !== editingId && (manufacturers || []).some((manufacturer) => manufacturer.id === nextManufacturerId)) {
      nextFieldErrors.id = 'A manufacturer with this ID already exists.'
    }
    if (!editManufacturer.name.trim()) nextFieldErrors.name = 'Manufacturer Name is required.'
    fieldErrors = nextFieldErrors
    const messages = Object.values(nextFieldErrors)
    return messages.length ? messages[0] : ''
  }

  const saveManufacturer = () => {
    if (isSaving) return
    const validationError = validateManufacturer()
    if (validationError) {
      errorMessage = validationError
      return
    }

    isSaving = true
    errorMessage = ''
    fieldErrors = {}
    const manufacturerToSave = {
      ...editManufacturer,
      id: editingId ? (editManufacturer.id || '').trim() : undefined,
      name: editManufacturer.name.trim(),
      logoUrl: (editManufacturer.logoUrl || '').trim(),
      opinions: (editManufacturer.opinions || '').trim(),
    }
    const savedEditingId = editingId

    return upsertManufacturer(manufacturerToSave)
      .then((result: any) => {
        const manufacturerId = manufacturerToSave.id || savedEditingId || result?.id
        if (manufacturerId) {
          updateManufacturerInList(manufacturerId, manufacturerToSave)
        }
        if (savedEditingId && manufacturerId && manufacturerId !== savedEditingId) {
          return deleteManufacturer(savedEditingId)
        }
      })
      .then(() => {
        isSaving = false
        closeModal()
        return refreshManufacturers()
      })
      .catch((error) => {
        console.error('Failed to save manufacturer', error)
        errorMessage = 'Failed to save manufacturer. Check the fields and try again.'
      })
      .finally(() => {
        isSaving = false
      })
  }

  const removeManufacturer = () => {
    if (!editingId || isDeleting) return
    if (!confirm('Delete this manufacturer? Existing games may still reference it.')) return
    isDeleting = true
    errorMessage = ''

    tag.promise = deleteManufacturer(editingId)
      .then(() => {
        isDeleting = false
        closeModal()
        return refreshManufacturers()
      })
      .catch((error) => {
        console.error('Failed to delete manufacturer', error)
        errorMessage = 'Failed to delete manufacturer.'
      })
      .finally(() => {
        isDeleting = false
      })
  }

  if (!manufacturersLoaded) {
    manufacturersLoaded = true
    if (!manufacturersUnsubscribe) startManufacturersListener()
  }

  onDestroy(() => {
    if (manufacturersUnsubscribe) manufacturersUnsubscribe()
    if (manufacturersValueUnsubscribe) manufacturersValueUnsubscribe()
    manufacturersUnsubscribe = null
    manufacturersValueUnsubscribe = null
    latestManufacturers = null
    manufacturersLoaded = false
  })

  return noElement(
    topNavBar(() => adminNavButtons(signoutClick)),
    div.class`admin-crud-page`(
      div.class`admin-crud-header`(
        h3('🏭 Manufacturers Database'),
        button.type`button`.class`admin-pill-button`.onClick(openAdd)('Add')
      ),
      div.class`admin-crud-card`(
        _ => errorMessage && !modalOpen ? p.style`color:#f6c177;`(errorMessage) : '',
        div.class`admin-crud-list`(
          _ => {
            if (manufacturers === null) {
              return small.style`opacity:0.7;`('Loading manufacturers...')
            }

            return manufacturers.length
              ? manufacturers.map((manufacturer) => manufacturerRow({
                  manufacturer: manufacturer as Manufacturer,
                  onClick: openEdit,
                }).key(manufacturer.id))
              : small.style`opacity:0.7;`('No manufacturers found. Use Add Manufacturer to create the first one.')
          }
        ),
        div.style`margin-top:1em;display:flex;gap:0.75em;flex-wrap:wrap;`(
          a.href`../admin/games.html`.class`admin-secondary-button`('Games Admin')
        )
      ),
      _ => modalOpen
        ? manufacturerModal({
            isEditing: Boolean(editingId),
            editManufacturer,
            errorMessage,
            fieldErrors,
            isSaving,
            isDeleting,
            onChange: (nextManufacturer) => {
              editManufacturer = nextManufacturer
              fieldErrors = {
                ...fieldErrors,
                id: nextManufacturer.id?.trim() ? '' : fieldErrors.id,
                name: nextManufacturer.name?.trim() ? '' : fieldErrors.name,
              }
            },
            onSave: saveManufacturer,
            onDelete: removeManufacturer,
            onCancel: closeModal,
          })
        : ''
    )
  )
})

const sortManufacturersByName = <T extends { name?: string }>(items: T[]) =>
  [...items].sort((a, b) =>
    String(a.name || '').localeCompare(String(b.name || ''), undefined, { sensitivity: 'base' })
  )

const manufacturerRow = tag(({
  manufacturer,
  onClick,
}: {
  manufacturer: Manufacturer
  onClick: (manufacturer: Manufacturer) => void
}) => {
  manufacturerRow.inputs((args) => {
    ;[{ manufacturer, onClick }] = args
    onClick = output(onClick)
  })

  return button.type`button`.class`admin-crud-row`.onClick(() => onClick(manufacturer))(
    _ => manufacturer.logoUrl
      ? img.class`admin-crud-thumb`.src`${manufacturer.logoUrl}`.attr('alt', _ => manufacturer.name || 'Manufacturer logo')
      : div.class`admin-crud-thumb admin-crud-thumb-placeholder`(_ => manufacturerInitial(manufacturer.name)),
    div(
      strong(_ => manufacturer.name || 'Untitled manufacturer'),
      div.style`margin-top:0.15em;opacity:0.74;`(
        small(_ => manufacturer.opinions || 'No opinions')
      )
    ),
    small.style`opacity:0.62;text-align:right;display:grid;gap:0.1em;`(
      span.style`font-size:0.78em;text-transform:uppercase;`('Manufacturer ID'),
      span(_ => manufacturer.id)
    )
  )
})

const manufacturerInitial = (name = '') =>
  (name.trim().charAt(0) || 'M').toUpperCase()

const manufacturerLogoSearchString = (name: string) => `${name} manufacturer logo`

const manufacturerLogoGoogleImagesUrl = (name: string) =>
  `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(manufacturerLogoSearchString(name))}`

const manufacturerModal = tag(({
  isEditing,
  editManufacturer,
  errorMessage,
  fieldErrors,
  isSaving,
  isDeleting,
  onChange,
  onSave,
  onDelete,
  onCancel,
}: {
  isEditing: boolean
  editManufacturer: ManufacturerInput
  errorMessage: string
  fieldErrors: Record<string, string>
  isSaving: boolean
  isDeleting: boolean
  onChange: (nextManufacturer: ManufacturerInput) => void
  onSave: () => void
  onDelete: () => void
  onCancel: () => void
}) => {
  manufacturerModal.inputs((args) => {
    ;[{
      isEditing,
      editManufacturer,
      errorMessage,
      fieldErrors,
      isSaving,
      isDeleting,
      onChange,
      onSave,
      onDelete,
      onCancel,
    }] = args
    onChange = output(onChange)
    onSave = output(onSave)
    onDelete = output(onDelete)
    onCancel = output(onCancel)
  })

  const updateManufacturer = (patch: Partial<ManufacturerInput>) => onChange({ ...editManufacturer, ...patch })
  const invalidBorder = (fieldName: string) => fieldErrors[fieldName] ? '#f87171' : 'rgba(255,255,255,0.2)'
  const labelColor = (fieldName: string) => fieldErrors[fieldName] ? '#fca5a5' : 'inherit'
  const submitOnEnter = (event: any) => {
    if (event.key !== 'Enter' || event.shiftKey || event.metaKey || event.ctrlKey || event.altKey) return
    if (String(event.target?.tagName || '').toLowerCase() === 'textarea') return
    event.preventDefault()
    onSave()
  }

  return div.class`admin-crud-modal-backdrop`(
    div.class`admin-crud-modal`.onKeyDown(submitOnEnter)(
      div.style`display:flex;justify-content:space-between;gap:1em;align-items:flex-start;`(
        div(
          h3.style`margin:0;`(isEditing ? 'Edit Manufacturer' : 'Add Manufacturer'),
          small.style`opacity:0.72;`('Manage the canonical manufacturer record.')
        ),
        button.type`button`.class`admin-secondary-button`.onClick(onCancel)('Cancel')
      ),
      _ => errorMessage ? p.style`color:#f6c177;`(errorMessage) : '',
      _ => Object.values(fieldErrors).filter(Boolean).length
        ? div.style`border:1px solid rgba(248,113,113,0.5);background:rgba(127,29,29,0.25);border-radius:0.55em;padding:0.6em;margin-top:0.75em;color:#fecaca;display:grid;gap:0.2em;`(
            Object.values(fieldErrors).filter(Boolean).map((message) => small(message))
          )
        : '',
      div.class`admin-crud-form-grid`.style`margin-top:1em;`(
        _ => isEditing
          ? [
              label.attr('style.color', _ => labelColor('id'))('Manufacturer ID'),
              div.style`display:grid;gap:0.28em;`(
                input.type`text`.value(_ => editManufacturer.id || '').onInput((event: any) => {
                  updateManufacturer({ id: event?.target?.value || '' })
                }).attr('aria-invalid', _ => fieldErrors.id ? 'true' : 'false').attr('title', _ => fieldErrors.id || '').attr('style.borderColor', _ => invalidBorder('id'))(),
                small.style`color:#f6c177;line-height:1.35;`('Changing this value can change or break links to this manufacturer.')
              ),
            ]
          : '',

        label.attr('style.color', _ => labelColor('name'))('Manufacturer Name'),
        input.type`text`.value(_ => editManufacturer.name || '').onInput((event: any) => {
          updateManufacturer({ name: event?.target?.value || '' })
        }).attr('aria-invalid', _ => fieldErrors.name ? 'true' : 'false').attr('title', _ => fieldErrors.name || '').attr('style.borderColor', _ => invalidBorder('name'))(),

        label('Logo URL'),
        div.style`display:grid;gap:0.5em;`(
          input.type`url`.value(_ => editManufacturer.logoUrl || '').onInput((event: any) => {
            updateManufacturer({ logoUrl: event?.target?.value || '' })
          })(),
          _ => (editManufacturer.name || '').trim()
            ? a
                .href`${manufacturerLogoGoogleImagesUrl(editManufacturer.name || '')}`
                .class`admin-inline-edit-link`
                .attr('target', '_blank')
                .attr('rel', 'noopener noreferrer')
                .style`justify-self:start;`
                .attr('title', _ => manufacturerLogoSearchString(editManufacturer.name || ''))(
                  'google images'
                )
            : small.style`opacity:0.72;`('Add a manufacturer name to view Google Images.')
        ),

        label('Opinions'),
        textarea.value(_ => editManufacturer.opinions || '').onInput((event: any) => {
          updateManufacturer({ opinions: event?.target?.value || '' })
        })()
      ),
      div.class`admin-crud-modal-actions`(
        div.style`display:flex;gap:0.7em;flex-wrap:wrap;`(
          button.type`button`.class`admin-pill-button`.attr('disabled', _ => isSaving ? 'disabled' : null).onClick(onSave)(_ => isSaving ? 'Saving...' : 'Save'),
          button.type`button`.class`admin-secondary-button`.attr('disabled', _ => isSaving ? 'disabled' : null).onClick(onCancel)('Cancel')
        ),
        _ => isEditing
          ? button.type`button`.class`admin-danger-button`.attr('disabled', _ => isDeleting ? 'disabled' : null).onClick(onDelete)(_ => isDeleting ? '🗑️ Deleting...' : '🗑️ Delete')
          : ''
      )
    )
  )
})
