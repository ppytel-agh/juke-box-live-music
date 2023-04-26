FROM node:19-alpine

WORKDIR /app/
COPY . /app/
RUN npm update
RUN npm install -g pnpm nodemon
RUN cd server && npm install
RUN cd frontend && pnpm install