# Usamos una imagen ligera de nginx
FROM nginx:alpine

# Copiamos nuestro archivo index.html al contenedor
COPY index.html /usr/share/nginx/html

# Exponemos el puerto 80
EXPOSE 80
