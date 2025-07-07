---
title: DataModel extensions
slug: >-
  api-reference-old/api-reference-6x/odata-package/extensions/datamodel-extensions
sidebar:
  order: 100
---

## Index
### [Methods](api-reference-old/api-reference-6x/odata-package/extensions/datamodel-extensions#methods-1)
- [addDefaultODataOperators](api-reference-old/api-reference-6x/odata-package/extensions/datamodel-extensions#adddefaultodataoperators)
- [addEntityLink](api-reference-old/api-reference-6x/odata-package/extensions/datamodel-extensions#addentitylink)
- [findEntityByEndpoint](api-reference-old/api-reference-6x/odata-package/extensions/datamodel-extensions#findentitybyendpoint)
- [findEntityLink](api-reference-old/api-reference-6x/odata-package/extensions/datamodel-extensions#findentitylink)
- [getEntityLinksByEntity](api-reference-old/api-reference-6x/odata-package/extensions/datamodel-extensions#getentitylinksbyentity)
- [loadFromEdmx](api-reference-old/api-reference-6x/odata-package/extensions/datamodel-extensions#loadfromedmx)
- [loadFromEmdxType](api-reference-old/api-reference-6x/odata-package/extensions/datamodel-extensions#loadfromemdxtype)



## Methods

---
### addDefaultODataOperators
▸ addDefaultODataOperators(this: [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class)): `any`

#### Parameters:
- this: [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class)


**Returns** `any`

---
### addEntityLink
▸ addEntityLink(this: [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class),link: [EntityLink](api-reference-old/api-reference-6x/odata-package/classes/entitylink-class)): `any`

#### Parameters:
- this: [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class)
- link: [EntityLink](api-reference-old/api-reference-6x/odata-package/classes/entitylink-class)


**Returns** `any`

---
### findEntityByEndpoint
▸ findEntityByEndpoint(this: [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class),endpoint: `string`): [Entity](api-reference-old/api-reference-6x/core-package/classes/entity-class) | `null`

#### Parameters:
- this: [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class)
- endpoint: `string`


**Returns** [Entity](api-reference-old/api-reference-6x/core-package/classes/entity-class) | `null`

---
### findEntityLink
▸ findEntityLink(this: [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class),entityFrom: [Entity](api-reference-old/api-reference-6x/core-package/classes/entity-class),entityTo: [Entity](api-reference-old/api-reference-6x/core-package/classes/entity-class)): [EntityLink](api-reference-old/api-reference-6x/odata-package/classes/entitylink-class) | `null`

#### Parameters:
- this: [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class)
- entityFrom: [Entity](api-reference-old/api-reference-6x/core-package/classes/entity-class)
- entityTo: [Entity](api-reference-old/api-reference-6x/core-package/classes/entity-class)


**Returns** [EntityLink](api-reference-old/api-reference-6x/odata-package/classes/entitylink-class) | `null`

---
### getEntityLinksByEntity
▸ getEntityLinksByEntity(this: [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class),entity: [Entity](api-reference-old/api-reference-6x/core-package/classes/entity-class)): [EntityLink](api-reference-old/api-reference-6x/odata-package/classes/entitylink-class)[]

#### Parameters:
- this: [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class)
- entity: [Entity](api-reference-old/api-reference-6x/core-package/classes/entity-class)


**Returns** [EntityLink](api-reference-old/api-reference-6x/odata-package/classes/entitylink-class)[]

---
### loadFromEdmx
▸ loadFromEdmx(this: [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class),edmString: `string`): `any`

#### Parameters:
- this: [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class)
- edmString: `string`


**Returns** `any`

---
### loadFromEmdxType
▸ loadFromEmdxType(this: [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class),typeName: `string`,depth: `number`,edmString: `string`): `any`

#### Parameters:
- this: [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class)
- typeName: `string`
- depth: `number`
- edmString: `string`


**Returns** `any`

---
