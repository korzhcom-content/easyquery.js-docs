---
title: Column class
slug: api-reference-6x/@easyquery/core-package/classes/column-class
sidebar:
  order: 100
---

Represents some column which will be queried

## Implements
[ExpressionParent](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/expressionparent-interface)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/column-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/column-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/column-class/#public-properties-1)
- [blockId](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/column-class/#blockid)
- [caption](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/column-class/#caption)
- [enabled](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/column-class/#enabled)
- [expr](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/column-class/#expr)
- [params](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/column-class/#params)
- [sortIndex](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/column-class/#sortindex)
- [sorting](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/column-class/#sorting)

### [Public Accessors](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/column-class/#public-accessors-1)
- [id](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/column-class/#id)

### [Public Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/column-class/#public-methods-1)
- [expressionChanged](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/column-class/#expressionchanged)
- [fireChangedEvent](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/column-class/#firechangedevent)
- [getExpressionIndex](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/column-class/#getexpressionindex)
- [getModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/column-class/#getmodel)
- [getQuery](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/column-class/#getquery)
- [isReadOnly](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/column-class/#isreadonly)
- [loadFromData](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/column-class/#loadfromdata)
- [saveToData](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/column-class/#savetodata)
- [setReadOnly](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/column-class/#setreadonly)


## Constructors

---
#### constructor

the default constructor.
⊕ new Column(query: [Query](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/query-class)): [Column](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/column-class)

#### Parameters:
- query: [Query](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/query-class)


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
### enabled

Column is enabled

● enabled: `boolean` = `true`

---
### expr

The column expression.

● expr: [Expression](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/expression-class)

---
### params

The parameters associated with this column

● params: [QueryParam](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/queryparam-interface)[] = ` []`

---
### sortIndex

The index of the column in the sorting list.

● sortIndex: `number`

---
### sorting

Column sorting direction

● sorting: [SortDirection](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/enumerations/sortdirection-enum)

---
## Public Accessors

---
### id
⇄ get id(): `string`


**Returns** `string`


---
## Public Methods

---
### expressionChanged
▸ expressionChanged(expr: [Expression](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/expression-class),oldValue: `string`): `void`

#### Parameters:
- expr: [Expression](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/expression-class)
- oldValue: `string`


**Returns** `void`


---
### fireChangedEvent
▸ fireChangedEvent(): `void`


**Returns** `void`


---
### getExpressionIndex
▸ getExpressionIndex(expr: [Expression](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/expression-class)): `number`

#### Parameters:
- expr: [Expression](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/expression-class)


**Returns** `number`


---
### getModel
▸ getModel(): [DataModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/datamodel-class)


**Returns** [DataModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/datamodel-class)


---
### getQuery
▸ getQuery(): [Query](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/query-class)


**Returns** [Query](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/query-class)


---
### isReadOnly
Indicates whether this column is read-only

▸ isReadOnly(): `boolean`


**Returns** `boolean`


---
### loadFromData
Loads column from its JSON representation object.

▸ loadFromData(model: [DataModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/datamodel-class),colData: [ColumnData](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/columndata-interface)): `void`

#### Parameters:
- model: [DataModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/datamodel-class) - The Data Model.
- colData: [ColumnData](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/columndata-interface) - The JSON representation object.



**Returns** `void`


---
### saveToData
Saves the column to a data transfer object (ready for sending to the server-side) .

▸ saveToData(): [ColumnData](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/columndata-interface)


**Returns** [ColumnData](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/columndata-interface) - An plain object that represents the column.



---
### setReadOnly
▸ setReadOnly(value: `boolean`): `void`

#### Parameters:
- value: `boolean`


**Returns** `void`


---
