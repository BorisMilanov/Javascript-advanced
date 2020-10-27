function toggle() {
    let div = document.getElementById('extra')
    let button = document.getElementsByClassName('button')[0]
    if (div.style.display === 'block') {
        button.textContent = 'More'

        div.style.display = 'none'
    }
    else {
        button.textContent = 'Less'

        div.style.display = 'block'

    }
}