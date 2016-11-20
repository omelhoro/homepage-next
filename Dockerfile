FROM node

RUN mkdir /app
ENV NODE_ENV production
WORKDIR /app

COPY ./package.json /app
RUN npm install --loglevel silent

COPY ./ /app
RUN npm run transpile-md
RUN npm run build

CMD ["npm","run","start"]

EXPOSE 3000
