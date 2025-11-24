# ---------- Stage 1: Build React App ----------
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all project files
COPY . .

# Build the production version
RUN npm run build


# ---------- Stage 2: Run using Nginx ----------
FROM nginx:alpine

# Copy React build files to Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
