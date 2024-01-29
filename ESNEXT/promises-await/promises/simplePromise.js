//Promise simples
let promise = new Promise(function (names) {
  names(["Ana", "Diego", "Harisson", "Melina", "Kayo", "Thiago", "Guilherme"]);
});

//Todos os nomes
promise.then((allName) => console.log(`- All array : ${allName}`));

//Primeiro nome
promise
  .then((value) => value[0])
  .then((first) => console.log(`- The first name in array is: ${first}`));
