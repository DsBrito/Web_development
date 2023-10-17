//filter is used to filter out the elements of an array based on a condition

const products = [
    {name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver', fragile: true},
    {name: 'phone', price: 7000, brand: 'htc', color: 'black', fragile: true},
    {name: 'sunglass', price: 300, brand: 'rayban', color: 'black', fragile: true},
    {name: 'camera', price: 9000, brand: 'canon', color: 'black', fragile: true},
    {name: 'plastic_cup', price: 100, brand: 'arong', color: 'white', fragile: false}
];


//filtering out the products whose price is greater than 1000
console.log("\n" + "- filtering out the products whose price is greater than 1000:");
const expensiveProducts = products.filter(product => product.price > 1000);
console.log(expensiveProducts);

//filtering out the products whose fragile property is true
console.log("\n" + "- filtering out the products whose fragile property is true: ");
const fragileProducts = products.filter(product => product.fragile);
console.log(fragileProducts);

//filtering out the products whose color is black
console.log("\n" + "- filtering out the products whose color is black: ");
const blackProducts = products.filter(product => product.color == 'black');
console.log(blackProducts);

//construct my filter function
console.log("\n" + "- construct my filter function: ");

Array.prototype.myFilter = function(callback){
    const newArray = [];
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i]);
        }
    }
    return newArray;
};

console.log(products.myFilter(product => product.price > 1000));