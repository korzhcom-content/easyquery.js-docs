---
title: Condition class
slug: api-reference-7x/easyquery-packages/core-package/classes/condition-class
sidebar:
  order: 100
---

Represents some condition.

## Implements
[ExpressionParent](api-reference-7x/easyquery-packages/core-package/interfaces/expressionparent-interface)

## Index
### [Constructors](api-reference-7x/easyquery-packages/core-package/classes/condition-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/core-package/classes/condition-class#constructor)

### [Public Properties](api-reference-7x/easyquery-packages/core-package/classes/condition-class#public-properties-1)
- [blockId](api-reference-7x/easyquery-packages/core-package/classes/condition-class#blockid)
- [expressions](api-reference-7x/easyquery-packages/core-package/classes/condition-class#expressions)
- [justAdded](api-reference-7x/easyquery-packages/core-package/classes/condition-class#justadded)
- [linkType](api-reference-7x/easyquery-packages/core-package/classes/condition-class#linktype)
- [tag](api-reference-7x/easyquery-packages/core-package/classes/condition-class#tag)

### [Protected Properties](api-reference-7x/easyquery-packages/core-package/classes/condition-class#protected-properties-1)
- [_enabled](api-reference-7x/easyquery-packages/core-package/classes/condition-class#_enabled)
- [_id](api-reference-7x/easyquery-packages/core-package/classes/condition-class#_id)
- [conditions](api-reference-7x/easyquery-packages/core-package/classes/condition-class#conditions)
- [parent](api-reference-7x/easyquery-packages/core-package/classes/condition-class#parent)
- [query](api-reference-7x/easyquery-packages/core-package/classes/condition-class#query)

### [Public Accessors](api-reference-7x/easyquery-packages/core-package/classes/condition-class#public-accessors-1)
- [enabled](api-reference-7x/easyquery-packages/core-package/classes/condition-class#enabled)
- [id](api-reference-7x/easyquery-packages/core-package/classes/condition-class#id)

### [Public Methods](api-reference-7x/easyquery-packages/core-package/classes/condition-class#public-methods-1)
- [addCondition](api-reference-7x/easyquery-packages/core-package/classes/condition-class#addcondition)
- [addExpressionByOperand](api-reference-7x/easyquery-packages/core-package/classes/condition-class#addexpressionbyoperand)
- [clearConditions](api-reference-7x/easyquery-packages/core-package/classes/condition-class#clearconditions)
- [expressionChanged](api-reference-7x/easyquery-packages/core-package/classes/condition-class#expressionchanged)
- [fireChangedEvent](api-reference-7x/easyquery-packages/core-package/classes/condition-class#firechangedevent)
- [getConditions](api-reference-7x/easyquery-packages/core-package/classes/condition-class#getconditions)
- [getExpressionIndex](api-reference-7x/easyquery-packages/core-package/classes/condition-class#getexpressionindex)
- [getLevel](api-reference-7x/easyquery-packages/core-package/classes/condition-class#getlevel)
- [getModel](api-reference-7x/easyquery-packages/core-package/classes/condition-class#getmodel)
- [getOperatorId](api-reference-7x/easyquery-packages/core-package/classes/condition-class#getoperatorid)
- [getParent](api-reference-7x/easyquery-packages/core-package/classes/condition-class#getparent)
- [getQuery](api-reference-7x/easyquery-packages/core-package/classes/condition-class#getquery)
- [isEmpty](api-reference-7x/easyquery-packages/core-package/classes/condition-class#isempty)
- [isGroup](api-reference-7x/easyquery-packages/core-package/classes/condition-class#isgroup)
- [isInJoin](api-reference-7x/easyquery-packages/core-package/classes/condition-class#isinjoin)
- [isParameterized](api-reference-7x/easyquery-packages/core-package/classes/condition-class#isparameterized)
- [isReadOnly](api-reference-7x/easyquery-packages/core-package/classes/condition-class#isreadonly)
- [loadFromData](api-reference-7x/easyquery-packages/core-package/classes/condition-class#loadfromdata)
- [removeConditionAt](api-reference-7x/easyquery-packages/core-package/classes/condition-class#removeconditionat)
- [saveToData](api-reference-7x/easyquery-packages/core-package/classes/condition-class#savetodata)
- [setInJoin](api-reference-7x/easyquery-packages/core-package/classes/condition-class#setinjoin)
- [setOperatorId](api-reference-7x/easyquery-packages/core-package/classes/condition-class#setoperatorid)
- [setParameterized](api-reference-7x/easyquery-packages/core-package/classes/condition-class#setparameterized)
- [setParent](api-reference-7x/easyquery-packages/core-package/classes/condition-class#setparent)
- [setReadOnly](api-reference-7x/easyquery-packages/core-package/classes/condition-class#setreadonly)


## Constructors

---
#### constructor

The default constructor.
⊕ new Condition(query: [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class),tag?: [CondTag](api-reference-7x/easyquery-packages/core-package/enumerations/condtag-enum)): [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class)

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
### expressions

The list of expression.

● expressions: [Expression](api-reference-7x/easyquery-packages/core-package/classes/expression-class)[]

---
### justAdded

Condition enabled option.

● justAdded: `boolean`

---
### linkType

 The linking type.

● linkType: [LinkType](api-reference-7x/easyquery-packages/core-package/enumerations/linktype-enum) = ` LinkType.All`

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

● parent: [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class) = ` null`

---
### query

● query: [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)

---
## Public Accessors

---
### enabled
⇄ get enabled(): `boolean`


**Returns** `boolean`


---
⇄ set enabled(value: `boolean`): `void`

#### Parameters:
- value: `boolean`


**Returns** `void`


---
### id
⇄ get id(): `string`


**Returns** `string`


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
- val: `string`, *Default value* = ` null`


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
- condPart: [ConditionPart](api-reference-7x/easyquery-packages/core-package/enumerations/conditionpart-enum), *Default value* = ` ConditionPart.All`


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
Indicates whether this condition must be placed into `JOIN` clause in result `SQL`.

▸ isInJoin(): `boolean`


**Returns** `boolean`


---
### isParameterized
The value indicating whether this condition is parameterized.

▸ isParameterized(): `boolean`


**Returns** `boolean`


---
### isReadOnly
Indicates whether this condition is read-only.

▸ isReadOnly(): `boolean`


**Returns** `boolean`


---
### loadFromData
Loads condtion from its JSON representation object.

▸ loadFromData(model: [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class),data: [ConditionData](api-reference-7x/easyquery-packages/core-package/interfaces/conditiondata-interface)): `void`

#### Parameters:
- model: [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class) - The Data Model.
- data: [ConditionData](api-reference-7x/easyquery-packages/core-package/interfaces/conditiondata-interface) - The JSON representation object.



**Returns** `void`


---
### removeConditionAt
▸ removeConditionAt(index: `number`): `void`

#### Parameters:
- index: `number`


**Returns** `void`


---
### saveToData
Saves condition to JSON representation object.

▸ saveToData(): [ConditionData](api-reference-7x/easyquery-packages/core-package/interfaces/conditiondata-interface)


**Returns** [ConditionData](api-reference-7x/easyquery-packages/core-package/interfaces/conditiondata-interface) - The JSON representation object.



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
- silent: `boolean`, *Default value* = `false`


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
