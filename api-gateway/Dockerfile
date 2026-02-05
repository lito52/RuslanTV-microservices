FROM node:24-alpine

WORKDIR /app

COPY package*.json ./

RUN NODE_ENV=development npm install

COPY . .

RUN npm run build

EXPOSE 4001

CMD ["npm", "run", "start:dev"]