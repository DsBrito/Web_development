### Gulp

Gulp is a popular JavaScript task runner built on Node.js. It helps automate repetitive tasks in your development workflow, such as compiling Sass to CSS, minifying JavaScript files, optimizing images, and much more. Gulp uses a code-over-configuration approach, allowing developers to write tasks using JavaScript code instead of configuring them through external files. This makes it highly flexible and customizable for various project requirements. Gulp operates through a system of plugins, which are small Node.js modules that perform specific tasks, making it easy to extend its functionality. Overall, Gulp is widely used in web development to streamline the build process and improve productivity.

For use GULP need Update the file `pakage.json` to add "gulp-sass" dependency to version 5.0.0, leaving it in your file: "gulp-sass": "5.0.0".


<br /><br />
<div style="display: inline_block" align="center">
    <img align="center" width="65%" src="../IMAGES/gulp/gulp_config.png">
<div style="display: inline_block" align="left">
<br /><br />

- Install gulp

   - `sudo npm i -g gulp-cli`

- Execult gulp (need module.exports.default)
    - `gulp`

<div style="display: inline_block" align="center">
    <img align="center" width="90%" src="../IMAGES/gulp/execult.PNG">
<div style="display: inline_block" align="left">
<br /><br />


### Copy with gulp
<div style="display: inline_block" align="center">
    <img align="center" width="100%" src="../IMAGES/gulp/copy.PNG">
<div style="display: inline_block" align="left">
<br /><br />


### Transform typescript to javascript with Gulp

To convert TypeScript files to JavaScript using Gulp, you can set up a Gulp task that utilizes the gulp-typescript plugin. First, you'll need to install the necessary packages:´

```bash
npm install --save-dev gulp gulp-typescript typescript
```

Then, you can create a gulpfile.js in your project directory with the following content:


```typescript
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

exports.default = series(tsTransform);
```

This script defines a Gulp task called typescript that converts TypeScript files to JavaScript using the gulp-typescript plugin and outputs the compiled JavaScript files to a dist directory. The tsconfig.json file is used to configure TypeScript compilation options.

Make sure you have a tsconfig.json file in your project directory to specify TypeScript compiler options. If you don't have one, you can create a basic one like this:

(
This `include:["src/**/*.ts"]` specifies which TypeScript files should be included in the compilation process. In this case, it will include all files with the .ts extension within the src directory and any subdirectories.)
```json
{
  "include": [
      "src/**/*.ts"
  ],
  "compilerOptions": {
      "rootDir": "src",
      "noImplicitAny": true,
      "target": "es5"
  }
}
```
After setting up your Gulpfile and tsconfig.json, you can run the Gulp task by executing the following command in your terminal:

```bash
gulp
```

This will compile your TypeScript files to JavaScript according to the configuration specified in tsconfig.json and output the results to the dist directory.
```bash
node .\build\app.js
```


### Transform SASS to CSS with Gulp
To convert SASS (Syntactically Awesome Style Sheets) to CSS using Gulp, you can set up a Gulp task that utilizes a SASS compiler plugin such as gulp-sass. Below is an example of how you can set up your Gulpfile.js to achieve this:


Need install Gulp and the gulp-sass plugin by running the following commands in your terminal:
```bash
npm install --save-dev gulp gulp-sass
```

Now, create a gulpfile.js in your project directory if you haven't already, and add the following code:
```javascript
const { series } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglifycss = require('gulp-uglifycss');
const concat = require('gulp-concat');

function cssTransform() {
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({"uglyComments":true}))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('build/css'));
}

exports.default = series(cssTransform);
```
<h3 align="justify">Extra links</h3>
    <div style="display: inline_block" align="justify">
    Some links with guide Gulp
    </a>
   <p align="center">
    Ajax Documentation ->
    <a href="https://gulpjs.com/docs/en/getting-started/quick-start"
       >here <-</a
    ><br />
