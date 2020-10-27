let obj1 = {
    name: 'Roko',
    age: 20
}
let obj2 = {
    age: 23
}
let obj3 = {
    kick: 'roundHouse'
}

function concatObj(a,b){
    return {...a,...b}
}

let result = {};
result = concatObj(result,obj1)
result = concatObj(result,obj2)
result = concatObj(result,obj3)
console.log(result)
