const  {series}  = require('gulp');
const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');


function tsTransform (cb){
  tsProject.src()
  .pipe(tsProject())
  .pipe(gulp.dest('build'));
  cb();
}

exports.default = series(tsTransform); // Run the tsTransform function when we run the gulp command
