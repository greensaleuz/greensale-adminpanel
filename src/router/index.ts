import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("../layouts/Layout.vue"),
      children :[
        {
           path: '/categories',
           component: ()=> import("../views/Categories/CategoryView.vue")
        },
        {
          path: '/dashboard',
          component: ()=> import("../views/Dashboard/DashboardView.vue")
       }
      ]
    }
  ]
})

export default router
