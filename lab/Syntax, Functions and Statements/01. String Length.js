function name(param1,param2,param3) {
    let firstArgs = param1.length;
    let secondArgs = param2.length;
    let thirdArgs = param3.length;
    let sumLength = firstArgs + secondArgs + thirdArgs;
    console.log(sumLength);
    console.log(Math.floor(sumLength/3));
}
name('chocolate', 'ice cream', 'cake')