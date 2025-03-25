<template>
  <div class="form-container animate__animated animate__slideInUp">
    <h2>Connexion</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">Nom d'utilisateur</label>
        <input id="username" type="text" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input id="password" type="password" v-model="password" required />
      </div>
      <button type="submit">Se connecter</button>
    </form>
    <p>
      Pas encore de compte ? 
      <router-link to="/register">Inscrivez-vous</router-link>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '../stores/user'
import { useRouter } from 'vue-router'
import bcrypt from 'bcryptjs'

const username = ref('')
const password = ref('')

const userStore = useUserStore()
const router = useRouter()

async function handleSubmit() {
  const existingUser = userStore.users.find(u => u.username === username.value)
  if (!existingUser) {
    alert("Utilisateur introuvable.")
    return
  }

  const match = await bcrypt.compare(password.value, existingUser.password)
  if (!match) {
    alert("Mot de passe incorrect.")
    return
  }

  userStore.login({
    username: existingUser.username,
    email: existingUser.email
  })
  router.push('/')
}
</script>

<style scoped>
.form-container {
  max-width: 400px;
  margin: 2rem auto;
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-container h2 {
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #000000;
}

.form-group input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

button {
  width: 100%;
  padding: 0.75rem;
  border: none;
  background-color: #000000;
  color: #fff;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #000000;
}

p {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #000000;
}

p a {
  color: #000000;
  text-decoration: none;
  font-weight: bold;
}

p a:hover {
  text-decoration: underline;
}
</style>
