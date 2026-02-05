FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --include=dev

COPY . .

RUN npm run build

EXPOSE 4001

CMD ["npm", "run", "start:dev"]