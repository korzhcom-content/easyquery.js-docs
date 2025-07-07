---
title: Operator class
slug: api-reference-old/api-reference-5-x/core-package/classes/operator-class
sidebar:
  order: 100
---

Represents a logical expression or predicate, like comparisions or `LIKE` predicate.

## Index
### [Constructors](api-reference-old/api-reference-5-x/core-package/classes/operator-class#constructors-1)
- [constructor](api-reference-old/api-reference-5-x/core-package/classes/operator-class#constructor)

### [Public Properties](api-reference-old/api-reference-5-x/core-package/classes/operator-class#public-properties-1)
- [caption](api-reference-old/api-reference-5-x/core-package/classes/operator-class#caption)
- [caseIns](api-reference-old/api-reference-5-x/core-package/classes/operator-class#caseins)
- [defaultOperand](api-reference-old/api-reference-5-x/core-package/classes/operator-class#defaultoperand)
- [displayFormat](api-reference-old/api-reference-5-x/core-package/classes/operator-class#displayformat)
- [id](api-reference-old/api-reference-5-x/core-package/classes/operator-class#id)
- [isRange](api-reference-old/api-reference-5-x/core-package/classes/operator-class#isrange)
- [operands](api-reference-old/api-reference-5-x/core-package/classes/operator-class#operands)
- [paramCount](api-reference-old/api-reference-5-x/core-package/classes/operator-class#paramcount)

### [Public Methods](api-reference-old/api-reference-5-x/core-package/classes/operator-class#public-methods-1)
- [loadFromData](api-reference-old/api-reference-5-x/core-package/classes/operator-class#loadfromdata)


## Constructors

---
#### constructor

The default constructor.
⊕ new Operator(): [Operator](api-reference-old/api-reference-5-x/core-package/classes/operator-class)


---

## Public Properties

---
### caption

The operator caption.

● caption: `string`

---
### caseIns

The value indicating whether the operator is case insensative.

● caseIns: `boolean`

---
### defaultOperand

● defaultOperand: [Operand](api-reference-old/api-reference-5-x/core-package/classes/operand-class)

---
### displayFormat

The display format of operator.

● displayFormat: `string`

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

● operands: [Operand](api-reference-old/api-reference-5-x/core-package/classes/operand-class)[]

---
### paramCount

 The number of parameters which are taken by the operator.

● paramCount: `number`

---
## Public Methods

---
### loadFromData
Loads operator from its JSON representation object.

▸ loadFromData(model: [DataModel](api-reference-old/api-reference-5-x/core-package/classes/datamodel-class),data: [OperatorData](api-reference-old/api-reference-5-x/core-package/interfaces/operatordata-interface)): `void`

#### Parameters:
- model: [DataModel](api-reference-old/api-reference-5-x/core-package/classes/datamodel-class) - The Data Model.
- data: [OperatorData](api-reference-old/api-reference-5-x/core-package/interfaces/operatordata-interface) - The JSON representation object.



**Returns** `void`

---
