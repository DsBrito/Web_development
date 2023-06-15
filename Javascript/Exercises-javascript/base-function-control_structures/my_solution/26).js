/**
 * 
 *  Fazer um programa para encontrar todos os pares entre 1 e 100.
 */



function loop(number){
    
    for (let i = 0; i <= number; i++) {

        if(i%2==0 || i==0)
            console.log("- loop normal for  -> " + `i = ${i}`);
      }

}

let number = 100;
loop(number);
