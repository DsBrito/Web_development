// the variavel with underscore _var1 is a conversion for can access tha variale only in the internal mode

const functionX = {
    _x: 50,
    get value(){ return ++this._x}, 
    set value(y){ 
        if(y > this._x){
            return this._x = y
        }
        else {
            console.log("- erro")
        }
    }
}
console.log("- function ->")
console.log(functionX);

console.log("- using get -> ");
console.log(functionX.value,functionX.value); //using get

console.log("- using set -> ");

functionX.value = 20; //using set here
console.log(functionX.value,functionX.value); //using get

functionX.value = 1050; //using set here
console.log(functionX.value,functionX.value); //using get
