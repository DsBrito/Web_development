const mult = function (x, y) {
  return x * y;
};
const add = function (x, y) {
  return x + y;
};
const sub = function (x, y) {
  return x - y;
};
const div = function (x, y) {
  return x / y;
};

const print_result = function (a, b, op = mult) {
  console.log("-  print -> " + op(a, b));
};

print_result(3, 4);
print_result(3, 4, add);
print_result(3, 4, div);
print_result(3, 4, sub);

print_result(3, 4, (x, y) => x * y);

//undefined here cause a and b value
print_result(3, 4, function (x, y) {
  console.log("-  Hello im a mensage :)");
});

// IIFE -> Immediately Invoked Function Expression
//all variables and functions that will be created here, will be local fleeing the global scope

(function () {
  console.log("\nIt will run right away!");
  console.log("Outside the wider scope!");
})();
