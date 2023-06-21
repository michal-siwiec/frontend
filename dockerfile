FROM node:12.6.0

WORKDIR /budoman-front
COPY . /budoman-front/
RUN npm install

ENTRYPOINT ["npm", "run", "start"]
