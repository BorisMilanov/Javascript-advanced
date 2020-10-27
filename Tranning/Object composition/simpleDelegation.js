let person = [{
        name: 'Boris',
        age: 24
    },
    {
        hair: 'short'
    },
    {
        height: 180
    }
]

const delegation = (a, b) => Object.assign(Object.create(a), b)
const result = person.reduceRight(delegation,{})
console.log(result)