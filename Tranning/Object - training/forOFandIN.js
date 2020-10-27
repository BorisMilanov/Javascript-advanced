const arr = ['Gosho','Pesho']
arr.name = 'Aga'
for (const key in arr) {
    console.log(arr[key])
}
for (const iterator of arr) {
    console.log(iterator)
}
let obj = {a: 1, b: 2, c: 3};
for (const key in obj) {
  console.log(`obj.${key} = ${obj[key]}`);
}