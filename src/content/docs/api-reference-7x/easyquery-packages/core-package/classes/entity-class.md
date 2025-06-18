---
title: Entity class
slug: api-reference-7x/easyquery-packages/core-package/classes/entity-class
sidebar:
  order: 100
---

Represents one entity.

## Extends
`MetaEntity`

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/entity-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/entity-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/entity-class/#public-properties-1)
- [attributes](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/entity-class/#attributes)
- [caption](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/entity-class/#caption)
- [captionPlural](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/entity-class/#captionplural)
- [description](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/entity-class/#description)
- [endpoint](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/entity-class/#endpoint)
- [id](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/entity-class/#id)
- [name](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/entity-class/#name)
- [parent](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/entity-class/#parent)
- [subEntities](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/entity-class/#subentities)
- [useInConditions](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/entity-class/#useinconditions)
- [useInResult](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/entity-class/#useinresult)
- [useInSorting](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/entity-class/#useinsorting)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/entity-class/#public-methods-1)
- [loadFromData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/entity-class/#loadfromdata)
- [scan](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/entity-class/#scan)


## Constructors

---
#### constructor

The default constructor.
⊕ new Entity(parent?: [Entity](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/entity-class)): [Entity](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/entity-class)

#### Parameters:
- parent: [Entity](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/entity-class), *Optional* 


---

## Public Properties

---
### attributes

● attributes: `Array`&lt;[EntityAttr](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/entityattr-class)&gt;

---
### caption

The caption of entity attr.

● caption: `string`

---
### captionPlural

The caption of entity attr in plural form.

● captionPlural: `string`

---
### description

The description of entity.

● description: `string`

---
### endpoint

The endpoint of entity. It is used for odata or graphql brokers

● endpoint?: `string`

---
### id

The id.

● id: `string`

---
### name

The name of entity.

● name: `string`

---
### parent

The parent.

● parent: `MetaEntity`

---
### subEntities

● subEntities: `Array`&lt;[Entity](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/entity-class)&gt;

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

▸ loadFromData(model: [DataModel](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/datamodel-class),data: [EntityData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/entitydata-interface)): `void`

#### Parameters:
- model: [DataModel](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/datamodel-class) - The Data Model.
- data: [EntityData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/entitydata-interface) - The JSON representation object.



**Returns** `void`


---
### scan
▸ scan(processAttribute?: (attr: [EntityAttr](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/entityattr-class), opts: `any`) => `void`,processEntity?: (entity: [Entity](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/entity-class), opts: `any`) => `void`): `void`

#### Parameters:
- processAttribute: (attr: [EntityAttr](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/entityattr-class), opts: `any`) => `void`, *Optional* 
- processEntity: (entity: [Entity](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/entity-class), opts: `any`) => `void`, *Optional* 


**Returns** `void`


---
