# Stage 1: Build the React application
FROM node:16 as build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Serve the React application from Nginx
FROM nginx:alpine

COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose port 80 to the host so we can access the application
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
