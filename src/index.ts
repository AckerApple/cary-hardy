import { countdown } from "./clock/countdown.tag"
import { adminTag } from "./admin/admin.tag"
import { adminUsersPageTag } from "./admin/adminUsersPage.tag"
import { homeTag } from "./home.tag"
import { meetupTag } from "./meetup.tag"

export { tag, tagElement } from 'taggedjs'
export { countdown, meetupTag, adminTag, adminUsersPageTag, homeTag }
export * from './clock/index'
export * from './admin/admin.tag'
