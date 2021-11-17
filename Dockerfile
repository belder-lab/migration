# bulder
FROM node:alpine AS builder

WORKDIR /app

COPY ./package.json ./yarn.lock ./tsconfig.json ./
RUN yarn

COPY ./src ./src
RUN yarn build

# runner
FROM node:alpine

RUN addgroup -S migration-group && adduser -S migration-user -G migration-group
USER migration-user

WORKDIR /app

COPY --chown=migration-user:migration-group --from=builder ./app ./
CMD yarn migration