---
title: Entity class
slug: api-reference-old/api-reference-5-x/core-package/classes/entity-class
sidebar:
  order: 100
---

Represents one entity.

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entity-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entity-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entity-class/#public-properties-1)
- [attributes](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entity-class/#attributes)
- [caption](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entity-class/#caption)
- [description](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entity-class/#description)
- [name](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entity-class/#name)
- [subEntities](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entity-class/#subentities)
- [useInConditions](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entity-class/#useinconditions)
- [useInResult](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entity-class/#useinresult)
- [useInSorting](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entity-class/#useinsorting)

### [Public Methods](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entity-class/#public-methods-1)
- [loadFromData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entity-class/#loadfromdata)


## Constructors

---
#### constructor

The default constructor.
⊕ new Entity(): [Entity](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entity-class)


---

## Public Properties

---
### attributes

List of Attributes that belong to this entity.

● attributes: [EntityAttr](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entityattr-class)[]

---
### caption

The caption of entity.

● caption: `string`

---
### description

The description of entity.

● description: `string`

---
### name

The name of entity.

● name: `string`

---
### subEntities

List of sub entities that belong to this entity.

● subEntities: [Entity](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entity-class)[]

---
### useInConditions

The value indicating whether the attribute can be used in query conditions.

● useInConditions: `boolean`

---
### useInResult

The value indicating whether the attribute can be used in result columns (`SELECT` clause).

● useInResult: `boolean`

---
### useInSorting

The value indicating whether the attribute can be used in sorting.

● useInSorting: `boolean`

---
## Public Methods

---
### loadFromData
Loads entity from its JSON representation object.

▸ loadFromData(model: [DataModel](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class),data: [EntityData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/entitydata-interface)): `void`

#### Parameters:
- model: [DataModel](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class) - The Data Model.
- data: [EntityData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/entitydata-interface) - The JSON representation object.



**Returns** `void`

---
