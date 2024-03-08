/**
 * 
    ​Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam 
    como parâmetros um número n (número de termo), ​a1​ (o primeiro termo) e ​r​ (a razão) e escreva os ​n​ termos , 
    bem como a soma dos elementos. 

    termo geral da pa =  A1 + (N-1)* R
    soma = (A1+An)*N /2

    termo geral pg = A1 * Q ^(N-1)
    soma = Sn = A1 (Q^N - 1)/Q-1
 */


const solve_ari = (n,a1,r)=> {
    for (let i = 0; i < n; i++) {
        console.log("- An_pg  -> " + `n[${i}] = ` + a1 + r*i)
    }
    console.log("- Sn_pg  -> " + (n * (a1 + (a1 + ((n-1)*r))))/2);
}

const solve_geo= (n,a1,r)=> {
    for(let i = 0; i < n; i++){
        console.log("- An_geo  -> " + `n =[${i}] = ` + a1*(r**i))
    }
    console.log("- Sn_pg  -> " + (a1 * ((r**n)-1))/(r-1))

}





solve_ari(10, 10, 15)
console.log('----------------');
solve_geo(10, 5, 3)