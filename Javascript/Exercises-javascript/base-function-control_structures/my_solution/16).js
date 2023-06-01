/*
    16)​ Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe 
    como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores 
    numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e 
    3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’.  Crie um caso default para operações inválidas.
*/




function calculate(num1,op,num2){
    switch (op) {
        case '+':
            let n = num1+num2;
            console.log("- [" + num1 + "] + [" + num2 + "]-> The result is = " + n );
            break;
        case '-':
            let x = num1-num2;
            console.log("- [" + num1 + "] - [" + num2 + "] -> The result is = " + x );
            break;
        case '*':
            console.log("- [" + num1 + "] * [" + num2 + "] -> The result is = " + num1*num2 );  
            break;
        case '/':
            console.log("- [" + num1 + "] / [" + num2 + "] -> The result is = " + num1/num2 );
            break;
        case '%':
            console.log("- [" + num1 + "] % [" + num2 + "] -> The result is = " + num1%num2 ); 
            break;   
        default:
              console.log("- [" + op + "] -> “invalid operation!");
        }
    }
    

    calculate(2,'+', 3);
    calculate(2,'-', 3);
    calculate(2,'*', 3);
    calculate(2,'/', 3);
    calculate(2,'%', 3);
