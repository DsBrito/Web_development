const gulp = require("gulp")
const watch = require("gulp-watch")
const webserver = require("gulp-webserver")

function controlFiles(cb) {
  console.log("controlFiles...")
  watch("src/**/*.html", () => gulp.series("appHTML")())
  watch("src/**/*.scss", () => gulp.series("appCSS")())
  watch("src/**/*.js", () => gulp.series("appJS")())
  watch("src/assets/imgs/**/*.*", () => gulp.series("appIMG")())
  return cb()
}

function server() {
  console.log("server...")
  return gulp.src("build").pipe(
    webserver({
      port: 8080,
      open: true,
      livereload: true,
    })
  )
}

module.exports = {
  server,
  controlFiles,
}
