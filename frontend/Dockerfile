FROM node:lts-alpine3.17

ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV

ARG PORT=3000
ENV PORT $PORT

RUN npm i npm@latest -g

# RUN npm i -g react-scripts

USER node

WORKDIR /app

COPY --chown=node:node package.json package-lock.json* ./

# RUN npm install

RUN npm ci --include=dev && npm cache clean --force

COPY --chown=node:node . .

EXPOSE $PORT

CMD [ "npm", "run", "dev" ]