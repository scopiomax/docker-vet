FROM node:16

WORKDIR /server

COPY /app .

RUN yarn install

CMD ["node", "index.js"]


