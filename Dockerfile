FROM node:11.15

WORKDIR /app

COPY ./package.json ./package-lock.json ./

EXPOSE 80
CMD npm start