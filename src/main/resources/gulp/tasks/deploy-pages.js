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

// Necessary plugins
var gulp    = require('gulp');
var ghPages = require('gulp-gh-pages');
var paths   = require('../paths');

// Deploy to GitHub pages
module.exports = gulp.task('deploy-pages', function() {
  return gulp.src(paths.deploy.pages)
    .pipe(ghPages());
});
