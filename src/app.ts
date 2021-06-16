import { Apple, Pear } from './fruit';
import { Person } from './person';

const test = 1234;

const array = [ 1, 2, 3 ];
console.log(array);

if (test ===1234) {
    console.log('something');
}

const person = new Person('Mike', 'Colby');
console.log(person);

console.log(new Apple('Apple'));
console.log(new Pear('Pear'));

// test
console.log(test);

function poop () {
    const person = {
        firstName: 'Mike',
        lastName: 'Colby',
        age: 32
    };

    console.log(person);

    const test = `${ person.firstName } ${ person.lastName }`;

    // test
    console.log(`test ${ test }`);

    // comment
    console.log(1);

    // comment
    console.log(2);
}

poop();

const blah = {
    dog: 'woof',
    '0x000': 1234
};
console.log(blah);