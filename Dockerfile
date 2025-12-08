FROM node:22.21-alpine

EXPOSE 3000

WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build

CMD npm run start