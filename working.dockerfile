FROM node:alpine as base
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
EXPOSE 3000

FROM base as dev
ENV NODE_ENV=development
RUN npm install 
COPY . .
CMD npm run dev

FROM base as production
COPY . .
RUN npm install --production
RUN npm run build
CMD npm run dev