/** DICHIARO LE DIPENDENZE **/

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var size = require('gulp-size');
var csso = require('gulp-csso');
var autoprefix = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var inject = require('gulp-inject');
var clean = require('gulp-clean');

/** ESEGUO I TASK **/

gulp.task('images', function() {
    return gulp.src('static/images/*')
    .pipe(imagemin())
});

gulp.task('sass', function () {
    return gulp.src('src/css/**/*.scss')

    .pipe(sass().on('error', sass.logError))
    .pipe(concat('common.css'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('scripts', function () {
    var target = gulp.src('src/js/**/*.js');
    var sources = gulp.src(['src/js/**/*.js']);

    return target.pipe(inject(sources))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('default', function () {
    return gulp.src('src/html/**/*.html', {read: false})
        .pipe(clean());
});

gulp.task('default', ['images', 'scripts', 'sass'], function() {
    gulp.watch('src/js/**/*.js', ['scripts']);
    gulp.watch('src/css/**/*.scss', ['sass']);
});
