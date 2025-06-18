---
title: EntityAttr class
slug: api-reference-old/api-reference-5-x/core-package/classes/entityattr-class
sidebar:
  order: 100
---

Represents entity attribute.

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entityattr-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entityattr-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entityattr-class/#public-properties-1)
- [caption](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entityattr-class/#caption)
- [dataType](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entityattr-class/#datatype)
- [defaultEditor](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entityattr-class/#defaulteditor)
- [defaultOperator](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entityattr-class/#defaultoperator)
- [description](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entityattr-class/#description)
- [id](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entityattr-class/#id)
- [lookupAttr](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entityattr-class/#lookupattr)
- [operators](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entityattr-class/#operators)
- [params](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entityattr-class/#params)
- [size](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entityattr-class/#size)
- [sqlExpr](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entityattr-class/#sqlexpr)
- [usedInCondition](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entityattr-class/#usedincondition)
- [usedInResult](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entityattr-class/#usedinresult)
- [usedInSorting](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entityattr-class/#usedinsorting)

### [Public Methods](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entityattr-class/#public-methods-1)
- [loadFromData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entityattr-class/#loadfromdata)


## Constructors

---
#### constructor

The default constructor.
⊕ new EntityAttr(): [EntityAttr](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entityattr-class)


---

## Public Properties

---
### caption

The caption.

● caption: `string`

---
### dataType

● dataType: [DataType](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/enumerations/datatype-enum)

---
### defaultEditor

The default editor.

● defaultEditor: [ValueEditor](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/valueeditor-class)

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

● params: [QueryParam](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/queryparam-interface)[] = ` []`

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

▸ loadFromData(model: [DataModel](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class),data: [EntityAttrData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/entityattrdata-interface)): `void`

#### Parameters:
- model: [DataModel](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class) - The Data Model.
- data: [EntityAttrData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/entityattrdata-interface) - The JSON representation object.



**Returns** `void`

---
