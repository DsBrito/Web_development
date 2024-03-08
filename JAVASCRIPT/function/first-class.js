//function basic
function func1() {}

//function with variable
const func2 = function () {};

//function with object
const obj = {};
obj.mensage = function () {
  return "Hello World";
};
console.log("-  function with object -> " + obj.mensage());

//function with array
const array = [
  function (a, b) {
    return a + b;
  },
  func1,
  func2,
];
console.log("-  function with array -> " + array[0](2, 3));

//function with function
function exect(run) {
  run();
}
exect(function () {
  console.log("-  function with function -> " + "running... ");
});

//continue/call a function stored in a variable
function mult(a, b) {
  return function (c, d) {
    const result = a * b - (c + d);
    console.log("-  function with function -> " + result);
  };
}

//const result = mult(10, 5);(20, 0);
const result = mult(10, 5);
result(20, 0); //continue/call a function stored in a variable
