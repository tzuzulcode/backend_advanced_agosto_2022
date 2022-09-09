# FROM -> tomamos una imagen de base
FROM node

# ENV -> Variables de entorno
ENV PORT=4000

# WORKDOR -> Define la carpeta en el fs donde trabajaremos dentro del container
# WORKDIR C:\project\backend\app
WORKDIR /project/backend/app

# COPY -> Copiar archivos
# COPY package*.json /project/backend/app/
# . -> indica directorio de trabajo actual
COPY package*.json .

# RUN: Ejecutar comando (un solo uso o que inicia y termina un proceso)
RUN npm install

# COPY ruta_mi_pc ruta_container
COPY ./src ./src

EXPOSE ${PORT}

# CMD -> Ecuta un comando. Puede ser un comando de un solo uso o el proceso de inicio de mi container
CMD [ "node", "./src/index.js" ]