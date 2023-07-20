FROM node:14 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:1.21
COPY --from=node /app/dist/mobbisoft-invest-advisor /usr/share/nginx/html

EXPOSE 80
