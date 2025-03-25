// src/stores/cart.ts
import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export interface Product {
  id: number
  name: string
  price: number
  description?: string
  image?: string
}

export interface CartItem extends Product {
  quantity: number
}

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([])

  const storedCart = localStorage.getItem('cart')
  if (storedCart) {
    try {
      items.value = JSON.parse(storedCart)
    } catch (e) {
      console.error("Erreur lors du parsing du panier depuis localStorage:", e)
    }
  }

  watch(items, (newVal) => {
    localStorage.setItem('cart', JSON.stringify(newVal))
  }, { deep: true })

  function addItem(product: Product, quantity: number = 1) {
    const item = items.value.find(item => item.id === product.id)
    if (item) {
      item.quantity += quantity
    } else {
      items.value.push({ ...product, quantity })
    }
  }

  function removeItem(productId: number) {
    items.value = items.value.filter(item => item.id !== productId)
  }

  function updateQuantity(productId: number, quantity: number) {
    const item = items.value.find(item => item.id === productId)
    if (item) {
      item.quantity = quantity
    }
  }

  const itemCount = computed(() =>
    items.value.reduce((sum, item) => sum + item.quantity, 0)
  )

  const total = computed(() =>
    items.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
  )

  return { items, addItem, removeItem, updateQuantity, itemCount, total }
})
