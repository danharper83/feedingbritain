'use strict'

var gulp = require(‘gulp’);
var browserSync = require('browser-sync').create();
var sass = require(‘gulp-sass’);

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      steam: true
    }))
});

gulp.task('watch', (gulp.series('browserSync'),gulp.series('sass')), function(){
    gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});
