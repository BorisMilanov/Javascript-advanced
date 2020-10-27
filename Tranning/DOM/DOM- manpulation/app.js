const div = document.getElementsByTagName('button')[0]
div.addEventListener('click',divMouseOver)
function divMouseOver(e){
    const currentTarget = e;
    let {style: { backgroundColor }} = currentTarget;
    backgroundColor = backgroundColor || 'white';
    if (backgroundColor === 'white'){
        currentTarget.style.backgroundColor = 'black';
        currentTarget.style.color = 'white'
    }
    else{
        currentTarget.style.backgroundColor = 'white';
        currentTarget.style.color = 'black'
    }
}