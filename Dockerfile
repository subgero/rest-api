FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --save

COPY . .

ENTRYPOINT ["node", "index.js", "-h", "0.0.0.0"]

EXPOSE $PORT

CMD [ "node", "index.js"]