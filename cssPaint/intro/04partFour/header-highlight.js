
registerPaint('headerHighlight', class {
  static get inputProperties() { return ['--highColour']; }
  // Input arguments that can be passed to the `paint` function
  static get inputArguments() { return ['*','<length>']; }

	static get contextOptions() { return {alpha: true}; }

  paint(ctx, size, props, args) {
    // ctx -> drawing context
    // size -> size of the box being painted
    // props -> list of custom properties available to the element
		// args -> list of arguments we can set when calling the paint() function in our css

		// set where to start the highlight & dimensions
		const x = 0;
		const y = size.height*0.3;
		const blockWidth = size.width*0.33;
		const highlightHeight = size.height*0.85;
		const colour = props.get('--highColour');

		// use our custom arguments
		ctx.fillStyle = colour;
		ctx.strokeStyle = 'transparent';
		const strokeWidth = args[1];
		// console.log(strokeWidth.type, strokeWidth.value);
		console.log(strokeWidth);
		if (strokeWidth.unit === 'px') {
			ctx.lineWidth = strokeWidth.value;
		} else {
			ctx.lineWidth = 1.0;
		}
		// set a stroke
		const hasStroke = args[0].toString();
		if (hasStroke === 'stroke') {
			ctx.fillStyle = 'transparent';
			ctx.strokeStyle = colour;
		}

		// block
		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.lineTo(blockWidth, y);
		ctx.lineTo(blockWidth+highlightHeight, highlightHeight);
		ctx.lineTo(x, highlightHeight);
		ctx.lineTo(x, y);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
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
			ctx.stroke();
		}

  } // paint
});

