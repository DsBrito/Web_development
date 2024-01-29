console.log("- For Of in DEVELOPER word: ");
for (var latter of "DEVELOPER") {
  console.log(latter);
}

//using for of in keys

const PVP = new Map([
  ["PVP 15", { state: true }],
  ["PVP 30", { state: true }],
  ["PVP 60", { state: false }],
  ["PVP 80", { state: true }],
]);

console.log();
console.log(" - Key + Value in PVP map: ");
for (var type of PVP) {
  console.log(type);
}

console.log();
console.log(" - Destruct array in PVP map: ");
for (var [key, value] of PVP.entries()) {
  console.log(key, value);
}

console.log();
console.log(" - Only Keys in PVP map: ");
for (var area of PVP.keys()) {
  console.log(area);
}

console.log();
console.log(" - Only Values in PVP map: ");
for (var state of PVP.values()) {
  console.log(state);
}
