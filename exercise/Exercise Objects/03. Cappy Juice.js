function name(data) {
    let parsedData=data.reduce((juiceAcc,kvpJuice)=>
    {
        let [juiceName,quantity] = kvpJuice.split("=>")
        if (juiceAcc.currentJuice.hasOwnProperty(juiceName)) {
         
           juiceAcc.currentJuice[juiceName] +=  Number(quantity)
        
        }
        else{
            juiceAcc.currentJuice[juiceName] = Number(quantity);
        }
        
        let bottleQ = Math.floor(juiceAcc.currentJuice[juiceName] / 1000) // stava 0
        if (bottleQ) {
            juiceAcc.complitedJuice[juiceName] = bottleQ;
        }
        return juiceAcc;
    },{complitedJuice:{},currentJuice:{}}
    ).complitedJuice
    for (const key in parsedData) {
       console.log(`${key}=> ${parsedData[key]}`)
    }
}
name(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549'])