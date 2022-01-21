
#docker build -t angular-app .
#docker run -it --rm -p 9000:80 angular-app

## STAGE 1: Build ###
FROM node:alpine AS build
WORKDIR /src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
### STAGE 2: Run ###
FROM nginx:alpine
COPY --from=build /src/app/dist/hospital-managment /usr/share/nginx/html
EXPOSE 80