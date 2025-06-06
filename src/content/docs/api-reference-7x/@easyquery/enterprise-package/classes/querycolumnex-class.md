---
title: QueryColumnEx class
slug: api-reference-7x/@easyquery/enterprise-package/classes/querycolumnex-class
sidebar:
  order: 100
---

## Implements
[ExpressionParent](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/expressionparent-interface)

## Extends
[QueryColumn](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easyquery/enterprise-package/classes/querycolumnex-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easyquery/enterprise-package/classes/querycolumnex-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/enterprise-package/classes/querycolumnex-class/#public-properties-1)
- [blockId](//easyquery/javascript/docs/api-reference-7x/@easyquery/enterprise-package/classes/querycolumnex-class/#blockid)
- [caption](//easyquery/javascript/docs/api-reference-7x/@easyquery/enterprise-package/classes/querycolumnex-class/#caption)
- [enabled](//easyquery/javascript/docs/api-reference-7x/@easyquery/enterprise-package/classes/querycolumnex-class/#enabled)
- [expr](//easyquery/javascript/docs/api-reference-7x/@easyquery/enterprise-package/classes/querycolumnex-class/#expr)
- [id](//easyquery/javascript/docs/api-reference-7x/@easyquery/enterprise-package/classes/querycolumnex-class/#id)
- [params](//easyquery/javascript/docs/api-reference-7x/@easyquery/enterprise-package/classes/querycolumnex-class/#params)
- [sortIndex](//easyquery/javascript/docs/api-reference-7x/@easyquery/enterprise-package/classes/querycolumnex-class/#sortindex)
- [sorting](//easyquery/javascript/docs/api-reference-7x/@easyquery/enterprise-package/classes/querycolumnex-class/#sorting)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/enterprise-package/classes/querycolumnex-class/#public-methods-1)
- [expressionChanged](//easyquery/javascript/docs/api-reference-7x/@easyquery/enterprise-package/classes/querycolumnex-class/#expressionchanged)
- [fireChangedEvent](//easyquery/javascript/docs/api-reference-7x/@easyquery/enterprise-package/classes/querycolumnex-class/#firechangedevent)
- [getExpressionIndex](//easyquery/javascript/docs/api-reference-7x/@easyquery/enterprise-package/classes/querycolumnex-class/#getexpressionindex)
- [getModel](//easyquery/javascript/docs/api-reference-7x/@easyquery/enterprise-package/classes/querycolumnex-class/#getmodel)
- [getQuery](//easyquery/javascript/docs/api-reference-7x/@easyquery/enterprise-package/classes/querycolumnex-class/#getquery)
- [isHidden](//easyquery/javascript/docs/api-reference-7x/@easyquery/enterprise-package/classes/querycolumnex-class/#ishidden)
- [isJustSorted](//easyquery/javascript/docs/api-reference-7x/@easyquery/enterprise-package/classes/querycolumnex-class/#isjustsorted)
- [isReadOnly](//easyquery/javascript/docs/api-reference-7x/@easyquery/enterprise-package/classes/querycolumnex-class/#isreadonly)
- [loadFromData](//easyquery/javascript/docs/api-reference-7x/@easyquery/enterprise-package/classes/querycolumnex-class/#loadfromdata)
- [saveToData](//easyquery/javascript/docs/api-reference-7x/@easyquery/enterprise-package/classes/querycolumnex-class/#savetodata)
- [setHidden](//easyquery/javascript/docs/api-reference-7x/@easyquery/enterprise-package/classes/querycolumnex-class/#sethidden)
- [setReadOnly](//easyquery/javascript/docs/api-reference-7x/@easyquery/enterprise-package/classes/querycolumnex-class/#setreadonly)


## Constructors

---
#### constructor

the default constructor.
⊕ new QueryColumnEx(query: [Query](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/query-class),justsorted?: `boolean`): [QueryColumnEx](//easyquery/javascript/docs/api-reference-7x/@easyquery/enterprise-package/classes/querycolumnex-class)

#### Parameters:
- query: [Query](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/query-class)
- justsorted: `boolean`, *Optional* 


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

● enabled: `boolean`

---
### expr

The column expression.

● expr: [Expression](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class)

---
### id

● id: `string`

---
### params

The parameters associated with this column

● params: [QueryParam](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/queryparam-interface)[]

---
### sortIndex

The index of the column in the sorting list.

● sortIndex: `number`

---
### sorting

Column sorting direction

● sorting: [SortDirection](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/enumerations/sortdirection-enum)

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
▸ isReadOnly(): `boolean`


**Returns** `boolean`


---
### loadFromData
Loads column from its JSON representation object.

▸ loadFromData(model: [DataModel](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/datamodel-class),colData: `any`): `void`

#### Parameters:
- model: [DataModel](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/datamodel-class) - The Data Model.
- colData: `any` - The JSON representation object.



**Returns** `void`


---
### saveToData
▸ saveToData(): `any`


**Returns** `any`


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
