function name(param) {
   let number = typeof(param);
   //let num = +param;
   let result = 0;
   if (number === 'number') {
       result = Math.pow(param,2) * Math.PI;
       console.log(result.toFixed(2));
   } 
   else{
       console.log(`We can not calculate the circle area, because we receive a ${number}.`);
   }
}
name('a')