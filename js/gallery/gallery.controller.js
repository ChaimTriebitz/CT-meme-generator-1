var gImgIdx
var gIsHamNav = false
renderGallery()
function renderGallery() {
	const imgs = getImgsForDisplay()
	const strHtmls = imgs.map(
		(img) =>
			`<img class="gallery-image" src="${img.url}" onclick="onImgSelect('${img.id}')"/>`
	)
	document.querySelector('.images-container').innerHTML = strHtmls.join('')
}

function mixGallery(elImgContainer) {
	const rondomInt = getRandomInt(1, 16)
	elImgContainer.style.transform = `translate(${-430 * rondomInt}px)`
	gImgIdx = rondomInt
}
function onOpenHeaderNav(elHam) {
	const elNav = document.querySelector('.main-header-content')
	if (!gIsHamNav) {
		elNav.style.transform = `translateY(${0}%)`
		gIsHamNav = true
	} else {
		elNav.style.transform = `translateY(${-100}%)`
		gIsHamNav = false
	}
}
