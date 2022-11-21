import { Router, _RouteLocationBase } from 'vue-router';
import { Store } from 'vuex';
import { State } from '@/store/states';
// import { ComposerTranslation } from 'vue-i18n';
// import { MessageSchema } from '@/plugins/vueI18n';
declare module '@vue/runtime-core' {
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}

declare module '@vue/runtime-dom' {
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
    $router: Router;
    $route: _RouteLocationBase;
  }
}

declare module 'vue-router' {
  interface RouteMeta {
    // is optional
    isAdmin?: boolean;
    // must be declared by every route
    requiresAuth: boolean;
  }
}

// declare global {
//   namespace React {
//     interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
//       class?: string;
//     }
//   }
// }

// declare module '*.vue' {
//   import { DefineComponent } from 'vue';
//   const component: DefineComponent<Props, RawBindings, D, C, M, Mixin, Extends, E, EE>;
//   export default component;
// }
