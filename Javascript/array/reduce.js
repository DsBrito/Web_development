//reduce is a function that takes an array and reduces it to a single value

const users = [
    {name: 'John', age: 34, eight: 1.7, weight: 80, sex: 'M', is_subscribed: true},
    {name: 'Erika', age: 19, eight: 1.67, weight: 62, sex: 'F', is_subscribed: false},
    {name: 'Jason', age: 25, eight: 1.80, weight: 70, sex: 'M', is_subscribed: false},
    {name: 'Wilian', age: 21, eight: 1.50, weight: 67, sex: 'M', is_subscribed: true}, 
    {name: 'Emily', age: 29, eight: 1.70, weight: 65, sex: 'F', is_subscribed: false}
];

//reduce
console.log("\n" + "- reduce age: ");
const totalAge = users.reduce((age, user) => {
    return age + user.age;
}, 0);

console.log(totalAge);


//reduce with map
console.log("\n" + "- reduce age with map: ");
console.log("accumulator + current values: ")
const totalWeight = users.map(a => a.age).reduce(function(accumulator, current) {
    console.log(accumulator, current);
    return accumulator + current;
});
console.log(totalWeight);


//reduce boolean value

console.log("\n" + "- reduce boolean value: ");
const is_subscribed = users.reduce((is_subscribed, user) => {
    return is_subscribed && user.is_subscribed;
}, true);

console.log(is_subscribed);