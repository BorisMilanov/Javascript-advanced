let arr = [4,7,8,1,2,4]
arr.sort((a,b) => a - b)// ako ne e s arow funkicq sortira kato string
console.log(arr)
let arr1 = ['a','c','z','b','a']
arr1.sort((a,b)=> a.localeCompare(b));// sortira i obekti po string
console.log(arr1)
let arr2=arr1.slice(1,3);
console.log(arr2)