console.clear();

// get the button element
const buttonEl = document.querySelector('button');
// get our element to append info to
const stylesList = document.querySelector('#all-styles');

// let's get some styles -> we can retrieve all computed styles with `computedStyleMap`
const allComputedStyles = buttonEl.computedStyleMap();

// which returns a map of all computed styles -> ie those already set in non-inline css
for (const [prop, val] of allComputedStyles) {
	// properties
	const term = document.createElement('dt');
	term.appendChild(document.createTextNode(prop));
	stylesList.appendChild(term);

	// values
	const valDef = document.createElement('dd');
	valDef.appendChild(document.createTextNode(val));
	stylesList.appendChild(valDef);
}

