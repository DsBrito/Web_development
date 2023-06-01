/**
    17)​ Um funcionário irá receber um aumento de acordo com o seu plano de 
    trabalho, de acordo com a tabela abaixo:  
                            Plano  Aumento 
                            A  10% 
                            B  15% 
                            C  20% 
    Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu 
    novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. 
    
 */


    function new_salary(add, salary){
        let att;
        switch (add) {
            case 'A':
                att = salary + (salary*10/100) 
                console.log("- [" + add + "%] -> new salary = " + att);
                break;
            case 'B':
                att = salary + (salary*15/100) 
                console.log("- [" + add + "%] -> new salary = " + att);
                break;    
            case "C":
                att = salary + (salary*20/100) 
                console.log("- [" + add + "%]   -> new salary = " + att);
                break;
      
                           
                // Caso nenhum dos valores anteriores seja correspondido
            default:
              console.log("- [" + add + "] -> invalid plan")
          }
          }
    
          new_salary('A',100)
          new_salary('B',100)
          new_salary('C',100)
          new_salary('D',100)
