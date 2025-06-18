---
title: ConditionEx class
slug: >-
  api-reference-old/api-reference-6x/enterprise-package/classes/conditionex-class
sidebar:
  order: 100
---

## Implements
[ExpressionParent](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/expressionparent-interface)

## Extends
[Condition](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/conditionex-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/conditionex-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/conditionex-class/#public-properties-1)
- [blockId](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/conditionex-class/#blockid)
- [enabled](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/conditionex-class/#enabled)
- [expressions](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/conditionex-class/#expressions)
- [id](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/conditionex-class/#id)
- [justAdded](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/conditionex-class/#justadded)
- [linkType](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/conditionex-class/#linktype)
- [tag](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/conditionex-class/#tag)

### [Protected Properties](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/conditionex-class/#protected-properties-1)
- [_enabled](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/conditionex-class/#_enabled)
- [_id](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/conditionex-class/#_id)
- [conditions](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/conditionex-class/#conditions)
- [parent](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/conditionex-class/#parent)
- [query](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/conditionex-class/#query)

### [Public Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/conditionex-class/#public-methods-1)
- [addCondition](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/conditionex-class/#addcondition)
- [addExpressionByOperand](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/conditionex-class/#addexpressionbyoperand)
- [clearConditions](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/conditionex-class/#clearconditions)
- [expressionChanged](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/conditionex-class/#expressionchanged)
- [fireChangedEvent](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/conditionex-class/#firechangedevent)
- [getConditions](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/conditionex-class/#getconditions)
- [getExpressionIndex](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/conditionex-class/#getexpressionindex)
- [getLevel](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/conditionex-class/#getlevel)
- [getModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/conditionex-class/#getmodel)
- [getOperatorId](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/conditionex-class/#getoperatorid)
- [getParent](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/conditionex-class/#getparent)
- [getQuery](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/conditionex-class/#getquery)
- [isEmpty](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/conditionex-class/#isempty)
- [isGroup](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/conditionex-class/#isgroup)
- [isInJoin](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/conditionex-class/#isinjoin)
- [isParameterized](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/conditionex-class/#isparameterized)
- [isReadOnly](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/conditionex-class/#isreadonly)
- [loadFromData](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/conditionex-class/#loadfromdata)
- [removeConditionAt](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/conditionex-class/#removeconditionat)
- [saveToData](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/conditionex-class/#savetodata)
- [setInJoin](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/conditionex-class/#setinjoin)
- [setOperatorId](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/conditionex-class/#setoperatorid)
- [setParameterized](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/conditionex-class/#setparameterized)
- [setParent](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/conditionex-class/#setparent)
- [setReadOnly](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/conditionex-class/#setreadonly)


## Constructors

---
#### constructor

The default constructor.
⊕ new ConditionEx(query: [Query](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/query-class),tag?: [CondTag](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/enumerations/condtag-enum)): [ConditionEx](//easyquery/javascript/docs/api-reference-6x/@easyquery/enterprise-package/classes/conditionex-class)

#### Parameters:
- query: [Query](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/query-class)
- tag: [CondTag](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/enumerations/condtag-enum), *Optional*  - The condition tag



---

## Public Properties

---
### blockId

The block id.

● blockId: `string`

---
### enabled

● enabled: `boolean`

---
### expressions

The list of expression.

● expressions: [Expression](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/expression-class)[]

---
### id

● id: `string`

---
### justAdded

Condition enabled option.

● justAdded: `boolean`

---
### linkType

 The linking type.

● linkType: [LinkType](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/enumerations/linktype-enum)

---
### tag

The condition tag.

● tag: [CondTag](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/enumerations/condtag-enum)

---
## Protected Properties

---
### _enabled

The value indicating whether this Condition is enabled.

● _enabled: `boolean`

---
### _id

● _id: `string`

---
### conditions

The list of conditions.

● conditions: [Condition](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class)[]

---
### parent

● parent: [Condition](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class)

---
### query

● query: [Query](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/query-class)

---
## Public Methods

---
### addCondition
▸ addCondition(cond: [Condition](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class)): `number`

#### Parameters:
- cond: [Condition](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class)


**Returns** `number`


---
### addExpressionByOperand
▸ addExpressionByOperand(operand: [Operand](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/operand-class),val?: `string`): [Expression](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/expression-class)

#### Parameters:
- operand: [Operand](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/operand-class)
- val: `string`, *Optional* 


**Returns** [Expression](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/expression-class)


---
### clearConditions
▸ clearConditions(): `void`


**Returns** `void`


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
### getConditions
▸ getConditions(): [Condition](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class)[]


**Returns** [Condition](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class)[]


---
### getExpressionIndex
▸ getExpressionIndex(expr: [Expression](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/expression-class)): `number`

#### Parameters:
- expr: [Expression](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/expression-class)


**Returns** `number`


---
### getLevel
▸ getLevel(): `number`


**Returns** `number`


---
### getModel
▸ getModel(): [DataModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/datamodel-class)


**Returns** [DataModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/datamodel-class)


---
### getOperatorId
▸ getOperatorId(): `string`


**Returns** `string`


---
### getParent
▸ getParent(): [Condition](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class)


**Returns** [Condition](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class)


---
### getQuery
▸ getQuery(): [Query](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/query-class)


**Returns** [Query](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/query-class)


---
### isEmpty
▸ isEmpty(): `boolean`


**Returns** `boolean`


---
### isGroup
▸ isGroup(): `boolean`


**Returns** `boolean`


---
### isInJoin
▸ isInJoin(): `boolean`


**Returns** `boolean`


---
### isParameterized
▸ isParameterized(): `boolean`


**Returns** `boolean`


---
### isReadOnly
▸ isReadOnly(): `boolean`


**Returns** `boolean`


---
### loadFromData
▸ loadFromData(model: [DataModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/datamodel-class),data: `any`): `void`

#### Parameters:
- model: [DataModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/datamodel-class)
- data: `any`


**Returns** `void`


---
### removeConditionAt
▸ removeConditionAt(index: `number`): `void`

#### Parameters:
- index: `number`


**Returns** `void`


---
### saveToData
▸ saveToData(): `any`


**Returns** `any`


---
### setInJoin
▸ setInJoin(value: `boolean`): `void`

#### Parameters:
- value: `boolean`


**Returns** `void`


---
### setOperatorId
▸ setOperatorId(newOperatorId: `string`,silent?: `boolean`): `void`

#### Parameters:
- newOperatorId: `string`
- silent: `boolean`, *Optional* 


**Returns** `void`


---
### setParameterized
▸ setParameterized(value: `boolean`): `void`

#### Parameters:
- value: `boolean`


**Returns** `void`


---
### setParent
▸ setParent(parent: [Condition](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class)): `void`

#### Parameters:
- parent: [Condition](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class)


**Returns** `void`


---
### setReadOnly
▸ setReadOnly(value: `boolean`): `void`

#### Parameters:
- value: `boolean`


**Returns** `void`


---
