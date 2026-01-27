FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

RUN npx prisma generate --schema ./prisma/schema.prisma

RUN npm run build

EXPOSE 50052

CMD ["npm", "run", "start:dev"]