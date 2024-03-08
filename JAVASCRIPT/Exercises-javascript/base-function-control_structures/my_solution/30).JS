/**
 * Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
 */



const solve = (vet)=> {
    let maior;
    let menor;

    maior = vet[0];
    menor = vet[0];
    for (let i = 0; i <= vet.length; i++) {
        if(maior < vet[i])
            maior = vet [i];
        if(menor > vet[i])
            menor = vet[i];
      }

      console.log("- menor  -> " + `n = ${menor}` + "\n- maior  -> " + `n = ${maior}`);

}


vet = [8,9,10,12,13,14,15,16,1,2,3,4,5,6,7,8,9,10,12,13,14,15,16];
solve(vet);