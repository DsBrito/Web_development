//forms of export with node.js

//exporting a variable
this.hello = 'Hiii! I am a variable';
exports.welcome = 'Welcome to Node.js';
module.exports.bye = 'Bye Bye';

//exporting a object
module.exports = {
    name: 'John',
    age: 23,
    address: 'New York'
}
 
//exporting a function
module.exports = function (a, b) {
    return a + b;
}

module.exports = {
    add: function (a, b) {
        console.log("add function");
        console.log({a,b})
        return a + b;
    },
    sub: function (a, b) {
        console.log("sub function");
        console.log({a,b})
        return a - b;
    }   
}

