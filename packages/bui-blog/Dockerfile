FROM node:18.16.0

WORKDIR /srv/app

COPY package.json .

# COPY yarn.lock .

RUN yarn

COPY . .

ENV NODE_ENV=production
ENV NODE_TLS_REJECT_UNAUTHORIZED='0'

RUN yarn build


CMD ["yarn", "start"]