console.clear();

class Sparkle {

	constructor(originX, originY) {
		this.x = CSS.px(originX);
		this.y = CSS.px(originY);
		this.img = this.createImage();
	}

	get _translate() {
		const shift = Math.floor(Math.random() * 40) - 20;
		return new CSSTranslate(
			CSS.px(shift),
			CSS.px(shift)
		)
	}

	get _rotate() {
		return new CSSRotate(CSS.turn(Math.random()));
	}

	get _scale() {
		const scaleVal = Math.random() * 2;
		return new CSSScale(CSS.number(scaleVal), CSS.number(scaleVal));
	}

	get transform() {
		return new CSSTransformValue([
			this._translate,
			this._rotate,
			this._scale
		])
	}

	get _pickSource() {
		const svgs = ['star.svg', 'cross.svg', 'square.svg', 'circle.svg'];
		const pick = Math.floor(Math.random()*4);
		return svgs[pick];
	}

	get _timeAlive() {
		return CSS.ms(Math.ceil(Math.random()*500))
	}

	createImage() {
		const image = document.createElement('img');
		image.src = this._pickSource;
		image.alt = 'sparkle';
		image.classList.add('sparkle');
		image.attributeStyleMap.set('left', this.x);
		image.attributeStyleMap.set('top', this.y);
		image.attributeStyleMap.set('transform', this.transform);
		image.attributeStyleMap.set('animation-duration', this._timeAlive);
		return image;
	}

}

const sparkleBoard = document.querySelector('.sparkleArea');
let boardDimensions = sparkleBoard.getBoundingClientRect();
let x = 0;
let y = 0;

sparkleBoard.addEventListener('mousemove', function(e) {

	boardDimensions = sparkleBoard.getBoundingClientRect();
	x = e.clientX - boardDimensions.left;
	y = e.clientY - boardDimensions.top;

	const spark = new Sparkle(x, y);

	sparkleBoard.appendChild(spark.img);

	// quick and dirty way to remove sparkles from DOM to help performance
	setTimeout(() => sparkleBoard.firstChild.remove(), 500);

}, false);






