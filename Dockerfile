FROM node:10-alpine

RUN apk  add --no-cache dumb-init # build-base

WORKDIR /workdir

COPY *.json *.lock /workdir/

RUN yarn

COPY . /workdir/

ENTRYPOINT ["dumb-init", "--"]
CMD ["yarn", "start"]
