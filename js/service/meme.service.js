var gElImg
var gMeme = {
	selectedImgId: 1,
	selectedLineIdx: 0,
	lines: [
		{ txt: 'I sometimes eat Falafel', size: 20, align: 'left', color: 'red' },
	],
}
function createMemeImg(id) {
	const img = gImgs.find((img) => img.id === id)
	const elImg = new Image()
	elImg.src = img.url
	gElImg = elImg
	gMeme.selectedImgId = id
}
function setLineTxt(txt) {
	gMeme.lines[gMeme.selectedLineIdx].txt = txt
}
function setColorTxt(val) {
	gMeme.lines[gMeme.selectedLineIdx].color = val
}
function setSizeTxt(val) {
	if (val === 'increase') {
		gMeme.lines[gMeme.selectedLineIdx].size += 1
	} else {
		gMeme.lines[gMeme.selectedLineIdx].size -= 1
	}
}
function setBreakLine(elTxt) {
	elTxt.value = ''
	gMeme.selectedLineIdx++
	gMeme.lines.push({ txt: '', size: 20, align: 'left', color: 'red' })
	console.log(gMeme)
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
