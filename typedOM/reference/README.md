# Typed OM Reference

## Get Styles

#### Get all styles

`element.getComputedStyles();`

#### Get attribute styles

`element.`

#### Get stylesheet styles

`element.`

#### Set rule

#### Parse

#### Remove


#### Convert units

`CSSUnitValue.to(unit)`

Only works with absolute and not relative units


# Some things to look out for

The difference between getComputedStyles, styeAttr and style sheet.

Describe each one

You can't `get()` a property value from styleAttr for instance without it being present on the element first (by using `set()` for example).

The spec is being worked on, holes are being plugged and new features in discussion. There's an issue being worked on to solve the problem we encountered when trying to add