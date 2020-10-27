function sum(params) {
   let firstEl = Number(params[0]); 
   let lastEl = Number(params[params.length -1]);
   console.log(firstEl + lastEl);
}
sum(['20', '30', '40'])