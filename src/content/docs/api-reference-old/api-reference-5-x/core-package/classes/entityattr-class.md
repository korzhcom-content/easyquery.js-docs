---
title: EntityAttr class
slug: api-reference-old/api-reference-5-x/core-package/classes/entityattr-class
sidebar:
  order: 100
---

Represents entity attribute.

## Index
### [Constructors](api-reference-old/api-reference-5-x/core-package/classes/entityattr-class#constructors-1)
- [constructor](api-reference-old/api-reference-5-x/core-package/classes/entityattr-class#constructor)

### [Public Properties](api-reference-old/api-reference-5-x/core-package/classes/entityattr-class#public-properties-1)
- [caption](api-reference-old/api-reference-5-x/core-package/classes/entityattr-class#caption)
- [dataType](api-reference-old/api-reference-5-x/core-package/classes/entityattr-class#datatype)
- [defaultEditor](api-reference-old/api-reference-5-x/core-package/classes/entityattr-class#defaulteditor)
- [defaultOperator](api-reference-old/api-reference-5-x/core-package/classes/entityattr-class#defaultoperator)
- [description](api-reference-old/api-reference-5-x/core-package/classes/entityattr-class#description)
- [id](api-reference-old/api-reference-5-x/core-package/classes/entityattr-class#id)
- [lookupAttr](api-reference-old/api-reference-5-x/core-package/classes/entityattr-class#lookupattr)
- [operators](api-reference-old/api-reference-5-x/core-package/classes/entityattr-class#operators)
- [params](api-reference-old/api-reference-5-x/core-package/classes/entityattr-class#params)
- [size](api-reference-old/api-reference-5-x/core-package/classes/entityattr-class#size)
- [sqlExpr](api-reference-old/api-reference-5-x/core-package/classes/entityattr-class#sqlexpr)
- [usedInCondition](api-reference-old/api-reference-5-x/core-package/classes/entityattr-class#usedincondition)
- [usedInResult](api-reference-old/api-reference-5-x/core-package/classes/entityattr-class#usedinresult)
- [usedInSorting](api-reference-old/api-reference-5-x/core-package/classes/entityattr-class#usedinsorting)

### [Public Methods](api-reference-old/api-reference-5-x/core-package/classes/entityattr-class#public-methods-1)
- [loadFromData](api-reference-old/api-reference-5-x/core-package/classes/entityattr-class#loadfromdata)


## Constructors

---
#### constructor

The default constructor.
⊕ new EntityAttr(): [EntityAttr](api-reference-old/api-reference-5-x/core-package/classes/entityattr-class)


---

## Public Properties

---
### caption

The caption.

● caption: `string`

---
### dataType

● dataType: [DataType](api-reference-old/api-reference-5-x/core-package/enumerations/datatype-enum)

---
### defaultEditor

The default editor.

● defaultEditor: [ValueEditor](api-reference-old/api-reference-5-x/core-package/classes/valueeditor-class)

---
### defaultOperator

The default operator.

● defaultOperator: `string`

---
### description

The description.

● description: `string`

---
### id

The id.

● id: `string`

---
### lookupAttr

The lookupAttr.

● lookupAttr: `string`

---
### operators

The list of operators which can be applied for this attribute.

● operators: `string`[]

---
### params

The parameters associated with this entity attribute

● params: [QueryParam](api-reference-old/api-reference-5-x/core-package/interfaces/queryparam-interface)[] = ` []`

---
### size

● size: `number`

---
### sqlExpr

The attribute expression.

● sqlExpr: `string`

---
### usedInCondition

The value indicating whether the attribute can be used in query conditions.

● usedInCondition: `boolean`

---
### usedInResult

The value indicating whether the attribute can be used in result columns (`SELECT` clause).

● usedInResult: `boolean`

---
### usedInSorting

The value indicating whether the attribute can be used in sorting.

● usedInSorting: `boolean`

---
## Public Methods

---
### loadFromData
Loads entity attribute from JSON representation object.

▸ loadFromData(model: [DataModel](api-reference-old/api-reference-5-x/core-package/classes/datamodel-class),data: [EntityAttrData](api-reference-old/api-reference-5-x/core-package/interfaces/entityattrdata-interface)): `void`

#### Parameters:
- model: [DataModel](api-reference-old/api-reference-5-x/core-package/classes/datamodel-class) - The Data Model.
- data: [EntityAttrData](api-reference-old/api-reference-5-x/core-package/interfaces/entityattrdata-interface) - The JSON representation object.



**Returns** `void`

---
