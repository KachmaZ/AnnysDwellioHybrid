import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/aparts',
      name: 'apartsList',
      component: () => import('@/views/ListView.vue'),
    },
    {
      path: '/aparts/:id',
      name: 'apartPage',
      component: () => import('@/views/ApartView.vue'),
    },
    {
      path: '/map',
      name: 'map',

      component: () => import('@/views/MapView.vue'),
    },
    {
      path: '/in-progress',
      name: 'inProgress',

      component: () => import('@/views/InProgress.vue'),
    },
    {
      path: '/hybrid',
      name: 'hybridPage',
      component: () => import('@/views/HybridView.vue'),
    },
  ],
})

export default router
