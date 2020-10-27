function name(data) {
    let parsedData = data.map(x => JSON.parse(x));
    let crateTable = content => `<table>${content}\n</table>`;
    let crateRow = content => `\n\t<tr>${content}\n\t</tr>`;
    let crateData = content => `\n\t\t<td>${content}</td>`;

    let result = parsedData.reduce((accRow,row) => {
        let tdForPerson = Object.values(row).reduce((tdAcc, td)=>{
            return tdAcc + crateData(td);
        },'');
        return accRow + crateRow(tdForPerson);
    },'')
    return crateTable(result)
}
console.log(name(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']))