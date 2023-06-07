/*
    Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas 
    para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1. 
    Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve 
    informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1 
    nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1

*/

function money(value){
    let hundred, fifty, twentyFive, ten,one;

    
    hundred = Math.floor(value/100);
    fifty = Math.floor((value % 100) / 50);
    twentyFive = Math.floor(((value % 100) % 50)/25);
    ten = Math.floor((((value % 100) % 50) % 25)/10);
    five =  Math.floor(((((value % 100) % 50) % 25) %10)/5);
    one =  Math.floor((((((value % 100) % 50) % 25) %10)%5)/1);


    console.log("---------------------------");
    console.log("The calc.." + " -> R$ 100,00 x " + hundred + " = R$" + 100*hundred + ",00");
    console.log("The calc.." + " -> R$ 50,00  x " + fifty + " = R$" + 50*fifty + ",00");
    console.log("The calc.." + " -> R$ 25,00  x " + twentyFive + " = R$" + 25*twentyFive + ",00");
    console.log("The calc.." + " -> R$ 10,00  x " + ten + " = R$" + 10*ten + ",00");
    console.log("The calc.." + " -> R$ 5,00   x " + five + " = R$" + 5*five + ",00");
    console.log("The calc.." + " -> R$ 1,00   x " + one + " = R$" + 1*one + ",00");

    console.log("- Notes -> ");

    if(hundred > 0)
        console.log("  Amout of R$ 100,00 -> [" + hundred + "]");

    if(fifty > 0)
        console.log("  Amout of R$ 50,00  -> [" + fifty + "]");
        
    if(twentyFive > 0)
        console.log("  Amout of R$ 25,00  -> [" + twentyFive + "]");
    
    if(ten > 0)
        console.log("  Amout of R$ 10,00  -> [" + ten + "]");
        
    if(five > 0)
        console.log("  Amout of R$ 5,00   -> [" + five + "]");
    
    if(one > 0)
        console.log("  Amout of R$ 1,00   -> [" + one + "]");
}

money(18);
money(291);
money(300);
money(255);
money(77);
money(10091);



