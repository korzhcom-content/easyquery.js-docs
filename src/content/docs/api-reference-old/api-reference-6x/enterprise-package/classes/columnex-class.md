---
title: ColumnEx class
slug: api-reference-old/api-reference-6x/enterprise-package/classes/columnex-class
sidebar:
  order: 100
---

## Implements
[ExpressionParent](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/expressionparent-interface)

## Extends
[Column](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/column-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/columnex-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/columnex-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/columnex-class/#public-properties-1)
- [blockId](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/columnex-class/#blockid)
- [caption](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/columnex-class/#caption)
- [enabled](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/columnex-class/#enabled)
- [expr](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/columnex-class/#expr)
- [id](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/columnex-class/#id)
- [params](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/columnex-class/#params)
- [sortIndex](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/columnex-class/#sortindex)
- [sorting](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/columnex-class/#sorting)

### [Public Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/columnex-class/#public-methods-1)
- [expressionChanged](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/columnex-class/#expressionchanged)
- [fireChangedEvent](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/columnex-class/#firechangedevent)
- [getExpressionIndex](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/columnex-class/#getexpressionindex)
- [getModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/columnex-class/#getmodel)
- [getQuery](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/columnex-class/#getquery)
- [isReadOnly](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/columnex-class/#isreadonly)
- [loadFromData](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/columnex-class/#loadfromdata)
- [saveToData](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/columnex-class/#savetodata)
- [setReadOnly](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/columnex-class/#setreadonly)


## Constructors

---
#### constructor

the default constructor.
⊕ new ColumnEx(query: [Query](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/query-class)): [ColumnEx](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/columnex-class)

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

● enabled: `boolean`

---
### expr

The column expression.

● expr: [Expression](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/expression-class)

---
### id

● id: `string`

---
### params

The parameters associated with this column

● params: [QueryParam](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/queryparam-interface)[]

---
### sortIndex

The index of the column in the sorting list.

● sortIndex: `number`

---
### sorting

Column sorting direction

● sorting: [SortDirection](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/enumerations/sortdirection-enum)

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
▸ isReadOnly(): `boolean`


**Returns** `boolean`


---
### loadFromData
Loads column from its JSON representation object.

▸ loadFromData(model: [DataModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/datamodel-class),colData: `any`): `void`

#### Parameters:
- model: [DataModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/datamodel-class) - The Data Model.
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
