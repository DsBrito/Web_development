/**
 *  ​Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número 
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada 
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se 
o valor do elemento for maior que 5.
 */



let vetor = [1, 2, 3, 4, 5]

const solve_vet1 = (vet,mult)=> {
    let vet_result = []
    vet.forEach(element => {
        vet_result.push(element * mult) 
    });

    return vet_result;
}

const solve_vet2 = (vet, mult)=>{
    let vet_result = []
    
    if(mult < 5) {
        return;
    }

    else{
        vet.forEach(element => {
            vet_result.push(element * mult) 
        });
    }

    return vet_result
}


let vet = [0, 1, 2, 3, 4, 5, 5 , 4, 3, 2, 1, 0 ]
console.log("- normal vector -> [" + vet + "]");
console.log("- result (* 10) -> [" + solve_vet1(vet, 10)+"]");
console.log("- result (* 5 if n > 5) -> [" + solve_vet2(vet, 5) + "]");