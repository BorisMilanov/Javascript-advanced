let arr = ['a',1 ,32,'b']
let arrFiltred = arr.filter(item => !isNaN(item))
let arrFiltreda = arr.filter(item => typeof(item) === 'string')
console.log(arrFiltred)
console.log(arrFiltreda)