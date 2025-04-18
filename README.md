# TP Machine Vue.js

Ce projet est une application e-commerce développée avec Vue.js, Vite et TypeScript. L'application permet aux utilisateurs de s'inscrire, se connecter, consulter un catalogue de produits, ajouter des articles au panier (avec persistance via localStorage) et gérer leur panier.

## Fonctionnalités

- Inscription et connexion (hachage des mots de passe avec bcryptjs)
- Catalogue de produits et page détail
- Gestion du panier avec ajout, retrait et modification des quantités
- Animations avec animate.css
- Dockerisation de l'application

## Installation

1. **Clonez le dépôt et installez les dépendances :**
   ```bash
   git clone https://github.com/Vincentlbl/Projet-Vue.js.git
   cd tp-machine-vue
   npm install

2. **Lancez le serveur de développement :**
   ```bash
   npm run dev

3. **Dockerisation de l'application :**
   ```bash
   docker-compose up --build
   ```

4. **Accédez à l'application :**
   Ouvrez votre navigateur et allez à `http://localhost:3000`
