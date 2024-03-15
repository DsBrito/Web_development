const { series } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglifycss = require('gulp-uglifycss');
const concat = require('gulp-concat');

function cssTransform() {
    return gulp.src('src/sass/css_index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({"uglyComments":true}))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('build/css'));
}

function copyHtml() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('build'));
}

exports.default = series(cssTransform,copyHtml);
