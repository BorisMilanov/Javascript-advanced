function Person(name, email) {
    this.email = email;

    this.getName = function () {
        return name;
    }

    this.setName = function (newName) {
        name = newName;
        return name;
    }
}

Person.prototype.geAllData = function () {
    return {
        name: this.getName,
        email: this.email
    }
}

const ivan = new Person('ivan', 'ivan@abv.bg');

function Teacher(name, email, subject) {
    Person.call(this, name, email)
    this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);

Teacher.prototype.geAllData = function () {
    const proto = Object.getPrototypeOf(this);
    const protoProto = Object.getPrototypeOf(proto)
    return{
        ...protoProto.geAllData.call(this),
        subject: this.subject
    }
}

const teacher = new Teacher('Boris', 'boris@something.com', 'Ecmascript');

console.log(teacher.geAllData())