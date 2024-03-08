function User() {
    this.name = 'John';
    this.isAdmin = false;
};

console.log("- User prototype: " + User.prototype);

const obj1 = new User;
const obj2 = new User;
const obj3 = new User;

console.log("- Setences: ");
console.log("\n" + "- obj1.__proto__ === obj2.__proto__");
console.log(obj1.__proto__ === obj2.__proto__);

console.log("\n" + "- User.prototype === obj1.__proto__");
console.log(User.prototype === obj1.__proto__);

User.prototype.talk = function () {
    console.log("\n" + "- Hellou!, my name is " + this.name);
};

obj1.talk();

obj2.name="Lucy";
obj2.talk();

console.log("\n" + "- User.__proto__ === Function.__proto__: ");
console.log(User.__proto__ === Function.__proto__);

//type function
console.log("\n" + "- types:")
console.log("- string type : " + typeof String); 
console.log("- function type : " + typeof Function);
console.log("- object type : " + typeof Object);
console.log("- array type : " + typeof Array);

String.prototype.reverse = function () {
    return this.split('').reverse().join('');
}
console.log("\n" + "- reverse string: " + "Lucy in the Sky with diamonds".reverse());

Array.prototype.first = function () {
    return this[0];
}   

console.log("\n" + "- first element: " + [1, 2, 3, 4, 5].first());


 