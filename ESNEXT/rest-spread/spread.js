// rest = juntar
// spread = espalhar

//using spread with objects
console.log("- using spread with object : ");
const player = { name: "Jason", class: "hunter", level: 80, goddes: "fury" };
const clone = { state: true, ...player }; //... = operator spread
console.log("- this is clone: ");
console.log(clone);

//using spread with array

const players_assassins = ["SatyZ", "shunrei", "Sargon"];
const players_oracles = ["Nickeline", "idk", "Amush"];
const players_pagans = ["Nishimiya", "Ryo", "Netero"];
const players_hunters = ["JASON", "Cupido", "Namish"];
const players_warriors = ["Miyamoto", "Rockrol", "Guytaro"];
const players_guardians = ["Musashi", "EloGin", "Viniccius"];

const fury = [
  "Fury members",
  "-",
  ...players_assassins,
  ...players_hunters,
  ...players_guardians,
  ...players_warriors,
  ...players_oracles,
  ...players_pagans,
];

console.log("- using spread with array : ");
console.log(fury);
