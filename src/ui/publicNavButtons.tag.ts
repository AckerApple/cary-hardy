import { a, tag } from 'taggedjs'

export const publicNavButtons = tag(() => [
  a.href`/index.html`.class`top-nav-pill`('🏠'),
  a.href`/meetup.html`.class`top-nav-pill`('🗓️ meetups'),
  a.href`#links`.class`top-nav-pill`('🔗 links'),
  a.href`#merch`.class`top-nav-pill`('🛍️ merch & more'),
  a.href`#youtube`.class`top-nav-pill`('📺 youtube'),
  a.href`#awards`.class`top-nav-pill`('🏆 awards'),
  a.href`/admin.html`.class`top-nav-pill`('👤'),
])
