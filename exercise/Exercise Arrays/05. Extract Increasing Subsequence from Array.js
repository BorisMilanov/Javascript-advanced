function name(params) {
    let output=params.reduce((acc,currElement) =>{
        const lastElement = acc[acc.length - 1];//pushva currenElement pri acc i posle sravnq posledniq element koito e pushnal
       // const lastElement = acc[0];
        if (currElement >= lastElement || lastElement === undefined) {
            acc.push(currElement);
        }
        return acc;
    },[]

    )
    console.log(output.join('\n'))
}
name([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24])