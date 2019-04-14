# Typed OM Reference

---

## Style Maps

#### All computed styles

`element.getComputedStyles();`

#### Attribute styles

`element.attributeStyleMap`

#### Stylesheets

`document.styleSheets`

#### Methods

get set delete has clear

---

## Value Types

#### Style
#### Keyword
#### Image
#### Numeric
#### Unit
#### Math
#### Transform
#### Unparsed
#### Variable

#### Methods

parse



#### Convert units

`CSSUnitValue.to(unit)`

Only works with absolute and not relative units


# Some things to look out for

The difference between getComputedStyles, styeAttr and style sheet.

Describe each one

You can't `get()` a property value from styleAttr for instance without it being present on the element first (by using `set()` for example).

The spec is being worked on, holes are being plugged and new features in discussion.

# Resources

