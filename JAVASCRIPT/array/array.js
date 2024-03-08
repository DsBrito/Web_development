//some form to create array
console.log("array is->  " + typeof Array, typeof new Array, typeof [])

let names = new Array('Lucy', 'John', 'Mark');
console.log("\n" + "- array info: ");
console.log(names);

console.log("\n" + "- array literal: ");
names = ['Lucy', 'John', 'Mark'];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

//add elements in array
console.log("\n" + "- add elements in array: ");
names[3] = 'Mary';
console.log(names[3]);

names.push('Peter');
console.log(names[4]);

names.splice(1, 0, 'Eduardo', 'Lucas'); //add elements in index 1
console.log(names);

//len of array
console.log("\n" + "- len of array: ");
console.log(names.length);

//strange things in javascript
console.log("\n" + "- strange things in javascript: ");
names[10] = 'Rafael';
console.log(names.length);
console.log(names[7] === undefined);
console.log(names);

//sort array
console.log("\n" + "- sort array: ");
console.log(names.sort());

//delete elements in array
console.log("\n" + "- delete elements in array: ");
delete names[1];
console.log(names);

//splice
console.log("\n" + "- splice: ");
names.splice(2, 3); //delete 3 elements from index 2
console.log(names);

names.splice(1, 2, 'Ezio', ); //delete 2 elements from index 1 and add 2 elements
