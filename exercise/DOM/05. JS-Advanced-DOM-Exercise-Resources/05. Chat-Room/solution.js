function solve() {
   let buttonSend = document.getElementById('send')
   let input = document.getElementById('chat_input')
   let messageField = document.getElementById('chat_messages')
   buttonSend.addEventListener('click',(e) =>
   {
      let newElement = document.createElement('div')
      newElement.innerHTML = input.value;
      newElement.classList.add('message','my-message')
      messageField.appendChild(newElement)
      input.value = '';
   })
}


