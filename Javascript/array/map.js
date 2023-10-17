const numbers = [1.7, 2.5, 3, 4.75, 5];

//array with map
let doble = numbers.map(function (number) {
    return number * 2;
});
console.log("\n" + "- array with map: ");
console.log(doble);

//others examples with map

const toReal = number => `R$ ${parseFloat(number).toFixed(2).replace('.', ',')}`;
result = numbers.map(toReal);
console.log("\n" + "- array parse to real: ");
console.log(result);


//construct my map function
console.log("\n" + "- construct my map function: ");
Array.prototype.myMap = function (callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }
    return newArray;
};

console.log(numbers.myMap(function (number) {
    return number * 2;
}));
