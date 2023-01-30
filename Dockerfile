FROM node:14-alpine
WORKDIR /usr/src/live_accounts
COPY package.json ./
COPY . .
RUN npm i -g serve
CMD [ "serve", "-s", "build" ]