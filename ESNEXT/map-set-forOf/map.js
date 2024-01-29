//map

const map_keys = new Map([
  [function () {}, "function"],
  [{}, "objects"],
  [123, "Numbers"],
]);

//for each
console.log();
console.log("using forEach in map_keys: ");
map_keys.forEach((val, key) => {
  console.log(val, key);
});

//has
console.log();
console.log("- has 123 ? ");
console.log(map_keys.has(123));

//delete
console.log();
console.log("- delete 123");
map_keys.delete(123);
console.log("- has 123 ? ");
console.log(map_keys.has(123));
