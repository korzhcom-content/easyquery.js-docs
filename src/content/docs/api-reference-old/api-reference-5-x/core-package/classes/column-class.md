---
title: Column class
slug: api-reference-old/api-reference-5-x/core-package/classes/column-class
sidebar:
  order: 100
---

Represents some column which will be queried

## Index
### [Constructors](api-reference-old/api-reference-5-x/core-package/classes/column-class#constructors-1)
- [constructor](api-reference-old/api-reference-5-x/core-package/classes/column-class#constructor)

### [Public Properties](api-reference-old/api-reference-5-x/core-package/classes/column-class#public-properties-1)
- [blockId](api-reference-old/api-reference-5-x/core-package/classes/column-class#blockid)
- [caption](api-reference-old/api-reference-5-x/core-package/classes/column-class#caption)
- [expr](api-reference-old/api-reference-5-x/core-package/classes/column-class#expr)
- [params](api-reference-old/api-reference-5-x/core-package/classes/column-class#params)
- [sortIndex](api-reference-old/api-reference-5-x/core-package/classes/column-class#sortindex)
- [sorting](api-reference-old/api-reference-5-x/core-package/classes/column-class#sorting)

### [Public Methods](api-reference-old/api-reference-5-x/core-package/classes/column-class#public-methods-1)
- [loadFromData](api-reference-old/api-reference-5-x/core-package/classes/column-class#loadfromdata)
- [saveToData](api-reference-old/api-reference-5-x/core-package/classes/column-class#savetodata)


## Constructors

---
#### constructor

the default constructor.
⊕ new Column(): [Column](api-reference-old/api-reference-5-x/core-package/classes/column-class)


---

## Public Properties

---
### blockId

The block ID.

● blockId: `string`

---
### caption

The caption.

● caption: `string`

---
### expr

The column expression.

● expr: [Expression](api-reference-old/api-reference-5-x/core-package/classes/expression-class)

---
### params

The parameters associated with this column

● params: [QueryParam](api-reference-old/api-reference-5-x/core-package/interfaces/queryparam-interface)[] = ` []`

---
### sortIndex

The index of the column in the sorting list.

● sortIndex: `number`

---
### sorting

Column sorting direction

● sorting: [SortDirection](api-reference-old/api-reference-5-x/core-package/enumerations/sortdirection-enum)

---
## Public Methods

---
### loadFromData
Loads column from its JSON representation object.

▸ loadFromData(model: [DataModel](api-reference-old/api-reference-5-x/core-package/classes/datamodel-class),data: [ColumnData](api-reference-old/api-reference-5-x/core-package/interfaces/columndata-interface)): `void`

#### Parameters:
- model: [DataModel](api-reference-old/api-reference-5-x/core-package/classes/datamodel-class) - The Data Model.
- data: [ColumnData](api-reference-old/api-reference-5-x/core-package/interfaces/columndata-interface) - The JSON representation object.



**Returns** `void`

---
### saveToData
Saves column to JSON representation object.

▸ saveToData(): [ColumnData](api-reference-old/api-reference-5-x/core-package/interfaces/columndata-interface)


**Returns** [ColumnData](api-reference-old/api-reference-5-x/core-package/interfaces/columndata-interface) - The JSON representation object.


---
