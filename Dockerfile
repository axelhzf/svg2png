FROM node:14.15.4-alpine3.12

WORKDIR /app

RUN apk add fontconfig
COPY fonts/* /usr/share/fonts/
RUN fc-cache -fv

COPY package.json yarn.lock esbuild.js tsconfig.json ./
RUN yarn

COPY src src
RUN yarn build

EXPOSE 5656
CMD ["npm", "--silent", "start"]
