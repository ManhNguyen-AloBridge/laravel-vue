const resource = 'notification';

export default [
  {
    path: `/${resource}`,
    name: 'notification.list',
    component: () => import('@pages/NotificationList'),
  },
  {
    path: `/${resource}/:id`,
    name: 'notification.detail',
    component: () => import('@pages/NotificationDetail'),
  },
];
