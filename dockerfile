# Usar la imagen oficial de Node.js
FROM node:16

# Crear y establecer el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar el package.json y package-lock.json (si los tienes) al contenedor
COPY package*.json ./

# Instalar las dependencias dentro del contenedor
RUN npm install

# Copiar todo el código fuente al contenedor
COPY . .

# Exponer el puerto 5000
EXPOSE 3000

# Establecer la variable de entorno para el puerto
ENV PORT=3000

# Comando para ejecutar la aplicación cuando se inicie el contenedor
CMD ["node", "app.js"]