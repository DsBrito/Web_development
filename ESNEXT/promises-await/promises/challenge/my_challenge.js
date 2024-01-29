const fs = require('fs');
const path = require('path');

// const way = path.join(__dirname, "data.txt");

function showData(_, data) {
    console.log(data.toString());
}

// console.log("Start...");
// fs.readFile(way, showData);
// fs.readFile(way, (_, data) => console.log(data.toString()));
// console.log("Finishi...")

// const getFile = (way) => {
//   return new Promise((resolve, reject) => {
//     try {
//       console.log("- Using resolve here: ");
//       resolve(
//         fs.readFile(way, function (_, data) {
//           data.toString();
//         })
//       );
//     } catch (error) {
//       console.log("- Using reject here: ");
//       reject(error);
//     }
//     console.log(" - After of read! ");
//   });
// };

// getFile(way).then((data) => data.split("\n"));
// getFile(way);

//-----------------------------------------------//
const way = path.join(__dirname, 'data.txt');
//const way = path.join(__dirname, "clean-data.txt");
// const way = path.join(__dirname, "no-file.txt");

const read_file = way => {
    return new Promise((resolve, reject) => {
        fs.readFile(way, (err, data) => {
            err ? reject(err) : resolve(data);
        });
    });
};

showFile = data => {
    data.toString().length !== 0
        ? console.log(data.toString())
        : console.log(`The file : ${way} is clean.`);
};

read_file(way)
    .then(showFile)
    .catch(e => console.log(`no such file or directory ${way}: ${e.message}`));
