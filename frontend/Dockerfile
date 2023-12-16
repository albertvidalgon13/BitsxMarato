FROM node:18.16.0

WORKDIR /usr/src/frontend

COPY package*.json ./

RUN npm install 

RUN npm install history

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
