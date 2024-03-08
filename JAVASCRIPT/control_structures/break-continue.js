const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (x in num) {
  if (x == 5) {
    console.log("- command -> break here \n");
    break;
  }
  console.log("- with break -> " + `${x} = ${num[x]}`);
}

for (y in num) {
  if (y == 5) {
    console.log("- \n command -> continue here \n");
    continue;
    console.log("- command -> continue ignore here ");
    sda;
    sad;
    IGNORE_ALL_COMMAND_HERE;
  }
  console.log("- with continue -> " + `${y} = ${num[y]}`);
}

externo: for (a in num) {
  for (b in num) {
    if (a == 2 && b == 3) {
      console.log("- \n command -> break externo here \n");
      break externo;
    }
    console.log("- for with break externo  -> " + `Par = ${a},${b}`);
  }
}
