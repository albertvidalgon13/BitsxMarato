FROM node:18.16.0

WORKDIR /usr/src/frontend

COPY package*.json ./

RUN npm install -g n

RUN n stable

COPY . .

RUN ls

EXPOSE 3000

CMD ["node", "src/index.js"]
