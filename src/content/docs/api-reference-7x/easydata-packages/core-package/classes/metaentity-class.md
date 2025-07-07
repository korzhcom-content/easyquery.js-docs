---
title: MetaEntity class
slug: api-reference-7x/easydata-packages/core-package/classes/metaentity-class
sidebar:
  order: 100
---

Represents one entity.

## Index
### [Constructors](api-reference-7x/easydata-packages/core-package/classes/metaentity-class#constructors-1)
- [constructor](api-reference-7x/easydata-packages/core-package/classes/metaentity-class#constructor)

### [Public Properties](api-reference-7x/easydata-packages/core-package/classes/metaentity-class#public-properties-1)
- [attributes](api-reference-7x/easydata-packages/core-package/classes/metaentity-class#attributes)
- [caption](api-reference-7x/easydata-packages/core-package/classes/metaentity-class#caption)
- [captionPlural](api-reference-7x/easydata-packages/core-package/classes/metaentity-class#captionplural)
- [description](api-reference-7x/easydata-packages/core-package/classes/metaentity-class#description)
- [id](api-reference-7x/easydata-packages/core-package/classes/metaentity-class#id)
- [name](api-reference-7x/easydata-packages/core-package/classes/metaentity-class#name)
- [parent](api-reference-7x/easydata-packages/core-package/classes/metaentity-class#parent)
- [subEntities](api-reference-7x/easydata-packages/core-package/classes/metaentity-class#subentities)

### [Public Methods](api-reference-7x/easydata-packages/core-package/classes/metaentity-class#public-methods-1)
- [loadFromData](api-reference-7x/easydata-packages/core-package/classes/metaentity-class#loadfromdata)
- [scan](api-reference-7x/easydata-packages/core-package/classes/metaentity-class#scan)


## Constructors

---
#### constructor

The default constructor.
⊕ new MetaEntity(parent?: [MetaEntity](api-reference-7x/easydata-packages/core-package/classes/metaentity-class)): [MetaEntity](api-reference-7x/easydata-packages/core-package/classes/metaentity-class)

#### Parameters:
- parent: [MetaEntity](api-reference-7x/easydata-packages/core-package/classes/metaentity-class), *Optional* 


---

## Public Properties

---
### attributes

List of Attributes that belong to this entity.

● attributes: [MetaEntityAttr](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class)[]

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

● parent: [MetaEntity](api-reference-7x/easydata-packages/core-package/classes/metaentity-class)

---
### subEntities

List of sub entities that belong to this entity.

● subEntities: [MetaEntity](api-reference-7x/easydata-packages/core-package/classes/metaentity-class)[]

---
## Public Methods

---
### loadFromData
Loads entity from its JSON representation object.

▸ loadFromData(model: [MetaData](api-reference-7x/easydata-packages/core-package/classes/metadata-class),dto: [MetaEntityDTO](api-reference-7x/easydata-packages/core-package/interfaces/metaentitydto-interface)): `void`

#### Parameters:
- model: [MetaData](api-reference-7x/easydata-packages/core-package/classes/metadata-class) - The Data Model.
- dto: [MetaEntityDTO](api-reference-7x/easydata-packages/core-package/interfaces/metaentitydto-interface) - The JSON representation object.



**Returns** `void`


---
### scan
▸ scan(processAttribute?: (attr: [MetaEntityAttr](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class), opts: `any`) => `void`,processEntity?: (entity: [MetaEntity](api-reference-7x/easydata-packages/core-package/classes/metaentity-class), opts: `any`) => `void`): `void`

#### Parameters:
- processAttribute: (attr: [MetaEntityAttr](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class), opts: `any`) => `void`, *Optional* 
- processEntity: (entity: [MetaEntity](api-reference-7x/easydata-packages/core-package/classes/metaentity-class), opts: `any`) => `void`, *Optional* 


**Returns** `void`


---
