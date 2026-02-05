FROM node:24-alpine

RUN apk add --no-cache libc6-compat g++ python3 openjdk11

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma

RUN npm install
    
COPY . .

RUN npx prisma generate --schema ./prisma/schema.prisma

RUN npm run build

COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma

EXPOSE 50051

CMD ["npm", "run", "start:dev"]