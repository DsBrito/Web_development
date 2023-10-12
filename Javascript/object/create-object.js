//literal object
const object1 = {}
console.log("- object1 info -> " + object1);
console.log(object1);

//using object constructor
const object2 = new Object
console.log("- object2 info -> " + object2);
console.log(object2);

//using your function constuctor
function object3 (type, name, year){
   this.type = type; //public attribute
   this.name = name; //public attribute
   this.year = year; //public attribute
}
console.log("- object3 info -> " + object3);
const obj3 = new object3('car', 'CRETA', '2022')
console.log(obj3);

//function factory
function createObject4(name,price,amount){
    return{
        name,
        price,
        amount,
        getValueToPay(){
            return (price * amount)
        }
    }
}

console.log("- object4 info -> " + createObject4);
const obj4 = new createObject4('Nisan', 20000000, 7);
console.log(obj4);
console.log("- value to pay -> " + obj4.getValueToPay());


//using object creator
const object5 = Object.create(null)
object5.name = 'Lucy';
console.log(object5);


//using jason
const fromJSON = JSON.parse('\n'+'{"info": "im a json code"}');
console.log("- json -> " + fromJSON.info);
console.log(fromJSON.info);
