var gElCanvas
var gCtx

function onInit() {
	gElCanvas = document.getElementById('canvas-meme')
	gCtx = gElCanvas.getContext('2d')
	drawText('gogo', gElCanvas.width / 2, gElCanvas.height / 2)
}

function onSetMeme() {
	const meme = drawImgFromlocal()
}

function drawImgFromlocal() {
	var img = new Image()
	console.log(img)
	img.src = 'img/square/1.jpg'
	img.onload = () => {
		gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height) //img,x,y,xend,yend
	}
}
function drawText(txt, x, y) {
	gCtx.beginPath()
	gCtx.textBaseline = 'middle'
	gCtx.textAlign = 'center'
	gCtx.lineWidth = 0.5
	gCtx.font = '40px david'
	gCtx.fillStyle = 'yellow'
	gCtx.fillText(txt, x, y)
	gCtx.strokeStyle = 'green'
	gCtx.strokeText(txt, x, y)
	gCtx.closePath()
}
