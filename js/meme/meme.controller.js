var gElCanvas
var gCtx

function onInit() {
	gElCanvas = document.getElementById('canvas-meme')
	gCtx = gElCanvas.getContext('2d')
	// addEventListeners()
}
function renderMeme() {
	const meme = getMeme()
	const elImg = getElImg()
	drawImg(elImg)
	drawText(meme)
}
function onImgSelect(id) {
	document.querySelector('.section-gallery').hidden = true
	document.querySelector('.section-meme').hidden = false
	createMemeImg(id)
	renderMeme()
}

function clearCanvas() {
	gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
}
function drawImg(elImg) {
	elImg.onload = () =>
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
