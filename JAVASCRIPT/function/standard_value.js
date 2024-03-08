//old version for a standard value

function add(a, b, c) {
  a = a || 1;
  b = b || 1;
  c = c || 1;

  a = a !== undefined ? a : 1;
  b = b !== undefined ? b : 1;
  c = c !== undefined ? c : 1;

  a = 1 in arguments ? a : 1;
  b = 1 in arguments ? b : 1;
  c = 1 in arguments ? c : 1;

  a = isNaN(a) ? 1 : a;
  b = isNaN(b) ? 1 : a;
  c = isNaN(c) ? 1 : a;

  return a + b + c;
}

console.log("-  print result -> " + add(), add(3), add(1, 2, 3), add(0, 0, 0)); //standard value with 0

//new version es2015 for a standard value
function addX(a = 1, b = 1, c = 1) {
  return a + b + c;
}

console.log(
  "-  print result  X -> " + addX(),
  addX(3),
  addX(1, 2, 3),
  addX(0, 0, 0)
);
