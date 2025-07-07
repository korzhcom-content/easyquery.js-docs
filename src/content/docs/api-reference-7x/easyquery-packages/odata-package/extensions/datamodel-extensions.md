---
title: DataModel extensions
slug: >-
  api-reference-7x/easyquery-packages/odata-package/extensions/datamodel-extensions
sidebar:
  order: 100
---

## Index
### [Methods](api-reference-7x/easyquery-packages/odata-package/extensions/datamodel-extensions#methods-1)
- [addDefaultODataOperators](api-reference-7x/easyquery-packages/odata-package/extensions/datamodel-extensions#adddefaultodataoperators)
- [addEntityLink](api-reference-7x/easyquery-packages/odata-package/extensions/datamodel-extensions#addentitylink)
- [findEntityByEndpoint](api-reference-7x/easyquery-packages/odata-package/extensions/datamodel-extensions#findentitybyendpoint)
- [findEntityLink](api-reference-7x/easyquery-packages/odata-package/extensions/datamodel-extensions#findentitylink)
- [getEntityLinksByEntity](api-reference-7x/easyquery-packages/odata-package/extensions/datamodel-extensions#getentitylinksbyentity)
- [loadFromEdmx](api-reference-7x/easyquery-packages/odata-package/extensions/datamodel-extensions#loadfromedmx)
- [loadFromEmdxType](api-reference-7x/easyquery-packages/odata-package/extensions/datamodel-extensions#loadfromemdxtype)



## Methods

---
### addDefaultODataOperators
▸ addDefaultODataOperators(this: [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class)): `any`

#### Parameters:
- this: [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class)


**Returns** `any`


---
### addEntityLink
▸ addEntityLink(this: [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class),link: [EntityLink](api-reference-7x/easyquery-packages/odata-package/classes/entitylink-class)): `any`

#### Parameters:
- this: [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class)
- link: [EntityLink](api-reference-7x/easyquery-packages/odata-package/classes/entitylink-class)


**Returns** `any`


---
### findEntityByEndpoint
▸ findEntityByEndpoint(this: [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class),endpoint: `string`): [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class) | `null`

#### Parameters:
- this: [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class)
- endpoint: `string`


**Returns** [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class) | `null`


---
### findEntityLink
▸ findEntityLink(this: [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class),entityFrom: [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class),entityTo: [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class)): [EntityLink](api-reference-7x/easyquery-packages/odata-package/classes/entitylink-class) | `null`

#### Parameters:
- this: [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class)
- entityFrom: [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class)
- entityTo: [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class)


**Returns** [EntityLink](api-reference-7x/easyquery-packages/odata-package/classes/entitylink-class) | `null`


---
### getEntityLinksByEntity
▸ getEntityLinksByEntity(this: [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class),entity: [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class)): [EntityLink](api-reference-7x/easyquery-packages/odata-package/classes/entitylink-class)[]

#### Parameters:
- this: [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class)
- entity: [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class)


**Returns** [EntityLink](api-reference-7x/easyquery-packages/odata-package/classes/entitylink-class)[]


---
### loadFromEdmx
▸ loadFromEdmx(this: [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class),edmString: `string`): `any`

#### Parameters:
- this: [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class)
- edmString: `string`


**Returns** `any`


---
### loadFromEmdxType
▸ loadFromEmdxType(this: [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class),typeName: `string`,depth: `number`,edmString: `string`): `any`

#### Parameters:
- this: [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class)
- typeName: `string`
- depth: `number`
- edmString: `string`


**Returns** `any`


---
