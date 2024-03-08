//dynamic collection by key value
//a object can be strings, numbers others objects
const product = new Object
product.name = 'pen'
product ['made in brazil'] = 'manufacturer'
product.price = 3.00

console.log("- product info -> " + product);
console.log( product);

delete product.price
console.log("- product new info -> [price deleted]");
console.log( product);