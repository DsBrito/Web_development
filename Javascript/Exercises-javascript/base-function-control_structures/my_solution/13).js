/**
    13) ​Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao 
    dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
 */


function is_businessDay(day){
    switch (day) {
        case 1:
            console.log("- [" + day + "] Sunday    -> its not a working day!" );
            break;
        case 2:
            console.log("- [" + day + "] Monday    -> it's a working day!" );
            break;    
        case 3:
            console.log("- [" + day + "] Tuesday   -> it's a working day!" );
            break;
        case 4:
            console.log("- [" + day + "] Wednesday -> it's a working day!" );
            break;        
        case 5:
            console.log("- [" + day + "] Thursday  -> it's a working dayy!" );
            break;
        case 6:
            console.log("- [" + day + "] Friday    -> it's a working day!" );
            break;    
        case 7:
            console.log("- [" + day + "] Saturday  -> its not a working day!" );
            break;
                       
            // Caso nenhum dos valores anteriores seja correspondido
        default:
          console.log("- [" + day + "] -> invalid day")
      }
      }

      is_businessDay(1);
      is_businessDay(2);
      is_businessDay(3);
      is_businessDay(4);
      is_businessDay(5);
      is_businessDay(6);
      is_businessDay(7);

      console.log("");

      is_businessDay(565);
      is_businessDay("a");
      is_businessDay(0);
      is_businessDay(31);