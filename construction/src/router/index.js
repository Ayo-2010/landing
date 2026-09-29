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
      name : "ServiceDetail",
      path : '/service/:service',
      component : () => import('../pages/ServiceDetail.vue')
    },
    {
      name : "News",
      path : '/news',
      component : () => import('../pages/News.vue')
    },
    {
      name : "ArticleDetail",
      path : '/news/:news',
      component : () => import('../pages/ArticleDetail.vue')
    },
    {
      name : "Careers",
      path : '/careers',
      component : () => import('../pages/Careers.vue')
    },
    {
      name : "Contact",
      path : '/contact',
      component : () => import('../pages/Contact.vue')
    },
    {
      name : "Testimonials",
      path : '/testimonials',
      component : () => import('../pages/Testimonials.vue')
    },
    {
      name : "Legal",
      path : '/legal/:doc',
      component : () => import('../pages/Legal.vue')
    },
    {
      name : "Work",
      path : '/work',
      component : () => import('../pages/work/index.vue')
    },
    {
      name : "WorkDetail",
      path : '/project/:detail',
      component : () => import('../pages/work/[Detail].vue')
    },
    {
      name : "Team",
      path : '/team',
      component : () => import('../pages/Team.vue')
    },
    {
      name : "TeamDetail",
      path : '/team/:team',
      component : () => import('../pages/[Team].vue')
    },
    {
      name : "Shop",
      path : '/shop',
      component : () => import('../pages/Shop.vue')
    },
    {
      name : "ShopDetail",
      path : '/shop/:shop',
      component : () => import('../pages/[shop].vue')
    },
    {
      name : "Cart",
      path : '/cart',
      component : () => import('../pages/Cart.vue')
    },
    {
      name : "Checkout",
      path : '/checkout',
      component : () => import('../pages/Checkout.vue')
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }

    if (to.path === from.path) {
      return
    }

    return { top: 0, left: 0 }
  }
})

export default router
