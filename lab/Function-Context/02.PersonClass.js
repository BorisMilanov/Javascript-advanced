class Person {
    constructor(firstName, secondName) {
        this.firstName = firstName;
        this.secondName = secondName;
    }

    get fullName() {
        return this.firstName + ' ' + this.secondName;
    }

    set fullName(splitedName) {
        let newFullName = splitedName.split(' ');
        if (newFullName.length !== 2) {
            return;
        }
        this.firstName = newFullName[0];
        this.secondName = newFullName[1];
    }
}

let person = new Person("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName) //Nikola
console.log(person.lastName) //Tesla