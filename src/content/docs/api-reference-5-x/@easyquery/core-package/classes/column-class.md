---
title: Column class
slug: api-reference-5-x/@easyquery/core-package/classes/column-class
sidebar:
  order: 100
---

Represents some column which will be queried

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/column-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/column-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/column-class/#public-properties-1)
- [blockId](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/column-class/#blockid)
- [caption](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/column-class/#caption)
- [expr](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/column-class/#expr)
- [params](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/column-class/#params)
- [sortIndex](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/column-class/#sortindex)
- [sorting](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/column-class/#sorting)

### [Public Methods](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/column-class/#public-methods-1)
- [loadFromData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/column-class/#loadfromdata)
- [saveToData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/column-class/#savetodata)


## Constructors

---
#### constructor

the default constructor.
⊕ new Column(): [Column](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/column-class)


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

● expr: [Expression](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/expression-class)

---
### params

The parameters associated with this column

● params: [QueryParam](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/queryparam-interface)[] = ` []`

---
### sortIndex

The index of the column in the sorting list.

● sortIndex: `number`

---
### sorting

Column sorting direction

● sorting: [SortDirection](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/enumerations/sortdirection-enum)

---
## Public Methods

---
### loadFromData
Loads column from its JSON representation object.

▸ loadFromData(model: [DataModel](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class),data: [ColumnData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/columndata-interface)): `void`

#### Parameters:
- model: [DataModel](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class) - The Data Model.
- data: [ColumnData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/columndata-interface) - The JSON representation object.



**Returns** `void`

---
### saveToData
Saves column to JSON representation object.

▸ saveToData(): [ColumnData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/columndata-interface)


**Returns** [ColumnData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/columndata-interface) - The JSON representation object.


---
