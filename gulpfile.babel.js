let gulp = require('gulp');
let sourcemaps = require('gulp-sourcemaps');
let babel = require('gulp-babel');
let concat = require('gulp-concat');

function onError() {
  this.emit('end');
}

gulp.task('default', () => {//Use Babel 6.0.0 to transpile application code.
  return gulp.src("./src/*.js")
  .pipe(sourcemaps.init())
  .pipe(babel())
  .pipe(concat("all.js"))
  .pipe(sourcemaps.write("."))
  .pipe(gulp.dest("dist"));
});

gulp.task('buildTests', ['default'], () => {//Use Babel 6.0.0 to transpile test code.
  return gulp.src("./spec/*.js")
  .pipe(sourcemaps.init())
  .pipe(babel())
  .pipe(gulp.dest("built-tests"));
});

gulp.task('test', () => {
    gulp.watch(['src/**', 'spec/**'], ['tdd']);
});

gulp.task('tdd', ['buildTests'], () => {
  let mocha = require('gulp-mocha');
  gulp.src("./built-tests/**/*.js", {read:false})
  .pipe(mocha({reporter:'List'})
    .on("error", onError));
});