---
title: QueryColumn class
slug: api-reference-7x/@easyquery/core-package/classes/querycolumn-class
sidebar:
  order: 100
---

Represents some column which will be queried

## Implements
[ExpressionParent](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/expressionparent-interface)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class/#public-properties-1)
- [blockId](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class/#blockid)
- [caption](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class/#caption)
- [enabled](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class/#enabled)
- [expr](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class/#expr)
- [params](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class/#params)
- [sortIndex](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class/#sortindex)
- [sorting](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class/#sorting)

### [Public Accessors](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class/#public-accessors-1)
- [id](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class/#id)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class/#public-methods-1)
- [expressionChanged](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class/#expressionchanged)
- [fireChangedEvent](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class/#firechangedevent)
- [getExpressionIndex](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class/#getexpressionindex)
- [getModel](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class/#getmodel)
- [getQuery](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class/#getquery)
- [isHidden](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class/#ishidden)
- [isJustSorted](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class/#isjustsorted)
- [isReadOnly](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class/#isreadonly)
- [loadFromData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class/#loadfromdata)
- [saveToData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class/#savetodata)
- [setHidden](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class/#sethidden)
- [setReadOnly](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class/#setreadonly)


## Constructors

---
#### constructor

the default constructor.
⊕ new QueryColumn(query: [Query](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/query-class),justsorted?: `boolean`): [QueryColumn](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class)

#### Parameters:
- query: [Query](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/query-class)
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

● expr: [Expression](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class)

---
### params

The parameters associated with this column

● params: [QueryParam](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/queryparam-interface)[] = ` []`

---
### sortIndex

The index of the column in the sorting list.

● sortIndex: `number`

---
### sorting

Column sorting direction

● sorting: [SortDirection](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/enumerations/sortdirection-enum)

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
▸ expressionChanged(expr: [Expression](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class),oldValue: `string`): `void`

#### Parameters:
- expr: [Expression](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class)
- oldValue: `string`


**Returns** `void`


---
### fireChangedEvent
▸ fireChangedEvent(): `void`


**Returns** `void`


---
### getExpressionIndex
▸ getExpressionIndex(expr: [Expression](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class)): `number`

#### Parameters:
- expr: [Expression](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class)


**Returns** `number`


---
### getModel
▸ getModel(): [DataModel](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/datamodel-class)


**Returns** [DataModel](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/datamodel-class)


---
### getQuery
▸ getQuery(): [Query](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/query-class)


**Returns** [Query](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/query-class)


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

▸ loadFromData(model: [DataModel](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/datamodel-class),colData: [QueryColumnData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/querycolumndata-interface)): `void`

#### Parameters:
- model: [DataModel](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/datamodel-class) - The Data Model.
- colData: [QueryColumnData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/querycolumndata-interface) - The JSON representation object.



**Returns** `void`


---
### saveToData
Saves the column to a data transfer object (ready for sending to the server-side) .

▸ saveToData(): [QueryColumnData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/querycolumndata-interface)


**Returns** [QueryColumnData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/querycolumndata-interface) - An plain object that represents the column.



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
