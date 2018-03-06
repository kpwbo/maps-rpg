
export default [
  {
    path: '/',
    component: () => import('layouts/layout'),
    children: [
      { path: '', component: () => import('pages/nearbyPlaces') },
      { path: 'nearbyPlaces', redirect: '/' },
      { path: 'bank', name: 'bank', component: () => import('pages/bank'), props: true },
      { path: '*', redirect: 'nearbyPlaces' },
    ],
  },
  { path: '*', redirect: '/' },
];
