var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
/*var webpack = require('webpack-stream');

gulp.task('webpackbuild', function(){
  return gulp.src('src/app.js')
    .pipe(webpack(require ('./webpack.config.js')))
    .pipe(gulp.dest('public/'))
})*/

gulp.task('copy', function(){
    gulp.src('./src/index.html')
        .pipe(gulp.dest('public/'));
    //gulp.src('./src/css/*.*')
        //.pipe(gulp.dest('./public/css'));
    gulp.src('./src/assets/**/*.*')
        .pipe(gulp.dest('public/assets'));
});

gulp.task('styles', function(){
    gulp.src('./src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/css'));
});

gulp.task('default', ['copy', 'styles'])
