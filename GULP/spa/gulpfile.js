const { parallel, series } = require("gulp")
const gulp = require("gulp")

// Importing tasks
const { defaultTask, appHTML, appCSS, appJS, appIMG } = require("./gulp_files/app.js")
const { depsCss, depsFonts } = require("./gulp_files/deps.js")
const { controlFiles, server } = require("./gulp_files/server.js")

// Exporting tasks
module.exports.default = series(
  parallel(series(defaultTask, appHTML, appCSS, appJS, appIMG), series(depsCss, depsFonts)),
  server,
  controlFiles
)
