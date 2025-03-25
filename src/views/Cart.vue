<template>
    <div>
      <h2>Mon Panier</h2>
      <div v-if="cartStore.items.length === 0">
        Votre panier est vide.
      </div>
      <div v-else>
        <div v-for="item in cartStore.items" :key="item.id">
          <p>
            {{ item.name }} - Prix: {{ item.price }}€ - Quantité: 
            <input type="number" v-model.number="item.quantity" @change="updateItem(item)" min="1" />
            <button @click="remove(item.id)">Retirer</button>
          </p>
        </div>
        <p>Total: {{ cartStore.total }}€</p>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { useCartStore } from '../stores/cart'
  const cartStore = useCartStore()
  
  function updateItem(item: any) {
    cartStore.updateQuantity(item.id, item.quantity)
  }
  
  function remove(productId: number) {
    cartStore.removeItem(productId)
  }
  </script>
  