"use strict";
var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();

var paths = {src: 'scss/**/*.scss',dest: 'css/'};

gulp.task('sass', function(){
    return gulp.src(paths.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.dest))
        .pipe(cleanCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.dest))
        .pipe(browserSync.stream());
});

gulp.task('sass:watch', function(){
    gulp.watch(paths.src, ['sass']);
});
    
gulp.task('serve',function(){
    browserSync.init({
        server: './'
    });
    gulp.watch(paths.src,['sass']);
    gulp.watch('*.html').on('change', browserSync.reload);
})
gulp.task('default', ['serve']);