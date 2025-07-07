---
title: Operand class
slug: api-reference-old/api-reference-6x/core-package/classes/operand-class
sidebar:
  order: 100
---

Represents one operand in some operator's expression

## Index
### [Constructors](api-reference-old/api-reference-6x/core-package/classes/operand-class#constructors-1)
- [constructor](api-reference-old/api-reference-6x/core-package/classes/operand-class#constructor)

### [Public Properties](api-reference-old/api-reference-6x/core-package/classes/operand-class#public-properties-1)
- [dataType](api-reference-old/api-reference-6x/core-package/classes/operand-class#datatype)
- [defText](api-reference-old/api-reference-6x/core-package/classes/operand-class#deftext)
- [defValue](api-reference-old/api-reference-6x/core-package/classes/operand-class#defvalue)
- [editor](api-reference-old/api-reference-6x/core-package/classes/operand-class#editor)
- [kind](api-reference-old/api-reference-6x/core-package/classes/operand-class#kind)

### [Public Methods](api-reference-old/api-reference-6x/core-package/classes/operand-class#public-methods-1)
- [copyFrom](api-reference-old/api-reference-6x/core-package/classes/operand-class#copyfrom)
- [loadFromData](api-reference-old/api-reference-6x/core-package/classes/operand-class#loadfromdata)


## Constructors

---
#### constructor

The default constructor.
⊕ new Operand(): [Operand](api-reference-old/api-reference-6x/core-package/classes/operand-class)


---

## Public Properties

---
### dataType

The type of the data.

● dataType: [DataType](api-reference-old/api-reference-6x/core-package/enumerations/datatype-enum)

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

● editor: [ValueEditor](api-reference-old/api-reference-6x/core-package/classes/valueeditor-class)

---
### kind

The kind of operand (`scalar`, `list`, etc)

● kind: [DataKind](api-reference-old/api-reference-6x/core-package/enumerations/datakind-enum)

---
## Public Methods

---
### copyFrom
Copies operand from other operand.

▸ copyFrom(src: [Operand](api-reference-old/api-reference-6x/core-package/classes/operand-class)): `void`

#### Parameters:
- src: [Operand](api-reference-old/api-reference-6x/core-package/classes/operand-class)


**Returns** `void`


---
### loadFromData
Loads operand from its JSON representation object.

▸ loadFromData(model: [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class),operand: [OperandData](api-reference-old/api-reference-6x/core-package/interfaces/operanddata-interface)): `void`

#### Parameters:
- model: [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class) - The Data Model.
- operand: [OperandData](api-reference-old/api-reference-6x/core-package/interfaces/operanddata-interface)


**Returns** `void`


---
