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
      path: '/histogram', // Add dynamic `borough` parameter
      name: 'histogram',
      component: () => import('../views/HistogramView.vue'),
    },
    {
      path: '/pie', // Add dynamic `borough` parameter
      name: 'pie',
      component: () => import('../views/PieView.vue'),
    },
  ],
})

export default router
