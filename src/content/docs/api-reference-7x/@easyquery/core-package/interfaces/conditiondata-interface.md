---
title: ConditionData interface
slug: api-reference-7x/@easyquery/core-package/interfaces/conditiondata-interface
sidebar:
  order: 100
---

Condition JSON representation object.

## Index
### [Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/conditiondata-interface/#properties-1)
- [conds](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/conditiondata-interface/#conds)
- [disabled](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/conditiondata-interface/#disabled)
- [enabled](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/conditiondata-interface/#enabled)
- [exprs](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/conditiondata-interface/#exprs)
- [inJoin](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/conditiondata-interface/#injoin)
- [linking](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/conditiondata-interface/#linking)
- [op](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/conditiondata-interface/#op)
- [parameterized](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/conditiondata-interface/#parameterized)
- [readOnly](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/conditiondata-interface/#readonly)
- [tag](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/conditiondata-interface/#tag)



## Properties

---
### conds

The list of conditions.

● conds?: [ConditionData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/conditiondata-interface)[]

---
### disabled

The value indicating whether this Condition is disabled.

● disabled?: `boolean`

---
### enabled

The value indicating whether this Condition is enabled (left of backward compatibility).

● enabled?: `boolean`

---
### exprs

The list of expressions.

● exprs?: [ExpressionData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/expressiondata-interface)[]

---
### inJoin

The value indicating whether this condition must be placed into `JOIN` clause in result `SQL`.

● inJoin?: `boolean`

---
### linking

The linking.

● linking: [LinkType](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/enumerations/linktype-enum)

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

● tag?: [CondTag](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/enumerations/condtag-enum)

---
