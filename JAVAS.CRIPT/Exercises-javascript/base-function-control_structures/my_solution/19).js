/*  19) ​O cardápio de uma lanchonete é o seguinte: 

                    Código  Descrição do Produto  Preço 
                    100  Cachorro Quente  R$ 3,00 
                    200  Hambúrguer Simples  R$ 4,00 
                    300  Cheeseburguer  R$ 5,50 
                    400  Bauru  R$ 7,50 
                    500  Refrigerante  R$ 3,50 
                    600  Suco  R$ 2,80 

    Implemente uma  função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor 
    a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. 
    Use o comando switch. Crie um caso default para produto não existente
*/

function to_pay(code,qtd){
    if(code==100)
        return qtd*3.00;

    if (code == 200)
        return qtd*4.00;

        if(code ==300)
        return qtd*5.50;

    if (code == 400)
        return qtd*7.50;

    if(code == 500)
        return qtd*3.50;

    if (code == 600)
        return qtd*2.8;
}

function snack_bar(code, qtd){
    switch (code) {
        case 100:
            console.log("- code [" + code + "]" + "\n" + "- Product Description: Hot Dog" + "\n" + "- Amout[" + qtd + "]" + "\n" + "- Unit price: R$ 3,00" + "\n" + "- Amout to pay R$[" + to_pay(code,qtd) + "]" + "\n" );
            break; 
        case 200:
            console.log("- code [" + code + "]" + "\n" + "- Product Description: Simple Hamburgers" + "\n" + "- Amout[" + qtd + "]" + "\n" + "- Unit price: R$ 3,00" + "\n" + "- Amout to pay R$[" + to_pay(code,qtd) + "]" + "\n" );
            break;
        case 300:
            console.log("- code [" + code + "]" + "\n" + "- Product Description: Cheeseburguer" + "\n" + "- Amout[" + qtd + "]" + "\n" + "- Unit price: R$ 3,00" + "\n" + "- Amout to pay R$[" + to_pay(code,qtd) + "]" + "\n" );
            break;    
        case 400:
            console.log("- code [" + code + "]" + "\n" + "- Product Description: Bauru" + "\n" + "- Amout[" + qtd + "]" + "\n" + "- Unit price: R$ 3,00" + "\n" + "- Amout to pay R$[" + to_pay(code,qtd) + "]" + "\n" );
            break;
        case 500:
            console.log("- code [" + code + "]" + "\n" + "- Product Description: Soda" + "\n" + "- Amout[" + qtd + "]" + "\n" + "- Unit price: R$ 3,00" + "\n" + "- Amout to pay R$[" + to_pay(code,qtd) + "]" + "\n" );
            break;        
        case 600:
            console.log("- code [" + code + "]" + "\n" + "- Product Description: Juice" + "\n" + "- Amout[" + qtd + "]" + "\n" + "- Unit price: R$ 3,00" + "\n" + "- Amout to pay R$[" + to_pay(code,qtd) + "]" + "\n" );
            break;
            // Caso nenhum dos valores anteriores seja correspondido
        default:
          console.log("- [" + code + "] -> invalid code. non-existent product" + "\n")
      }
}

snack_bar(100, 2);
snack_bar(300, 7);
snack_bar(500, 3);
snack_bar(800, 2);
snack_bar(400, 10);
snack_bar(199, 2);
snack_bar(600, 4);
