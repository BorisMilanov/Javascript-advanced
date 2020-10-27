function name(params) {
    let arr =[]
    for (let i = 0; i < params.length; i++) {
       
        if (i% 2 ==1) {
            arr.push(params[i] * 2);
            
        }
        
        
    }
    arr.reverse();
    console.log(arr.join('\n'))
}
name([10, 15, 20, 25])