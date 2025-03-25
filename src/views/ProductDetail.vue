<template>
    <div class="product-detail">
      <div v-if="product">
        <img :src="product.image" :alt="product.name" class="product-detail__image" />
        <h1 class="product-detail__name">{{ product.name }}</h1>
        <p class="product-detail__description">{{ product.description }}</p>
        <p class="product-detail__price">{{ product.price }} €</p>
        <button @click="addToCart(product)" class="product-detail__add-btn">
          Ajouter au panier
        </button>
      </div>
      <div v-else>
        <p>Produit non trouvé.</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { useProductStore } from '@/stores/products'
  import { useCartStore } from '@/stores/cart'
  
  const route = useRoute()
  const productStore = useProductStore()
  const cartStore = useCartStore()
  
  const productId = computed(() => Number(route.params.id))
  
  const product = computed(() => {
    return productStore.products.find(p => p.id === productId.value)
  })
  
  function addToCart(product: any) {
    cartStore.addItem(product)
  }
  </script>
  
  <style scoped>
  .product-detail {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }
  
  .product-detail__image {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
  }
  
  .product-detail__name {
    font-size: 2rem;
    margin: 1rem 0;
  }
  
  .product-detail__description {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  
  .product-detail__price {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
  
  .product-detail__add-btn {
    background-color: #000000;
    color: #fff;
    border: none;
    padding: 0.75rem 1.5rem;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.2s;
  }
  
  .product-detail__add-btn:hover {
    background-color: #0056b3;
  }
  </style>
  