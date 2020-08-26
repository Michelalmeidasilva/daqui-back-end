# Bot Daqui

# Getting started

## Installation

1. Install [Node.JS](https://nodejs.org/en/) LTS version
2. Install [PostgreSQL](https://www.thegeekstuff.com/2009/04/linux-postgresql-install-and-configure-from-source/) Source
3. Clone this repository and enter on the respective folder
4. Install dependencies running: `yarn` or `npm install`

## Things to do before run the project:

1. Create database (by follow the commands):

- CREATE USER `user` WITH PASSWORD `password`
- CREATE DATABASE `database`
- GRANT ALL PRIVILEGES ON DATABASE `database` to `user`

2. Install `citext` extension on your database with the command `CREATE EXTENSION citext;`
3. Change name value of .env.example to .env and set the key SECRET to any value you wish
4. Change DATABASE_URL to postgress://`user`:`password`@`localhost`/`database`
5. Run migrations: `yarn db:migrate`
6. Run seeds: `yarn db:seed`
7. Run `yarn start` or `yarn dev` to start server

## Testing

1. Run tests: `yarn test`

## Directory Structure

```
├── /src
|   ├── /controllers
|   ├── /database
|   |    ├── /migrations
|   |    ├── /seeds
|   ├── /helpers
|   ├── /middleware
|   ├── /models
|   ├── /routes
|   ├── /validators
├── /test
```
