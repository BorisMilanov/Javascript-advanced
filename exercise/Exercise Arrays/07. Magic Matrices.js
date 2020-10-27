function name(params) {
    let firstSum = params[0].reduce((a,b)=> a + b,0)
    let isTrueBool = true;
    for (let row = 0; row < params.length; row++) {
        let rowSum = params[row].reduce((a,b)=> a + b,0)
        if (rowSum !== firstSum) {
            isTrueBool = false;
            break;
        }
        let colSum = 0;
        for (let col = 0; col < params[row].length; col++) {
            //let colSum = params[row][col].reduce((a,b)=> a + b,0)
            colSum += params[row][col];


        }
        if (colSum !== firstSum) {
            isTrueBool = false;
            break;
        }
        
    }
    console.log(isTrueBool)
}
name([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])