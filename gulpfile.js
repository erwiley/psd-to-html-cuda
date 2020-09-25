const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

function css() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename(function (path) {
      path.extname = ".min.css";
    }))
    .pipe(gulp.dest('docs/css'))
};

function watch() {
  gulp.watch('src/scss/**/*.scss', css);
};

exports.css = css;
exports.watch = watch;