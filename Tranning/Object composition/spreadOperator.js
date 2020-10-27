let objs = [{
        name: 'Peter',
        age: 20
    },
    {
        name: 'Roko'
    },
    {
        age: 24
    },
    {
        hair: 'brown'
    }
]

let concat = (a,o) => ({...a,...o})
const c = objs.reduce(concat)
console.log(c)