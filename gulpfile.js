var gulp = require('gulp');
var fs = require("fs");
var clean = require('gulp-clean');
var runSequence = require('gulp-run-sequence');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var concatJs = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var rename = require("gulp-rename");
var replace = require('gulp-replace');
var typescript = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var scss = require("gulp-scss");
var watch = require('gulp-watch');

var OUTPIT_FOLDER_PATH = './dist';
var TRANSPILE_TYPESCRIPT_PATH = './src/';
var TRANSPILE_SCSS_PATH = './src/';

// Client imports

var IMPORT_STYLES = [
  "./src/styles/main.css"
];

var IMPORT_SCRIPTS = [
  "./src/scripts/VanillaToast.js"
];

gulp.task('clean', function () {
  // Clean output folder
  return gulp.src(OUTPIT_FOLDER_PATH, {read: false})
    .pipe(clean({force: true}));
});

gulp.task('minimize-js', function () {

  gulp.src(IMPORT_SCRIPTS)
    .pipe(concatJs({path: 'vanilla-toast.min.js'}))
    .pipe(uglify())
    .pipe(gulp.dest(OUTPIT_FOLDER_PATH));

});

gulp.task('minimize-css', function () {

  gulp.src(IMPORT_STYLES)
    .pipe(concatCss('vanilla-toast.min.css', {rebaseUrls: true}))
    .pipe(cleanCSS({relativeTo: './dist/', target: './dist/', rebase: true}))
    .pipe(gulp.dest(OUTPIT_FOLDER_PATH));

});

gulp.task('watch-all', ['watch-client-ts', 'watch-scss']);

// TypeScript

var typescriptProject = typescript.createProject('tsconfig.json', {"target": "es3", "module": "umd"});


gulp.task('transpile-client-ts', function () {
  return gulp.src(TRANSPILE_TYPESCRIPT_PATH + "**/*.ts*")
    .pipe(sourcemaps.init())
    .pipe(typescriptProject())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(TRANSPILE_TYPESCRIPT_PATH));
});

gulp.task('watch-client-ts', ['transpile-client-ts'], function () {
  gulp.watch(TRANSPILE_TYPESCRIPT_PATH + "**/*.ts*", ['transpile-client-ts']);
});

// SCSS

gulp.task('watch-scss', function () {
  // Endless stream mode
  return watch(TRANSPILE_SCSS_PATH + "**/*.scss", {ignoreInitial: false})
    .pipe(sourcemaps.init())
    .pipe(scss({}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(TRANSPILE_SCSS_PATH));
});

gulp.task('transpile-all-scss', function () {
  return gulp.src(TRANSPILE_SCSS_PATH + "**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(scss({}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(TRANSPILE_SCSS_PATH));
});

/**
 * Build production files
 */
gulp.task('prod', ['clean'], function () {
  runSequence(
    'transpile-client-ts', 'minimize-js', 'minimize-css');
});
