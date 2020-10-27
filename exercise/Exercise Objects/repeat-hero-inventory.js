function name(params) {
    let obj = JSON.stringify(params.reduce((acc,heroString)=>{ 
    let [name,level,items] = heroString.split(' / ');
    acc.push({name,level:Number(level),items: items ? items.split(',').map(x => x.trim()):[]})
    
    //acc.push({name,level:Number(level),items:items ? items.split(',').map(x => x.trim()):[]});
    return acc;},[]
    ))
    console.log(obj)
}

name(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])