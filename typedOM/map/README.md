# Typed OM: Example 1.0
## Putting a pin on a map

Let's start by building a example of placing items where a mouse or pointer is clicked.

We can take the mouse co-ordinates and know where to position our new item. This will be a lot easier with Typed OM as we can use numbers and units rather than strings.

We'll have an image of a map and where we click on the map a marker will appear, to either represent somewhere we wish to go or have been, for example.

The focus here is on how we use Typed OM - so let's keep the HTML and CSS simple to start. We'll just have the map as an image and when we click on that a span will be added in the style of a marker. We'll absolutely position each marker, with the top and left values being added based on mouse position on click.

We'll need to do a bit of calculation based on where the map is browser window.

Let's start with the HTML and CSS.

```html
<article>
	<header>
		<h2>My Travels</h2>
	</header>

	<figure class="map">
		<img src="world-map.jpg" alt="A picture of the map of the world" />
		<figcaption>Image from: https://mapswire.com/world/physical-maps/</figcaption>
	</figure>
</article>
```
```css
article {
	width: 90%; margin: 0px auto;
	border: 1px solid blue;
}
.map {
	position: relative;
	width: 100px; height: 100px;
	border: 1px solid purple;
}
.map span {
	position: absolute;
	width: 2px; height: 2px;
	border: 2px solid yellow;
}
```
The marker is an arrow shape, so we'll place it at the tip where the mluse clicks, this is at the bottom enter.

We'll do this via `bottom` and `left` absolte position properties, whilst taking into account the position of the map in the client window, along with the position of the mouse cursor.

Our `bottom` property value should be calcuated thus:

```js
let marker = {}
marker.bottom = mouseEv.clientY - mapEl.getBoundingClientRect().y;
````


Now we can use getBoundingClientRect to calculate the relative mouse position to the map itself, or as we're using TypedOM anyway, we may as well retrieve the top & ...

Anyway, this is great, because we can work in numbers and carry on working in numbers. No strings here!

I mean we can jst stick a whole calculation straight into that set method.

Although lets not do that as it's a little long winded, and possibly hard to read. (but we _could_)



But what's going to happen if we resize the browser, or turn our mobile phone (which we've handly smuggled into the wizarding world). We've set our absolute values. But wait, because we are working with numbers, and we have access to our css units, it's pretty easy to convert position on resize.

Let's keep using pixels for our positioning, but keep them relative to the height, which we will set using viewport units.

Do the calculation to find out where the marker is in vw, then change the top and left to use that instead.

Benefits: One calculation, rather than positioning on constant resize - the css is doing what the css is suppose to do, we have done basic unit conversion.

