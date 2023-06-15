/*
    ​Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como 
    parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro...) que foi paga e o valor da anuidade. A 
    anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros 
    compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido. 

*/



function calc(month, value){
    if(month > 0 && month < 13) {
        delay = month - 1
        return (value * ((1 + (5/100))**delay)).toFixed(2)
    } else {
        return 'Invalid month.'
    }
}

console.log("- result: " + calc(4, 100));
console.log("- result: " + calc(13, 100));
console.log("- result: " + calc(8, 100));
console.log("- result: " + calc(11, 100));
console.log("- result: " + calc(5, 100));
console.log("- result: " + calc(22, 100));