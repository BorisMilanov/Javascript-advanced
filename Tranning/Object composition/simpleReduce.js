let dataArray = [{
    id: 'a',
    score: 1
}, {
    id: 'b',
    score: 2
}, {
    id: 'c',
    score: 5
}, {
    id: 'a',
    score: 3
}, {
    id: 'c',
    score: 2
}];

let result = dataArray.reduce((acc,curr,index,array)=>{
    let same = acc.find(e=>e.id === curr.id);
    if(!same){
        acc.push(curr)
    }
    else{
        same.score += curr.score;
    }
    return acc;
},[])

let str = JSON.stringify(result)
console.log(str)