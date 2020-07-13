import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home.vue'
import Specs from '../pages/Specs.vue'
import Teachers from '../pages/Teachers.vue'

Vue.use(VueRouter)

export const routes = [
   {
      path: '/',
      name: 'Головна',
      component: Home,
      alias: '/'
   },
   {
      path: '/vykladachi',
      name: 'Викладачі',
      component: Teachers
   },
   {
      path: '/spetcіalіzatsii',
      name: 'Всі спеціалізації',
      component: Specs
   },
   {
      path: '/abot',
      name: 'Про нас',
      component: Specs
   },
]

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes
})

export default router
