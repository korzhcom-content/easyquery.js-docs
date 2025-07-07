---
title: QueryColumn class
slug: api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class
sidebar:
  order: 100
---

Represents some column which will be queried

## Implements
[ExpressionParent](api-reference-7x/easyquery-packages/core-package/interfaces/expressionparent-interface)

## Index
### [Constructors](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class#constructor)

### [Public Properties](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class#public-properties-1)
- [blockId](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class#blockid)
- [caption](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class#caption)
- [enabled](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class#enabled)
- [expr](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class#expr)
- [params](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class#params)
- [sortIndex](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class#sortindex)
- [sorting](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class#sorting)

### [Public Accessors](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class#public-accessors-1)
- [id](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class#id)

### [Public Methods](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class#public-methods-1)
- [expressionChanged](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class#expressionchanged)
- [fireChangedEvent](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class#firechangedevent)
- [getExpressionIndex](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class#getexpressionindex)
- [getModel](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class#getmodel)
- [getQuery](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class#getquery)
- [isHidden](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class#ishidden)
- [isJustSorted](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class#isjustsorted)
- [isReadOnly](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class#isreadonly)
- [loadFromData](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class#loadfromdata)
- [saveToData](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class#savetodata)
- [setHidden](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class#sethidden)
- [setReadOnly](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class#setreadonly)


## Constructors

---
#### constructor

the default constructor.
⊕ new QueryColumn(query: [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class),justsorted?: `boolean`): [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)

#### Parameters:
- query: [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)
- justsorted: `boolean`, *Default value* = `false`


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

● expr: [Expression](api-reference-7x/easyquery-packages/core-package/classes/expression-class)

---
### params

The parameters associated with this column

● params: [QueryParam](api-reference-7x/easyquery-packages/core-package/interfaces/queryparam-interface)[] = ` []`

---
### sortIndex

The index of the column in the sorting list.

● sortIndex: `number`

---
### sorting

Column sorting direction

● sorting: [SortDirection](api-reference-7x/easyquery-packages/core-package/enumerations/sortdirection-enum)

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
▸ expressionChanged(expr: [Expression](api-reference-7x/easyquery-packages/core-package/classes/expression-class),oldValue: `string`): `void`

#### Parameters:
- expr: [Expression](api-reference-7x/easyquery-packages/core-package/classes/expression-class)
- oldValue: `string`


**Returns** `void`


---
### fireChangedEvent
▸ fireChangedEvent(): `void`


**Returns** `void`


---
### getExpressionIndex
▸ getExpressionIndex(expr: [Expression](api-reference-7x/easyquery-packages/core-package/classes/expression-class)): `number`

#### Parameters:
- expr: [Expression](api-reference-7x/easyquery-packages/core-package/classes/expression-class)


**Returns** `number`


---
### getModel
▸ getModel(): [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class)


**Returns** [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class)


---
### getQuery
▸ getQuery(): [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)


**Returns** [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)


---
### isHidden
Indicates whether this column is invisible

▸ isHidden(): `boolean`


**Returns** `boolean`


---
### isJustSorted
Indicates whether this column is just-sorted

▸ isJustSorted(): `boolean`


**Returns** `boolean`


---
### isReadOnly
Indicates whether this column is read-only

▸ isReadOnly(): `boolean`


**Returns** `boolean`


---
### loadFromData
Loads column from its JSON representation object.

▸ loadFromData(model: [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class),colData: [QueryColumnData](api-reference-7x/easyquery-packages/core-package/interfaces/querycolumndata-interface)): `void`

#### Parameters:
- model: [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class) - The Data Model.
- colData: [QueryColumnData](api-reference-7x/easyquery-packages/core-package/interfaces/querycolumndata-interface) - The JSON representation object.



**Returns** `void`


---
### saveToData
Saves the column to a data transfer object (ready for sending to the server-side) .

▸ saveToData(): [QueryColumnData](api-reference-7x/easyquery-packages/core-package/interfaces/querycolumndata-interface)


**Returns** [QueryColumnData](api-reference-7x/easyquery-packages/core-package/interfaces/querycolumndata-interface) - An plain object that represents the column.



---
### setHidden
▸ setHidden(value: `boolean`): `void`

#### Parameters:
- value: `boolean`


**Returns** `void`


---
### setReadOnly
▸ setReadOnly(value: `boolean`): `void`

#### Parameters:
- value: `boolean`


**Returns** `void`


---
