FROM node:24-alpine
RUN apk add --no-cache libc6-compat g++ python3 openjdk11

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

RUN npx prisma generate --schema ./prisma/schema.prisma

RUN npm run build

EXPOSE 50052

CMD ["npm", "run", "start:dev"]