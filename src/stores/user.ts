// src/stores/user.ts

import { defineStore } from 'pinia'
import { ref } from 'vue'

interface RegisteredUser {
  username: string
  email: string
  password: string 
}

export const useUserStore = defineStore('user', () => {
  const isLoggedIn = ref(false)
  const user = ref<{ username: string; email?: string } | null>(null)

  const users = ref<RegisteredUser[]>([])

  function register(newUser: RegisteredUser) {
    const exists = users.value.some(
      (u) => u.username === newUser.username || u.email === newUser.email
    )
    if (exists) {
      throw new Error('Cet utilisateur ou cet email existe déjà.')
    }
    users.value.push(newUser)
  }

  function login(userData: { username: string; email?: string }) {
    isLoggedIn.value = true
    user.value = userData
    localStorage.setItem('user', JSON.stringify(user.value))
    localStorage.setItem('isLoggedIn', 'true')
  }

  function logout() {
    isLoggedIn.value = false
    user.value = null
    localStorage.removeItem('user')
    localStorage.setItem('isLoggedIn', 'false')
  }

  const storedLoggedIn = localStorage.getItem('isLoggedIn')
  const storedUser = localStorage.getItem('user')
  if (storedLoggedIn === 'true' && storedUser) {
    isLoggedIn.value = true
    user.value = JSON.parse(storedUser)
  }

  return {
    isLoggedIn,
    user,
    users,
    register,
    login,
    logout
  }
})
