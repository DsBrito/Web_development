// Task: Minify and concatenate the CSS files from the dependencies
const gulp = require("gulp")
const uglifycss = require("gulp-uglifycss")
const concat = require("gulp-concat")

// Task to minify and concatenate the CSS files from the dependencies
function depsCss() {
  console.log("deps Css...")
  return gulp
    .src("node_modules/font-awesome/css/font-awesome.css")
    .pipe(uglifycss({ uglyComments: true }))
    .pipe(concat("deps.min.css"))
    .pipe(gulp.dest("build/assets/css"))
}

// Task to copy the fonts from the dependencies
function depsFonts() {
  console.log("deps Fonts...")
  return gulp.src("node_modules/font-awesome/fonts/*.*").pipe(gulp.dest("build/assets/fonts"))
}

// Exporting tasks
module.exports = {
  depsCss,
  depsFonts,
}
