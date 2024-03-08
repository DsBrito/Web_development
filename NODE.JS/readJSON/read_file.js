//for read a file.json need a reference to the file

const  fs = require('fs');  // fs = nameModule

//syncronous form
const  SyncWay = __dirname + '/file.json';

console.log('- Syncronous form -');
const  data = fs.readFileSync(SyncWay, 'utf8'); //readFileSync = method

console.log(data);


//assynchronous form
const  AsyncWay = __dirname + '/file.json';
fs.readFile(AsyncWay, 'utf8', (err, data) => {
    if(err)
     throw err;

    console.log('\n' + '- Asyncronous form -');
    console.log(data);

    console.log('\n' + '- JSON parse form -');
    const config = JSON.parse(data);
    console.log(`${config.db.host}:${config.db.port}`);
});

//using require
console.log('\n' + '- using require -');
const requireWay = require('./file.json');
console.log(requireWay.db);


//reading a path 
//__dirname = current directory

console.log('\n' + '- reading a path -');
fs.readdir(__dirname, (err, data) => {
    if(err)
     throw err;

    console.log(data);
});