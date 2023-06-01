/**
 * 
    ​Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três 
    casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com 
    escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie 
    também um default, que retornará uma mensagem de erro no console.
 * 
 * 
 */




function sell_fruit(fruit){
    switch (fruit) {
        case 'mango':
            console.log("- [" + fruit + "] -> We don't sell this fruit here!" );
            break;
        case 'kiwi':
            console.log("- [" + fruit + "] -> We have a kiwi fruit restriction!" );
            break;    
        case "watermelon":
            console.log("- [" + fruit + "]   -> Here it is, it's R$3,00 a kg!" );
            break;
  
                       
            // Caso nenhum dos valores anteriores seja correspondido
        default:
          console.log("- [" + fruit + "] -> invalid fruit")
      }
      }




      sell_fruit("grape");
      sell_fruit("watermelon");
      sell_fruit("kiwi");
      sell_fruit("mango");
      sell_fruit(5);