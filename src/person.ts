export class Person {
    private firstName: String;
    private lastName: String;

    // this is a person
    constructor(firstName: String, lastName: String) {
        // this is the constructors
        this.firstName = firstName;

        this.lastName = lastName;
    }

    public sayName = () => {
        const name = `Hello, my name is ${ this.firstName } ${ this.lastName }`;
        console.log(name);
    }

    public getName = (): String => {
        const name = `${ this.firstName } ${ this.lastName }`;
        return name;
    }
}