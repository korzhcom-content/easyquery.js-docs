---
title: AggrFunction class
slug: api-reference-7x/easyquery-packages/core-package/classes/aggrfunction-class
sidebar:
  order: 100
---

Represents an aggregate function

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/aggrfunction-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/aggrfunction-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/aggrfunction-class/#public-properties-1)
- [appliedTypes](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/aggrfunction-class/#appliedtypes)
- [caption](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/aggrfunction-class/#caption)
- [displayFormat](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/aggrfunction-class/#displayformat)
- [id](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/aggrfunction-class/#id)
- [sqlExpr](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/aggrfunction-class/#sqlexpr)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/aggrfunction-class/#public-methods-1)
- [getAppliedTypesOrDefault](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/aggrfunction-class/#getappliedtypesordefault)
- [loadFromData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/aggrfunction-class/#loadfromdata)


## Constructors

---
#### constructor

The default constructor.
⊕ new AggrFunction(): [AggrFunction](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/aggrfunction-class)


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

▸ loadFromData(aggrFunction: [AggrFuncData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/aggrfuncdata-interface)): `void`

#### Parameters:
- aggrFunction: [AggrFuncData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/aggrfuncdata-interface) - The JSON representation object



**Returns** `void`


---
