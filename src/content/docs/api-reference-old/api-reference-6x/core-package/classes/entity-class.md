---
title: Entity class
slug: api-reference-old/api-reference-6x/core-package/classes/entity-class
sidebar:
  order: 100
---

Represents one entity.

## Index
### [Constructors](api-reference-old/api-reference-6x/core-package/classes/entity-class#constructors-1)
- [constructor](api-reference-old/api-reference-6x/core-package/classes/entity-class#constructor)

### [Public Properties](api-reference-old/api-reference-6x/core-package/classes/entity-class#public-properties-1)
- [attributes](api-reference-old/api-reference-6x/core-package/classes/entity-class#attributes)
- [caption](api-reference-old/api-reference-6x/core-package/classes/entity-class#caption)
- [description](api-reference-old/api-reference-6x/core-package/classes/entity-class#description)
- [endpoint](api-reference-old/api-reference-6x/core-package/classes/entity-class#endpoint)
- [name](api-reference-old/api-reference-6x/core-package/classes/entity-class#name)
- [parent](api-reference-old/api-reference-6x/core-package/classes/entity-class#parent)
- [subEntities](api-reference-old/api-reference-6x/core-package/classes/entity-class#subentities)
- [useInConditions](api-reference-old/api-reference-6x/core-package/classes/entity-class#useinconditions)
- [useInResult](api-reference-old/api-reference-6x/core-package/classes/entity-class#useinresult)
- [useInSorting](api-reference-old/api-reference-6x/core-package/classes/entity-class#useinsorting)

### [Public Methods](api-reference-old/api-reference-6x/core-package/classes/entity-class#public-methods-1)
- [loadFromData](api-reference-old/api-reference-6x/core-package/classes/entity-class#loadfromdata)


## Constructors

---
#### constructor

The default constructor.
⊕ new Entity(parent?: [Entity](api-reference-old/api-reference-6x/core-package/classes/entity-class)): [Entity](api-reference-old/api-reference-6x/core-package/classes/entity-class)

#### Parameters:
- parent: [Entity](api-reference-old/api-reference-6x/core-package/classes/entity-class), *Optional* 


---

## Public Properties

---
### attributes

List of Attributes that belong to this entity.

● attributes: [EntityAttr](api-reference-old/api-reference-6x/core-package/classes/entityattr-class)[]

---
### caption

The caption of entity.

● caption: `string`

---
### description

The description of entity.

● description: `string`

---
### endpoint

The endpoint of entity. It is used for odata or graphql brokers

● endpoint?: `string`

---
### name

The name of entity.

● name: `string`

---
### parent

The parent.

● parent: [Entity](api-reference-old/api-reference-6x/core-package/classes/entity-class)

---
### subEntities

List of sub entities that belong to this entity.

● subEntities: [Entity](api-reference-old/api-reference-6x/core-package/classes/entity-class)[]

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

▸ loadFromData(model: [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class),data: [EntityData](api-reference-old/api-reference-6x/core-package/interfaces/entitydata-interface)): `void`

#### Parameters:
- model: [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class) - The Data Model.
- data: [EntityData](api-reference-old/api-reference-6x/core-package/interfaces/entitydata-interface) - The JSON representation object.



**Returns** `void`


---
