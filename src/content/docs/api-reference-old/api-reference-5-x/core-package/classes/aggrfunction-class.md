---
title: AggrFunction class
slug: api-reference-old/api-reference-5-x/core-package/classes/aggrfunction-class
sidebar:
  order: 100
---

Represents an aggregate function

## Index
### [Constructors](api-reference-old/api-reference-5-x/core-package/classes/aggrfunction-class#constructors-1)
- [constructor](api-reference-old/api-reference-5-x/core-package/classes/aggrfunction-class#constructor)

### [Public Properties](api-reference-old/api-reference-5-x/core-package/classes/aggrfunction-class#public-properties-1)
- [caption](api-reference-old/api-reference-5-x/core-package/classes/aggrfunction-class#caption)
- [displayFormat](api-reference-old/api-reference-5-x/core-package/classes/aggrfunction-class#displayformat)
- [id](api-reference-old/api-reference-5-x/core-package/classes/aggrfunction-class#id)
- [sqlExpr](api-reference-old/api-reference-5-x/core-package/classes/aggrfunction-class#sqlexpr)

### [Public Methods](api-reference-old/api-reference-5-x/core-package/classes/aggrfunction-class#public-methods-1)
- [loadFromData](api-reference-old/api-reference-5-x/core-package/classes/aggrfunction-class#loadfromdata)


## Constructors

---
#### constructor

The default constructor.
⊕ new AggrFunction(): [AggrFunction](api-reference-old/api-reference-5-x/core-package/classes/aggrfunction-class)


---

## Public Properties

---
### caption

The caption of the aggregate function.

● caption: `string`

---
### displayFormat

The display format of aggregate function.

● displayFormat: `string`

---
### id

The function id.
(e.g. `SUM` or `COUNT`)

● id: `string`

---
### sqlExpr

The SQL expression

● sqlExpr: `string`

---
## Public Methods

---
### loadFromData
Loads an aggregate function from its JSON representation object

▸ loadFromData(aggrFunction: [AggrFuncData](api-reference-old/api-reference-5-x/core-package/interfaces/aggrfuncdata-interface)): `void`

#### Parameters:
- aggrFunction: [AggrFuncData](api-reference-old/api-reference-5-x/core-package/interfaces/aggrfuncdata-interface) - The JSON representation object



**Returns** `void`

---
