function cooking(params) {
    let n = parseInt(params[0]);
    let fun = {
        chop: (x) => x /2,
        dice: (x) => Math.sqrt(x),
        spice: (x) => x + 1,
        bake: (x) => x * 3,
        fillet: (x) => x * 0.8
    }
    for (let i = 1; i < params.length; i++) {
        n = fun[params[i]](n)
        console.log(n)
        
    }
}
cooking(['9', 'dice', 'spice', 'chop', 'bake', 'fillet'])