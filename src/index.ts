import { countdown } from "./clock/countdown.tag"
import { adminTag } from "./admin/admin.tag"
import { adminUsersPageTag } from "./admin/adminUsersPage.tag"
import { currentGamesAdminPageTag } from "./admin/currentGamesPage.tag"
import { currentLineupTag } from "./currentLineup.tag"
import { homeTag } from "./home.tag"
import { meetupTag } from "./meetup.tag"
import { thankYouTag } from "./key-box-patb/thank-you.tag"
import { keyBoxPatbTag } from "./products/key-box-patb-le-only-pickup.tag"

export { tag, tagElement } from 'taggedjs'
export { countdown, meetupTag, adminTag, adminUsersPageTag, currentGamesAdminPageTag, currentLineupTag, homeTag, thankYouTag, keyBoxPatbTag }
export * from './clock/index'
export * from './admin/admin.tag'
