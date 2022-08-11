var gImgs = []
_createImgs()
function getImgsForDisplay() {
	return gImgs
}

function _createImgs() {
	for (let i = 0; i < 16; i++) {
		const img = _createImg(makeId(5), `img/square/${i + 1}.jpg`, [
			'lorem',
			'ipsem',
		])
		gImgs.push(img)
	}
}

function _createImg(id, url, keywords) {
	return {
		id,
		url,
		keywords,
	}
}
