console.clear();

const transform = new CSSTransformValue([
	new CSSRotate(CSS.deg(30)),
	new CSSScale(CSS.number(1.2), CSS.number(1.2))
])

const rotate = new CSSRotate(CSS.deg(50));
console.log('Rotate:', rotate);

const scale = new CSSScale(CSS.number(2), CSS.number(2));
console.log('Scale:', scale);

const skew = new CSSSkew(CSS.deg(10), CSS.deg(20));
console.log('Skew:', skew);

const skewX = new CSSSkewX(CSS.grad(200));
console.log('SkewX:', skewX);

const skewY = new CSSSkewY(CSS.rad(1.3));
console.log('SkewY:', skewY);

const perspective = new CSSPerspective(CSS.px(50));
console.log('Perspective:', perspective);

const translate = new CSSTranslate(CSS.px(20), CSS.px(50));
console.log('Translate:', translate);

const translate2d = new CSSTranslate(CSS.px(20), CSS.px(50));
let twodee = translate2d.is2D; // true
console.log('is2D:', twodee);

const translate3d = new CSSTranslate(CSS.px(20), CSS.px(50), CSS.px(-5));
twodee = translate3d.is2D; // false
console.log('is2D:', twodee);

const transformMatrix = new CSSTransformValue([
	new CSSRotate(CSS.deg(30)),
	new CSSScale(CSS.number(1.2), CSS.number(1.2))
]);

const matrix = transformMatrix.toMatrix();
console.log('Matrix:', matrix);

