import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Cookies from 'js-cookie';

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
          // meta: { requiresAuth: true }
       },
       {
          path:'admins',
          component: () => import("../views/Admins/AdminView.vue")
          // meta: { requiresAuth: true }
       },
       {
        path:'users',
        component: () => import("../views/Users/UserView.vue")
        // meta: { requiresAuth: true }
       }, 
       {
        path : 'info',
        component : () => import("../views/Info/InfoView.vue")
        // meta: { requiresAuth: true }
       },
       {
        path : 'sellers',
        component: () => import("../views/Sellers/SellerView.vue")
        // meta: { requiresAuth: true }
       },
       {
        path : 'buyers',
        component: () => import("../views/Buyers/BuyerView.vue")
        // meta: { requiresAuth: true }
       },
       {
        path : 'storages',
        component: () => import("../views/Storages/StorageView.vue")
        // meta: { requiresAuth: true }
       },
       {
        path:'sellerinformation',
        component:()=> import ("../views/Sellers/SellerGetByIdView.vue")
       // meta: { requiresAuth: true }
      },
      ],
    },
    { 
      path:"/auth/login",
      component: ()=> import ("../views/Auth/LoginView.vue")
    }
  ]
});

// Avtorizatsiya tekshirish uchun middleware
// router.beforeEach(async (to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//             const cooki = Cookies.get("access_token")
// // Tokenni olish
//     try {
//       // Tokenni tekshirish uchun so'rovni yuborish
//       if (cooki!=null ) {
//         // Token to'g'ri keladi, sahifani o'zgartirish
      
//       } else {
//         // Token yaroqsiz, login sahifasiga yo'naltirish
//         next('/auth/login');
//       }
//     } catch (error) {
//       // Xatolikni aniqlash va login sahifasiga yo'naltirish
//       console.error('Serverdan xatolik:', error);
//       next('/auth/login');
//     }
//   } else {
//     // Avtorizatsiya tekshirilishi kerak bo'lmasa, sahifani o'zgartirish
//     next();
//   }
// });
export default router
