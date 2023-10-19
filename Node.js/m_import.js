
//import using require
const op =  require("./function_export");
const object = require("./object_export");
const mensage = require("./mensage_export");

console.log("\n" + "- using function import by requiere -");
console.log(op.add(5, 5));
console.log(op.sub(18, 20));

console.log("\n" + "- using object import by requiere -");
console.log(object);
console.log("\n" + "- profission: ");
console.log(object.profission());

console.log("\n" + "- using variable import by requiere -");
console.log(mensage.hello);
console.log(mensage.welcome);
console.log(mensage.bye);


