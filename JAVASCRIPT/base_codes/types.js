//variable - use let
var a = 10; // redeclare the same name/variable
let b = 15; //
const c = 3; //no change variable value

console.log("- values -> " + "a = " + a, ", b = " + b, ", c = " + c);

let text = "text radom";
//javascript has weak typing (same variable can assign different types);
console.log("- text -> " + text);
console.log("- typeof text -> " + typeof text); //print varaible type

text = 1;
console.log("- text -> " + text);
console.log("- typeof text -> " + typeof text); //print variable type

//type number
const p1 = 73;
const p2 = Number("62.0");
const p3 = 92;

console.log("- p value -> " + p1, p2, p3);
console.log("- if is number -> " + Number.isInteger(2));

const average = (p1 + p2 + p3) / 3;
console.log("- average -> " + average);
console.log("- average fixed -> " + average.toFixed(2));

const p = 6;
console.log("- binary value -> " + p.toString(2)); //binary valuer

//type string
const name1 = "nishimiya";
const name2 = `saty`;
const name3 = "dionatas";

console.log("- name with character " + '" -> ' + name1);
console.log("- name with character " + "` -> " + name2);
console.log("- name with character " + "' -> " + name3);

console.log("- a caractere -> " + name3.charAt(5)); //char in 5 position (count 0...n)
console.log("- value empty -> " + name3.charAt(50)); //cant find a value and print empty
console.log("- unicode value -> " + name3.charCodeAt(5)); //unicode table value t = 116
console.log("- concatenation -> " + name3.concat(name1, name2)); //Returns a string that contains the concatenation of two or more strings.

console.log("- substring with start at final -> " + name3.substring(3)); //start in 3 at final position
console.log("- substring with start and final -> " + name3.substring(1, 6)); //start in 1 at 6 position

console.log("- replace -> " + name3.replace("t", "x")); //start in 1 at 6 position

//array
console.log("- construct array -> "); //start in 1 at 6 position
console.log("x,y,z".split(",")); //start in 1 at 6 position
