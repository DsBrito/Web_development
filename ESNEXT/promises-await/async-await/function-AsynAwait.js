function getRadomNumbers(min, max, equal) {
  if (min > max) {
    [max, min] = [min, max];
  }
  return new Promise((resolve, reject) => {
    const math = max - min + 1;
    const radom = parseInt(Math.random() * math) + min;
    if (equal.includes(radom)) {
      reject("Includes repeated number!!");
    } else {
      resolve(radom);
    }
  })
}

//async retorna uma promessa
async function MegaSena(qtd,count=1) {
  const numbers = [];
  try {
    for (let _ of Array(qtd).fill()) {
      numbers.push(await getRadomNumbers(1, 60, numbers));
    }
    return numbers;
  } catch (error) {
    if(count >10)//throw " -> reject(Includes repeated number!!)";
      {      MegaSena(qtd, count +1)
      }
      else{
      return MegaSena(qtd, count +1)
    }
  }
}

//getRadomNumbers(1, 5, [1, 2, 4])
   //.then((num) => num * 10)
  // .then((r) => `The random number is : ${r}`)
  // .then(console.log).catch(console.log)

MegaSena(5).then(console.log).catch(console.log);
