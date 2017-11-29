FROM node:8.4.0

COPY package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /src && cp -a /tmp/node_modules /src/

COPY . /src
COPY .env /src

WORKDIR /src

RUN rm .env

EXPOSE 3000

CMD ["npm", "start"]