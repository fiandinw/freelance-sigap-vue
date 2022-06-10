import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import HomeView from '../views/HomeView.vue'

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
  ]
})

export default router
