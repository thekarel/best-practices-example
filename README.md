# Cupcake

> Order cupcakes. Write clean code. Eat your own dog food 🧁

An example implementation of [thekarel/best-practices](https://github.com/thekarel/best-practices)

## First time setup

Install all dependencies:

```shell
yarn
```

## Development

To start the UI and GraphQL server and store data in memory:

```shell
yarn dev
```

To connect to a real MongoDB database:

```shell
MONGO_URL=mongodb://localhost:7017 yarn dev
```

A simple `docker-compose.yml` is provided. If you have Docker installed you can start a MongoDB instance on `localhost:7017` and Mongo Express on http://localhost:4400/ with

```shell
docker-compose up
```
