const user = {
    name: 'Noquitawa',
    years_old: 22,
    height: '1.98 cm',
    weight: '78 Kg',
    addres: 'Califórnia',
    
}


console.log("- object ->");
console.log(user);

//keys
console.log("\n" +"- keys ->");
console.log(Object.keys(user));

//values
console.log("\n" +"- values ->");
console.log(Object.values(user));

//values
console.log("\n" +"- entries (array with key/value) ->");
console.log(Object.entries(user));

//with for each
console.log("\n" + "- key/value with ForEach")
Object.entries(user).forEach(([key,value]) => {
    console.log(`${key}:${value}`);
})

//define property
Object.defineProperty(user,"birthday",{
    enumerable: true, //listable
    writable: false, // update
    value: "11/01/2000"
});

//using object assing
//create out and add
console.log("\n" + "- object assing ->");
const destine = {};
const obj1 = {one: '1'};
const obj2 = {two: '2'};
const obj3 = {three: '3'};
const obj4 = {four: '4'};
const obj5 = {five: '5', one: '10'};

const final_object = Object.assign(destine,obj1,obj2,obj3,obj4,obj5);
console.log(final_object);