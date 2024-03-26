FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build && ls -al /app

EXPOSE 3000

CMD ["node", "dist/server.bundle.js"]