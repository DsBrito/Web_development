
//import using require
const op =  require("../export/function_export");
const name = require('../export/anonymous-function_export')('dionatas santo brito', '{caros drumond de andrade}}');
const object = require("../export/object_export");
const mensage = require("../export/mensage_export");

console.log("\n" + "- using function import by requiere -");
console.log(op.add(5, 5));
console.log(op.sub(18, 20));


console.log("\n" + "- using functions anonymous function import by requiere -");
console.log(name);


console.log("\n" + "- using object import by requiere -");
console.log(object);
console.log("\n" + "- profission: ");
console.log(object.profission());

console.log("\n" + "- using variable import by requiere -");
console.log(mensage.hello);
console.log(mensage.welcome);
console.log(mensage.bye);


