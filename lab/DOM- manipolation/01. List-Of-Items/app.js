function addItem() {
    let listInput = document.getElementById('newItemText')    
    let listCreate = document.createElement('li')
    let addListId = document.getElementById('items')
    listCreate.textContent = listInput.value;// zadavash mu stoinost
    addListId.appendChild(listCreate)//dondurkash deteto sled stoinosta
    listInput.value = '';

}