---
title: QueryColumnEx class
slug: >-
  api-reference-7x/easyquery-packages/enterprise-package/classes/querycolumnex-class
sidebar:
  order: 100
---

## Implements
[ExpressionParent](api-reference-7x/easyquery-packages/core-package/interfaces/expressionparent-interface)

## Extends
[QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)

## Index
### [Constructors](api-reference-7x/easyquery-packages/enterprise-package/classes/querycolumnex-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/enterprise-package/classes/querycolumnex-class#constructor)

### [Public Properties](api-reference-7x/easyquery-packages/enterprise-package/classes/querycolumnex-class#public-properties-1)
- [blockId](api-reference-7x/easyquery-packages/enterprise-package/classes/querycolumnex-class#blockid)
- [caption](api-reference-7x/easyquery-packages/enterprise-package/classes/querycolumnex-class#caption)
- [enabled](api-reference-7x/easyquery-packages/enterprise-package/classes/querycolumnex-class#enabled)
- [expr](api-reference-7x/easyquery-packages/enterprise-package/classes/querycolumnex-class#expr)
- [id](api-reference-7x/easyquery-packages/enterprise-package/classes/querycolumnex-class#id)
- [params](api-reference-7x/easyquery-packages/enterprise-package/classes/querycolumnex-class#params)
- [sortIndex](api-reference-7x/easyquery-packages/enterprise-package/classes/querycolumnex-class#sortindex)
- [sorting](api-reference-7x/easyquery-packages/enterprise-package/classes/querycolumnex-class#sorting)

### [Public Methods](api-reference-7x/easyquery-packages/enterprise-package/classes/querycolumnex-class#public-methods-1)
- [expressionChanged](api-reference-7x/easyquery-packages/enterprise-package/classes/querycolumnex-class#expressionchanged)
- [fireChangedEvent](api-reference-7x/easyquery-packages/enterprise-package/classes/querycolumnex-class#firechangedevent)
- [getExpressionIndex](api-reference-7x/easyquery-packages/enterprise-package/classes/querycolumnex-class#getexpressionindex)
- [getModel](api-reference-7x/easyquery-packages/enterprise-package/classes/querycolumnex-class#getmodel)
- [getQuery](api-reference-7x/easyquery-packages/enterprise-package/classes/querycolumnex-class#getquery)
- [isHidden](api-reference-7x/easyquery-packages/enterprise-package/classes/querycolumnex-class#ishidden)
- [isJustSorted](api-reference-7x/easyquery-packages/enterprise-package/classes/querycolumnex-class#isjustsorted)
- [isReadOnly](api-reference-7x/easyquery-packages/enterprise-package/classes/querycolumnex-class#isreadonly)
- [loadFromData](api-reference-7x/easyquery-packages/enterprise-package/classes/querycolumnex-class#loadfromdata)
- [saveToData](api-reference-7x/easyquery-packages/enterprise-package/classes/querycolumnex-class#savetodata)
- [setHidden](api-reference-7x/easyquery-packages/enterprise-package/classes/querycolumnex-class#sethidden)
- [setReadOnly](api-reference-7x/easyquery-packages/enterprise-package/classes/querycolumnex-class#setreadonly)


## Constructors

---
#### constructor

the default constructor.
⊕ new QueryColumnEx(query: [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class),justsorted?: `boolean`): [QueryColumnEx](api-reference-7x/easyquery-packages/enterprise-package/classes/querycolumnex-class)

#### Parameters:
- query: [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)
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

● expr: [Expression](api-reference-7x/easyquery-packages/core-package/classes/expression-class)

---
### id

● id: `string`

---
### params

The parameters associated with this column

● params: [QueryParam](api-reference-7x/easyquery-packages/core-package/interfaces/queryparam-interface)[]

---
### sortIndex

The index of the column in the sorting list.

● sortIndex: `number`

---
### sorting

Column sorting direction

● sorting: [SortDirection](api-reference-7x/easyquery-packages/core-package/enumerations/sortdirection-enum)

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
▸ isReadOnly(): `boolean`


**Returns** `boolean`


---
### loadFromData
Loads column from its JSON representation object.

▸ loadFromData(model: [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class),colData: `any`): `void`

#### Parameters:
- model: [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class) - The Data Model.
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
