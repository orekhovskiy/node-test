FROM node:lts-alpine
ENV NODE_ENV=production DB_URL="mongodb://mongo:27017/" DB_NAME="node-test"
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
RUN chown -R node /usr/src/app/bin/www
USER node
CMD ["npm", "start"]

