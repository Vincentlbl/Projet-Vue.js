<template>
  <header class="nav-bar">
    <div class="nav-bar__left">
      <button class="nav-bar__logo-button" @click="goTo('/')">
        <img :src="logoImg" alt="Logo de GraphicStore" />
      </button>
    </div>

    <div class="nav-bar__center">
      <button class="nav-button" @click="goTo('/catalogue')">Catalogue</button>
    </div>

    <div class="nav-bar__right">
      <button class="nav-button" @click="goTo('/cart')">
        Panier <span v-if="cartStore.itemCount">({{ cartStore.itemCount }})</span>
      </button>
      <template v-if="!userStore.isLoggedIn">
        <button class="nav-button" @click="goTo('/login')">Connexion</button>
      </template>
      <template v-else>
        <button class="nav-button" @click="logout">Déconnexion</button>
      </template>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'
import { useCartStore } from '../stores/cart'
import logoImg from '@/assets/logo.webp'

const router = useRouter()
const userStore = useUserStore()
const cartStore = useCartStore()

function goTo(path: string) {
  router.push(path)
}

function logout() {
  userStore.logout()
  router.push('/')
}
</script>

<style scoped>
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background-color: #f0f0f0;
}

.nav-button {
  background-color: white;
  color: black;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  font-size: 1rem;
  border-radius: 4px;
  margin: 0 0.5rem;
}

.nav-button:hover {
  background-color: black;
  color: white;
}

.nav-bar__logo-button {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
}

.nav-bar__logo-button img {
  height: 40px;
  cursor: pointer;
}
</style>
