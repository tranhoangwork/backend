import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/admin/category',
    name: 'adminCategory',
    component: () => import('../views/Admin/CategoryAdmin.vue'),
    meta: { requiresAuth: true } 
  },
  {
    path: '/admin/order',
    name: 'adminOrder',
    component: () => import('../views/Admin/OrderAdmin.vue'),
    meta: { requiresAuth: true } 
  },
  {
    path: '/admin/product',
    name: 'adminProduct',
    component: () => import('../views/Admin/ProductAdmin.vue'),
    meta: { requiresAuth: true } 
  },
  {
    path: '/admin/user',
    name: 'adminUser',
    component: () => import('../views/Admin/UserAdmin.vue'),
    meta: { requiresAuth: true } 
  },

  {
    path: '/admin/Addcategory',
    name: 'adminAddCategory',
    component: () => import('../views/Admin/AddCategoryAdmin.vue'),
    meta: { requiresAuth: true } 
  },
  {
    path: '/admin/Addproduct',
    name: 'adminAddproduct',
    component: () => import('../views/Admin/AddProductAdmin.vue'),
    meta: { requiresAuth: true } 
  },
  {
    path: '/admin/Adminhome',
    name: 'adminAdminhome',
    component: () => import('../views/Admin/AdminhomeView.vue'),
    meta: { requiresAuth: true } 
  },
  {
    path: '/admin/promotion',
    name: 'adminPromotion',
    component: () => import('../views/Admin/PromotionAdmin.vue'),
    meta: { requiresAuth: true } 
  },
  {
    path: '/admin/customer',
    name: 'adminCustomer',
    component: () => import('../views/Admin/CustomerAdmin.vue'),
    meta: { requiresAuth: true } 
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
