const glup = require("gulp")
const babel = require("gulp-babel")
const uglify = require("gulp-uglify")
const sass = require("gulp-sass")(require("sass"))
const uglifycss = require("gulp-uglifycss")
const concat = require("gulp-concat")
const htmlmin = require("gulp-htmlmin")

function defaultTask(cb) {
  console.log("Hello Gulp")
  return cb()
}

//this function minify the html files and put them in the build folder
function appHTML() {
  console.log("appHTML...")
  return glup
    .src("src/**/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(glup.dest("build"))
}

//this function compile the sass files, minify and concatenate them and put them in the build folder
function appCSS() {
  console.log("appCSS...")
  return glup
    .src("src/assets/sass/index.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(uglifycss({ uglyComments: true }))
    .pipe(concat("app.min.css"))
    .pipe(glup.dest("build/assets/css"))
}

//this function transpile the js files, minify and concatenate them and put them in the build folder
function appJS() {
  console.log("appJS...")
  return glup
    .src("src/assets/js/**/*.js")
    .pipe(babel({ presets: ["ENV"] }))
    .pipe(uglify())
    .pipe(concat("app.min.js"))
    .pipe(glup.dest("build/assets/js"))
}

//
function appIMG() {
  console.log("appIMG...")
  return glup.src("src/assets/imgs/**/*.*").pipe(glup.dest("build/assets/imgs"))
}

glup.task("appHTML", appHTML)
glup.task("appCSS", appCSS)
glup.task("appJS", appJS)
glup.task("appIMG", appIMG)

module.exports = {
  defaultTask,
  appHTML,
  appCSS,
  appJS,
  appIMG,
}
