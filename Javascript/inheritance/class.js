class Animal {
    constructor() {}
    braath() {
        console.log("Breathing");
    }
}
 
class Cat extends Animal{
    constructor() {
        super() //call the constructor of the superclass (animal)
    }
    sound() {
        console.log("miao");
    }
}
 
const c = new Cat()
 
c.braath();
c.sound();