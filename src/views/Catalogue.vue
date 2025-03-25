<template>
  <section class="catalogue">
    <h1>Catalogue de cartes graphiques</h1>
    <div class="catalogue__grid">
      <div
        v-for="product in productStore.products"
        :key="product.id"
        class="catalogue__item"
      >
        <router-link :to="`/product/${product.id}`">
          <img :src="product.image" :alt="product.name" class="catalogue__image" />
          <h2 class="catalogue__name">{{ product.name }}</h2>
        </router-link>
        <p class="catalogue__description">{{ product.description }}</p>
        <p class="catalogue__price">{{ product.price }} €</p>

        <div class="quantity-counter">
          <button @click="decrement(product.id)">-</button>
          <input
            type="text"
            :value="quantities[product.id]"
            readonly
            style="width: 40px; text-align: center;"
          />
          <button @click="increment(product.id)">+</button>
        </div>

        <button @click="handleAddToCart(product, quantities[product.id])" class="catalogue__add-btn">
          Ajouter au panier
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { useProductStore } from '@/stores/products'
import { useCartStore } from '@/stores/cart'
import { useUserStore } from '@/stores/user'

const productStore = useProductStore()
const cartStore = useCartStore()
const userStore = useUserStore()

const quantities = reactive<Record<number, number>>({})

function initQuantity(productId: number) {
  if (!quantities[productId]) {
    quantities[productId] = 1
  }
}

function increment(productId: number) {
  initQuantity(productId)
  quantities[productId]++
}

function decrement(productId: number) {
  initQuantity(productId)
  if (quantities[productId] > 1) {
    quantities[productId]--
  }
}

function handleAddToCart(product: any, quantity: number) {
  if (!userStore.isLoggedIn) {
    alert("Vous devez être connecté pour ajouter des articles au panier.")
    return
  }
  cartStore.addItem(product, quantity)
}

onMounted(() => {
})
</script>

<style scoped>
.catalogue {
  padding: 2rem;
  text-align: center;
}

.catalogue__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.catalogue__item {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  position: relative;
  overflow: hidden;
}

.catalogue__item:hover {
  transform: translateY(-5px);
}

.catalogue__image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
}

.catalogue__name {
  font-size: 1.2rem;
  margin: 0.5rem 0;
}

.catalogue__description {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
}

.catalogue__price {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.quantity-counter {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.quantity-counter button {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  background-color: #fff;
  cursor: pointer;
  font-size: 1rem;
}

.quantity-counter input {
  border: 1px solid #ccc;
  padding: 0.25rem;
  text-align: center;
}

.catalogue__add-btn {
  background-color: #000000;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.catalogue__add-btn:hover {
  background-color: #ffffff;
  color: #000000;
}
</style>
