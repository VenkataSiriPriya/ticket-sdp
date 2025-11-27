# ---- Stage 1: Build ----
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files first and install dependencies
COPY package*.json ./
RUN npm install

# Ensure Vite binary is executable
RUN chmod +x node_modules/.bin/vite

# Copy the entire app including config.js
COPY . .

# Build the React app
RUN npm run build

# ---- Stage 2: Serve ----
FROM nginx:alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built files from build stage
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
