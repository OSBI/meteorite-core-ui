# Meteorite Core UI [![Build Status](https://travis-ci.org/OSBI/meteorite-core-ui.svg?branch=master)](https://travis-ci.org/OSBI/meteorite-core-ui)

## Table of Contents

1. [Setup](#setup)
  - [Build Instructions](#build-instructions)
  - [Run UI on Node.js](#run-ui-on-nodejs)
2. [Documentation](#documentation)
3. [Usage](#usage)
4. [Tasks](#tasks)
5. [Support](#support)
  - [Browser](#browser)
  - [Server](#server)
6. [Team](#team)
7. [Contributing](#contributing)
8. [History](#history)
9. [License](#license)

## Setup

### Build Instructions

To install:

```sh
mvn clean install

Install Apache Karaf 4.x

feature:install pax-http-whiteboard

bundle:install -s mvn:bi.meteorite/ui/1.0-SNAPSHOT

Bundle will then be available on http://localhost:8181/
```

### Run UI on Node.js

In order to run it locally you'll need a basic server setup.

1. Clone it:

  ```
  $ git clone git@github.com:OSBI/meteorite-core-ui.git
  ```

2. Install [NodeJS](https://nodejs.org/en/download/) and [GulpJS](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md#1-install-gulp-globally), if you don't have it yet.
  
3. Install Dependencies:
  
  ```
  $ cd meteorite-core-ui/src/main/resources/ && npm install
  ```

4. Serve it:

  ```
  $ npm run dev
  ```

5. Run tasks with Gulp:

  ```
  $ gulp
  ```

6. Run the mock server NodeJS (optional):

  ```
  $ npm run server
  ```

7. Execute tests (optional):

  ```
  $ npm test
  ```

## Documentation

Documentation [Meteorite Core UI](http://osbi.github.io/meteorite-core-ui/).

## Usage

- Run `npm run build` to build the project;
- Run `npm run clean` Clean `resources` folder;
- Run `npm run dev` to build the project, start watching files and run the local server;
- Run `npm run docs` to generate the documentation the code;
- Run `npm run server` to run the mock server NodeJS;
- Run `npm test` to run the tests once;
- Run `npm run test:ci` to watch the `src` directory for changes and run the tests.

## Tasks

- `gulp`: Initialize stylus and watch for changes;
- `gulp bower-install`: Move dependencies to folder `dist/assets/`;
- `gulp deploy-pages`: Deploy documentation files to `github` on branch gh-pages;
- `gulp imagemin`: Compress image files;
- `gulp stylus`: Compile stylus files;
- `gulp watch`: Call for watch files.

## Support

### Browser

We do care about it.

![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/edge/edge_48x48.png) | **Android** | **iOS** | **Windows Phone** |
:---: | :---: | :---: | :---: | :---: |  :---: | :---: | :---: | :---: |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 4.4+ ✔ | 7+ ✔ | 8+ ✔ |

### Server

<a href="https://nodejs.org"><img height=48 src="https://raw.githubusercontent.com/caiogondim/javascript-server-side-logos/master/node.js/standard/454x128.png"></a> |
--- |
0.10+ ✔ |

## Team

[Meteorite Core UI](http://www.meteorite.bi/) is maintained by these people and a bunch of awesome [contributors](https://github.com/OSBI/meteorite-core-ui/graphs/contributors).

[![Tom Barber](https://avatars0.githubusercontent.com/u/103544?v=2&s=70)](https://github.com/buggtb) | [![Breno Polanski](https://avatars1.githubusercontent.com/u/1894191?v=2&s=70)](https://github.com/brenopolanski) | [![Bruno Catão](https://avatars2.githubusercontent.com/u/785116?v=3&s=70)](https://github.com/brunogamacatao)
:---: | :---: | :---: | :---: | :---: | :---: | :---: |
[Tom Barber](https://github.com/buggtb) | [Breno Polanski](https://github.com/brenopolanski) | [Bruno Catão](https://github.com/brunogamacatao) |

## Contributing

If you want to help, please read the [Contributing](https://github.com/OSBI/meteorite-core-ui/blob/master/CONTRIBUTING.md) guide.

## History

For detailed changelog, see [Releases](https://github.com/OSBI/meteorite-core-ui/releases).

## License

Saiku and the Saiku UI are free software. The UI, contained in this repository,
is available under the terms of the Apache License Version 2. A copy is attached for your convenience.

**[⬆ back to top](#table-of-contents)**
