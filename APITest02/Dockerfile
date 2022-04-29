FROM node:15-alpine

WORKDIR /usr/src/app

COPY ./package.json .

RUN apk add --no-cache python2 g++ make
   
RUN npm install

RUN npm uninstall babel
RUN npm install --save-dev babel-cli

COPY . .

EXPOSE 4001
CMD [ "npm", "start" ]