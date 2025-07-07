---
title: Condition class
slug: api-reference-old/api-reference-5-x/core-package/classes/condition-class
sidebar:
  order: 100
---

Represents some condition.

## Index
### [Constructors](api-reference-old/api-reference-5-x/core-package/classes/condition-class#constructors-1)
- [constructor](api-reference-old/api-reference-5-x/core-package/classes/condition-class#constructor)

### [Public Properties](api-reference-old/api-reference-5-x/core-package/classes/condition-class#public-properties-1)
- [blockId](api-reference-old/api-reference-5-x/core-package/classes/condition-class#blockid)
- [conditions](api-reference-old/api-reference-5-x/core-package/classes/condition-class#conditions)
- [enabled](api-reference-old/api-reference-5-x/core-package/classes/condition-class#enabled)
- [expressions](api-reference-old/api-reference-5-x/core-package/classes/condition-class#expressions)
- [inJoin](api-reference-old/api-reference-5-x/core-package/classes/condition-class#injoin)
- [justAdded](api-reference-old/api-reference-5-x/core-package/classes/condition-class#justadded)
- [linkType](api-reference-old/api-reference-5-x/core-package/classes/condition-class#linktype)
- [operatorID](api-reference-old/api-reference-5-x/core-package/classes/condition-class#operatorid)
- [parameterized](api-reference-old/api-reference-5-x/core-package/classes/condition-class#parameterized)
- [readOnly](api-reference-old/api-reference-5-x/core-package/classes/condition-class#readonly)
- [tag](api-reference-old/api-reference-5-x/core-package/classes/condition-class#tag)

### [Public Methods](api-reference-old/api-reference-5-x/core-package/classes/condition-class#public-methods-1)
- [loadFromData](api-reference-old/api-reference-5-x/core-package/classes/condition-class#loadfromdata)
- [saveToData](api-reference-old/api-reference-5-x/core-package/classes/condition-class#savetodata)


## Constructors

---
#### constructor

The default constructor.
⊕ new Condition(tag?: [CondTag](api-reference-old/api-reference-5-x/core-package/enumerations/condtag-enum)): [Condition](api-reference-old/api-reference-5-x/core-package/classes/condition-class)

#### Parameters:
- tag: [CondTag](api-reference-old/api-reference-5-x/core-package/enumerations/condtag-enum), *Optional*  - The condition tag



---

## Public Properties

---
### blockId

The block id.

● blockId: `string`

---
### conditions

The list of conditions.

● conditions: [Condition](api-reference-old/api-reference-5-x/core-package/classes/condition-class)[]

---
### enabled

The value indicating whether this Condition is enabled.

● enabled: `boolean`

---
### expressions

The list of expression.

● expressions: [Expression](api-reference-old/api-reference-5-x/core-package/classes/expression-class)[]

---
### inJoin

The value indicating whether this condition must be placed into `JOIN` clause in result `SQL`.

● inJoin: `boolean`

---
### justAdded

Condition enabled option.

● justAdded: `boolean`

---
### linkType

 The linking type.

● linkType: [LinkType](api-reference-old/api-reference-5-x/core-package/enumerations/linktype-enum) = ` LinkType.All`

---
### operatorID

The operator id.

● operatorID: `string`

---
### parameterized

The value indicating whether this condition is parameterized.

● parameterized: `boolean`

---
### readOnly

The value indicating whether this condition is read-only.

● readOnly: `boolean`

---
### tag

The condition tag.

● tag: [CondTag](api-reference-old/api-reference-5-x/core-package/enumerations/condtag-enum)

---
## Public Methods

---
### loadFromData
Loads condtion from its JSON representation object.

▸ loadFromData(model: [DataModel](api-reference-old/api-reference-5-x/core-package/classes/datamodel-class),data: [ConditionData](api-reference-old/api-reference-5-x/core-package/interfaces/conditiondata-interface)): `void`

#### Parameters:
- model: [DataModel](api-reference-old/api-reference-5-x/core-package/classes/datamodel-class) - The Data Model.
- data: [ConditionData](api-reference-old/api-reference-5-x/core-package/interfaces/conditiondata-interface) - The JSON representation object.



**Returns** `void`

---
### saveToData
Saves condition to JSON representation object.

▸ saveToData(): [ConditionData](api-reference-old/api-reference-5-x/core-package/interfaces/conditiondata-interface)


**Returns** [ConditionData](api-reference-old/api-reference-5-x/core-package/interfaces/conditiondata-interface) - The JSON representation object.


---
