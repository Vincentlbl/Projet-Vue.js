import { defineStore } from 'pinia'
import { ref } from 'vue'
import gpu1 from '@/assets/gpu1.jpg'
import gpu2 from '@/assets/gpu2.jpg'
import gpu3 from '@/assets/gpu3.jpg'
import gpu4 from '@/assets/gpu4.jpg'
import gpu5 from '@/assets/gpu5.jpg'
import gpu6 from '@/assets/gpu6.jpg'
import gpu7 from '@/assets/gpu7.jpg'
import gpu8 from '@/assets/gpu8.jpg'
import gpu9 from '@/assets/gpu9.jpg'


export interface Product {
  id: number
  name: string
  price: number
  description: string
  image: string
}

export const useProductStore = defineStore('productStore', () => {
  const products = ref<Product[]>([
    { id: 1, name: 'Gigabyte AORUS GeForce RTX 5090 XTREME WATERFORCE 32G', price: 300, description: 'Carte graphique puissante pour gaming', image: gpu1 },
    { id: 2, name: 'Gigabyte AORUS GeForce RTX 5090 XTREME WATERFORCE WB 32G', price: 500, description: 'Carte graphique haut de gamme pour professionnels', image: gpu2 },
    { id: 3, name: 'ASUS GeForce ROG Astral LC GeForce RTX 5090 32GB GDDR7 OC Edition', price: 400, description: 'Carte graphique polyvalente pour gamers', image: gpu3 },
    { id: 4, name: 'MSI GeForce RTX 5080 16G VANGUARD SOC LAUNCH EDITION', price: 250, description: 'Carte graphique entrée de gamme pour la bureautique', image: gpu4 },
    { id: 5, name: 'ASUS GeForce ROG Astral GeForce RTX 5090 32GB GDDR7 OC Edition', price: 600, description: 'Carte graphique ultra performante pour la création 3D', image: gpu5 },
    { id: 6, name: 'MSI GeForce RTX 5090 32G SUPRIM LIQUID SOC', price: 350, description: 'Carte graphique milieu de gamme pour le gaming', image: gpu6 },
    { id: 7, name: 'MSI GeForce RTX 5090 32G GAMING TRIO OC', price: 450, description: 'Carte graphique haut de gamme pour les profession', image: gpu7 }, 
    { id: 8, name: 'MSI GeForce RTX 5090 32G VANGUARD SOC', price: 200, description: 'Carte graphique entrée de gamme pour les jeux vidéo', image: gpu8 },
    { id: 9, name: 'Gigabyte AORUS GeForce RTX 5080 XTREME WATERFORCE 16G', price: 700, description: 'Carte graphique ultra performante pour les jeux vidéo', image: gpu9 },

  ])

  async function fetchProducts() {
  }

  return { products, fetchProducts }
})
