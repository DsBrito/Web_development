//for write a JSON file need a reference to the file
const fs = require('fs'); // fs = nameModule

const produt ={
    name: 'notebook',
    price: 1999.99,
    discount: 0.15
} 

//writeFile = method
//JSON.stringify = convert object to JSON
//err = error callback
fs.writeFile(__dirname + '/file.json', JSON.stringify(produt), err => {
    console.log(err || 'File saved!');
});