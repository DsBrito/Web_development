//people -> E444 -> {....}
const people = {name : 'dionatas'};
console.log(people);
console.log("-  name -> " + people.name);
people.name =  'Jack';
console.log("-  name -> " + people.name); //attribute change

//people -> R548 -> {....}  //memory cant change
// people = {name: 'Erick'}  //erro, cant change the memory pointer, because people is a const


//freeze object people
Object.freeze(people);   //now i cant chagne the attibute 

people.name = 'New name'; //you cant update
people.address = "New address"; //you cant add a attribute in freeze object
console.log();
console.log("cant update/add the attribute");
console.log(people);

//create a const freeze object
const freezePeople = Object.freeze({name: 'Higor', address: 'Death Street'});
console.log(freezePeople);
