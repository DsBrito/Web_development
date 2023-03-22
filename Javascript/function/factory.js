//factory simple function

function createPeople() {
  return {
    name: "Dionatas",
    surname: "Santos Brito",
    nick_name: "Saty",
    age: "23",
    pet: "cat",
  };
}

console.log("- people type -> " + createPeople());
console.log(createPeople());

function initializePeople(name, surname, nick_name, age, pet) {
  return {
    name,
    surname,
    nick_name,
    age,
    pet,
  };
}

console.log(
  "- people type 2 -> " +
    initializePeople("Dionatas", "SantosBrito", "Saty", 23, "cat")
);
console.log(initializePeople("Dionatas", "SantosBrito", "Saty", 23, "cat"));
