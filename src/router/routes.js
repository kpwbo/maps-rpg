
export default [
  {
    path: '/',
    component: () => import('layouts/layout'),
    children: [
      { path: '', redirect: 'nearbyPlaces' },
      { path: 'nearbyPlaces', component: () => import('pages/nearbyPlaces') },
      { path: '*', redirect: 'nearbyPlaces' },
    ],
  },
];
