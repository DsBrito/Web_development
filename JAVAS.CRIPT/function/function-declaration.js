/*
 * if use function declaration, the .js interpreter will load all functions before before use..
 * so you can use in anywhere in the code.
 */
console.log("- result -> " + add(3, 4));

// function declaration
function add(x, y) {
  return x + y;
}

/*
 * if use function expression before declaring.. will generate a reference erro -> function is not defined
 * so you need declare before use.
 */
//console.log(sub(3, 4));

// function expression
const sub = function (x, y) {
  return x - y;
};
console.log("- result -> " + sub(3, 4));

// named function expression
const mult = function mult(x, y) {
  return x * y;
};
console.log("- result -> " + mult(3, 4));
