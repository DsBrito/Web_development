// Definindo uma função como async, podemos utilizar a palavra-chave await antes de qualquer expressão que retorne uma promessa.
// Dessa forma, a execução da função externa (a função async) será pausada até que a Promise seja resolvida.

// A palavra-chave await recebe uma Promise e a transforma em um valor de retorno (ou lança uma exceção em caso de erro).
//  Quando utilizamos await, o JavaScript vai aguardar até que a Promise finalize. Se for finalizada com sucesso (o termo utilizado é fulfilled),
//  o valor obtido é retornado. Se a Promise for rejeitada (o termo utilizado é rejected), é retornado o erro lançado pela exceção.

//https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar

const http = require("http");

const getClass = (latter) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${latter}.json`;
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let result = "";

      res.on("data", (info) => {
        result += info;
      });

      res.on("end", () => {
        try {
          console.log("- Using resolve here: ");
          resolve(JSON.parse(result));
        } catch (error) {
          console.log("- Using reject here: ");
          reject(error);
        }
      });
    });
  });
};

//using async await here
let getStudants = async () => {
  const A = await getClass("A");
  const B = await getClass("B");
  const C = await getClass("C");
  return [].concat(A, B, C);
};

getStudants()
  .then((studants) => studants.map((s) => s.nome))
  .then((names) => console.log(names))
  .catch((error) => console.log(error.message));
