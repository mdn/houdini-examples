# Typed OM Reference

---

## Style Maps

#### Computed styles

`element.getComputedStyles();`

#### Attribute styles

`element.attributeStyleMap`

#### Stylesheets

`document.styleSheets`

#### Methods

Returns CSSStyleValue type for specified property
`styleMap.get(property)`

Sets property and value
`styleMap.set(property, value)`

Removes property
`styleMap.delete(property)`

Returns true if has property and false if not
`styleMap.has(property)`

Clears all styles
`styleMap.clear()`

---

## Value Types

#### CSSStyleValue

Super class

#### CSSKeywordValue

`CSSKeywordValue {value: "inline-block"}`

#### CSSImageValue

At the time of writing return CSSStyleValue

#### CSSNumericValue

Super class for Unit & Math

#### CSSUnitValue

`CSSUnitValue {value: 4, unit: "px"}`

#### CSSMathSum

```
CSSMathSum {
	operator: "sum",
	values: CSSNumericArray
		0: CSSUnitValue
			unit: "percent"
			value: 30
		1: CSSUnitValue
			unit: "px"
			value: 20
}
```

[//]: # (Need to add all MathSum here)

#### CSSTransformValue

```
CSSTransformValue {0: CSSScale, 1: CSSRotate, length: 2, is2D: true}

	0: CSSScale
		is2D: true
		x: CSSUnitValue {value: 0.95, unit: "number"}
		y: CSSUnitValue {value: 0.95, unit: "number"}
		z: CSSUnitValue {value: 1, unit: "number"}

	1: CSSRotate
		angle: CSSUnitValue {value: 0, unit: "deg"}
		is2D: true
		x: CSSUnitValue {value: 0, unit: "number"}
		y: CSSUnitValue {value: 0, unit: "number"}
		z: CSSUnitValue {value: 1, unit: "number"}
```

[//]: # (Need to add all Transforms here)

#### CSSUnparsedValue

`CSSUnparsedValue {0: valueString, length: 1}`

#### CSSVariableReferenceValue

`new CSSVariableReferenceValue(property, new CSSUnparsedValue([value]));`

#### Methods

`CSSStyleValue.parse(propertyString, valueString)`

`CSSNumericValue.parse(valueString)`

---

## Operations

#### Convert units

`CSSUnitValue.to(unit)`

Only works with absolute and not relative units

---

## Some things to look out for

The difference between the style maps: getComputedStyles, attributeStyleMap and styleSheets.

You can't `get()` a property value from attributeStyleMap for instance without it being present on the element first (by using `set()` for example).

The spec is being worked on, holes are being plugged and new features in discussion.

---

## Resources

- [Working with the new CSS Typed Object Model](https://developers.google.com/web/updates/2018/03/cssom)
- [An overview of Typed OM](https://houdini.glitch.me/typed-om)
- [Current Draft Specification](https://drafts.css-houdini.org/css-typed-om-1/)