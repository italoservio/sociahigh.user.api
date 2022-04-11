FROM node:16.14.2-alpine
EXPOSE 6100
WORKDIR /app/
COPY package.json ./
RUN npm i -g dotenv-cli
RUN npm i
COPY ./ ./
RUN npm run build
CMD ["npm", "run", "start:prod"]
