const lists = document.getElementById('lists')
const button = document.getElementById('button')
const input = document.getElementById('inputat')

button.addEventListener('click',function solve() {
    //lists.style.color = 'red'
    let createLi = document.createElement('li');
    let textContentat = input.value;
    createLi.append(textContentat)
    lists.append(createLi)
    input.value = ' '
})
