<template>
  <main class="custom-main">
    <h1 class="animate__animated animate__fadeIn">
      Bienvenue sur GraphicStore
      <span v-if="userStore.isLoggedIn && userStore.user">
        , {{ userStore.user.username }}
      </span>
    </h1>
    <figure class="custom-main__logo-figure animate__animated animate__slideInUp">
      <img :src="logo" alt="Logo de GraphicStore" />
    </figure>
  </main>
</template>

<script setup lang="ts">
import 'animate.css'
import { useUserStore } from '@/stores/user'
import logo from '@/assets/logo.webp'

const userStore = useUserStore()
</script>

<style lang="scss">
.custom-main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: #000000; 
  text-align: center;
}

.custom-main__logo-figure {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  margin: 1rem auto;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
