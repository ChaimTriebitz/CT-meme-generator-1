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
			yPos: 1,
		},
	],
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
function setLineTxt(txt) {
	gMeme.lines[gMeme.selectedLineIdx].txt = txt
}
function setColorTxt(val) {
	gMeme.lines[gMeme.selectedLineIdx].color = val
}
function setSizeTxt(val) {
	gMeme.lines[gMeme.selectedLineIdx].size += val
}
function setBreakLine() {
	gMeme.lines.push({
		txt: '',
		size: 20,
		align: 'left',
		color: 'black',
		yPos: 1,
	})
	gMeme.selectedLineIdx++
	console.log(gMeme)
}
function setSwichLine(val) {
	gMeme.lines[gMeme.selectedLineIdx].yPos = val
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
