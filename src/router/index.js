import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import HomeView from '../views/HomeView.vue'
import DescriptionView from '../views/DescriptionView.vue'
import OrderDetailView from '../views/OrderDetailView.vue'
import PaymentView from '../views/PaymentView.vue'
import MyOrderView from '../views/MyOrderView.vue'
import PriceListView from '../views/PriceListView.vue'
import CategoryListView from '../views/CategoryListView.vue'
import MyListView from '../views/MyListView.vue'
import MyClaimDiscountView from '../views/MyClaimDiscountView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView
    },
    {
      path: '/masuk',
      name: 'login',
      component: LoginView
    },
    {
      path: '/daftar',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/beranda',
      name: 'home',
      component: HomeView
    },
    {
      path: '/deskripsi',
      name: 'description',
      component: DescriptionView
    },
    {
      path: '/orderdetail',
      name: 'orderdetail',
      component: OrderDetailView
    },
    {
      path: '/pembayaran',
      name: 'payment',
      component: PaymentView
    },
    {
      path: '/myorder',
      name: 'myorder',
      component: MyOrderView
    },
    {
      path: '/pricelist',
      name: 'pricelist',
      component: PriceListView
    },
    {
      path: '/categorylist',
      name: 'categorylist',
      component: CategoryListView
    },
    {
      path: '/mylist',
      name: 'mylist',
      component: MyListView
    },
    {
      path: '/myclaim/discount',
      name: 'myclaimdiscount',
      component: MyClaimDiscountView
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
