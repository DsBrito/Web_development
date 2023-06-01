/*
    10) ​Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true 
    ou false
*/

 function is_div(num) {
    if (num %3 == 0) {
      return true;
    } else {
       return false;
    }
  }

  const num = 27;
  console.log("- result type -> " + is_div(num));
