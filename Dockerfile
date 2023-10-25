FROM node:latest

WORKDIR /app

COPY ./frontend/package.json ./frontend/package-lock.json ./

RUN npm install --silent

COPY ./frontend .

EXPOSE 3000

CMD ["npm", "start"]