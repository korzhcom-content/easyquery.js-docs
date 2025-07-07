---
title: ConditionEx class
slug: >-
  api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class
sidebar:
  order: 100
---

## Implements
[ExpressionParent](api-reference-7x/easyquery-packages/core-package/interfaces/expressionparent-interface)

## Extends
[Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class)

## Index
### [Constructors](api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class#constructor)

### [Public Properties](api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class#public-properties-1)
- [blockId](api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class#blockid)
- [enabled](api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class#enabled)
- [expressions](api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class#expressions)
- [id](api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class#id)
- [justAdded](api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class#justadded)
- [linkType](api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class#linktype)
- [tag](api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class#tag)

### [Protected Properties](api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class#protected-properties-1)
- [_enabled](api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class#_enabled)
- [_id](api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class#_id)
- [conditions](api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class#conditions)
- [parent](api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class#parent)
- [query](api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class#query)

### [Public Methods](api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class#public-methods-1)
- [addCondition](api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class#addcondition)
- [addExpressionByOperand](api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class#addexpressionbyoperand)
- [clearConditions](api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class#clearconditions)
- [expressionChanged](api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class#expressionchanged)
- [fireChangedEvent](api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class#firechangedevent)
- [getConditions](api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class#getconditions)
- [getExpressionIndex](api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class#getexpressionindex)
- [getLevel](api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class#getlevel)
- [getModel](api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class#getmodel)
- [getOperatorId](api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class#getoperatorid)
- [getParent](api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class#getparent)
- [getQuery](api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class#getquery)
- [isEmpty](api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class#isempty)
- [isGroup](api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class#isgroup)
- [isInJoin](api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class#isinjoin)
- [isParameterized](api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class#isparameterized)
- [isReadOnly](api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class#isreadonly)
- [loadFromData](api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class#loadfromdata)
- [removeConditionAt](api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class#removeconditionat)
- [saveToData](api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class#savetodata)
- [setInJoin](api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class#setinjoin)
- [setOperatorId](api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class#setoperatorid)
- [setParameterized](api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class#setparameterized)
- [setParent](api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class#setparent)
- [setReadOnly](api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class#setreadonly)


## Constructors

---
#### constructor

The default constructor.
⊕ new ConditionEx(query: [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class),tag?: [CondTag](api-reference-7x/easyquery-packages/core-package/enumerations/condtag-enum)): [ConditionEx](api-reference-7x/easyquery-packages/enterprise-package/classes/conditionex-class)

#### Parameters:
- query: [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)
- tag: [CondTag](api-reference-7x/easyquery-packages/core-package/enumerations/condtag-enum), *Optional*  - The condition tag



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

● expressions: [Expression](api-reference-7x/easyquery-packages/core-package/classes/expression-class)[]

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

● linkType: [LinkType](api-reference-7x/easyquery-packages/core-package/enumerations/linktype-enum)

---
### tag

The condition tag.

● tag: [CondTag](api-reference-7x/easyquery-packages/core-package/enumerations/condtag-enum)

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

● conditions: [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class)[]

---
### parent

● parent: [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class)

---
### query

● query: [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)

---
## Public Methods

---
### addCondition
▸ addCondition(cond: [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class)): `number`

#### Parameters:
- cond: [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class)


**Returns** `number`


---
### addExpressionByOperand
▸ addExpressionByOperand(operand: [Operand](api-reference-7x/easyquery-packages/core-package/classes/operand-class),val?: `string`): [Expression](api-reference-7x/easyquery-packages/core-package/classes/expression-class)

#### Parameters:
- operand: [Operand](api-reference-7x/easyquery-packages/core-package/classes/operand-class)
- val: `string`, *Optional* 


**Returns** [Expression](api-reference-7x/easyquery-packages/core-package/classes/expression-class)


---
### clearConditions
▸ clearConditions(): `void`


**Returns** `void`


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
### getConditions
▸ getConditions(): [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class)[]


**Returns** [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class)[]


---
### getExpressionIndex
▸ getExpressionIndex(expr: [Expression](api-reference-7x/easyquery-packages/core-package/classes/expression-class)): `number`

#### Parameters:
- expr: [Expression](api-reference-7x/easyquery-packages/core-package/classes/expression-class)


**Returns** `number`


---
### getLevel
▸ getLevel(): `number`


**Returns** `number`


---
### getModel
▸ getModel(): [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class)


**Returns** [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class)


---
### getOperatorId
▸ getOperatorId(): `string`


**Returns** `string`


---
### getParent
▸ getParent(): [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class)


**Returns** [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class)


---
### getQuery
▸ getQuery(): [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)


**Returns** [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)


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
▸ loadFromData(model: [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class),data: `any`): `void`

#### Parameters:
- model: [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class)
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
▸ setParent(parent: [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class)): `void`

#### Parameters:
- parent: [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class)


**Returns** `void`


---
### setReadOnly
▸ setReadOnly(value: `boolean`): `void`

#### Parameters:
- value: `boolean`


**Returns** `void`


---
