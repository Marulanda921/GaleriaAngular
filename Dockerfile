# Etapa de construcción de la aplicación Angular
FROM node:18 AS build

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de dependencias e instala los paquetes
COPY package*.json ./
RUN npm install

# Copia el resto de los archivos del proyecto y compila la aplicación
COPY . .
RUN npm run build -- --configuration production

# Usa una imagen de Nginx para servir la aplicación Angular
FROM nginx:alpine

# Copia los archivos compilados desde la etapa de construcción
COPY --from=build /app/dist/galeria /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Inicia el servidor Nginx
CMD ["nginx", "-g", "daemon off;"]