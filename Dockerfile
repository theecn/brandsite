FROM node:12
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm config set registry http://registry.npm.taobao.org
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "node", "server.js" ]
