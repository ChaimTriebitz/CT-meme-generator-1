var gElCanvas
var gCtx

function onInit() {
	gElCanvas = document.getElementById('canvas-meme')
	gCtx = gElCanvas.getContext('2d')
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
function onSetInputs(ev, elForm) {
	const elInputs = elForm.querySelectorAll('input')
	elInputs.forEach((input) => {
		switch (input.name) {
			case 'text':
				setLineTxt(input.value)
				console.log(input.value)
				break
			case 'color':
				setColorTxt(input.value)
				break
			case 'increase' || 'decrease':
				if (ev.type === 'click') setSizeTxt(ev.path[0].name)
				break
			case 'line-break':
				if (ev.path[0].name === 'line-break')
					setBreakLine(elForm.firstElementChild)
				break
			default:
				break
		}
	})
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
	console.log(txtLine)
	// gCtx.beginPath()
	gCtx.textBaseline = 'center'
	gCtx.textAlign = txtLine.align
	// gCtx.lineWidth = 0.5
	gCtx.font = `${txtLine.size}px Impact`
	gCtx.fillStyle = txtLine.color
	gCtx.fillText(txtLine.txt, 0, 50 * (meme.selectedLineIdx + 1))
	gCtx.strokeStyle = 'black'
	gCtx.strokeText(txtLine.txt, 0, 50 * (meme.selectedLineIdx + 1))
	// gCtx.closePath()
}
