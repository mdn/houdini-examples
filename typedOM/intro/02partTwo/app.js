console.clear();

// get the button element
const buttonEl = document.querySelector('button');
// get our element to append info to
const stylesList = document.querySelector('#all-styles');

// Part 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// let's get some styles -> we can retrieve all computed styles with `computedStyleMap`
const allComputedStyles = buttonEl.computedStyleMap();

// for every sub class,
// get a relevant computed style and return it's type
// essentially a basic code test
function logType(section, property) {
	const commentEl = section.querySelector('.get-type .comment');
	const subclass = allComputedStyles.get(property);
	commentEl.appendChild(
		document.createTextNode(subclass.constructor.name)
	);
	return subclass;
}
// CSSKeywordValue
const keywordSection = document.querySelector('.keyword-val');
const cssKeywordValue = logType(keywordSection, 'display');

const keywordPropsEl = keywordSection.querySelector('.props .comment');
keywordPropsEl.appendChild(
	document.createTextNode(cssKeywordValue.value)
);

// CSSImageValue
const imageSection = document.querySelector('.image-val');
const cssImageVal = logType(imageSection, 'background-image');

const imagePropsEl = imageSection.querySelector('.props .comment');
imagePropsEl.appendChild(
	document.createTextNode(cssImageVal.value)
);

// CSSUnitValue
const unitSection = document.querySelector('.unit-val');
const cssUnitVal = logType(unitSection, 'border-top-width');

const unitPropsEl = unitSection.querySelector('.props .comment');
unitPropsEl.appendChild(
	document.createTextNode(`Value: ${cssUnitVal.value}, Unit: ${cssUnitVal.unit}`)
);

// CSSMathValue
const mathSection = document.querySelector('.math-val');
const cssMathVal = logType(mathSection, 'width');

let units = ''
for (const unit of cssMathVal.values) {
	units += ` value: ${unit.value}, unit: ${unit.unit}`;
}

const mathPropsEl = mathSection.querySelector('.props .comment');
mathPropsEl.appendChild(
	document.createTextNode(`Operator: ${cssMathVal.operator}, | Values: ${units}`)
);

// CSSTransformValue
const transformSection = document.querySelector('.transform-val');
const cssTransformVal = logType(transformSection, 'transform');

// TODO make object to write out later
// TODO change above code
let scale = {}
for (const transform of cssTransformVal) {
	scale.is2d = transform.is2D;
	scale.vec = ` x: ${transform.x}, y: ${transform.y}, z: ${transform.z}`;
}

const transformPropsEl = transformSection.querySelector('.props .comment');
transformPropsEl.appendChild(
	document.createTextNode(`is2D: ${scale.is2d} | Coords: ${scale.vec}`)
);

// CSSUnparsedValue
const parseSection = document.querySelector('.unparse-val');
const cssUnparseVal = logType(parseSection, '--unit');

const parsePropsEl = parseSection.querySelector('.props .comment');
parsePropsEl.appendChild(
	document.createTextNode(cssUnparseVal[0])
);

// parsing
const parsed = CSSNumericValue.parse(cssUnparseVal);

const anotherParsed = CSSStyleValue.parse('background', 'red');

// create a custom prop
const customProp = new CSSVariableReferenceValue('--secondColour', new CSSUnparsedValue(['black']));

console.log(customProp);