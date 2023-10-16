//jason is a text format that is used to exchange data between browsers and servers

const add_obj = { a: 1, b: 2, c: 3 , sum(){return a + b + c}}

console.log("- object format: ")
console.log(add_obj)
console.log("\n" + "- The json format exclude the functions:")
console.log(JSON.stringify(add_obj));