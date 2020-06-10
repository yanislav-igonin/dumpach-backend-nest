FROM node:12

WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY tsconfig.json ./
RUN npm i
CMD ["npm", "run", "start:dev"]