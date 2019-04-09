console.clear();

registerPaint('headerHighlight', class {
  // use this function to retrieve any custom props defined for the element, return them in the specified array
  static get inputProperties() { return ['--highColour']; }
  // Input arguments that can be passed to the `paint` function
  // static get inputArguments() { return ['<color>']; }
  // Whether Alpha is allowed? - This is set to true by default, if it is set to false all colours used on the canvas will have full opacity, or alpha of 1.0
  static get contextOptions() { return {alpha: true}; }

  paint(ctx, size, props) {
    // ctx -> drawing context
    // size -> size of the box being painted
    // props -> list of custom properties available to the element

		// set where to start the highlight & dimensions
		const x = 0;
		const y = size.height*0.3;
		const blockWidth = size.width*0.33;
		const highlightHeight = size.height*0.85;

		// Paint uses Typed OM to retireve the custom property value, so we have to use the get method on it
		ctx.fillStyle = props.get('--highColour');
		// block
		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.lineTo(blockWidth, y);
		ctx.lineTo(blockWidth+highlightHeight, highlightHeight);
		ctx.lineTo(x, highlightHeight);
		ctx.lineTo(x, y);
		ctx.closePath();
		ctx.fill();
		// dashes
		for (let i=0; i<4; i++) {
			let start = i*2;
			ctx.beginPath();
			ctx.moveTo((blockWidth)+(start*10)+10, y);
			ctx.lineTo((blockWidth)+(start*10)+20, y);
			ctx.lineTo((blockWidth)+(start*10)+20+(highlightHeight), highlightHeight);
			ctx.lineTo((blockWidth)+(start*10)+10+(highlightHeight), highlightHeight);
			ctx.lineTo((blockWidth)+(start*10)+10, y);
			ctx.closePath();
			ctx.fill();
		}
  } // paint
});