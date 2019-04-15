console.clear();

// get the button element
const buttonEl = document.querySelector('.example');

// set top padding on button
buttonEl.attributeStyleMap.set('padding-top', CSS.px(10));
const padTop = buttonEl.attributeStyleMap.get('padding-top');
console.log(padTop);

// access stylesheet rules
const stylesheet = document.styleSheets[0];

let buttonCSS = '';
Object.values(stylesheet.cssRules).forEach(block => {

	if (block.selectorText === '.example') {
		block.styleMap.set('--mainColour', 'black');
	}
})

