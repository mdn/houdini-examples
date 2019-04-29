console.clear();

const mapEl = document.querySelector('.map');
mapEl.widthRatio = 100/mapEl.getBoundingClientRect().width;
mapEl.heightRatio = 100/mapEl.getBoundingClientRect().height;

function createMarker() {
	const markerImg = {};
	markerImg.img = document.createElement('img');
	markerImg.img.src = 'marker.svg';
	markerImg.img.alt = 'Map marker';
	markerImg.img.classList.add('marker');
	markerImg.height = CSS.px(31);
	markerImg.width = CSS.px(34);
	return markerImg;
}

mapEl.addEventListener('click', function(e) {

	mapEl.x = mapEl.getBoundingClientRect().x;
	mapEl.y = mapEl.getBoundingClientRect().y;

	const marker = createMarker();

	const top = (e.clientY - mapEl.y - marker.height.value) * mapEl.heightRatio;
	const left = (e.clientX - mapEl.x - marker.width.value/2) * mapEl.widthRatio;

	marker.top = CSS.percent(top);
	marker.left = CSS.percent(left);

	marker.img.attributeStyleMap.set('top', marker.top);
	marker.img.attributeStyleMap.set('left', marker.left);

	mapEl.appendChild(marker.img);

}, false)
