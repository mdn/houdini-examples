registerPaint('headerHighlight', class {

  // Whether Alpha is allowed - This is set to true by default, if it is set to false all colours used on the canvas will have full opacity, or alpha of 1.0
  static get contextOptions() { return {alpha: true}; }

  paint(ctx) {
    // ctx -> drawing context

		ctx.fillStyle = 'hsla(55, 90%, 60%, 1.0)';
		ctx.fillRect(0, 15, 200, 20);

  }
});