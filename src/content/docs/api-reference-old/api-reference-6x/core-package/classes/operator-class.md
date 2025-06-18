---
title: Operator class
slug: api-reference-old/api-reference-6x/core-package/classes/operator-class
sidebar:
  order: 100
---

Represents a logical expression or predicate, like comparisions or `LIKE` predicate.

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/operator-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/operator-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/operator-class/#public-properties-1)
- [appliedTypes](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/operator-class/#appliedtypes)
- [caption](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/operator-class/#caption)
- [caseIns](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/operator-class/#caseins)
- [constValueFormat](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/operator-class/#constvalueformat)
- [defaultOperand](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/operator-class/#defaultoperand)
- [displayFormat](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/operator-class/#displayformat)
- [expr](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/operator-class/#expr)
- [id](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/operator-class/#id)
- [isRange](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/operator-class/#isrange)
- [operands](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/operator-class/#operands)
- [paramCount](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/operator-class/#paramcount)

### [Public Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/operator-class/#public-methods-1)
- [loadFromData](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/operator-class/#loadfromdata)


## Constructors

---
#### constructor

The default constructor.
⊕ new Operator(): [Operator](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/operator-class)


---

## Public Properties

---
### appliedTypes

● appliedTypes: [DataType](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/enumerations/datatype-enum)[]

---
### caption

The operator caption.

● caption: `string`

---
### caseIns

The value indicating whether the operator is case insensative.

● caseIns: `boolean`

---
### constValueFormat

● constValueFormat: `string`

---
### defaultOperand

● defaultOperand: [Operand](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/operand-class)

---
### displayFormat

The display format of operator.

● displayFormat: `string`

---
### expr

● expr: `string`

---
### id

The operator ID.

● id: `string`

---
### isRange

The value indicating whether this operator requires range values so first value must be less than the second one.

● isRange: `boolean`

---
### operands

The operands for this operator.

● operands: [Operand](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/operand-class)[]

---
### paramCount

 The number of parameters which are taken by the operator.

● paramCount: `number`

---
## Public Methods

---
### loadFromData
Loads operator from its JSON representation object.

▸ loadFromData(model: [DataModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/datamodel-class),data: [OperatorData](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/operatordata-interface)): `void`

#### Parameters:
- model: [DataModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/datamodel-class) - The Data Model.
- data: [OperatorData](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/operatordata-interface) - The JSON representation object.



**Returns** `void`


---
