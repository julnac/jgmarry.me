FROM node:alpine

WORKDIR /app

COPY package*.json ./

COPY . .

EXPOSE 3000

RUN npm i --legacy-peer-deps

CMD ["npm", "start"]