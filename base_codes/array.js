//array
const array = [1, 4, 9, 0];
console.log("-  id 1 -> " + array[1]);
console.log("-  id 70 -> " + array[70]);

//att array
array[7] = 0;
console.log("-  full array -> ");
console.log(array);

//count element
console.log("-  len of array -> " + array.length);

//push array
array.push({ obj: 33 }, "text", "22", false, null);
console.log("-  push array -> ");
console.log(array);

//pop array
array.pop();
console.log("-  pop array -> ");
console.log(array);

delete array[8]; //remove an attribute from an object
console.log("-  delete array idx 8 -> ");
console.log(array);
