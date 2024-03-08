/**
 * It's a short way to write anonymous functions in JavaScript
 */

let doble = function (a) {
  return 2 * a;
};

doble = (a) => {
  return 2 * a;
};

doble = (a) => 2 * a; // implicit return
console.log("-  print doble -> " + doble(Math.PI));

//--
let hey = function () {
  return "Hii Minna!!";
};
console.log("-  print hey normal form " + hey());

hey = () => "hey = () => Hii Minna!!";
console.log("-  print -> " + hey());

hey = (_) => "hey = (_) => Hii Minna!!";
console.log("-  print -> " + hey());
