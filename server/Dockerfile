FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install nodemon

COPY ./src ./src

CMD ["npm", "run", "dev"]
