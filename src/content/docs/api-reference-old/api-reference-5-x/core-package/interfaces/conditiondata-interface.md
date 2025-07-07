---
title: ConditionData interface
slug: >-
  api-reference-old/api-reference-5-x/core-package/interfaces/conditiondata-interface
sidebar:
  order: 100
---

Condition JSON representation object.

## Index
### [Properties](api-reference-old/api-reference-5-x/core-package/interfaces/conditiondata-interface#properties-1)
- [conds](api-reference-old/api-reference-5-x/core-package/interfaces/conditiondata-interface#conds)
- [enabled](api-reference-old/api-reference-5-x/core-package/interfaces/conditiondata-interface#enabled)
- [exprs](api-reference-old/api-reference-5-x/core-package/interfaces/conditiondata-interface#exprs)
- [inJoin](api-reference-old/api-reference-5-x/core-package/interfaces/conditiondata-interface#injoin)
- [linking](api-reference-old/api-reference-5-x/core-package/interfaces/conditiondata-interface#linking)
- [op](api-reference-old/api-reference-5-x/core-package/interfaces/conditiondata-interface#op)
- [parameterized](api-reference-old/api-reference-5-x/core-package/interfaces/conditiondata-interface#parameterized)
- [readOnly](api-reference-old/api-reference-5-x/core-package/interfaces/conditiondata-interface#readonly)
- [tag](api-reference-old/api-reference-5-x/core-package/interfaces/conditiondata-interface#tag)



## Properties

---
### conds

The list of conditions.

● conds?: [ConditionData](api-reference-old/api-reference-5-x/core-package/interfaces/conditiondata-interface)[]

---
### enabled

The value indicating whether this Condition is enabled.

● enabled?: `boolean`

---
### exprs

The list of expressions.

● exprs?: [ExpressionData](api-reference-old/api-reference-5-x/core-package/interfaces/expressiondata-interface)[]

---
### inJoin

The value indicating whether this condition must be placed into `JOIN` clause in result `SQL`.

● inJoin?: `boolean`

---
### linking

The linking.

● linking: [LinkType](api-reference-old/api-reference-5-x/core-package/enumerations/linktype-enum)

---
### op

The operator id.

● op: `string`

---
### parameterized

The value indicating whether this condition is parameterized.

● parameterized?: `boolean`

---
### readOnly

The value indicating whether this condition is read-only.

● readOnly?: `boolean`

---
### tag

The condition tag.

● tag?: [CondTag](api-reference-old/api-reference-5-x/core-package/enumerations/condtag-enum)

---
