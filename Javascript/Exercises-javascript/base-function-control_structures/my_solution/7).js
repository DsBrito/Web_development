/*
* Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
* elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
* parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
* -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
* que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
* “Delta é negativo”.
*/

function Bhaskara(a, b, c) {

    const delta = Math.pow(b, 2) - 4 * a * c;
    let vetX = [];
    let op;
    console.log("- delta value -> " + delta);
    if (delta < 0) {
        return console.log("- delta is negative -> " + delta);

    }

    else {
        op = (-b + Math.sqrt(delta)) / (2 * a);
        console.log("- sqrt delta value -> " + (Math.sqrt(delta)));
        console.log("- sqrt delta value -> " + -b);

        console.log("- op value 1 -> " + op);

        vetX.push(op);

        op = (-b - Math.sqrt(delta)) / (2 * a);
        console.log("- op value 2 -> " + op);
        vetX.push(op);

        //console.log("- result  vetX[0] -> " + vetX[0]);
        //console.log("- result  vetX[1]-> " + vetX[1]);

        return vetX;
    }
}

console.log("- result  -> " + Bhaskara(3, -15, 12));
//console.log("- result  -> " + Bhaskara(3, -5, 12));
