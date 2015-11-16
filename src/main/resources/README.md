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

## Tasks

- `gulp`: Initialize watch for changes and a server(localhost:8080/webpack-dev-server/index.html)
- `gulp bower-install`: Move dependencies to folder `dist/assets/`
- `gulp stylus`: Compile stylus files
- `gulp watch`: Call for watch files
- `gulp webpack`: Build files ReactJS
- `gulp webpack-dev-server`: Uses the webpack-dev-middleware to serve a webpack bundle
