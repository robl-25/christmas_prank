import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/rules',
      name: 'rules',
      // Which is a route level code-splitting,
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/GeneralRules.vue'),
    },
    {
      path: '/first-level',
      name: 'first-level',
      component: () => import('../views/FirstLevel.vue'),
    },
    {
      path: '/second-level',
      name: 'second-level',
      component: () => import('../views/SecondLevel.vue'),
    },
    {
      path: '/third-level',
      name: 'third-level',
      component: () => import('../views/ThirdLevel.vue'),
    },
  ],
})

export default router
