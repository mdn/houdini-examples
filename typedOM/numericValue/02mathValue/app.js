console.clear();

const mathVal = new CSSMathSum(CSS.px(10), CSS.vw(20));
console.log('CSSMathValue example:', mathVal);
console.log('Using toString(): ', mathVal.toString());

// Different math value types
const el = document.querySelector('.example');

// addition
const sumVal = new CSSMathSum(CSS.px(10), CSS.vw(20), CSS.em(1.2));
el.attributeStyleMap.set('width', sumVal);
const gotSumVal = el.attributeStyleMap.get('width');
console.log('Sum addition:', gotSumVal);

// subtraction
const subVal = new CSSMathSum(CSS.s(2), CSS.ms(-200));
el.attributeStyleMap.set('animation-duration', subVal);
const gotSubVal = el.attributeStyleMap.get('animation-duration');
console.log('Sum subtraction:', gotSubVal);

// multiplication
const productVal = new CSSMathProduct(CSS.em(1.6), CSS.number(1.2));
el.attributeStyleMap.set('font-size', productVal);
const gotProductVal = el.attributeStyleMap.get('font-size');
console.log('Product:', gotProductVal);

// negation
const negVal = new CSSMathNegate(CSS.px(20));
el.attributeStyleMap.set('margin-top', negVal.toString());
const gotNegVal = el.attributeStyleMap.get('margin-top');
console.log('Negate:', negVal);

// invert
// const invVal = new CSSMathInvert(CSS.s(10));
// console.log(invVal.toString());
// el.attributeStyleMap.set('padding-bottom', invVal.toString());
// const gotInvVal = el.attributeStyleMap.get('padding-bottom');

const minVal = new CSSMathMin(CSS.vh(10), CSS.px(300));
console.log('min():', minVal);
// el.attributeStyleMap.set('height', minVal.toString());
// const gotMinVal = el.attributeStyleMap.get('height');

const maxVal = new CSSMathMax(CSS.px(50), CSS.percent(20));
console.log('max():', maxVal);
// el.attributeStyleMap.set('width', maxVal);
// const gotMaxVal = el.attributeStyleMap.get('width');

// const clampVal = new CSSMathClamp(CSS.px(10), CSS.em(4), CSS.px(80));
// console.log('clamp():', clampVal);
// el.attributeStyleMap.set('width', clampVal);
// const gotClampVal = el.attributeStyleMap.get('width');

const nestedVal = new CSSMathMin(
  new CSSMathProduct(CSS.em(1.2), CSS.number(1.4)),
  CSS.vw(10)
);
console.log('Nested:', nestedVal);
// el.attributeStyleMap.set('font-size', nestedVal;
// const gotNestedVal = el.attributeStyleMap.get('font-size');

