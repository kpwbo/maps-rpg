
export default [
  {
    path: '/',
    component: () => import('layouts/layout'),
    children: [
      { path: '', component: () => import('pages/nearbyPlaces') },
      { path: 'nearbyPlaces', redirect: '' },
      { path: '*', redirect: 'nearbyPlaces' },
    ],
  },
];
