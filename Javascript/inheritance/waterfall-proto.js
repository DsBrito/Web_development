//inheritance in waterfall

const old_father = {attribute_1: 'OLD_FATHER'}
const father = {__proto__: old_father, attribute_2: 'FATHER'}
const child = {__proto__: father, attribute_3: 'CHILD'}


console.log("- inheritance of child->");
console.log(child.attribute_1,",",child.attribute_2,",", child.attribute_3);

console.log("\n" + "- inheritance of father->");
console.log(father.attribute_1,",",father.attribute_2);

console.log("\n" + "- inheritance of old_father->");
console.log(old_father.attribute_1);


