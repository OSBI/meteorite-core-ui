'use strict';

// Necessary plugins
var gulp               = require('gulp');
var plumber            = require('plumber');
var browserSync        = require('browser-sync');
var historyApiFallback = require('connect-history-api-fallback');

// Call Browser Sync
module.exports = gulp.task('browser-sync', function() {
  browserSync({
    // Disable clicks and forms for when we test multiple rooms
    server: {},
    middleware: [historyApiFallback()],
    ghostMode: false
  });
});
