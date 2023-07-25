/**
 * 
 * Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
 */

const vet_med = (vet) => {
    let sum = 0
    for(let i=0; i<vet.length; i++) {
        sum += vet[i]
    }

    return sum/vet.length
}

vet = [1, 2, 3, 4, 5]

console.log("- the result is -> " + vet_med(vet))

