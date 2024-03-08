
//father is the prototype of son_one
const father = {name: 'erik', hair: 'black', eyes: 'blue', age: 45, weight: 80, height: 1.8};
const son_one = Object.create(father);

//add a attribute to son_one in dinamic form
son_one.name = 'lucas';
console.log('- son one hair: ' + son_one.hair);

son_two = Object.create(father,{
    name: {value: 'jose', writable: false, enumerable: true},
    age: {value: 20, writable: false, enumerable: true},
    weight: {value: 60, writable: true, enumerable: true},
    height: {value: 1.7, writable: true, enumerable: true}
});

console.log('- son two name: ' + son_two.name);


// if some attribute came by inheritance or belongs to the object.
for(let key in son_two){
    son_two.hasOwnProperty(key) ? console.log(key) : console.log("- by inheritance: " + key);
}

