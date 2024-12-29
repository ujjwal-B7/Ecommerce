FROM node:20

WORKDIR /frontend

COPY package*.json ./

RUN npm install --force

COPY . .

CMD [ "npm","start" ]