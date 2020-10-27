function name(params) {
   let output= params.sort().sort((firstName,secondName)=> firstName.length - secondName.length)
    console.log(output.join('\n'))
}
name(['test', 
'Deny', 
'omen', 
'Default'])