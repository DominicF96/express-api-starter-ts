# Scintillar Express API

The Scintillar Express API is where the scintillar magic happens.

## Setup

See the `env.example` file for environment setup, then run

```
npm install
```

## Development

```
npm run dev
```

## Running with Docker

To run the backend using Docker, make sure you have Docker and Docker Compose installed. Then, run the following command:

```
docker-compose up --build
```

This will build the Docker images and start the containers for the backend and the database. The API will be available at http://localhost:5000.

## Documentation

Once you've launched the API, full API documentation is available at http://localhost:5000/v1/docs. Some routes are secured by Auth0. To easily retrieve an access token, follow [this procedure](https://www.youtube.com/watch?v=E6kZmno2zhU). Some more documentation is available under the `/docs` folder.

## Migrations

To create a new migration, run:

```
npx sequelize-cli migration:generate --name migration_name
```

To run all pending migrations, run:

```
npm run db:migrate
```

To undo the last migration, run:

```
npm run db:migrate:undo
```

To undo all migrations, run:

```
npm run db:migrate:undo:all
```

To seed the database, run:

```
npm run db:seed
```

To undo all seeds, run:

```
npm run db:seed:undo
```

## Deployment

The production server is deployed on Railway, synced with the Github repository.


## Utilities

Includes API Server utilities:

* [morgan](https://www.npmjs.com/package/morgan)
  * HTTP request logger middleware for node.js
* [helmet](https://www.npmjs.com/package/helmet)
  * Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
* [dotenv](https://www.npmjs.com/package/dotenv)
  * Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`
* [cors](https://www.npmjs.com/package/cors)
  * CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

Development utilities:

* [typescript](https://www.npmjs.com/package/typescript)
  * TypeScript is a language for application-scale JavaScript.
* [ts-node](https://www.npmjs.com/package/ts-node)
  * TypeScript execution and REPL for node.js, with source map and native ESM support.
* [nodemon](https://www.npmjs.com/package/nodemon)
  * nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
* [eslint](https://www.npmjs.com/package/eslint)
  * ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
* [typescript-eslint](https://typescript-eslint.io/)
  * Tooling which enables ESLint to support TypeScript.
* [jest](https://www.npmjs.com/package/jest)
  * Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
* [supertest](https://www.npmjs.com/package/supertest)
  * HTTP assertions made easy via superagent.
