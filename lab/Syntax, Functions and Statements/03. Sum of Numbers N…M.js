function name(n,m) {
    let sum = 0;
    let start = +n;//Vnimavai parvo kastvai kam chislo 
    let end = +m;
    for (let index = start; index <= end; index++) {
        (sum) += Number(index);
        
    }
    console.log(+(sum))
}
name (-8,20)