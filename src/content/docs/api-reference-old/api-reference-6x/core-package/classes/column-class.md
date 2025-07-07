---
title: Column class
slug: api-reference-old/api-reference-6x/core-package/classes/column-class
sidebar:
  order: 100
---

Represents some column which will be queried

## Implements
[ExpressionParent](api-reference-old/api-reference-6x/core-package/interfaces/expressionparent-interface)

## Index
### [Constructors](api-reference-old/api-reference-6x/core-package/classes/column-class#constructors-1)
- [constructor](api-reference-old/api-reference-6x/core-package/classes/column-class#constructor)

### [Public Properties](api-reference-old/api-reference-6x/core-package/classes/column-class#public-properties-1)
- [blockId](api-reference-old/api-reference-6x/core-package/classes/column-class#blockid)
- [caption](api-reference-old/api-reference-6x/core-package/classes/column-class#caption)
- [enabled](api-reference-old/api-reference-6x/core-package/classes/column-class#enabled)
- [expr](api-reference-old/api-reference-6x/core-package/classes/column-class#expr)
- [params](api-reference-old/api-reference-6x/core-package/classes/column-class#params)
- [sortIndex](api-reference-old/api-reference-6x/core-package/classes/column-class#sortindex)
- [sorting](api-reference-old/api-reference-6x/core-package/classes/column-class#sorting)

### [Public Accessors](api-reference-old/api-reference-6x/core-package/classes/column-class#public-accessors-1)
- [id](api-reference-old/api-reference-6x/core-package/classes/column-class#id)

### [Public Methods](api-reference-old/api-reference-6x/core-package/classes/column-class#public-methods-1)
- [expressionChanged](api-reference-old/api-reference-6x/core-package/classes/column-class#expressionchanged)
- [fireChangedEvent](api-reference-old/api-reference-6x/core-package/classes/column-class#firechangedevent)
- [getExpressionIndex](api-reference-old/api-reference-6x/core-package/classes/column-class#getexpressionindex)
- [getModel](api-reference-old/api-reference-6x/core-package/classes/column-class#getmodel)
- [getQuery](api-reference-old/api-reference-6x/core-package/classes/column-class#getquery)
- [isReadOnly](api-reference-old/api-reference-6x/core-package/classes/column-class#isreadonly)
- [loadFromData](api-reference-old/api-reference-6x/core-package/classes/column-class#loadfromdata)
- [saveToData](api-reference-old/api-reference-6x/core-package/classes/column-class#savetodata)
- [setReadOnly](api-reference-old/api-reference-6x/core-package/classes/column-class#setreadonly)


## Constructors

---
#### constructor

the default constructor.
⊕ new Column(query: [Query](api-reference-old/api-reference-6x/core-package/classes/query-class)): [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)

#### Parameters:
- query: [Query](api-reference-old/api-reference-6x/core-package/classes/query-class)


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

● expr: [Expression](api-reference-old/api-reference-6x/core-package/classes/expression-class)

---
### params

The parameters associated with this column

● params: [QueryParam](api-reference-old/api-reference-6x/core-package/interfaces/queryparam-interface)[] = ` []`

---
### sortIndex

The index of the column in the sorting list.

● sortIndex: `number`

---
### sorting

Column sorting direction

● sorting: [SortDirection](api-reference-old/api-reference-6x/core-package/enumerations/sortdirection-enum)

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
▸ expressionChanged(expr: [Expression](api-reference-old/api-reference-6x/core-package/classes/expression-class),oldValue: `string`): `void`

#### Parameters:
- expr: [Expression](api-reference-old/api-reference-6x/core-package/classes/expression-class)
- oldValue: `string`


**Returns** `void`


---
### fireChangedEvent
▸ fireChangedEvent(): `void`


**Returns** `void`


---
### getExpressionIndex
▸ getExpressionIndex(expr: [Expression](api-reference-old/api-reference-6x/core-package/classes/expression-class)): `number`

#### Parameters:
- expr: [Expression](api-reference-old/api-reference-6x/core-package/classes/expression-class)


**Returns** `number`


---
### getModel
▸ getModel(): [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class)


**Returns** [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class)


---
### getQuery
▸ getQuery(): [Query](api-reference-old/api-reference-6x/core-package/classes/query-class)


**Returns** [Query](api-reference-old/api-reference-6x/core-package/classes/query-class)


---
### isReadOnly
Indicates whether this column is read-only

▸ isReadOnly(): `boolean`


**Returns** `boolean`


---
### loadFromData
Loads column from its JSON representation object.

▸ loadFromData(model: [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class),colData: [ColumnData](api-reference-old/api-reference-6x/core-package/interfaces/columndata-interface)): `void`

#### Parameters:
- model: [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class) - The Data Model.
- colData: [ColumnData](api-reference-old/api-reference-6x/core-package/interfaces/columndata-interface) - The JSON representation object.



**Returns** `void`


---
### saveToData
Saves the column to a data transfer object (ready for sending to the server-side) .

▸ saveToData(): [ColumnData](api-reference-old/api-reference-6x/core-package/interfaces/columndata-interface)


**Returns** [ColumnData](api-reference-old/api-reference-6x/core-package/interfaces/columndata-interface) - An plain object that represents the column.



---
### setReadOnly
▸ setReadOnly(value: `boolean`): `void`

#### Parameters:
- value: `boolean`


**Returns** `void`


---
