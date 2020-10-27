//'use strict'
const person = {
    firstName : 'Petar',
    lastName : 'Goshev',
    fullname: function () {
        return `${this.firstName} ${this.lastName}`
        
    }
    
}
Object.defineProperty(person,'age',{value: 24 , writable: false})
Object.freeze(person);//zamrazqva obekta bez promeni samo pri
//strict mode
Object.seal(person)//nemogat da se dobavqt novi
person.firstName ='a';
// console.log(person.fullname())
// console.log(person['fullname']())
// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(person.age)
for (const key in person) {
    console.log(person[key])
}


