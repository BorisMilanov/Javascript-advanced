function  negativePositiveNumbers(params) {
    params = params.map(Number);
    let result = [];
    for (const iterator of params) {
        if(iterator < 0){
            result.unshift(iterator)
        }else{
            result.push(iterator)
        }

    }
    result.forEach(el => console.log(el))
}
negativePositiveNumbers([3, -2, 0, -1])