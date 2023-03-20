/*
 * Need a block with try {} + catch(erro) {...function (erro)} + finally
 */

//function erro
function fixUpperErro(erro) {
  throw new Error("Ops!! erro here..could not convert to upper case. ");
}

function printUpperCase(obj) {
  try {
    console.log("- real name -> " + obj.name);
    console.log("- up case fixed -> " + obj.name.toUpperCase());
  } catch (erro) {
    fixUpperErro(erro);
  } finally {
    console.log("- finally -> Done.");
  }
}

const obj = { hight: "1.70" };
printUpperCase(obj);

//const objX = { name: "Dionatas" };
//printUpperCase(objX);
