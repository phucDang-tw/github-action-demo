FROM node:lts-alpine

COPY server.js server.js

CMD node server.js