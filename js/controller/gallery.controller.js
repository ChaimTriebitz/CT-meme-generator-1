// var gElCanvas
// var gCtx

// function onInit() {
// 	gElCanvas = document.getElementById('canvas-meme')
// 	gCtx = gElCanvas.getContext('2d')
// 	resizeCanvas()
// }

// // The next 2 functions handle IMAGE UPLOADING to img tag from file system:
// function onImgInput(ev) {
// 	loadImageFromInput(ev, renderImg)
// }

// function loadImageFromInput(ev, onImageReady) {
// 	document.querySelector('.share-container').innerHTML = ''

// 	var reader = new FileReader()

// 	reader.onload = (event) => {
// 		var img = new Image()
// 		img.src = event.target.result
// 		img.onload = onImageReady.bind(null, img)
// 	}
// 	reader.readAsDataURL(ev.target.files[0])
// }

// function renderImg(img) {
// 	console.log(img)
// 	gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
// }

// function resizeCanvas() {
// 	var elContainer = document.querySelector('.canvas-container')
// 	gElCanvas.width = elContainer.offsetWidth
// 	gElCanvas.height = elContainer.offsetHeight
// }
