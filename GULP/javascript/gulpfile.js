const { series } = require("gulp")
const gulp = require("gulp")
const concat = require("gulp-concat")
const uglify = require("gulp-uglify")
const babel = require("gulp-babel")

function defaultMode(cb) {
  gulp
    .src("src/**/*.js")
    .pipe(
      babel({
        comments: false, // Remove comments
        presets: ["env"], // Convert ES6 code into ES5 code
      })
    )
    .pipe(uglify()) // Minify the code
    .pipe(concat("code.min.js")) // Concatenate all the files into a single file
    .pipe(gulp.dest("build")) // Save the file in the build folder
  cb()
}

exports.default = series(defaultMode) // Run the defaultMode function when we run the gulp command
