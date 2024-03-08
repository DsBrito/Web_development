//forms of export with node.js

 
//exporting a function


module.exports = {
    add: function (a, b) {
        console.log("add function export");
        console.log({a,b})
        return a + b;
    },
    sub: function (a, b) {
        console.log("sub function export");
        console.log({a,b})
        return a - b;
    }   
}



