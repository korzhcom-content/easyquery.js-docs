---
title: AggrFunction class
slug: api-reference-7x/easyquery-packages/core-package/classes/aggrfunction-class
sidebar:
  order: 100
---

Represents an aggregate function

## Index
### [Constructors](api-reference-7x/easyquery-packages/core-package/classes/aggrfunction-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/core-package/classes/aggrfunction-class#constructor)

### [Public Properties](api-reference-7x/easyquery-packages/core-package/classes/aggrfunction-class#public-properties-1)
- [appliedTypes](api-reference-7x/easyquery-packages/core-package/classes/aggrfunction-class#appliedtypes)
- [caption](api-reference-7x/easyquery-packages/core-package/classes/aggrfunction-class#caption)
- [displayFormat](api-reference-7x/easyquery-packages/core-package/classes/aggrfunction-class#displayformat)
- [id](api-reference-7x/easyquery-packages/core-package/classes/aggrfunction-class#id)
- [sqlExpr](api-reference-7x/easyquery-packages/core-package/classes/aggrfunction-class#sqlexpr)

### [Public Methods](api-reference-7x/easyquery-packages/core-package/classes/aggrfunction-class#public-methods-1)
- [getAppliedTypesOrDefault](api-reference-7x/easyquery-packages/core-package/classes/aggrfunction-class#getappliedtypesordefault)
- [loadFromData](api-reference-7x/easyquery-packages/core-package/classes/aggrfunction-class#loadfromdata)


## Constructors

---
#### constructor

The default constructor.
⊕ new AggrFunction(): [AggrFunction](api-reference-7x/easyquery-packages/core-package/classes/aggrfunction-class)


---

## Public Properties

---
### appliedTypes

● appliedTypes: `DataType`[]

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
### getAppliedTypesOrDefault
▸ getAppliedTypesOrDefault(): `DataType`[]


**Returns** `DataType`[]


---
### loadFromData
Loads an aggregate function from its JSON representation object

▸ loadFromData(aggrFunction: [AggrFuncData](api-reference-7x/easyquery-packages/core-package/interfaces/aggrfuncdata-interface)): `void`

#### Parameters:
- aggrFunction: [AggrFuncData](api-reference-7x/easyquery-packages/core-package/interfaces/aggrfuncdata-interface) - The JSON representation object



**Returns** `void`


---
