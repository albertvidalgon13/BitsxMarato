FROM node:18.16.0

WORKDIR /usr/src/frontend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
