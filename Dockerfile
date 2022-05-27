FROM node:15-alpine
WORKDIR /myapp
COPY package.json /myapp
COPY package-lock.json .

RUN npm i
COPY . /myapp
CMD [ "npm" ,"start"]
