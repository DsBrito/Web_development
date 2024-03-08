function getPrice(tax = 0, coin = "R$") {
  return `${coin} ${this.price * (1 - this.descount) * (1 + tax)}`;
}

const produt = {
  name: "Notebook",
  price: 4589,
  descount: 0.15,
  getPrice,
};

global.price = 20;
global.descount = 0.1;
console.log(getPrice());
console.log(produt.getPrice());

const car = { price: 49990, descount: 0.2 };

console.log(getPrice.call(car));
console.log(getPrice.apply(car));

console.log(getPrice.call(car, 0.17, "$"));
console.log(getPrice.apply(global, [0.17, "$"]));
