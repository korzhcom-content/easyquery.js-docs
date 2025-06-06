---
title: Operand class
slug: api-reference-5-x/@easyquery/core-package/classes/operand-class
sidebar:
  order: 100
---

Represents one operand in some operator's expression

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/operand-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/operand-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/operand-class/#public-properties-1)
- [dataType](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/operand-class/#datatype)
- [defText](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/operand-class/#deftext)
- [defValue](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/operand-class/#defvalue)
- [editor](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/operand-class/#editor)
- [kind](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/operand-class/#kind)

### [Public Methods](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/operand-class/#public-methods-1)
- [copyFrom](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/operand-class/#copyfrom)
- [loadFromData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/operand-class/#loadfromdata)


## Constructors

---
#### constructor

The default constructor.
⊕ new Operand(): [Operand](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/operand-class)


---

## Public Properties

---
### dataType

The type of the data.

● dataType: [DataType](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/enumerations/datatype-enum)

---
### defText

The text for default operand value.

● defText: `string`

---
### defValue

The default value for this operand.

● defValue: `string`

---
### editor

The value editor associated with this operand.

● editor: [ValueEditor](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/valueeditor-class)

---
### kind

The kind of operand (`scalar`, `list`, etc)

● kind: [DataKind](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/enumerations/datakind-enum)

---
## Public Methods

---
### copyFrom
Copies operand from other operand.

▸ copyFrom(src: [Operand](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/operand-class)): `void`

#### Parameters:
- src: [Operand](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/operand-class)


**Returns** `void`

---
### loadFromData
Loads operand from its JSON representation object.

▸ loadFromData(model: [DataModel](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class),operand: [OperandData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/operanddata-interface)): `void`

#### Parameters:
- model: [DataModel](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class) - The Data Model.
- operand: [OperandData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/operanddata-interface)


**Returns** `void`

---
