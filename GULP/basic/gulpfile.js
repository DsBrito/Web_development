const gulp = require('gulp');
const {series, parallel} = require('gulp');

const before1 = cb => {
    console.log('Task before1');
    return cb();
}

const before2 = cb => {
    console.log('Task before2');
    return cb();
}

//This task will copy all .txt files from src folder to folder_B
 const copy = cb =>{
    console.log('Task copy');

    //when we use gulp.src we are telling gulp to read the files from the src folder
    //the distination no need to exist, gulp will create it

    gulp.src('folder_A/**/*.txt').pipe(gulp.dest('folder_B'));

    console.log('the folder_B was created with the .txt files')
    //This return is necessary to tell gulp that the task is finished
    return cb();

}

const end = cb => {
    console.log('Task end');
    return cb();
}

module.exports.default = series( parallel(before1, before2), copy, end);


//what is babel?
//
