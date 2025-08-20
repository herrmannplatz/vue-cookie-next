
import { IVueCookieNext } from './VueCookieNext'

declare module 'vue' {
  interface ComponentCustomProperties {
    $cookie: IVueCookieNext
  }
}
