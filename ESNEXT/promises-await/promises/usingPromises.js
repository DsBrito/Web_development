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

let names = [];

getClass("D").catch((error) => console.log(error.message));

getClass("A").then((student) => {
  names = names.concat(student.map((a) => `A: ${a.nome}`));
  getClass("B").then((student) => {
    names = names.concat(student.map((b) => `B: ${b.nome}`));
    getClass("C").then((student) => {
      names = names.concat(student.map((c) => `C: ${c.nome}`));
      console.log(names);
    });
  });
});

Promise.all([getClass("A"), getClass("B"), getClass("C")])
  .then((clases) => [].concat(...clases))
  .then((students) => students.map((student) => student.nome))
  .then((names) => console.log(names))
  .catch((error) => console.log(error.message));
