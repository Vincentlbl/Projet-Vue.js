import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Catalogue from '@/views/Catalogue.vue'
import Cart from '@/views/Cart.vue'
import ProductDetail from '@/views/ProductDetail.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/catalogue', name: 'Catalogue', component: Catalogue },
  { path: '/cart', name: 'Cart', component: Cart },
  { path: '/product/:id', name: 'ProductDetail', component: ProductDetail }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
