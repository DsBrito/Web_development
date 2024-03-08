//CONSTRUCT HERE
function Car(vel_max = 200, state = 5) {
  //private attribute
  let vel_car = 0;

  //public method (need use this. for public method)
  this.speed_up = function () {
    if (vel_car + state <= vel_max) {
      vel_car += state;
    } else {
      vel_car = vel_max;
    }
  };
  this.speed_down = function () {
    if (vel_car + state <= vel_max) {
      vel_car -= state;
    } else {
      vel_car = 0;
    }
  };

  //for acess a private attribute need use a get function, this function will return the value
  this.getCarVel = function () {
    return vel_car;
  };
}

//need initialize a new object
const Uno = new Car();
console.log("- Uno speed -> " + Uno.getCarVel());
Uno.speed_up();
Uno.speed_up();
Uno.speed_up();
console.log("- Uno speed -> " + Uno.getCarVel());
Uno.speed_down();
Uno.speed_down();
console.log("- Uno speed -> " + Uno.getCarVel());

const Jaguar = new Car(500, 25);
console.log("\n- Jaguar speed -> " + Jaguar.getCarVel());
Jaguar.speed_up();
Jaguar.speed_up();
Jaguar.speed_up();
Jaguar.speed_up();
Jaguar.speed_up();
Jaguar.speed_up();
Jaguar.speed_up();
console.log("- Jaguar speed -> " + Jaguar.getCarVel());
Jaguar.speed_down();
Jaguar.speed_down();
Jaguar.speed_down();
console.log("- Jaguar speed -> " + Jaguar.getCarVel());

//CONSTRUCT HERE
function People() {
  //private attribute
  let nome = "dionatas";

  this.getName = function () {
    return nome;
  };
}
const p = new People();

console.log("\n\n\n- name is-> " + p.getName());
