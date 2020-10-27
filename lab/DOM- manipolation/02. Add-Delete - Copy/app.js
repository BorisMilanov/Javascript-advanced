function addItem() {
    let input = document.getElementById('newText')
    let items = document.getElementById('items')
    let value = input.value
    if (!input){
        return
    }
    let li = document.createElement('li')

    let a = document.createElement('a')
    a.innerText = '[Delete]'
    a.href = "#"
    //let submit =value.append(a)
    const textNode = document.createTextNode(value)
    li.appendChild(textNode)
    li.appendChild(a)
    items.appendChild(li)

    items.addEventListener('click',function (e)
    {
        if(e.target.nodeName !== 'A'){
            return
        }
        
        e.target.parentElement.remove()
    }
    )
    value = ''
}