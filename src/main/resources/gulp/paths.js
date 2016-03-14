/**
 *   Copyright 2016 OSBI Ltd
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

'use strict';

module.exports = {
  source: {
    bowerDir: './bower_components',
    react: ['./src/js/saiku/**/*.js', './src/js/saiku/**/*.jsx'],
    img: './src/images/**/*',
    styl: {
      all: './src/styl/**/*',
      folder: './src/styl/'
    },
    files: {
      styl: './src/styl/saiku.styl',
      css: './dist/saiku/saiku.css',
    }
  },

  build: {
    app: './dist/saiku',
    css: './dist/assets/css',
    fonts: './dist/assets/fonts',
    img: './dist/assets/images',
    js: './dist/assets/js'
  },

  deploy: {
    pages: './docs/**/*'
  }
};
