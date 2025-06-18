---
title: Condition class
slug: api-reference-old/api-reference-5-x/core-package/classes/condition-class
sidebar:
  order: 100
---

Represents some condition.

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/condition-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/condition-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/condition-class/#public-properties-1)
- [blockId](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/condition-class/#blockid)
- [conditions](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/condition-class/#conditions)
- [enabled](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/condition-class/#enabled)
- [expressions](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/condition-class/#expressions)
- [inJoin](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/condition-class/#injoin)
- [justAdded](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/condition-class/#justadded)
- [linkType](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/condition-class/#linktype)
- [operatorID](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/condition-class/#operatorid)
- [parameterized](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/condition-class/#parameterized)
- [readOnly](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/condition-class/#readonly)
- [tag](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/condition-class/#tag)

### [Public Methods](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/condition-class/#public-methods-1)
- [loadFromData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/condition-class/#loadfromdata)
- [saveToData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/condition-class/#savetodata)


## Constructors

---
#### constructor

The default constructor.
⊕ new Condition(tag?: [CondTag](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/enumerations/condtag-enum)): [Condition](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/condition-class)

#### Parameters:
- tag: [CondTag](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/enumerations/condtag-enum), *Optional*  - The condition tag



---

## Public Properties

---
### blockId

The block id.

● blockId: `string`

---
### conditions

The list of conditions.

● conditions: [Condition](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/condition-class)[]

---
### enabled

The value indicating whether this Condition is enabled.

● enabled: `boolean`

---
### expressions

The list of expression.

● expressions: [Expression](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/expression-class)[]

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

● linkType: [LinkType](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/enumerations/linktype-enum) = ` LinkType.All`

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

● tag: [CondTag](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/enumerations/condtag-enum)

---
## Public Methods

---
### loadFromData
Loads condtion from its JSON representation object.

▸ loadFromData(model: [DataModel](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class),data: [ConditionData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/conditiondata-interface)): `void`

#### Parameters:
- model: [DataModel](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class) - The Data Model.
- data: [ConditionData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/conditiondata-interface) - The JSON representation object.



**Returns** `void`

---
### saveToData
Saves condition to JSON representation object.

▸ saveToData(): [ConditionData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/conditiondata-interface)


**Returns** [ConditionData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/conditiondata-interface) - The JSON representation object.


---
