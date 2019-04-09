console.clear();

registerPaint('headerHighlight', class {

	static get contextOptions() { return {alpha: true}; }

  paint(ctx, size) {
    // ctx -> drawing context
    // size -> size of the box being painted

		ctx.fillStyle = 'hsla(55, 90%, 60%, 1.0)';
		ctx.fillRect(0, size.height/3, size.width*0.4, size.height*0.6);

  }
});