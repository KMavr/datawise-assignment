# Stage 1: Build the application
FROM node:20.10.0-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Serve the application
FROM node:20.10.0-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

RUN npm ci

EXPOSE 4173

CMD ["npm", "run", "preview"]
