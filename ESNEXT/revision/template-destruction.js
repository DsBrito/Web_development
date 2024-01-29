//variables
{
    var A = 2;
    let B = 3;
    const C = 4;
    console.log(A, B, C);
}

//templete string
console.log('\n' + '- Templete string:');
{
    const name = 'oscar';
    const lastName = 'barajas';
    const fullName = name + ' ' + lastName;
    const fullName2 = `${name} ${lastName}`;
    console.log(fullName);
    console.log(fullName2);
}

//Destructuring
console.log('\n' + '- Destructuring:');
{
    const person = {
        name: 'oscar',
        age: 32,
        password: '12345',
    };
    const { name, age, password } = person;
    console.log(name, age, password);
}

console.log('\n' + '- Destructuring with function:');
{
    const person = {
        name: 'oscar',
        age: 32,
        password: '12345',
    };
    const returnPerson = ({ name, age, password, range = 'developer' }) => {
        console.log(name, age, password, range);
    };
    returnPerson(person);
}

console.log('\n' + '- Destructuring with array:');
const [a, b, c, d, e] = [1, 2, 3, 4, 5];
console.log(a, b, c, d, e);

//Rest Operator
console.log('\n' + '- Rest Operator:');
const [f, g, h, ...rest] = [1, 2, 3, 4, 5];
console.log(f, g, h, rest);
