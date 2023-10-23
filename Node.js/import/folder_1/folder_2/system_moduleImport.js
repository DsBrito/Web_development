//forms of export modules inside folder


const module_1 = require("./../../../export/mensage_export.js");
const module_2 = require("./../../../export/function_export.js");

console.log("\n" + "- using ./../../../mensage_export.js");
console.log(module_1.hello);
console.log(module_1.welcome);
console.log(module_1.bye);

console.log("\n" + "- using ./../../../function_export.js");
console.log(module_2.add(5, 5));
console.log(module_2.sub(1, 15));

//require http module
const http = require("http");
http.createServer((req, res) => {
    res.write('Hello im a http server :D');
    res.end();
}).listen(8082);
