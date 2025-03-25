# Utilise une image Node alpine pour une image légère
FROM node:18-alpine

# Définir le répertoire de travail dans le container
WORKDIR /app

# Copier les fichiers de configuration et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier l'ensemble du code dans le container
COPY . .

# Construire l'application (la commande build génère les fichiers de production dans "dist")
RUN npm run build

# Exposer le port utilisé par le serveur de prévisualisation (ici 3000)
EXPOSE 3000

# Démarrer l'application en mode preview
CMD ["npm", "run", "preview"]
