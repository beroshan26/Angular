FROM node:latest as node

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build --prod

FROM nginx:alpine

COPY --from=node /app/dist/RatesApp /usr/share/nginx/html/


#docker build -t angular-rates .
#docker run --rm -d -p 90:80 angular-rates