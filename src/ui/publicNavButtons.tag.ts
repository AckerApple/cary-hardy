import { a, tag } from 'taggedjs'

export const publicNavButtons = tag(() => [
  a.href`/index.html`.class`top-nav-pill`('🏠'),
  a.href`/meetup.html`.class`top-nav-pill`('🗓️ meetups'),
  a.href`/lineup.html`.class`top-nav-pill`('🎮 lineup'),
  a.href`/index.html#links`.class`top-nav-pill`('🔗 links'),
  a.href`/index.html#merch`.class`top-nav-pill`('🛍️ merch & more'),
  a.href`/index.html#youtube`.class`top-nav-pill`('📺 youtube'),
  a.href`/index.html#awards`.class`top-nav-pill`('🏆 awards'),
  a.href`/admin.html`.class`top-nav-pill`('👤'),
])
