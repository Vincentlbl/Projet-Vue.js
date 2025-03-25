<template>
  <div class="form-container animate__animated animate__slideInUp">
    <h2>Inscription</h2>
    <form @submit.prevent="handleRegister">
      <div class="form-group">
        <label for="username">Nom d'utilisateur</label>
        <input id="username" type="text" v-model="username" required />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input id="email" type="email" v-model="email" required />
      </div>

      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input id="password" type="password" v-model="password" required />
      </div>

      <div class="form-group">
        <label for="confirmPassword">Confirmez le mot de passe</label>
        <input id="confirmPassword" type="password" v-model="confirmPassword" required />
      </div>

      <button type="submit">S'inscrire</button>
    </form>
    <p>
      Vous avez déjà un compte ? 
      <router-link to="/login">Connectez-vous</router-link>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '../stores/user'
import { useRouter } from 'vue-router'
import bcrypt from 'bcryptjs'

const username = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const userStore = useUserStore()
const router = useRouter()

async function handleRegister() {
  if (password.value !== confirmPassword.value) {
    alert("Les mots de passe ne correspondent pas.")
    return
  }
  
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password.value, salt)

  try {
    userStore.register({
      username: username.value,
      email: email.value,
      password: hashedPassword
    })
    router.push('/login')
  } catch (err: any) {
    alert(err.message)
  }
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
  color: #333;
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
