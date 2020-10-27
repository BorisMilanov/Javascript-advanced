function focus() {
    const inputs = document.querySelectorAll('input[type="text"]')
    for (let index = 0; index < inputs.length; index++) {
        inputs[index].addEventListener('focus',focusIn)
        inputs[index].addEventListener('blur',focusOut)     
    }

    function focusIn(e) {
        e.target.parentElement.classList.add('focused')
    }
    function focusOut (e){
        e.target.parentElement.classList.remove('focused')

    }
}