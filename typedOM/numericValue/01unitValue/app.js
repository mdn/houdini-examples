console.clear();

// CSSUnitValue refresher
const h2El = document.querySelector('header h2');
// set line-height
h2El.attributeStyleMap.set('line-height', '1.3');
// get line-height
const lineHeight = h2El.attributeStyleMap.get('line-height');
console.log('CSSUnitValue refresher:', lineHeight);

// creating CSSUnitValues
const percentVal = new CSSUnitValue(50, 'percent');
console.log('Creating value', percentVal);
// factory method
const pixelVal = CSS.px(42);
console.log('Factory method', pixelVal);
// using a string instead of a number
const usingString = CSS.rem('2.4', 'rem');
console.log('Using a string', usingString);

// Different Unit Types
console.log('~~~~~~~~~~~~~~~~ Unit Types')
// const numVal = new CSSUnitValue(1.2, 'number');
const numVal = CSS.number(1.2);
console.log('Number:', numVal);

const perVal = new CSSUnitValue(30, 'percent');
// const perVal = CSS.percent(30);
console.log('Percent:', perVal);

// const emVal = new CSSUnitValue(1.2, 'em');
const emVal = CSS.em(1.2);
console.log('em:', emVal);

// const remVal = new CSSUnitValue(2.4, 'rem');
const remVal = CSS.rem(2.4);
console.log('rem:', remVal);

// const chVal = new CSSUnitValue(2, 'ch');
const chVal = CSS.ch(2);
console.log('ch:', chVal);

// const exVal = new CSSUnitValue(1.6, 'ex');
const exVal = CSS.ex(1.6);
console.log('ex:', exVal);

// const vwVal = new CSSUnitValue(40, 'vw');
const vwVal = CSS.vw(40);
console.log('vw:', vwVal);

// const vhVal = new CSSUnitValue(60, 'vh');
const vhVal = CSS.vh(60);
console.log('vh:', vhVal);

// const vminVal = new CSSUnitValue(50, 'vmin');
const vminVal = CSS.vmin(50);
console.log('vmin:', vminVal);

// const vmaxVal = new CSSUnitValue(40, 'vmax');
const vmaxVal = CSS.vmax(40);
console.log('vmax:', vmaxVal);

// const pxVal = new CSSUnitValue(10, 'px');
const pxVal = CSS.px(10);
console.log('px:', pxVal);

// const cmVal = new CSSUnitValue(5, 'cm');
const cmVal = CSS.cm(5);
console.log('cm:', cmVal);

// const mmVal = new CSSUnitValue(15, 'mm');
const mmVal = CSS.mm(15);
console.log('mm:', mmVal);

// const QVal = new CSSUnitValue(100, 'Q');
const QVal = CSS.Q(100);
console.log('Q:', QVal);

// const inVal = new CSSUnitValue(60, 'in');
const inVal = CSS.in(60);
console.log('in:', inVal);

// const pcVal = new CSSUnitValue(12, 'pc');
const pcVal = CSS.pc(12);
console.log('pc:', pcVal);

// const ptVal = new CSSUnitValue(72, 'pt');
const ptVal = CSS.pt(72);
console.log('pt:', ptVal);

// The following have not been implemented at time of writing
// const icVal = new CSSUnitValue(3, 'ic');
// const icVal = CSS.ic(3);

// const lhVal = new CSSUnitValue(1.4, 'lh');
// const lhVal = CSS.lh(1.4);

// const rlhVal = new CSSUnitValue(1.6, 'rlh');
// const rlhVal = CSS.rlh(1.6);

// const viVal = new CSSUnitValue(70, 'vi');
// const viVal = CSS.vi(70);

// const vbVal = new CSSUnitValue(60, 'vb');
// const vbVal = CSS.vb(60);

// const degVal = new CSSUnitValue(180, 'deg');
const degVal = CSS.deg(180);
console.log('deg:', degVal);

// const gradVal = new CSSUnitValue(200, 'grad');
const gradVal = CSS.grad(200);
console.log('grad:', gradVal);

// const radVal = new CSSUnitValue(3.1, 'rad');
const radVal = CSS.rad(3.1);
console.log('rad:', radVal);

// const turnVal = new CSSUnitValue(0.5, 'turn');
const turnVal = CSS.turn(0.5);
console.log('turn:', turnVal);

// const sVal = new CSSUnitValue(1, 's');
const sVal = CSS.s(1);
console.log('s:', sVal);

// const msVal = new CSSUnitValue(200, 'ms');
const msVal = CSS.ms(200);
console.log('ms:', msVal);

// const HzVal = new CSSUnitValue(440, 'Hz');
const HzVal = CSS.Hz(440);
console.log('Hz:', HzVal);

// const kHzVal = new CSSUnitValue(3, 'kHz');
const kHzVal = CSS.kHz(3);
console.log('kHz:', kHzVal);

// const dpiVal = new CSSUnitValue(3, 'dpi');
const dpiVal = CSS.dpi(3);
console.log('dpi:', dpiVal);

// const dpcmVal = new CSSUnitValue(2.54, 'dpcm');
const dpcmVal = CSS.dpcm(2.54);
console.log('dpcm:', dpcmVal);

// const dppxVal = new CSSUnitValue(1, 'dppx');
const dppxVal = CSS.dppx(1);
console.log('dppx:', dppxVal);

// const frVal = new CSSUnitValue(1, 'fr');
const frVal = CSS.fr(1);
console.log('fr:', frVal);

