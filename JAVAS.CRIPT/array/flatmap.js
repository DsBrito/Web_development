//flatmap is a combination of map and flat


const users = [ {
    sector: 'TI',
       group:[{
            name: 'John',
            age: 34,
            profission: 'Developer',
            salary: 1000}, {    

            name: 'Erika',
            age: 19,
            profission: 'Designer',
            salary: 2000}, {

            name: 'Jason',
            age: 25,
            profission: 'Architect',
            salary: 3000}, {   

            name: 'Wilian',
            age: 21,
            profission: 'Developer',
            salary: 1000}]
        }, {
    sector: 'RH',
        group:[{
            name: 'Emily',
            age: 29,
            profission: 'Director',
            salary: 5000}, {

            name: 'Lucy',
            age: 23,
            profission: 'Manager',
            salary: 4000
        }]
    }, {
    sector: 'Marketing',
        group:[{
            name: 'Megan',
            age: 29,
            profission: 'Designer',
            salary: 3000}, {

            name: 'Lucy',
            age: 23,
            profission: 'Designer',
            salary: 2000
        }]
    }];

console.log("\n" + "- users: ");
console.log(users);


const getUsersN = user => user.name;
const getUsersS = user => user.salary;
const getUsersP = user => user.profission;
const getUsersA = user => user.age;



const getName = user => user.group.map(getUsersN);
const getSalary = user => user.group.map(getUsersS);
const getProfission = user => user.group.map(getUsersP);
const getAge = user => user.group.map(getUsersA);

console.log("\n" + "- get name: ");
console.log(users.map(getName));

console.log("\n" + "- get salary: ");
console.log(users.map(getSalary));

console.log("\n" + "- get profission: ");
console.log(users.map(getProfission));

console.log("\n" + "- get age: ");
console.log(users.map(getAge));


console.log("\n" + "- flatmap: ");

Array.prototype.myFlatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback));
};

const Name = users.myFlatMap(getName);
const Salary = users.myFlatMap(getSalary);
const Profission = users.myFlatMap(getProfission);
const Age = users.myFlatMap(getAge);

console.log("\n" + "- get name with flatmap: ");
console.log(Name);

console.log("\n" + "- get salary with flatmap: ");
console.log(Salary);

console.log("\n" + "- get profission with flatmap: ");
console.log(Profission);

console.log("\n" + "- get age with flatmap: ");
console.log(Age);