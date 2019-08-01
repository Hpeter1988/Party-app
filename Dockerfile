FROM node:10
WORKDIR /application
ADD package.json .
RUN npm install
ADD . ./
EXPOSE 3000
CMD ["npm","start"]

