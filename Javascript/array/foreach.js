const names = ['John', 'Jane', 'Jack', 'Jim'];

//array with for each [element, index, array]
console.log("\n" + "- array with for each: ");
names.forEach(function (name, index, array) {
    console.log(`${index+1}` + ") " + name);
    console.log(array);
});