
//import using require
const add_sub = {add,sub} = require("./m_export");

const mensage = require("./m_export");

console.log("\n" + "- using function import by requiere -");
console.log(add_sub.add(18, 20));
console.log(add_sub.sub(18, 20));

console.log("\n" + "- using object import by requiere -");
console.log(mensage);

console.log("\n" + "- using variable import by requiere -");