var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('browserify');  // Bundles JS.
var babelify = require('babelify');  // Transforms React JSX to JS.
var source = require('vinyl-source-stream');

// source & build paths
var paths = {
  CSS_SRC: './src/**/*.scss',
  CSS_MAIN: './src/main.scss',
  CSS_BUILD: './static/css/',
  JS_MAIN: './src/app.js',
  JS_SRC: './src/components/**/*.js',
  JS_BUILD: './static/js'
};

// sass compile
gulp.task('styles', function () {
  gulp.src(paths.CSS_MAIN)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.CSS_BUILD))
});

// Our JS task. It will Browserify our code and compile React JSX files.
gulp.task('js', function () {
  browserify(paths.JS_MAIN)
    .transform(babelify, {presets: ["es2015", "react"]})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(paths.JS_BUILD));
});

// Rerun the task when a file changes
gulp.task('watch', function () {
  gulp.watch(paths.CSS_MAIN, ['styles']);
  gulp.watch(paths.CSS_SRC, ['styles']);
  gulp.watch(paths.JS_SRC, ['js']);
  gulp.watch(paths.JS_MAIN, ['js']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'styles', 'js']);

// The production build task
gulp.task('prod', ['styles', 'js']);
