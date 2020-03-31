FROM node:latest

RUN mkdir /app

WORKDIR /app

COPY . /app

RUN npm install

RUN npm install -g webpack

EXPOSE 3001

# CMD [ "npm", "start"]

