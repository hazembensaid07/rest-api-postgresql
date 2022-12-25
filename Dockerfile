FROM node:17.6.0-alpine


WORKDIR /usr/src/app
#when working with docker-compose db host is the name of db service in docker compose
ENV PORT=5003 \
    DB_HOST=postgres \
    DB_USERNAME=postgres \ 
    DB_PASSWORD=hazem12345. \
    DB_NAME=dbpost  \
    NODE_ENV='developemnt'
COPY package*.json ./
RUN npm install --only=production
RUN npm  install -g sequelize-cli
COPY . .
EXPOSE 5000

CMD ["npm","run", "start"]