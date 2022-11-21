import { store } from '@/store';
import { createRouter, createWebHistory, RouteLocationNormalized } from 'vue-router';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' };
    if (savedPosition) return savedPosition;
    return { top: 0, behavior: 'smooth' };
  },
});

router.beforeEach((to: RouteLocationNormalized) => {
  if (to.name === 'login' && store.state.accessToken) {
    return {
      name: 'home',
    };
  }

  if (to.meta.requiresAuth && !store.state.accessToken) {
    return {
      name: 'login',
      query: { redirect: to.fullPath },
    };
  }
});

export default router;
