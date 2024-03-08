const car = {
    current_speed:0,
    max_speed:200,

    add_speed(delta){
        if(this.current_speed + delta <= this.max_speed){
            this.current_speed +=delta;
        }
        else{
            this.current_speed = this.max_speed;
        }
    },

    status(){
        return `${this.current_speed}Km/h of ${this.max_speed}Km/h`
    }

}

const BMW = {
    model: 'BMW X5',
    max_speed: 250,

}

const Peugeot  = {
    model: 'Peugeot 208',
    status(){
        return `${this.model}: ${super.status()}`
    }
}

Object.setPrototypeOf(BMW, car);
Object.setPrototypeOf(Peugeot, car);

console.log("- car type -> ");
console.log(BMW);
console.log(Peugeot);

Peugeot.add_speed(20);
console.log(Peugeot.status());
