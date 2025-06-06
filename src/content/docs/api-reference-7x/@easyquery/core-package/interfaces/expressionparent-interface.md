---
title: ExpressionParent interface
slug: api-reference-7x/@easyquery/core-package/interfaces/expressionparent-interface
sidebar:
  order: 100
---

## Index
### [Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/expressionparent-interface/#properties-1)
- [enabled](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/expressionparent-interface/#enabled)

### [Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/expressionparent-interface/#methods-1)
- [expressionChanged](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/expressionparent-interface/#expressionchanged)
- [fireChangedEvent](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/expressionparent-interface/#firechangedevent)
- [getExpressionIndex](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/expressionparent-interface/#getexpressionindex)
- [getQuery](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/expressionparent-interface/#getquery)
- [isReadOnly](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/expressionparent-interface/#isreadonly)



## Properties

---
### enabled

● enabled: `boolean`

---
## Methods

---
### expressionChanged
▸ expressionChanged(expr: [Expression](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class),oldValue: `string`): `void`

#### Parameters:
- expr: [Expression](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class)
- oldValue: `string`


**Returns** `void`


---
### fireChangedEvent
▸ fireChangedEvent(condPart?: [ConditionPart](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/enumerations/conditionpart-enum)): `void`

#### Parameters:
- condPart: [ConditionPart](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/enumerations/conditionpart-enum), *Optional* 


**Returns** `void`


---
### getExpressionIndex
▸ getExpressionIndex(expr: [Expression](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class)): `number`

#### Parameters:
- expr: [Expression](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class)


**Returns** `number`


---
### getQuery
▸ getQuery(): [Query](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/query-class)


**Returns** [Query](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/query-class)


---
### isReadOnly
▸ isReadOnly(): `boolean`


**Returns** `boolean`


---
