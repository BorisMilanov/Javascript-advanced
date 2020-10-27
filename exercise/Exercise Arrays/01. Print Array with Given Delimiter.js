function name(params) {
    let el = params.pop();
    
    console.log(params.join(el))
}
name(['One', 
'Two', 
'Three', 
'Four', 
'Five', 
'-'])