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
import AboutView from '../views/AboutView.vue'
import LandingDescView from '../views/LandingDescView.vue'
import MyProfileView from '../views/MyProfileView.vue'
import SupportCenterView from '../views/SupportCenterView.vue'
import TosView from '../views/TosView.vue'
import CustomOrderView from '../views/CustomOrderView.vue'
import InstantOrderView from '../views/InstantOrderView.vue'
import ForgotView from '../views/ForgotView.vue'
import AdminView from '../views/AdminView.vue'

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
      path: '/myclaim',
      name: 'myclaimdiscount',
      component: MyClaimDiscountView
    },
    {
      path: '/tentang',
      name: 'about',
      component: AboutView
    },
    {
      path: '/deskripsigap',
      name: 'landingdesc',
      component: LandingDescView
    },
    {
      path: '/myprofile',
      name: 'myprofile',
      component: MyProfileView
    },
    {
      path: '/pusatdukungan',
      name: 'supportcenter',
      component: SupportCenterView
    },
    {
      path: '/syaratketentuan',
      name: 'tos',
      component: TosView
    },
    {
      path: '/customorder',
      name: 'customorder',
      component: CustomOrderView
    },
    {
      path: '/instantorder',
      name: 'instantorder',
      component: InstantOrderView
    },
    {
      path: '/lupaakun',
      name: 'forgot',
      component: ForgotView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
