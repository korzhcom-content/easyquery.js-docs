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
### [Constructors](api-reference-7x/easyquery-packages/core-package/classes/entity-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/core-package/classes/entity-class#constructor)

### [Public Properties](api-reference-7x/easyquery-packages/core-package/classes/entity-class#public-properties-1)
- [attributes](api-reference-7x/easyquery-packages/core-package/classes/entity-class#attributes)
- [caption](api-reference-7x/easyquery-packages/core-package/classes/entity-class#caption)
- [captionPlural](api-reference-7x/easyquery-packages/core-package/classes/entity-class#captionplural)
- [description](api-reference-7x/easyquery-packages/core-package/classes/entity-class#description)
- [endpoint](api-reference-7x/easyquery-packages/core-package/classes/entity-class#endpoint)
- [id](api-reference-7x/easyquery-packages/core-package/classes/entity-class#id)
- [name](api-reference-7x/easyquery-packages/core-package/classes/entity-class#name)
- [parent](api-reference-7x/easyquery-packages/core-package/classes/entity-class#parent)
- [subEntities](api-reference-7x/easyquery-packages/core-package/classes/entity-class#subentities)
- [useInConditions](api-reference-7x/easyquery-packages/core-package/classes/entity-class#useinconditions)
- [useInResult](api-reference-7x/easyquery-packages/core-package/classes/entity-class#useinresult)
- [useInSorting](api-reference-7x/easyquery-packages/core-package/classes/entity-class#useinsorting)

### [Public Methods](api-reference-7x/easyquery-packages/core-package/classes/entity-class#public-methods-1)
- [loadFromData](api-reference-7x/easyquery-packages/core-package/classes/entity-class#loadfromdata)
- [scan](api-reference-7x/easyquery-packages/core-package/classes/entity-class#scan)


## Constructors

---
#### constructor

The default constructor.
⊕ new Entity(parent?: [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class)): [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class)

#### Parameters:
- parent: [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class), *Optional* 


---

## Public Properties

---
### attributes

● attributes: `Array`&lt;[EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class)&gt;

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

● subEntities: `Array`&lt;[Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class)&gt;

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

▸ loadFromData(model: [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class),data: [EntityData](api-reference-7x/easyquery-packages/core-package/interfaces/entitydata-interface)): `void`

#### Parameters:
- model: [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class) - The Data Model.
- data: [EntityData](api-reference-7x/easyquery-packages/core-package/interfaces/entitydata-interface) - The JSON representation object.



**Returns** `void`


---
### scan
▸ scan(processAttribute?: (attr: [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class), opts: `any`) => `void`,processEntity?: (entity: [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class), opts: `any`) => `void`): `void`

#### Parameters:
- processAttribute: (attr: [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class), opts: `any`) => `void`, *Optional* 
- processEntity: (entity: [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class), opts: `any`) => `void`, *Optional* 


**Returns** `void`


---
