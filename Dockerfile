FROM node:20.9.0
WORKDIR /app

COPY package*.json ./

COPY . ./

RUN yarn install

CMD ["yarn", "dev"]