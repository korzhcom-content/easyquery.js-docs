---
title: MetaEntity class
slug: api-reference-7x/@easydata/core-package/classes/metaentity-class
sidebar:
  order: 100
---

Represents one entity.

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class/#public-properties-1)
- [attributes](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class/#attributes)
- [caption](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class/#caption)
- [captionPlural](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class/#captionplural)
- [description](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class/#description)
- [id](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class/#id)
- [name](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class/#name)
- [parent](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class/#parent)
- [subEntities](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class/#subentities)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class/#public-methods-1)
- [loadFromData](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class/#loadfromdata)
- [scan](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class/#scan)


## Constructors

---
#### constructor

The default constructor.
⊕ new MetaEntity(parent?: [MetaEntity](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class)): [MetaEntity](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class)

#### Parameters:
- parent: [MetaEntity](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class), *Optional* 


---

## Public Properties

---
### attributes

List of Attributes that belong to this entity.

● attributes: [MetaEntityAttr](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class)[]

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

● parent: [MetaEntity](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class)

---
### subEntities

List of sub entities that belong to this entity.

● subEntities: [MetaEntity](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class)[]

---
## Public Methods

---
### loadFromData
Loads entity from its JSON representation object.

▸ loadFromData(model: [MetaData](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metadata-class),dto: [MetaEntityDTO](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/interfaces/metaentitydto-interface)): `void`

#### Parameters:
- model: [MetaData](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metadata-class) - The Data Model.
- dto: [MetaEntityDTO](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/interfaces/metaentitydto-interface) - The JSON representation object.



**Returns** `void`


---
### scan
▸ scan(processAttribute?: (attr: [MetaEntityAttr](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class), opts: `any`) => `void`,processEntity?: (entity: [MetaEntity](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class), opts: `any`) => `void`): `void`

#### Parameters:
- processAttribute: (attr: [MetaEntityAttr](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class), opts: `any`) => `void`, *Optional* 
- processEntity: (entity: [MetaEntity](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class), opts: `any`) => `void`, *Optional* 


**Returns** `void`


---
