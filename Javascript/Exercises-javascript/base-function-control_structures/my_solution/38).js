/**
 * 38) ​Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números 
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente 
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor
 */


const solve = (inicio=0,fim=100)=> {

    for (let i = inicio; i <= fim; i++) {
        if(i%2==0){
            continue;
        }
        else{
            console.log("- result  -> " + `n = ${i}`);
        }
      }

     

}

console.log("- ### version with parameters ###\n");
solve(0,10);
console.log("\n- ### version without parameters ###\n");
solve();