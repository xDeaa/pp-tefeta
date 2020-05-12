FROM node:12-alpine

WORKDIR /

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 80
ENTRYPOINT ["node", "./tefeta.js"]
