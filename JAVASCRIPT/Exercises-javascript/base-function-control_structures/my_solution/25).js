/**
 * 
 * Escrever um programa para exibir os números de 1 até 50 na tela.
 * 
 */

function loop(number){
    
    for (let i = 1; i <= number; i++) {
        console.log("- loop normal for  -> " + `i = ${i}`);
      }

}

let number = 50;
loop(number);
//console.log("- result: " + loop(number));