//without callback
const array_grades = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

let array_low_grades = [];
for (let i in array_grades) {
  if (array_grades[i] < 7) {
    array_low_grades.push(array_grades[i]);
  }
}

console.log("-  print low grades (<7) -> " + array_low_grades);
console.log(array_low_grades);

//with callback
array_low_grades = array_grades.filter(function (array_grades) {
  return array_grades < 7;
});

console.log("\n");
console.log("-  print low grades with callback (<7) -> " + array_low_grades);
console.log(array_low_grades);

//othert callback form

array_low_grades = array_grades.filter((array_grades) => array_grades < 7);
console.log("\n");
console.log(
  "-  print low grades with arrow function callback (<7) -> " + array_low_grades
);
console.log(array_low_grades);

const car = [
  "Mercedes-Benz",
  "Jaguar",
  "Audi",
  "Land Rover",
  "Marcerati",
  "BMW",
];

function print_car(name, id) {
  console.log("- car -> " + `${id + 1}. ${name}`);
}
//event = calback in each array element.
console.log("\n");
car.forEach(print_car);

console.log("\n");
car.forEach((car) => console.log(car));
