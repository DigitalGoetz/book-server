FROM node:16-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent --production
RUN npm install react-scripts@3.4.1 -g --silent --production

COPY . ./

CMD ["npm", "start"]
