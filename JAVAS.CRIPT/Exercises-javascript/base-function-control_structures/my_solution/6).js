/**
 * 
 * Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
 * primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
 * retornará o valor da aplicação sob o regime de juros compostos.
 * 
 */

function simple_interest(C, I, T) {
    //M = P * (1 + (i * n))
    const M = (C * I * T) + C;
    return M;
}



function compound_interest(C, I, T) {
    //M = P * (1 + (i/n))^(n*t)
    const M = C * Math.pow((1 + I), T);
    return M;
}


console.log("- Amount with simple interest   -> R$ " + simple_interest(100, 10 / 100, 2));
console.log("- Amount with compound interest -> R$ " + compound_interest(100, 10 / 100, 2));

