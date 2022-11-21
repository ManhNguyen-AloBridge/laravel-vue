import { RouteRecordRaw } from 'vue-router';
import notification from './notification';
// import product from './product';

const routes: RouteRecordRaw[] = [
  ...notification,
//   ...product,
  {
    path: '/:pathMatch(.*)*',
    name: 'not_found',
    component: () => import('@pages/NotFound'),
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@pages/Login'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@pages/Home.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/users',
    name: 'users.list',
    component: () => import('@pages/UserList'),
  },
  {
    path: '/users/:id',
    name: 'users.detail',
    component: () => import('@pages/UserDetail'),
  },
  {
    path: '/user1',
    name: 'users1',
    component: () => import('@pages/ListExample.vue'),
  },
  {
    path: '/user2',
    name: 'users2',
    component: () => import('@pages/Home.vue'),
  },
  {
    path: '/user2/:id',
    name: 'users2.detail',
    component: () => import('@pages/Home.vue'),
  },
  {
    path: '/user3',
    name: 'users3',
    component: () => import('@pages/Home.vue'),
  },
];

export default routes;
