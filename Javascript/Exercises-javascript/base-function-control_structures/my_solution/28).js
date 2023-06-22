/**
 * 28) ​Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares
 */


const rec_vec = (vet) => {

    let is_even=0, is_odd=0;
    
    for (let i = 0; i <= vet.length; i++) {
        if(vet[i]%2==0)
            is_even+=1;
        else
            is_odd+=1;
      }
      console.log("- is even  -> " + `n = ${is_even}` + "\n- is odd   -> " + `n = ${is_odd}`);

}

vet = [1,2,3,4,5,6,7,8,9,10,12,13,14,15,16];
rec_vec (vet);
