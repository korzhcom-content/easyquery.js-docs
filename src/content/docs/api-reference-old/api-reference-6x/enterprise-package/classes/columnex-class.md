---
title: ColumnEx class
slug: api-reference-old/api-reference-6x/enterprise-package/classes/columnex-class
sidebar:
  order: 100
---

## Implements
[ExpressionParent](api-reference-old/api-reference-6x/core-package/interfaces/expressionparent-interface)

## Extends
[Column](api-reference-old/api-reference-6x/core-package/classes/column-class)

## Index
### [Constructors](api-reference-old/api-reference-6x/enterprise-package/classes/columnex-class#constructors-1)
- [constructor](api-reference-old/api-reference-6x/enterprise-package/classes/columnex-class#constructor)

### [Public Properties](api-reference-old/api-reference-6x/enterprise-package/classes/columnex-class#public-properties-1)
- [blockId](api-reference-old/api-reference-6x/enterprise-package/classes/columnex-class#blockid)
- [caption](api-reference-old/api-reference-6x/enterprise-package/classes/columnex-class#caption)
- [enabled](api-reference-old/api-reference-6x/enterprise-package/classes/columnex-class#enabled)
- [expr](api-reference-old/api-reference-6x/enterprise-package/classes/columnex-class#expr)
- [id](api-reference-old/api-reference-6x/enterprise-package/classes/columnex-class#id)
- [params](api-reference-old/api-reference-6x/enterprise-package/classes/columnex-class#params)
- [sortIndex](api-reference-old/api-reference-6x/enterprise-package/classes/columnex-class#sortindex)
- [sorting](api-reference-old/api-reference-6x/enterprise-package/classes/columnex-class#sorting)

### [Public Methods](api-reference-old/api-reference-6x/enterprise-package/classes/columnex-class#public-methods-1)
- [expressionChanged](api-reference-old/api-reference-6x/enterprise-package/classes/columnex-class#expressionchanged)
- [fireChangedEvent](api-reference-old/api-reference-6x/enterprise-package/classes/columnex-class#firechangedevent)
- [getExpressionIndex](api-reference-old/api-reference-6x/enterprise-package/classes/columnex-class#getexpressionindex)
- [getModel](api-reference-old/api-reference-6x/enterprise-package/classes/columnex-class#getmodel)
- [getQuery](api-reference-old/api-reference-6x/enterprise-package/classes/columnex-class#getquery)
- [isReadOnly](api-reference-old/api-reference-6x/enterprise-package/classes/columnex-class#isreadonly)
- [loadFromData](api-reference-old/api-reference-6x/enterprise-package/classes/columnex-class#loadfromdata)
- [saveToData](api-reference-old/api-reference-6x/enterprise-package/classes/columnex-class#savetodata)
- [setReadOnly](api-reference-old/api-reference-6x/enterprise-package/classes/columnex-class#setreadonly)


## Constructors

---
#### constructor

the default constructor.
⊕ new ColumnEx(query: [Query](api-reference-old/api-reference-6x/core-package/classes/query-class)): [ColumnEx](api-reference-old/api-reference-6x/enterprise-package/classes/columnex-class)

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

● enabled: `boolean`

---
### expr

The column expression.

● expr: [Expression](api-reference-old/api-reference-6x/core-package/classes/expression-class)

---
### id

● id: `string`

---
### params

The parameters associated with this column

● params: [QueryParam](api-reference-old/api-reference-6x/core-package/interfaces/queryparam-interface)[]

---
### sortIndex

The index of the column in the sorting list.

● sortIndex: `number`

---
### sorting

Column sorting direction

● sorting: [SortDirection](api-reference-old/api-reference-6x/core-package/enumerations/sortdirection-enum)

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
▸ isReadOnly(): `boolean`


**Returns** `boolean`


---
### loadFromData
Loads column from its JSON representation object.

▸ loadFromData(model: [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class),colData: `any`): `void`

#### Parameters:
- model: [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class) - The Data Model.
- colData: `any` - The JSON representation object.



**Returns** `void`


---
### saveToData
▸ saveToData(): `any`


**Returns** `any`


---
### setReadOnly
▸ setReadOnly(value: `boolean`): `void`

#### Parameters:
- value: `boolean`


**Returns** `void`


---
