console.clear();

let add = CSS.px(54).add(CSS.px(30));
console.log('Add:', add);
add = CSS.px(54).add(CSS.em(2.4)).toString();
console.log('Add (dif unit):', add);

let sub = CSS.mm(300).sub(CSS.mm(210));
console.log('Subtract:', sub);
sub = CSS.cm(5).sub(CSS.mm(90));
console.log('Subtract (dif unit):', sub.toString());

let mul = CSS.em(1.2).mul(1.4);
console.log('Multiply:', mul);

let div = CSS.turn(1).div(2);
console.log('Divide:', div);

let min = CSS.px(500).min(CSS.px(400), CSS.px(200));
console.log('Min:', min);
min = CSS.em(1.2).min(CSS.rem(1.4));
console.log('Min (dif unit):', min.toString());

let max = CSS.pt(50).max(CSS.pt(90), CSS.pt(10));
console.log('Max:', max);
max = CSS.px(500).max(CSS.percent(60));
console.log('Max (dif unit):', max.toString());

// centimetres to inches
const cm = CSS.in(2).to('cm');
console.log('Conversion:', cm);

// equals test
const fontSize = CSS.em(1.2);
const equals = CSS.em(1.2).equals(fontSize);
console.log('Equals:', equals);

// degrees to radians
const radians = CSS.deg(90).to('rad');
const check = CSS.deg(90).equals(radians.to('deg'));
console.log(check);

