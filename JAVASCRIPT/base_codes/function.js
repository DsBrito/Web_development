//function add
function printAdd(num1, num2) {
  let result = num1 + num2;
  console.log("-  print Add -> " + num1 + " + " + num2 + " = " + result);
}

printAdd(56, 2);
printAdd(56);
printAdd();

//with default value num2 = 0
function printAdd2(num1, num2 = 14) {
  let result = num1 + num2;
  console.log("-  print Add 2 -> " + num1 + " + " + num2 + " = " + result);
}

printAdd2(56, 2);
printAdd2(56);
printAdd2();

//with default value num2 = 0

const printAdd3 = function (num1, num2) {
  let result = num1 + num2;
  console.log("-  print Add 3 -> " + num1 + " + " + num2 + " = " + result);
};

printAdd3(56, 2);
printAdd3(56);
printAdd3();

//arrow function
const printAdd4 = (num1, num2) => {
  let result = num1 + num2;
  console.log("-  print Add 4 -> " + num1 + " + " + num2 + " = " + result);
};

printAdd4(56, 2);
printAdd4(56);
printAdd4();

//implicit return with arrow function
const printAdd5 = (num1, num2) => num1 + num2;
console.log(
  "-  print Add 5 -> " + "56" + " + " + "2" + " = " + printAdd5(56, 2)
);
