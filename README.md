# Lean

Simple website to track workouts. Created with Angular and NestJS. 

![Demo image](https://i.imgur.com/NYo0pQs.png)

## Tech Stack

**Client:** Angular, TailwindCSS, DaisyUI 

**Server:** NestJS, MongoDB, Neo4j

## Environment Variables

To run this project, you will need to rename the .env.example file to .env and add valid values to the variables.
It is possible to run [MongoDB](https://www.mongodb.com/docs/manual/installation/) and [Neo4j](https://neo4j.com/docs/operations-manual/current/installation/) locally, but you can also spin up a database in the cloud.

## Run Locally

Clone the project

```bash
  git clone https://github.com/martijnschermers/lean.git
```

Go to the project directory

```bash
  cd lean
```

Install dependencies

```bash
  npm install
```

Start the frontend
```bash
  npm run dev
```

Start the backend

```bash
  npm run dev:api
```

## Running Tests

To run tests for the frontend, run the following command

```bash
  npm run test
```

To run tests for the backend, run the following command

```bash
  npm run test:api
```

To run end-to-end tests, run the following command 

```bash
  npm run e2e
```
