const names = ['John', 'Jane', 'Jack', 'Jim'];

//array with for each [element, index, array]
console.log("\n" + "- array with for each: ");
names.forEach(function (name, index, array) {
    console.log(`${index+1}` + ") " + name);
    console.log(array);
});


//construct my for each function
console.log("\n" + "- construct my for each function: ");

Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

console.log(names.myForEach(function (name, index, array) {
    console.log(`${index+1}` + ") " + name);
    console.log(array);
}));