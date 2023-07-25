
/**
 * 
) ​Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos 
inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha 
e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao 
final das operações imprima os vetores no console.
 * 
 */

const  add_vector = (normal_vector, new_vector) =>{
    for(let i = 0; i < new_vector.length; i++) {
        console.log("- add the element -> " + new_vector[i])
        normal_vector.push(new_vector[i])
    }
    console.log('------------------------')
    console.log('- vet add: ' + new_vector)
    console.log('- vet result : ' + normal_vector)
}

let vet_stack = [10, 20, 30, 40, 50]
let vet_adc = [60, 70, 80, 90, 100]

//a exemple: ? works?
let new_v = vet_stack +"," + vet_adc;
console.log("- with concatenation -> ["+new_v+"]");
console.log('------------------------')

add_vector(vet_stack, vet_adc);
