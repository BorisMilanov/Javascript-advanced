function name(params) {
    let result = {};
    for (let index = 0; index < params.length; index+=2) {
        result[params[index]] = parseInt(params[index+1])
        
    }
    console.log(result)
}
name(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])