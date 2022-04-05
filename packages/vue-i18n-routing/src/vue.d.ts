import type {
  LocalePathFunction,
  LocaleRouteFunction,
  LocaleLocationFunction,
  SwitchLocalePathFunction
} from './composables/routing'
import type { Route, RouteLocationNormalizedLoaded } from '@intlify/vue-router-bridge'

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    /**
     * Get route base name
     *
     * @param givenRoute - A route object, optional, if not provided, the current route will be used
     *
     * @returns The route base name, if route name is not defined, return `undefined`
     */
    getRouteBaseName: (givenRoute?: Route | RouteLocationNormalizedLoaded) => string | undefined
    /**
     * Resolve locale path
     *
     * @param route - A route location. The path or name of the route or an object for more complex routes
     * @param locale - A locale code, if not specified, uses the current locale
     *
     * @returns Returns the localized URL for a given route
     */
    localePath: LocalePathFunction
    /**
     * Resolve locale route
     *
     * @param route - A route location. The path or name of the route or an object for more complex routes
     * @param locale - A locale code, if not specified, uses the current locale
     *
     * @returns Returns the route object for a given route, the route object is resolved by vue-router rather than just a full route path.
     */
    localeRoute: LocaleRouteFunction
    /**
     * Resolve locale location
     *
     * @param route - A route location. The path or name of the route or an object for more complex routes
     * @param locale - A locale code, if not specified, uses the current locale
     *
     * @returns Returns the location object for a given route, the location object is resolved by vue-router rather than just a full route path.
     */
    localeLocation: LocaleLocationFunction
    /**
     * Switch locale path
     *
     * @param locale - A locale code, if not specified, uses the current locale
     *
     * @returns Returns a link to the current route in another language
     */
    swtchLocalePath: SwitchLocalePathFunction
  }
}
