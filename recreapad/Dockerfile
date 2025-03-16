FROM node:18 AS build
WORKDIR /front

# Copiar archivos de configuración e instalar dependencias
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copiar todo el código fuente y compilar
COPY . .
RUN npm run build --configuration=production

# Etapa 2: Servir con Nginx
FROM nginx:alpine
COPY --from=build /front/dist/recreapad/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
