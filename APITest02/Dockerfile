FROM node:15-alpine

WORKDIR /usr/src/app

COPY ./APITest02/package.json .

RUN apk add --no-cache python2 g++ make
   
RUN npm install

RUN npm uninstall babel
RUN npm install --save-dev babel-cli

COPY ./APITest02/ .

EXPOSE 4001
CMD [ "npm", "start" ]
