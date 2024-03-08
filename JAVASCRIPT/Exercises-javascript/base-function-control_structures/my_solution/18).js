/**
     18)​ Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando 
    witch. Crie um case default que escreva ‘Número fora do intervalo.
  
 */


 
function ranger_number(number){
    switch (number) {
        case 0:
            console.log("- [" + number + "] Zero" );
            break; 
        case 1:
            console.log("- [" + number + "] One");
            break;
        case 2:
            console.log("- [" + number + "] Two" );
            break;    
        case 3:
            console.log("- [" + number + "] Three" );
            break;
        case 4:
            console.log("- [" + number + "] Four " );
            break;        
        case 5:
            console.log("- [" + number + "] Five" );
            break;
        case 6:
            console.log("- [" + number + "] Six" );
            break;    
        case 7:
            console.log("- [" + number + "] Seven" );
            break;
        case 8:
            console.log("- [" + number + "] Eight!" );
            break;   
        case 9:
            console.log("- [" + number + "] Nine" );
            break; 
        case 10:
            console.log("- [" + number + "] Ten" );
            break;                    
            // Caso nenhum dos valores anteriores seja correspondido
        default:
          console.log("- [" + number + "] -> invalid number. This number is out of range (0 to 10 only)")
      }
      }

      ranger_number(1);
      ranger_number(10);
      ranger_number(3);
      ranger_number(11);
      ranger_number(5);
      ranger_number(6);
      ranger_number(7);

      console.log("");

      ranger_number(565);
      ranger_number("a");
      ranger_number(0);
      ranger_number(31);   