import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductPageView from '../views/ProductPageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/headphones',
      name: 'headphones',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HeadphonesView.vue')
    },
    {
      path: '/speakers',
      name: 'speakers',
      component: () => import('../views/SpeakersView.vue')
    },
    {
      path: '/earphones',
      name: 'earphones',
      component: () => import('../views/EarphonesView.vue')
    },
    {
      path: '/products/:id',
      name: 'productPage',
      component: ProductPageView,
      props: true
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import ('../views/CheckoutPageView.vue'),
    
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
