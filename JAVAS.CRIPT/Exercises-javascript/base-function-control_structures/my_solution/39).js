/**
    Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o 
    primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente. 
    Faça a troca sem utilizar uma variável auxiliar.
 */




 const changeVector = (vetA,vetB)=> {

    if(vetA.length === vetB.length){
        for (let i = 0; i < vetA.length; i++) {
            vetA[i] = vetA[i] + vetB[i]
            vetB[i] = vetA[i] - vetB[i]
            vetA[i] = vetA[i] - vetB[i]
        }
        console.log("- after change: \n- vectorA  -> " + `n = [${vetA}]` + "\n- vectorB  -> " + `n = [${vetB}]`);
    }
    else{
        console.log("- erro - different size")
    }
    
}
    
    
    vetA = [1,1,1,1,1,1,1,1,1,1,1,1,1];
    vetB = [2,2,2,2,2,2,2,2,2,2,2,2,2];

    console.log("- before change: \n- vectorA  -> " + `n = [${vetA}]` + "\n- vectorB  -> " + `n = [${vetB}]\n\n`);

    changeVector(vetA,vetB);