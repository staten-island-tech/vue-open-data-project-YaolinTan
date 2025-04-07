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
      path: '/histogram/:borough?', // Add dynamic `borough` parameter
      name: 'histogram',
      component: () => import('../views/HistogramView.vue'),
      props: true, // Pass route parameters as props to the component
    },
  ],
})

export default router
