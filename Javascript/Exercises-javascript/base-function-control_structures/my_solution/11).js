/*
    11) ​As regras para o cálculo dos anos bissextos são as seguintes: 
    De 4 em 4 anos é ano bissexto; 
    De 100 em 100 anos não é ano bissexto; 
    De 400 em 400 anos é ano bissexto; 
    Prevalecem as últimas regras sobre as primeiras. 
    Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a 
    mensagem e retornando  true ou false.  
*/


function is_biss(year){
    if (year %4 == 0) {
        if(year %400 ==0){
            return true;
        }
        else if(year % 100 ==0){
            return false;
        }
        else{
            return true;
        }
      }else {
        return false;
      }
}
  
    let y1 = 4;
    let y2 = 100;
    let y3 = 400;
    let y4 = 50;
    let y5 = 8000;

    console.log("- the type of year " + y1 + " is leap year ? -> " + is_biss(y1));
    console.log("- the type of year " + y2 + " is leap year ? -> " + is_biss(y2));
    console.log("- the type of year " + y3 + " is leap year ? -> " + is_biss(y3));
    console.log("- the type of year " + y4 + " is leap year ? -> " + is_biss(y4));
    console.log("- the type of year " + y5 + " is leap year ? -> " + is_biss(y5));

