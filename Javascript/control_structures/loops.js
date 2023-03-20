//loop with normal for
for (let i = 1; i <= 10; i++) {
  console.log("- loop normal for  -> " + `i = ${i}`);
}

//loop with for in
const player = {
  name: "Ds",
  last_name: "Brito",
  nickname: "Saty\n",
};

for (let attribute in player) {
  console.log("- loop for in  -> " + `${attribute} = ${player[attribute]}`);
}

//loop with while
let cont = 1;
while (cont <= 10) {
  console.log("- loop while  -> " + `cont = ${cont}`);
  cont++;
}

//loop do while
function getRadomNumber(min, max) {
  const value = Math.random() * (max - min) + min;
  return Math.floor(value);
}

let option = 15; //= -1;

do {
  op = getRadomNumber(0, 10000);
  console.log("- loop do while  (-1 for stop) -> radom number: " + ` ${op}.`);
  option--;
} while (option != -1);

console.log("command -> -1 here ");
