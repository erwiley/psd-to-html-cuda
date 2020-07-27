const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
//concat = require('gulp-concat');
//terser = require('gulp-terser');
//const browserSync = require('browser-sync').create();
//const purgecss = require('gulp-purgecss');


function css() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename(function (path) {
      path.extname = ".min.css";
    }))
    .pipe(gulp.dest('docs/css'))
  //.pipe(browserSync.stream());
};

// function js() {
//   return gulp.src('src/js/**/*.js')
//     .pipe(concat('main.js'))
//     .pipe(terser())
//     .pipe(gulp.dest('docs/js'));
// };

function watch() {
  // browserSync.init({
  //   server: {
  //     baseDir: "./src",
  //     index: "/index.html"
  //   }
  // });
  gulp.watch('src/scss/**/*.scss', css);
  // gulp.watch('src/js/**/*.js', js)
  //gulp.watch('./*.html').on('change', browserSync.reload);
  //gulp.watch('./js/**/*.js').on('change', browserSync.reload);
};

exports.css = css;
// exports.js = js;
exports.watch = watch;