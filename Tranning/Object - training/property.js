function name(obj,propertyName) {
    console.log(obj[propertyName])//tova dostapva propartito
    //kogato ne znaem propertyto
    console.log(obj.propertyName)//tova dava undifined
}
let person = {name:'Pesho'}
name(person,'name')