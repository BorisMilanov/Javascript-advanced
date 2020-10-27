function solve() {
    const box = document.getElementById('box');
    const ddList = document.getElementById('dropdown-ul')

    window.addEventListener('click', function(e){
        if (e.target.id === 'dropdown') {
            ddList.style.display = 'block';
            return;
        }
        if (e.target.closest('#dropdown-ul')) {
            const backgroundColor = e.target.innerText;
            box.style.backgroundColor = backgroundColor;
            box.style.color = 'black';
        }
        ddList.style.display = '';
    });
}