/*
    21)​ Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado 
    considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 
    1) crianças com menos de 10 anos pagam R$80; 
    2) conveniados com idade entre 10 e 30 anos pagam R$50; 
    3) conveniados com idade acima de  30 e até 60 anos pagam R$ 95;
    4) conveniados acima de 60 anos pagam R$130 
*/



function contract(years_old){
    if(years_old <10)
        return 100 + 80;
    if(years_old >10 && years_old <30)
        return 100 + 50;
    if(years_old >30 && years_old <60)
        return 100 + 95;
    if(years_old >60)
        return 100 + 130;
}

let crianca = 5;
let adolecente = 18;
let adulto = 28;
let adulto_velho = 51; 
let velho = 81;

console.log("- result -> ");
console.log("  the customer's age is " + crianca + " years old and the amout to pay    -> R$ " + contract(crianca) + ",00");
console.log("  the customer's age is " + adolecente + " years old and the amout to pay   -> R$ " + contract(adolecente) + ",00");
console.log("  the customer's age is " + adulto + " years old and the amout to pay   -> R$ " + contract(adulto) + ",00");
console.log("  the customer's age is " + adulto_velho + " years old and the amout to pay   -> R$ " + contract(adulto_velho) + ",00");
console.log("  the customer's age is " + velho + " years old and the amout to pay   -> R$ " + contract(velho) + ",00");
