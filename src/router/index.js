import Vue from 'vue'
import VueRouter from 'vue-router'

import GoHome from '../views/GoHome.vue'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'goHome',
    component: GoHome
  }

]

const router = new VueRouter({
  routes
})

export default router
