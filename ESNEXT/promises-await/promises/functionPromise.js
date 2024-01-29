function delay(segunds, mensage) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mensage);
    }),
      segunds * 1000,
      reject("Heeellou ...Im a error :D");
  });
}

delay(3, "Hello im a promise!")
  .then((mensage) => mensage.concat("?!?"))
  .then((newMensage) => console.log(newMensage))
  .catch((error) => console.log(error));
