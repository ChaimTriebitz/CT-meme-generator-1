var gImgIdx

renderGallery()
function renderGallery() {
	const imgs = getImgsForDisplay()
	const strHtmls = imgs.map(
		(img) =>
			`<img class="gallery-image" src="${img.url}" onclick="onImgSelect('${img.id}')"/>`
	)
	document.querySelector('.images-container').innerHTML = strHtmls.join('')
}
function onSearchImg(elIcon) {
	const elSearchBar = elIcon.closest('div')
	elSearchBar.classList.toggle('active')
	elSearchBar.querySelector('.search').focus()
	console.log(elSearchBar)
}
function onSetRandomImg() {
	const elImgContainer = document.querySelector('.images-container')
	elImgContainer.classList.add('random-pick')
	const intervalId = setInterval(mixGallery, 531, elImgContainer)
	setTimeout(() => {
		clearTimeout(intervalId)
		onImgSelect(gImgIdx)
	}, 3511)
}
function mixGallery(elImgContainer) {
	const rondomInt = getRandomInt(1, 16)
	elImgContainer.style.transform = `translate(${-430 * rondomInt}px)`
	gImgIdx = rondomInt
}
