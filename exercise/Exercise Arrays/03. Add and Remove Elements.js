function name(params) {
    let arrAdd = []
    for (let i = 0; i < params.length; i++) {
        const command = params[i];
        if (command == "add") {
            arrAdd.push(i+1)
        }else if (command === "remove") {
            arrAdd.pop();
        }
        
    }
    console.log(arrAdd.length > 0 ? arrAdd.join('\n') : 'Empty')
}
name(['add', 
'add', 
'remove', 
'add', 
'add']
)