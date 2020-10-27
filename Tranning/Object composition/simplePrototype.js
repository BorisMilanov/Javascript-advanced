const personPrototype = {
    getName(){
        return this.name
    }
};

function createPerson(name){
    const obj = Object.create(personPrototype);
    obj.name = name;
    return obj;
}

const ivan = createPerson('Ivan')
const pesho = createPerson('Pesho')
console.log(ivan.getName())
console.log(pesho.getName())