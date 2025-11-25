# ---------- Stage 1: Build React App ----------
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


# ---------- Stage 2: Run using Nginx ----------
FROM nginx:alpine

# Replace Nginx default config to use port 8000
RUN sed -i 's/listen 80;/listen 8000;/' /etc/nginx/conf.d/default.conf

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 8000

CMD ["nginx", "-g", "daemon off;"]

