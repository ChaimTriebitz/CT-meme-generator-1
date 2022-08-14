var gStickers = []
var gCurrSticker
var gElSticker
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']
var gElImg
var gMeme = {
	selectedImgId: 1,
	selectedLineIdx: 0,
	lines: [
		{
			txt: 'I sometimes eat Falafel',
			size: 20,
			align: 'left',
			color: 'black',
			yPos: 0,
		},
	],
}

function setLineTxt(txt) {
	gMeme.lines[gMeme.selectedLineIdx].txt = txt
}
function setColorTxt(val) {
	gMeme.lines[gMeme.selectedLineIdx].color = val
}
function setSizeTxt(val) {
	gMeme.lines[gMeme.selectedLineIdx].size += val
	return gMeme.lines[gMeme.selectedLineIdx].size
}
function setBreakLine() {
	gMeme.selectedLineIdx++
	gMeme.lines.push({
		txt: '',
		size: 20,
		align: 'left',
		color: 'black',
		yPos: gMeme.selectedLineIdx,
	})
}
function getMeme() {
	return gMeme
}
function getImgs() {
	return gImgs
}
function getElImg() {
	return gElImg
}
function downloadCanvas(elLink) {
	const data = gElCanvas.toDataURL()
	elLink.href = data
	elLink.download = 'my-image.jpg'
}
function createMemeImg(id) {
	let img
	if (id > 1000) {
		img = gImgs.find((img) => img.id === id)
		gMeme.selectedImgId = id
	} else img = gImgs[id]
	const elImg = new Image()
	elImg.src = img.url
	gElImg = elImg
	gMeme.selectedImgId = img.id
}
_setStikers()
console.log(gStickers)
function _setStikers() {
	let strHtmls = ''
	for (let i = 0; i < 59; i++) {
		const sticker = {
			id: makeId(5),
			idx: i,
			url: `1 (${i + 1}).jpg`,
			isDrag: false,
		}
		gStickers.push(sticker)
		strHtmls += `<img id="${i + 1}" src="img/STIKRIM/1 (${
			i + 1
		}).jpg" class="sticker" onclick="onStikerClicked(event,this)"/>`
	}
	document.querySelector('.stickers-container').innerHTML = strHtmls
}
function getStickers() {
	return gStickers
}
function isStickerClicked(clickedPos) {
	console.log(gStartPos.x)
	const distance = Math.sqrt(
		(pos.x - clickedPos.x) ** 2 + (pos.y - clickedPos.y) ** 2
	)
	return distance <= 50
}
function getEvPos(ev) {
	var pos = {
		x: ev.offsetX,
		y: ev.offsetY,
	}
	if (gTouchEvs.includes(ev.type)) {
		ev.preventDefault()
		ev = ev.changedTouches[0]
		pos = {
			x: ev.pageX - ev.target.offsetLeft,
			y: ev.pageY - ev.target.offsetTop,
		}
	}
	return pos
}
function addListeners() {
	addMouseListeners()
	addTouchListeners()
}
function addMouseListeners() {
	gElCanvas.addEventListener('mousemove', onMove)
	gElCanvas.addEventListener('mousedown', onDown)
	gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
	gElCanvas.addEventListener('touchmove', onMove)
	gElCanvas.addEventListener('touchstart', onDown)
	gElCanvas.addEventListener('touchend', onUp)
}
function createSticker() {
	let sticker = gStickers[gCurrSticker]
	const elSticker = new Image()
	elSticker.src = sticker.url
	gElSticker = elSticker
	console.log(gElSticker)
}
function setStickerDrag(isDrag) {
	gStickers.isDrag = isDrag
}

function moveSticker(dx, dy) {
	gStickers[gCurrSticker].pos.x += dx
	gStickers[gCurrSticker].pos.y += dy
}
