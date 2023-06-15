/*
 Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while.
*/



function loop(number){
    
    let cont = 1;
    while (cont <= number) {
      console.log("- loop while  -> " + `Hello World! = ${cont}`);
      cont++;
    }

}


let number = 11;
loop(number);