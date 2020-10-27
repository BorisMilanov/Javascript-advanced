function createArticle() {
	let title = document.getElementById('createTitle');
	let textContent = document.getElementById('createContent')
	let articles = document.getElementById('articles')

	let textNode = document.createElement('h3')
	let textContentNode = document.createElement('p')
	let article = document.createElement('article')
	if (title.value !== '' && textContent.value !== '') {
	textNode.innerText  = title.value
	textContentNode.innerText  = textContent.value;
	
	textNode.classList.add('articles')
	textContentNode.classList.add('articles')

	articles.appendChild(textNode)
	articles.appendChild(textContentNode)
	articles.appendChild(article)
	
	}
	title.value = ''
	textContent.value = ''
}