function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
        
    }
    class Student extends Person {

    }

    return {
        Person,
        Teacher,
        Student

    }
}
// URGsprFN