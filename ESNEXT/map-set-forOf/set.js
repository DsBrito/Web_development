//using set

const ANIMES = new Set();

ANIMES.add("Solo Leveling");
ANIMES.add("Attack on Titan").add("Hunter x Hunter").add("Naruto");
ANIMES.add("Dororo");
ANIMES.add("To Eternity");

console.log(ANIMES);
console.log("- Size: ");
console.log(ANIMES.size);
console.log();

//has
console.log();
console.log("- has Dororo ? ");
console.log(ANIMES.has("Dororo"));
console.log();
console.log("- has dororo ? ");
console.log(ANIMES.has("dororo"));

//delete
console.log();
console.log("- delete Dororo");
ANIMES.delete("Dororo");
console.log("- has Dororo ? ");
console.log(ANIMES.has("dororo"));

const names = [
  "Raquel",
  "Diogo",
  "Igor",
  "Edson",
  "Luiz",
  "Ludmila",
  "Diogo",
  "Edson",
  "Miler",
  "Diogo",
  "Kayo",
  "Patricia",
  "Lucas",
  "Edson",
  "Luiz",
  "Ludmila",
  "Diogo",
];
console.log();
console.log("- Array name:");
console.log(names);
console.log("- Size array name:");
console.log(names.length);

//set
console.log();
console.log("- Set in array name: ");
const name_set = new Set(names);
console.log(name_set);
console.log("- Size array name:");
console.log(name_set.size);
