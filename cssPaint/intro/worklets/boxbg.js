registerPaint('boxbg', class {

  // Whether Alpha is allowed - This is set to true by default, if it is set to false all colours used on the canvas will have full opacity, or alpha of 1.0
  static get contextOptions() { return {alpha: true}; }

   // use this function to retrieve any custom props defined for the element, return them in the specified array
  static get inputProperties() { return ['--box-color', '--width-subtractor']; }

  paint(ctx, size, props) {
    // ctx -> drawing context
    // size -> paintSize: width and height
    // props -> properties: get() method

		ctx.fillStyle = props.get('--box-color'); 
		ctx.fillRect(0, size.height/3, size.width*0.4 - props.get('--width-subtractor'), size.height*0.6);

  }
});
