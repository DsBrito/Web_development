/**
 * 
33) ​Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter 
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais. 
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e 
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console. 

Em JavaScript, "arguments" são objetos especiais que representam os parâmetros passados para uma função. 
Eles permitem que você acesse os valores dos argumentos passados para uma função, mesmo se o número de argumentos não estiver explicitamente definido na declaração da função.

O objeto "arguments" está disponível em todas as funções em JavaScript e é um objeto semelhante a uma matriz (array-like). 
Ele possui uma propriedade "length" que indica o número de argumentos passados para a função, 
e você pode acessar os argumentos individuais usando índices numéricos, assim como faria com uma matriz.
 * 
 */



//const  concatenation = (...args) =>{
function concatenation (...args) {
    conc_result = []
    for(let i = 0; i<arguments.length; i++){
        conc_result = conc_result.concat(arguments[i])
    }
    return conc_result;
}


let vet_num = [0, 1, 2, 3, 4, 5, 5 , 4, 3, 2, 1, 0 ]
let vet_string = ["Dio", "Jeff", "Dyna", "Paty"];
let vet_float = [1.2, 1.3, 1.6, 4.7, 7.3, 12,7];



console.log("- normal int vector -> [" + vet_num + "]");
console.log("- normal string vector -> [" + vet_string + "]");
console.log("- normal float vector -> [" + vet_float + "]");
console.log('---------------------------------------------------------')

console.log("- result concatenation vector int + string -> [" + concatenation(vet_num, vet_string)+"]");
console.log("- result concatenation vector float + string -> [" + concatenation(vet_float, vet_string) + "]");


