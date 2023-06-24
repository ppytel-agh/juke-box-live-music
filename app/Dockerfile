FROM node:19-alpine as frontend
WORKDIR /app/
COPY ./frontend/* /app/
RUN npm update
RUN npm install -g pnpm
RUN pnpm install


FROM node:19-alpine as backend
WORKDIR /app/
COPY ./server/* /app/
RUN npm update
RUN npm install -g nodemon
RUN npm install