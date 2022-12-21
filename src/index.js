import { detectMobileDevice, detectMobileAndTabletDevice } from './detectMobileDevice'

export default function(Vue) {
  Vue.prototype.$isMobile = detectMobileDevice()
  Vue.prototype.$isMobileOrTablet = detectMobileAndTabletDevice()
}
