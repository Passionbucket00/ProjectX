function doSomething() {
    return `Hi, I'm a named function!`;
}

const person = {
    greet() {
        return `Hello`;
    }
}

class Person {
    greet() {
        return `Hello, I'm a methond of a Person class`;
    }
}

console.log(doSomething());

console.log(person.greet());

let me = new Person();
console.log(me.greet());

const say = () => 'Hello';
console.log(say());

const sayou = message => message.toUpperCase();

const greet = () => 'Hello';
console.log(greet());

