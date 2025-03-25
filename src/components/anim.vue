<template>
    <main class="custom-main">
      <figure class="custom-main__logo-figure animate__animated animate__slideInUp">
        <img 
          src="@/assets/logo.webp" 
          alt="Image du logo de l'application" 
        />
      </figure>
      <h1 class="animate__animated animate__fadeIn">Bienvenu sur GraphicStore</h1>
    </main>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style lang="scss">
  .custom-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-blend-mode: overlay;
    background-color: rgba(0, 0, 0, 0.5);
  
    &__logo-figure {
      height: 200px;
      width: 200px;
      border-radius: 50%;
      overflow: hidden;
      margin-bottom: 20px;
    }
  }
  </style>
  