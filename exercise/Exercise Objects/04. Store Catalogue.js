function store(data) {
    let parsedData = data.reduce((acc,productLine)=>{
        let [name,price] = productLine.split(':').map(x => x.trim(""))
        if (acc.hasOwnProperty(name[0])) {
            //acc[name[0]] = [...acc[name[0]],productLine] vapros na izbor
            acc[name[0]].push(productLine)
        }else{
            acc[name[0]] = [productLine]
        }
        return acc;
    },{})
    Object.keys(parsedData).sort().map(x => {
        console.log(x)
        parsedData[x].sort().map(product => console.log(` ${product.split(' : ').join(': ')}`))

    }
    )
    
}
store(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'])