# Meteorite Core UI

## Setup

In order to run it locally you'll need a basic server setup.

1. Install [NodeJS](http://nodejs.org/download/), if you don't have it yet.
2. Install local dependencies:

	```sh
	$ npm install
	```
3. Run server:

	```sh
	$ npm start
	```
4. Run tasks and serve:

	```sh
	$ gulp
	```

## Usage

- Run `npm run build` to build the project
- Run `npm run dev` to build the project, start watching files and run the local server
- Run `npm test` to run the tests once
- Run `npm run test:ci` to watch the `src` directory for changes and run the tests

## Tasks

- `gulp`: Initialize watch for changes and a server(localhost:8080/webpack-dev-server/index.html)
- `gulp bower-install`: Move dependencies to folder `dist/assets/`
- `gulp stylus`: Compile stylus files
- `gulp watch`: Call for watch files
