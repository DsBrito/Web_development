/**
    15) ​Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda 
    possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o 
    comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza 
    que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console: 
    “Não trabalhamos com este tipo de automóvel aqui”.
 */


function resale(obj){
    switch (obj) {
        case 'hatch':
            console.log("- [" + obj + "] -> Purchase made successfully!" );
            break;
        case 'sedans':
        case "motorcycles":        
        case "trucks":
            console.log("- [" + obj + "]   -> Are you sure you don't prefer this model?" );
            break;
   
        default:
              console.log("- [" + obj + "] -> “We do not work with this type of car here")
        }
    }
    

resale("BMW");
resale("hatch");
resale("trucks");
resale("sedans");
resale("motorcycles");
resale("ferrari");