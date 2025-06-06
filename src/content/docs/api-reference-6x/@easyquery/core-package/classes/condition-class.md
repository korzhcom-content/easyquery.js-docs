---
title: Condition class
slug: api-reference-6x/@easyquery/core-package/classes/condition-class
sidebar:
  order: 100
---

Represents some condition.

## Implements
[ExpressionParent](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/expressionparent-interface)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class/#public-properties-1)
- [blockId](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class/#blockid)
- [expressions](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class/#expressions)
- [justAdded](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class/#justadded)
- [linkType](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class/#linktype)
- [tag](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class/#tag)

### [Protected Properties](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class/#protected-properties-1)
- [_enabled](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class/#_enabled)
- [_id](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class/#_id)
- [conditions](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class/#conditions)
- [parent](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class/#parent)
- [query](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class/#query)

### [Public Accessors](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class/#public-accessors-1)
- [enabled](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class/#enabled)
- [id](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class/#id)

### [Public Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class/#public-methods-1)
- [addCondition](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class/#addcondition)
- [addExpressionByOperand](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class/#addexpressionbyoperand)
- [clearConditions](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class/#clearconditions)
- [expressionChanged](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class/#expressionchanged)
- [fireChangedEvent](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class/#firechangedevent)
- [getConditions](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class/#getconditions)
- [getExpressionIndex](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class/#getexpressionindex)
- [getLevel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class/#getlevel)
- [getModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class/#getmodel)
- [getOperatorId](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class/#getoperatorid)
- [getParent](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class/#getparent)
- [getQuery](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class/#getquery)
- [isEmpty](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class/#isempty)
- [isGroup](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class/#isgroup)
- [isInJoin](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class/#isinjoin)
- [isParameterized](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class/#isparameterized)
- [isReadOnly](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class/#isreadonly)
- [loadFromData](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class/#loadfromdata)
- [removeConditionAt](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class/#removeconditionat)
- [saveToData](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class/#savetodata)
- [setInJoin](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class/#setinjoin)
- [setOperatorId](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class/#setoperatorid)
- [setParameterized](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class/#setparameterized)
- [setParent](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class/#setparent)
- [setReadOnly](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class/#setreadonly)


## Constructors

---
#### constructor

The default constructor.
⊕ new Condition(query: [Query](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/query-class),tag?: [CondTag](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/enumerations/condtag-enum)): [Condition](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class)

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
### expressions

The list of expression.

● expressions: [Expression](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/expression-class)[]

---
### justAdded

Condition enabled option.

● justAdded: `boolean`

---
### linkType

 The linking type.

● linkType: [LinkType](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/enumerations/linktype-enum) = ` LinkType.All`

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

● parent: [Condition](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class) = ` null`

---
### query

● query: [Query](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/query-class)

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
▸ addCondition(cond: [Condition](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class)): `number`

#### Parameters:
- cond: [Condition](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class)


**Returns** `number`


---
### addExpressionByOperand
▸ addExpressionByOperand(operand: [Operand](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/operand-class),val?: `string`): [Expression](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/expression-class)

#### Parameters:
- operand: [Operand](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/operand-class)
- val: `string`, *Default value* = ` null`


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

▸ loadFromData(model: [DataModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/datamodel-class),data: [ConditionData](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/conditiondata-interface)): `void`

#### Parameters:
- model: [DataModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/datamodel-class) - The Data Model.
- data: [ConditionData](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/conditiondata-interface) - The JSON representation object.



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

▸ saveToData(): [ConditionData](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/conditiondata-interface)


**Returns** [ConditionData](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/conditiondata-interface) - The JSON representation object.



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
