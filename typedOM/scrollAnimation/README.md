# Typed OM: Example 1.1
## A changing header

OK now that we've seen a introduction example, let's delve a little deeper.

Our next example is a big web page header, that shrinks and stays at the top of our page as the user scrolls down.

The code here includes content for the header, but only placeholders for the rest of the page to allow for content, so we can see test what would happen on scroll.

Here we're going to animate the content in the header, to realign it and make it smaller once the scroll starts.

Again let's keep the html and css simple so we can focus on the Typed OM parts of this example.

```html


```

NB: TypedOM works with SVGs. The entire svg code isn't included in the example code above, but you can see it in the [full example](). What's worth noting is it _is_ an svg and we'll be using Typed OM with that element as well.

```css

```

One thing to note is the `--fauxPadding` custom property, which we are using on the first section behind the fixed header to make sure it doesn't interfere with the content. We'll see an interesting way of updating this later, with an accurate value.

One cool new feature of css is you can animate grid cells, by changing the number of grid rows and columns within an animation. However great this is, it's hard to achieve a smooth transition at the moment, unless you input all the sizes you want the cells to move between, the grid will jump from one size to the next.

We can get around this with Typed OM, by updating the in realtime as we scroll.

We'll start with a grid of one column and two rows, to contain the logo and nav in the center, as we move we'll create an extra column for the nav to sit on the right as the header gets smaller.

As the scroll occurs, the first column will reduce in size, as the new column expands. Once there is enough room for the nav, we can change the grid area for that element.

Let's create a function that does this based on the position of the y scroll.

Now we can harness that in our `reduceHeader` function to create a ratio, from 0 - 1, of how far we are. This can then be used in all our sizing calculations. We won't need to know how big the header is anymore, nor whether the user is scrolling up or down, we can just refer to our ratio value.

```js
function reduceHeader(scrollPosY) {

	// make scroll pos a ratio between 0-1
	let ratio = scrollPosY > headerHeight ? 1 : scrollPosY/headerHeight;

	// use that ratio to determine cell size, font size and element size

	// Recalculate grid columns
	let columnTwoSize = ratio * 50;
	let columnOneSize = 100 - columnTwoSize;

}
```

Now we can use those values to add new `grid-template-columns` on our header element. One thing to note is `grid-template-columns` is a `CSSStyleValue` and as the spec stands at the moment can only take a string when setting it's value. However this is set to change and we can still harness Typed OM here. We want to input two pecentage values, we can convert our numbers into a percentage string using the CSSUnitValue object.

```js
function reduceHeader(scrollPosY) {

	// make scroll pos a ratio between 0-1
	let ratio = scrollPosY > headerHeight ? 1 : scrollPosY/headerHeight;

	// use that ratio to determine cell size, font size and element size

	// Recalculate grid columns
	let columnTwoSize = ratio * 50;
	let columnOneSize = 100 - columnTwoSize;

	headerEl.attributeStyleMap.set('grid-template-columns', `${CSS.percent(columnOneSize)} ${CSS.percent(columnTwoSize)}` );

}

```
We'll use the event throttling method described [here in the scroll event docs](https://developer.mozilla.org/en-US/docs/Web/Events/scroll) when executing our function.

```js
let last_known_scroll_position = 0;
let ticking = false;

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      reduceHeader(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});
```

Great! Now we're talking, smooth animated grid cells.

A couple of things to add: Let's move the nav to the right and reduce the size of the logo.

The nav is relatively straight forward now we can easily play with style attributes. Let's take a look at the following code:

```js
const navEl = document.querySelector('.header-site__nav');
// move nav to right when scroll far enough
if (ratio > 0.5) {

	// make sure attribute is not on nav
	if (!navEl.attributeStyleMap.has('grid-area')) {
		navEl.attributeStyleMap.set('grid-area', "1 / 2 / 2 / 3");
	}

} else {
	// check if attribute is on nav
	if (navEl.attributeStyleMap.has('grid-area')) {
		navEl.attributeStyleMap.delete('grid-area');
	}
}
```

We can test whether the nav already has `grid-area` set or not easily with the `.has()` method. As well as adding and removing the style with the `set()` and `delete()` methods, making for easy work when changing which grid-area the nav element should occupy.

Next for sparkles logo, we can match it's width with the ratio, so it shrinks as we scroll down and expands as we scroll up.

```js
let logoWidth = ratio > 0.5 ? 10 : 50 - (50*ratio);

logo.attributeStyleMap.set('width', CSS.percent(logoWidth));
```



	if (ratio > 0.5) {

		// make sure attribute is not on nav
		if (!logo.attributeStyleMap.has('display')) {
			logo.attributeStyleMap.set('display', "inline-block");
			logo.querySelector('figcaption').attributeStyleMap.set('display', "none");
			headerText.attributeStyleMap.set('display', "inline-block");
		}

	} else {
		// check if attribute is on nav
		if (logo.attributeStyleMap.has('display')) {
			logo.attributeStyleMap.delete('display');
			logo.querySelector('figcaption').attributeStyleMap.delete('display');
			headerText.attributeStyleMap.delete('display');
		}
	}







CALC

Now we can easily change the styles that make up the height of the header when we start to scroll.

We can use the calc() math sum type to do this an keep the website in ratio or vertical rhythm.



But what's even better is the ability to animate those properties easily as well.

TRANSFORM

Another great website CSS Tricks, has a moving icon when you scroll. This effect is easily achieved with Typed OM, as we can envoke a tranform
