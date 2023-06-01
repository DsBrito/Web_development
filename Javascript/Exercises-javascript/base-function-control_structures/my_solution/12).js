/**
  Faça um algoritmo que calcule o fatorial de um número.
  n! = n × (n-1) × (n-2) × ... × 3 × 2 × 1
  n! = n × (n-1)!
 */



  function recursive_factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * recursive_factorial(n - 1);
    }
  }
  
  console.log("- the recursive factorial of " + 4 +"! is ->" + recursive_factorial(4)); 
  console.log("- the recursive factorial of " + 5 +"! is ->" + recursive_factorial(5)); 
  console.log("- the recursive factorial of " + 6 +"! is ->" + recursive_factorial(6)); 
  console.log("- the recursive factorial of " + 7 +"! is ->" + recursive_factorial(7)); 

  

  function factorial(fat){

    let calc =1;
    if(fat == 0 || fat ==1)
        return calc;
    else{
        for (let i = 1; i <= fat; i++) {
            calc = calc * (i);

          }
          return calc;
        }
}

let y0 = 0;
let y1 = 1;
let y2 = 2;
let y3 = 3;
let y4 = 4;
let y5 = 5;
let y6 = 6;
let y7 = 7;
let y8 = 8;

console.log(" - the factorial of " + y0 +"! is ->" + factorial(y0));
console.log(" - the factorial of " + y1 +"! is ->" + factorial(y1));
console.log(" - the factorial of " + y2 +"! is ->" + factorial(y2));
console.log(" - the factorial of " + y3 +"! is ->" + factorial(y3));
console.log(" - the factorial of " + y4 +"! is ->" + factorial(y4));
console.log(" - the factorial of " + y5 +"! is ->" + factorial(y5));
console.log(" - the factorial of " + y6 +"! is ->" + factorial(y6));
console.log(" - the factorial of " + y7 +"! is ->" + factorial(y7));
console.log(" - the factorial of " + y8 +"! is ->" + factorial(y8));