/**
 * 
 *  Crie uma função que irá receber dois valores, o dividendo e o divisor. 
 * A função deverá imprimir o resultado e o resto da divisão destes dois valores
 * 
 */

function div(divid, dividend) {
    let quotient;
    let rest;

    quotient = Math.floor(dividend / divid);
    rest = (dividend % divid);

    console.log(` - divid = ${divid}\n - dividend = ${dividend}` + "\n - quotient = " + quotient + "\n - rest = " + rest);
}

let dividend = 5;
let divid = 2;


div(divid, dividend);


