import { a, button, callback, div, h3, input, label, noElement, onDestroy, output, p, small, strong, tag } from 'taggedjs'
import { deleteGameTier, listGameTiers, listenGameTiers$, saveGameTierOrder, signOutUser, upsertGameTier } from '../firebase'
import type { GameTier, GameTierInput } from '../gameTiers.types'
import { createAdminAuthTag } from './adminPageShell.tag'
import { adminNavButtons } from './adminNavButtons.tag'
import { topNavBar } from '../ui/topNav.tag'

const emptyTier = (): GameTierInput => ({ shortName: '', longName: '' })
let loaded = false
let latest: GameTier[] | null = null
let listenerUnsubscribe: (() => void) | null = null
let valueUnsubscribe: (() => void) | null = null

export const gameTiersAdminPageTag = createAdminAuthTag((onSignedOut) => gameTiersAdminPage(onSignedOut))

export const gameTiersAdminPage = tag((onSignedOut) => {
  gameTiersAdminPage.inputs(([_onSignedOut]) => { onSignedOut = output(_onSignedOut) })
  let tiers = latest
  let modalOpen = false
  let editingId: string | null = null
  let editTier = emptyTier()
  let isSaving = false
  let isDeleting = false
  let errorMessage = ''
  let isOrdering = false
  let draggedTierId = ''
  let dragInsertIndex: number | null = null
  let cancelActiveDrag: (() => void) | null = null
  let fieldErrors: Record<string, string> = {}
  const refresh = callback(() => {})
  const signoutClick = () => signOutUser().then(onSignedOut).catch((error) => console.error('Failed to sign out', error))

  const startListener = () => {
    listenerUnsubscribe?.()
    valueUnsubscribe?.()
    tiers = null
    latest = null
    const tiers$ = listenGameTiers$()
    listenerUnsubscribe = (tiers$ as any)?.unsubscribe || null
    const subscription = tiers$.subscribe((items) => {
      if (!Array.isArray(items)) return
      tiers = items as GameTier[]
      latest = tiers
      refresh()
    })
    valueUnsubscribe = () => subscription.unsubscribe()
  }

  const refreshTiers = () => listGameTiers().then((items) => {
    tiers = items as GameTier[]
    latest = tiers
    refresh()
  })

  const openAdd = () => {
    editingId = null
    editTier = { ...emptyTier(), order: (tiers || []).length }
    fieldErrors = {}
    errorMessage = ''
    modalOpen = true
    refresh()
  }
  const openEdit = (tier: GameTier) => {
    editingId = tier.id
    editTier = { id: tier.id, shortName: tier.shortName || '', longName: tier.longName || '', order: tier.order }
    fieldErrors = {}
    errorMessage = ''
    modalOpen = true
    refresh()
  }
  const closeModal = () => {
    if (isSaving || isDeleting) return
    modalOpen = false
    editingId = null
    editTier = emptyTier()
    refresh()
  }
  const save = () => {
    const errors: Record<string, string> = {}
    if (!editTier.shortName.trim()) errors.shortName = 'Short form is required.'
    if (!editTier.longName.trim()) errors.longName = 'Long form is required.'
    const nextId = (editTier.id || '').trim()
    if (editingId && !nextId) errors.id = 'Tier ID is required.'
    if (editingId && nextId.includes('/')) errors.id = 'Tier ID cannot include /.'
    if (editingId && nextId !== editingId && (tiers || []).some((tier) => tier.id === nextId)) errors.id = 'A tier with this ID already exists.'
    fieldErrors = errors
    errorMessage = Object.values(errors)[0] || ''
    if (errorMessage || isSaving) return refresh()
    isSaving = true
    refresh()
    const tierToSave = { ...editTier, id: editingId ? nextId : undefined }
    tag.promise = upsertGameTier(tierToSave)
      .then(() => editingId && nextId !== editingId ? deleteGameTier(editingId) : undefined)
      .then(() => { isSaving = false; closeModal(); return refreshTiers() })
      .catch((error) => { console.error('Failed to save game tier', error); errorMessage = 'Failed to save game tier.'; refresh() })
      .finally(() => { isSaving = false; refresh() })
  }
  const remove = () => {
    if (!editingId || isDeleting || !confirm('Delete this game tier? Existing games may still reference it.')) return
    isDeleting = true
    refresh()
    tag.promise = deleteGameTier(editingId)
      .then(() => { isDeleting = false; closeModal(); return refreshTiers() })
      .catch((error) => { console.error('Failed to delete game tier', error); errorMessage = 'Failed to delete game tier.'; refresh() })
      .finally(() => { isDeleting = false; refresh() })
  }

  const clearDropIndicators = () => {
    document.querySelectorAll('[data-tier-drop-target="true"]').forEach((element: any) => {
      element.removeAttribute('data-tier-drop-target')
      element.style.boxShadow = ''
    })
  }
  const saveReorderedTiers = (sourceTierId: string, insertIndex: number) => {
    if (!tiers) return
    const reordered = [...tiers]
    const sourceIndex = reordered.findIndex((tier) => tier.id === sourceTierId)
    if (sourceIndex < 0) return
    const [movedTier] = reordered.splice(sourceIndex, 1)
    reordered.splice(Math.max(0, Math.min(insertIndex, reordered.length)), 0, movedTier)
    if (reordered.every((tier, index) => tier.id === tiers?.[index]?.id)) return
    tiers = reordered.map((tier, index) => ({ ...tier, order: index }))
    latest = tiers
    draggedTierId = ''
    dragInsertIndex = null
    isOrdering = true
    errorMessage = ''
    refresh()
    tag.promise = saveGameTierOrder(reordered.map((tier) => tier.id))
      .catch((error) => {
        console.error('Failed to save game tier order', error)
        errorMessage = 'The new tier order could not be saved. Please try again.'
        return refreshTiers()
      })
      .finally(() => { isOrdering = false; refresh() })
  }

  const startPointerDrag = (event: any, tierId: string) => {
    if (isOrdering || event.button !== 0) return
    event.preventDefault()
    const sourceRow = event.currentTarget.closest('[data-tier-id]') as HTMLElement | null
    const listElement = sourceRow?.closest('[data-tier-list]') as HTMLElement | null
    if (!sourceRow || !listElement) return

    cancelActiveDrag?.()
    draggedTierId = tierId
    dragInsertIndex = null
    const rowRect = sourceRow.getBoundingClientRect()
    const listRect = listElement.getBoundingClientRect()
    const pointerOffsetY = event.clientY - rowRect.top
    const ghost = sourceRow.cloneNode(true) as HTMLElement
    ghost.removeAttribute('data-tier-id')
    ghost.style.position = 'fixed'
    ghost.style.left = `${listRect.left}px`
    ghost.style.width = `${listRect.width}px`
    ghost.style.height = `${rowRect.height}px`
    ghost.style.margin = '0'
    ghost.style.zIndex = '10000'
    ghost.style.pointerEvents = 'none'
    ghost.style.opacity = '0.92'
    ghost.style.boxSizing = 'border-box'
    ghost.style.boxShadow = '0 12px 30px rgba(0,0,0,0.5)'
    document.body.appendChild(ghost)
    sourceRow.style.opacity = '0.28'

    const moveGhost = (clientY: number) => {
      const top = Math.max(listRect.top, Math.min(clientY - pointerOffsetY, listRect.bottom - rowRect.height))
      ghost.style.top = `${top}px`
    }
    const showInsertionPoint = (clientY: number) => {
      clearDropIndicators()
      const rows = Array.from(listElement.querySelectorAll('[data-tier-id]'))
        .filter((row) => row !== sourceRow) as HTMLElement[]
      const nextIndex = rows.findIndex((row) => clientY < row.getBoundingClientRect().top + row.getBoundingClientRect().height / 2)
      dragInsertIndex = nextIndex < 0 ? rows.length : nextIndex
      const indicatorRow = nextIndex < 0 ? rows[rows.length - 1] : rows[nextIndex]
      if (!indicatorRow) return
      indicatorRow.setAttribute('data-tier-drop-target', 'true')
      indicatorRow.style.boxShadow = nextIndex < 0
        ? 'inset 0 -4px 0 #f6c177'
        : 'inset 0 4px 0 #f6c177'
    }
    const cleanup = () => {
      clearDropIndicators()
      ghost.remove()
      sourceRow.style.opacity = ''
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
      window.removeEventListener('pointercancel', onPointerCancel)
      cancelActiveDrag = null
    }
    const onPointerMove = (moveEvent: PointerEvent) => {
      moveEvent.preventDefault()
      moveGhost(moveEvent.clientY)
      showInsertionPoint(Math.max(listRect.top, Math.min(moveEvent.clientY, listRect.bottom)))
    }
    const onPointerUp = (upEvent: PointerEvent) => {
      const wasInsideList = upEvent.clientX >= listRect.left && upEvent.clientX <= listRect.right
        && upEvent.clientY >= listRect.top && upEvent.clientY <= listRect.bottom
      const insertIndex = dragInsertIndex
      cleanup()
      draggedTierId = ''
      dragInsertIndex = null
      if (wasInsideList && insertIndex !== null) saveReorderedTiers(tierId, insertIndex)
    }
    const onPointerCancel = () => {
      cleanup()
      draggedTierId = ''
      dragInsertIndex = null
    }
    cancelActiveDrag = onPointerCancel
    moveGhost(event.clientY)
    showInsertionPoint(event.clientY)
    window.addEventListener('pointermove', onPointerMove, { passive: false })
    window.addEventListener('pointerup', onPointerUp)
    window.addEventListener('pointercancel', onPointerCancel)
  }

  if (!loaded) { loaded = true; startListener() }
  onDestroy(() => {
    cancelActiveDrag?.()
    listenerUnsubscribe?.(); valueUnsubscribe?.()
    listenerUnsubscribe = null; valueUnsubscribe = null; latest = null; loaded = false
  })

  return noElement(
    topNavBar(() => adminNavButtons(signoutClick)),
    div.class`admin-crud-page`(
      div.class`admin-crud-header`(h3('🏷️ Game Tiers Database'), button.type`button`.class`admin-pill-button`.onClick(openAdd)('Add')),
      div.class`admin-crud-card`(
        p.style`margin-top:0;opacity:0.78;`('Manage edition abbreviations and their full names. Drag the handle to reorder tiers.'),
        _ => isOrdering ? p.style`color:#f6c177;`('Saving tier order...') : '',
        _ => errorMessage && !modalOpen ? p.style`color:#f87171;`(errorMessage) : '',
        div.class`admin-crud-list`.attr('data-tier-list', 'true')(_ => tiers === null
          ? small.style`opacity:0.7;`('Loading game tiers...')
          : tiers.length
            ? tiers.map((tier) => div.class`admin-crud-row`.attr('data-tier-id', tier.id)(
                  (button.type`button` as any)
                    .attr('aria-label', `Drag ${tier.shortName || 'tier'} to reorder`)
                    .attr('title', 'Drag to reorder')
                    .style`cursor:grab;font-size:1.35em;background:transparent;border:0;color:inherit;padding:0.5em;touch-action:none;user-select:none;`
                    .onPointerDown((event: any) => startPointerDrag(event, tier.id))('☰'),
                  button.type`button`.style`display:contents;color:inherit;`.onClick(() => openEdit(tier))(
                    div.class`admin-crud-thumb admin-crud-thumb-placeholder`(_ => tier.shortName || '?'),
                    div(strong(_ => tier.shortName || 'Untitled tier'), div.style`margin-top:0.15em;opacity:0.74;`(small(_ => tier.longName || 'No long form')))
                  )
                ).key(`${tier.id}-${tier.order ?? 'unordered'}`))
            : small.style`opacity:0.7;`('No game tiers found. Use Add to create the first one.')),
        div.style`margin-top:1em;`(a.href`/admin/games.html`.class`admin-secondary-button`('Games Admin'))
      ),
      _ => modalOpen ? div.class`admin-crud-modal-backdrop`(
        div.class`admin-crud-modal`(
          div.style`display:flex;justify-content:space-between;gap:1em;`(h3.style`margin:0;`(editingId ? 'Edit Game Tier' : 'Add Game Tier'), button.type`button`.class`admin-secondary-button`.onClick(closeModal)('Cancel')),
          _ => errorMessage ? p.style`color:#f6c177;`(errorMessage) : '',
          div.class`admin-crud-form-grid`.style`margin-top:1em;`(
            _ => editingId ? [label('Tier ID'), input.type`text`.value(_ => editTier.id || '').onInput((event: any) => { editTier = { ...editTier, id: event.target.value }; refresh() })()] : '',
            label('Short Form'), input.type`text`.placeholder`LE`.value(_ => editTier.shortName).onInput((event: any) => { editTier = { ...editTier, shortName: event.target.value }; refresh() })(),
            label('Long Form'), input.type`text`.placeholder`Limited Edition`.value(_ => editTier.longName).onInput((event: any) => { editTier = { ...editTier, longName: event.target.value }; refresh() })()
          ),
          div.class`admin-crud-modal-actions`(
            div.style`display:flex;gap:0.7em;`(button.type`button`.class`admin-pill-button`.onClick(save)(_ => isSaving ? 'Saving...' : 'Save'), button.type`button`.class`admin-secondary-button`.onClick(closeModal)('Cancel')),
            _ => editingId ? button.type`button`.class`admin-danger-button`.onClick(remove)(_ => isDeleting ? '🗑️ Deleting...' : '🗑️ Delete') : ''
          )
        )
      ) : ''
    )
  )
})
