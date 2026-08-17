# Nest.JS Domination
### In the repo i was starting the nest.js. and what i build what practice i do what moduile i finised. step by step i will write here. 


## What is Nest.js and The introduction.
**NestJS** is a **framework** for building efficient, scalable, and maintainable server-side applications with ***Node*.js**. It is built with and fully supports TypeScript while also supporting JavaScript. NestJS uses powerful HTTP frameworks such as Express by default and can optionally use Fastify. It provides an abstraction layer over these frameworks while still allowing developers to access their APIs and third-party modules. Its main purpose is to provide a structured application architecture inspired by Angular, making applications highly testable, scalable, loosely coupled, and easier to maintain, especially for large and complex projects.


## The steps to installation
To satrt a Nest.js project what i prefer you need to installl the nest.js with this cammand

```
$ npm i -g @nestjs/cli
$ nest new project-name
```

## understanding the deffalt boilarplate 
**NestJS CLI** creates a project with a standard structure inside the `src/` directory. The main files are `main.ts`, which is the application entry point; `app.module.ts`, the root module; `app.controller.ts`, which handles routes; `app.service.ts`, which contains business logic; `and app.controller.spec.ts`, which contains controller tests. In main.ts, `NestFactory.create(AppModule)` creates the Nest application, and `app.listen()` starts the *HTTP server*. *NestJS* is platform-agnostic and supports Express by default as well as Fastify. After installation, `npm run start` runs the application, while `npm run start:dev` watches for file changes and automatically reloads the server during development. *NestJS* projects also come with *ESLint* for code quality and Prettier for consistent code formatting.

## Controllers
The Controllers is the kind of maintaine sectior of the nest.js thats meen if a user can het any route then the Controllers dicide what provider or what buisness logic will run. 

i mkaed a simple mini practice with just using Controllers. In the mini web if user hit `/cats` then he will se All Cats and if the het `/cats/123` the user will se Cat 123. and in `/cats` in post route body is gating a name and it is printing.

