const pilots = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
console.log("- pilots-> ")
console.log(pilots);

//remove element 
console.log("\n" + "- remove the last element: ");
pilots.pop(); 
console.log(pilots);

console.log("\n" + "- remove element in the first position: ");
pilots.shift(); 
console.log(pilots);


//add element
console.log("\n" + "- add element in the first position: ");
pilots.unshift('Hamilton');
console.log(pilots);

//slice
const newArray = pilots.slice(2); //create a new array from index 2
console.log("\n" + "- slice: ");
console.log(newArray);

const newArray2 = pilots.slice(1, 4); //create a new array from index 1 to 4   
console.log(newArray2);