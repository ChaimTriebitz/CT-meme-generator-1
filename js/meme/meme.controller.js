var gElCanvas
var gCtx
window.addEventListener('resize', () => {
	resixeCanvas()
	createMemeImg(gMeme.selectedImgId)
	renderMeme()
})
function onInit() {
	gElCanvas = document.getElementById('canvas-meme')
	gCtx = gElCanvas.getContext('2d')
}
function renderMeme() {
	const meme = getMeme()
	const elImg = getElImg()
	resixeCanvas()
	drawImg(elImg)
	drawText(meme)
}
function onImgSelect(id) {
	document.querySelector('.section-gallery').hidden = true
	const elMemeSection = document.querySelector('.meme-content-container')
	elMemeSection.childNodes.forEach((el) => {
		console.log(el)
		el.hidden = false
	})
	createMemeImg(id)
	renderMeme()
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

function clearCanvas() {
	gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
}
function drawImg(elImg) {
	gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}
function drawText(meme) {
	const txtLine = meme.lines[meme.selectedLineIdx]
	gCtx.textBaseline = 'center'
	gCtx.textAlign = txtLine.align
	gCtx.lineWidth = 1
	gCtx.font = `${txtLine.size}px Impact`
	gCtx.fillStyle = txtLine.color
	gCtx.fillText(txtLine.txt, 5, 50 * (meme.selectedLineIdx + 1) + txtLine.yPos)
	gCtx.strokeStyle = 'black'
	gCtx.strokeText(
		txtLine.txt,
		5,
		50 * (meme.selectedLineIdx + 1) * txtLine.yPos
	)
}

function onInputText(elForm) {
	const elInput = elForm.querySelector('[name=text]')
	setLineTxt(elInput.value)
	renderMeme()
}
function onChangeColor(elForm) {
	const elInput = elForm.querySelector('[name=text-color]')
	setColorTxt(elInput.value)
	renderMeme()
	// reloadTextArea()
}
function onTextDecrease() {
	setSizeTxt(-1)
	reloadTextArea()
}
function onTextIncrease() {
	setSizeTxt(1)
	reloadTextArea()
}
function onTextBraekLine() {
	reloadTextArea()
	setBreakLine()
}
function onTextSwichLine(elBtn) {
	reloadTextArea()
	switch (elBtn.innerText) {
		case 'end':
			setSwichLine(gElCanvas.height - 75)
			elBtn.innerText = 'start'
			break
		case 'start':
			elBtn.innerText = 'end'
			setSwichLine(1)
			break

		default:
			break
	}
}
function reloadTextArea() {
	const elTxt = document.querySelector('[name=text]')
	elTxt.value = ''
	elTxt.focus()
}
function resixeCanvas() {
	var elCanvasContainer = document.querySelector('.canvas-container')
	gElCanvas.width = elCanvasContainer.offsetWidth - 50
	gElCanvas.height = elCanvasContainer.offsetWidth - 50
}
function onSearchImg(elIcon) {
	const elSearchBar = elIcon.closest('div')
	elSearchBar.classList.toggle('active')
	elSearchBar.querySelector('.search').focus()
	console.log(elSearchBar)
}
