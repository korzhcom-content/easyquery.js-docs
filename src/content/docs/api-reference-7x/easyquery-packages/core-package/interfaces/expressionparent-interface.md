---
title: ExpressionParent interface
slug: >-
  api-reference-7x/easyquery-packages/core-package/interfaces/expressionparent-interface
sidebar:
  order: 100
---

## Index
### [Properties](api-reference-7x/easyquery-packages/core-package/interfaces/expressionparent-interface#properties-1)
- [enabled](api-reference-7x/easyquery-packages/core-package/interfaces/expressionparent-interface#enabled)

### [Methods](api-reference-7x/easyquery-packages/core-package/interfaces/expressionparent-interface#methods-1)
- [expressionChanged](api-reference-7x/easyquery-packages/core-package/interfaces/expressionparent-interface#expressionchanged)
- [fireChangedEvent](api-reference-7x/easyquery-packages/core-package/interfaces/expressionparent-interface#firechangedevent)
- [getExpressionIndex](api-reference-7x/easyquery-packages/core-package/interfaces/expressionparent-interface#getexpressionindex)
- [getQuery](api-reference-7x/easyquery-packages/core-package/interfaces/expressionparent-interface#getquery)
- [isReadOnly](api-reference-7x/easyquery-packages/core-package/interfaces/expressionparent-interface#isreadonly)



## Properties

---
### enabled

● enabled: `boolean`

---
## Methods

---
### expressionChanged
▸ expressionChanged(expr: [Expression](api-reference-7x/easyquery-packages/core-package/classes/expression-class),oldValue: `string`): `void`

#### Parameters:
- expr: [Expression](api-reference-7x/easyquery-packages/core-package/classes/expression-class)
- oldValue: `string`


**Returns** `void`


---
### fireChangedEvent
▸ fireChangedEvent(condPart?: [ConditionPart](api-reference-7x/easyquery-packages/core-package/enumerations/conditionpart-enum)): `void`

#### Parameters:
- condPart: [ConditionPart](api-reference-7x/easyquery-packages/core-package/enumerations/conditionpart-enum), *Optional* 


**Returns** `void`


---
### getExpressionIndex
▸ getExpressionIndex(expr: [Expression](api-reference-7x/easyquery-packages/core-package/classes/expression-class)): `number`

#### Parameters:
- expr: [Expression](api-reference-7x/easyquery-packages/core-package/classes/expression-class)


**Returns** `number`


---
### getQuery
▸ getQuery(): [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)


**Returns** [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)


---
### isReadOnly
▸ isReadOnly(): `boolean`


**Returns** `boolean`


---
