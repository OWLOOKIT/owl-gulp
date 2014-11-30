var gulp         = require('gulp');
var browserSync  = require('browser-sync');

var sass_libsass = require('gulp-sass'); // компиляция SASS (libsass)

var sourcemaps   = require('gulp-sourcemaps');
var handleErrors = require('../util/handleErrors');
var config       = require('../config').sass_libsass;
var autoprefixer = require('gulp-autoprefixer');


gulp.task('sass_libsass', ['images'], function () {
  return gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(sass_libsass(config.settings))
    .on('error', handleErrors)
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({ browsers: ['last 2 version'] }))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});

//  Компиляция SCSS в CSS
// gulp.task('sass', function() {
//   return gulp.src(config.paths.src.styles.main).pipe(g.plumber({
//     errorHandler: consoleErorr
//   })).pipe(g.rubySass())
//   .pipe(gulp.dest(config.paths.built.styles.path))
//   .pipe(g.notify({ message: 'SASS build complete' }));
// });