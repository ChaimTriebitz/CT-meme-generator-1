var gElCanvas
var gCtx
var gStartPos
var gIsStickersOn = false
window.addEventListener('resize', () => {
	resixeCanvas()
	createMemeImg(gMeme.selectedImgId)
	renderMeme()
})
function onInit() {
	gElCanvas = document.getElementById('canvas-meme')
	gCtx = gElCanvas.getContext('2d')
	addListeners()
	resixeCanvas()
}

function renderMeme() {
	const meme = getMeme()
	const elImg = getElImg()
	drawImg(elImg)
	drawText(meme)
}

function onImgSelect(id) {
	document.querySelector('.section-gallery').hidden = true
	const elMemeSection = document.querySelector('.meme-content-container')
	elMemeSection.childNodes.forEach((el) => {
		el.hidden = false
	})
	createMemeImg(id)
	resixeCanvas()
	renderMeme()
}
function onSetRandomImg() {
	const elImgContainer = document.querySelector('.images')
	elImgContainer.classList.remove('images-container')
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
function drawRect(x, y, xEnd, yEnd) {
	console.log(y, yEnd)
	gCtx.rect(x, y, xEnd, yEnd)
	gCtx.lineWidth = 2
	gCtx.strokeStyle = 'lightblue'
	gCtx.stroke()
}
function drawText(meme) {
	meme.lines.forEach((line) => {
		gCtx.restore()
		gCtx.textBaseline = 'center'
		gCtx.textAlign = 'center'
		gCtx.lineWidth = 0.3
		gCtx.font = `${line.size}px Impact`
		gCtx.fillStyle = line.color
		gCtx.fillText(line.txt, gElCanvas.width / 2, 50 * (line.yPos + 1))
		gCtx.strokeStyle = '#111111'
		gCtx.strokeText(line.txt, gElCanvas.width / 2, 50 * (line.yPos + 1))
		gCtx.save()
	})
}
function onInputText(elForm) {
	const elInput = elForm.querySelector('[name=text]')
	setLineTxt(elInput.value)
	renderMeme()
	const meme = getMeme()
	drawRect(
		50,
		50 * (meme.lines[meme.selectedLineIdx].yPos + 1) -
			meme.lines[meme.selectedLineIdx].size,
		gElCanvas.width - 100,

		meme.lines[meme.selectedLineIdx].size + 5
	)
}
function onChangeColor(elForm) {
	const elColorInput = elForm.querySelector('[name=text-color]')
	setColorTxt(elColorInput.value)
	const elTxtInput = elForm.querySelector('.meme-text-input')
	elTxtInput.style.color = elColorInput.value
	document.querySelector('.output-color .color').innerText = elColorInput.value
	document.querySelector('.output-color .color').style.color =
		elColorInput.value
	renderMeme()
	reloadTextArea()
}
function onTextDecrease() {
	const txtSize = setSizeTxt(-1)
	document.querySelector('.output-size .size').innerText = txtSize
	reloadTextArea()
}
function onTextIncrease() {
	const txtSize = setSizeTxt(1)
	document.querySelector('.output-size .size').innerText = txtSize
	reloadTextArea()
}
function onTextBraekLine() {
	setBreakLine()
	reloadTextArea()
}
function onAddStickers(elBtn) {
	const elStickers = document.querySelector('.stickers-container')
	elStickers.style.display = !gIsStickersOn ? 'grid' : 'none'
	gIsStickersOn = !gIsStickersOn
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
function onGoToGallery() {
	window.location.reload()
}
function onDown(ev) {
	const pos = getEvPos(ev)
	if (!isStickerClicked(pos)) return
	setCircleDrag(true)
	gStartPos = pos
	document.body.style.cursor = 'grabbing'
}

function onMove(ev) {
	const sticker = gStickers[gCurrSticker]
	console.log(sticker)
	if (!sticker.isDrag) return
	const pos = getEvPos(ev)
	const dx = pos.x - gStartPos.x
	const dy = pos.y - gStartPos.y
	moveSticker(dx, dy)
	gStartPos = pos
}

function onUp() {
	setStickerDrag(false)
	document.body.style.cursor = 'grab'
}
function onStikerClicked(ev, elSticker) {
	gCurrSticker = elSticker.id
	console.log(gCurrSticker)
	gStartPos = getEvPos(ev)
	// if (!isStickerClicked(gStartPos)) return
	setStickerDrag(true)
	document.body.style.cursor = 'grabbing'
	gStickers[gCurrSticker].isDrag = true
}
