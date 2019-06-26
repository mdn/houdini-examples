registerPaint('boxbg', class {

  // Whether Alpha is allowed - This is set to true by default, if it is set to false all colours used on the canvas will have full opacity, or alpha of 1.0
  static get contextOptions() { return {alpha: true}; }

   // use this function to retrieve any custom props defined for the element, return them in the specified array
  static get inputProperties() { return ['--boxColor', '--widthSubtractor']; }

  paint(ctx, size, props) {
    // ctx -> drawing context
    // size -> paintSize: width and height
    // props -> properties: get() method

		ctx.fillStyle = props.get('--boxColor'); 
		ctx.fillRect(0, size.height/3, size.width*0.4 - props.get('--widthSubtractor'), size.height*0.6);

  }
});