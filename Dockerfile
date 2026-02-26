# Dockerfile for building and running the TypeScript Express app
FROM node:20-alpine AS builder
WORKDIR /app

# install deps and build
COPY package*.json tsconfig.json ./
RUN npm ci
COPY . .
RUN npm run build

# runtime image
FROM node:18.19-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package*.json ./
RUN npm ci --production
CMD ["node","dist/index.js"]
