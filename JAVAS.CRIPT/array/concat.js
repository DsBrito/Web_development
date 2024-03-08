//concat is used to merge two or more arrays

const names = ['John', 'Bob', 'Alice'];
const ages = [34, 25, 19];
const heights = [1.7, 1.6, 1.8];
const weights = [80, 62, 70];
const profission = [['Developer', 'Designer', 'Architect']];
const salary = [[1000, 2000, 3000]];

const merge = names.concat(ages, heights, weights,profission, salary);

console.log("\n" + "- names: ");
console.log(names);

console.log("\n" + "- ages: ");
console.log(ages);

console.log("\n" + "- heights: ");
console.log(heights);

console.log("\n" + "- weights: ");
console.log(weights);

console.log("\n" + "- profission: ");
console.log(profission);

console.log("\n" + "- salary: ");
console.log(salary);

console.log("\n" + "- merge arrays with concat: ");
console.log(merge);