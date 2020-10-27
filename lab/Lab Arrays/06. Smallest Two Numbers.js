function name(params) {
    params.sort((a,b) => a-b).slice(0,2).forEach(element => {
        console.log(element)
    });
}
name([30, 15, 50, 5])