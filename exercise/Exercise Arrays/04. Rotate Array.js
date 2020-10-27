function name(params) {
   let rotation= +params.pop() % params.length;
   for (let i = 0; i < rotation; i++) {
       params.unshift(params.pop())
       
   }
   console.log(params.join(' '))
}
name(['1', 
'2', 
'3', 
'4', 
'2'])