//assignment by reference
//idx in memory
const a = { idx: "value" };
console.log("-  a value -> " + a);
console.log(a);

const b = a;
console.log("-  b value -> " + b);
console.log(b);

b.idx = "new value";
console.log("-  a new value -> " + a);
console.log(a);

//copy value with primitive type
let x = 2;
let y = x;
y--;

console.log("-  y new value -> " + y);
console.log(y);
console.log("-  x value -> " + x);
console.log(x);

//initialize variable
let off;
console.log("-  off value -> " + off); //undefined
let on = null;
console.log("-  on value -> " + on); // no value
