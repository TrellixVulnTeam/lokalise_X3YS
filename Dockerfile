FROM node:16 as build-stage

WORKDIR /app

COPY package.json /app/

RUN npm install
COPY . ./
RUN npm i -g webpack webpack-cli cross-env
RUN npm run dev

FROM nginx:1.15
COPY --from=build-stage /app/app/ /usr/share/nginx/html

EXPOSE 8080