renderGallery()
function renderGallery() {
	const imgs = getImgsForDisplay()
	const strHtmls = imgs.map(
		(img) => `<img src="${img.url}" onclick="onImgSelect('${img.id}')"/>`
	)
	document.querySelector('.images-container').innerHTML = strHtmls.join('')
}
