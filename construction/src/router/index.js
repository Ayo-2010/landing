import { createRouter, createWebHistory } from 'vue-router'
import Home from "../pages/Home.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name : "Home",
      path : '/',
      component : Home
    },
    {
      name : "About",
      path : '/about',
      component : () => import('../pages/About.vue')
    },
    {
      name : "Service",
      path : '/services',
      component : () => import('../pages/Service.vue')
    },
    {
      name : "Work",
      path : '/work',
      component : () => import('../pages/Work.vue')
    },
    {
      name : "Team",
      path : '/team',
      component : () => import('../pages/Team.vue')
    },
  ],
})

export default router
