import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("../layouts/Layout.vue"),
      redirect:"/auth/login",
      children :[
        {
           path: 'categories',
           component: ()=> import("../views/Categories/CategoryView.vue")
        },
        {
          path: 'dashboard',
          component: ()=> import("../views/Dashboard/DashboardView.vue")
       },
       {
          path:'admins',
          component: () => import("../views/Admins/AdminView.vue")
       },
       {
        path:'users',
        component: () => import("../views/Users/UserView.vue")
       }, 
       {
        path : 'info',
        component : () => import("../views/Info/InfoView.vue")
       },
       {
        path : 'sellers',
        component: () => import("../views/Sellers/SellerView.vue")
       },
       {
        path : 'buyers',
        component: () => import("../views/Buyers/BuyerView.vue")
       },
       {
        path : 'storages',
        component: () => import("../views/Storages/StorageView.vue")
       },
       {
        path:'sellerinformation',
        component:()=> import ("../views/Sellers/SellerGetByIdView.vue")
      },
      ],
    },
    {
      path:"/auth/login",
      component: ()=> import ("../views/Auth/LoginView.vue")
    }
  ]
})

export default router
