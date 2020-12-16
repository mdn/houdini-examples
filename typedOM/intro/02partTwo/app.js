console.clear();

// get the button element
const buttonEl = document.querySelector('.example');

// let's get some styles -> we can retrieve all computed styles with `computedStyleMap`
const allComputedStyles = buttonEl.computedStyleMap();

// StylePropertyMapReadOnly
// iterable methods ==================
// keys returns an iterable list of properties
const props = allComputedStyles.keys();
console.log(props.next().value); // returns align-content

// values returns an iterable list of the css values
const vals = allComputedStyles.values();
console.log(vals.next().value); // returns a CSSStyleValue

// entries returns an iterable of the items
const iterableStyles = allComputedStyles.entries();
console.log(iterableStyles.next().value); // returns a two item array with align-content as the first item and CSSStyleValue as the second

// forEach will allow us to run code over each prop/val pair
allComputedStyles.forEach((elem, index, arr) => {
	// oode to run for each pair
})

// interface methods ========================
// let's get the value for padding-top
const padTop = allComputedStyles.get('padding-top');
console.log(padTop); // logs a CSSUnitValue

const allPadTop = allComputedStyles.getAll('padding-top');
console.log(allPadTop); // logs an array with one item: A CSSUnitValue

const hasPadTop = allComputedStyles.has('padding-top');
console.log(hasPadTop); // logs true

const amountStyles = allComputedStyles.size;
console.log(amountStyles); // logs 338


// StylePropertyMap
// set padding-top on button style attribute
buttonEl.attributeStyleMap.set('padding-top', CSS.px(10));

// set background-image on button style attribute
buttonEl.attributeStyleMap.set('background-image', 'linear-gradient(90deg, white, black');

// append another value to the background-image property set on the attribute
buttonEl.attributeStyleMap.append('background-image', 'linear-gradient(180deg, blue, black');

// remove background-image from style attribute
buttonEl.attributeStyleMap.delete('background-image');

// clear all properties from the style attribute
buttonEl.attributeStyleMap.clear();

// access stylesheet rules
const stylesheet = document.styleSheets[1];

let buttonCSS = '';
Object.values(stylesheet.cssRules).forEach(block => {

	if (block.selectorText === '.example') {
		block.styleMap.set('--mainColour', 'black');
	}
})

