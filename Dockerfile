FROM mhart/alpine-node:latest
WORKDIR /app

ENV NODE_ENV production
COPY ./package.json /app
RUN npm install

COPY ./ /app
RUN npm run transpile-md
RUN npm run build

CMD ["npm","run","start"]

EXPOSE 3000
