---
title: DataModel extensions
slug: api-reference-6x/@easyquery/odata-package/extensions/datamodel-extensions
sidebar:
  order: 100
---

## Index
### [Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/odata-package/extensions/datamodel-extensions/#methods-1)
- [addDefaultODataOperators](//easyquery/javascript/docs/api-reference-6x/@easyquery/odata-package/extensions/datamodel-extensions/#adddefaultodataoperators)
- [addEntityLink](//easyquery/javascript/docs/api-reference-6x/@easyquery/odata-package/extensions/datamodel-extensions/#addentitylink)
- [findEntityByEndpoint](//easyquery/javascript/docs/api-reference-6x/@easyquery/odata-package/extensions/datamodel-extensions/#findentitybyendpoint)
- [findEntityLink](//easyquery/javascript/docs/api-reference-6x/@easyquery/odata-package/extensions/datamodel-extensions/#findentitylink)
- [getEntityLinksByEntity](//easyquery/javascript/docs/api-reference-6x/@easyquery/odata-package/extensions/datamodel-extensions/#getentitylinksbyentity)
- [loadFromEdmx](//easyquery/javascript/docs/api-reference-6x/@easyquery/odata-package/extensions/datamodel-extensions/#loadfromedmx)
- [loadFromEmdxType](//easyquery/javascript/docs/api-reference-6x/@easyquery/odata-package/extensions/datamodel-extensions/#loadfromemdxtype)



## Methods

---
### addDefaultODataOperators
▸ addDefaultODataOperators(this: [DataModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/datamodel-class)): `any`

#### Parameters:
- this: [DataModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/datamodel-class)


**Returns** `any`

---
### addEntityLink
▸ addEntityLink(this: [DataModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/datamodel-class),link: [EntityLink](//easyquery/javascript/docs/api-reference-6x/@easyquery/odata-package/classes/entitylink-class)): `any`

#### Parameters:
- this: [DataModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/datamodel-class)
- link: [EntityLink](//easyquery/javascript/docs/api-reference-6x/@easyquery/odata-package/classes/entitylink-class)


**Returns** `any`

---
### findEntityByEndpoint
▸ findEntityByEndpoint(this: [DataModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/datamodel-class),endpoint: `string`): [Entity](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/entity-class) | `null`

#### Parameters:
- this: [DataModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/datamodel-class)
- endpoint: `string`


**Returns** [Entity](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/entity-class) | `null`

---
### findEntityLink
▸ findEntityLink(this: [DataModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/datamodel-class),entityFrom: [Entity](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/entity-class),entityTo: [Entity](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/entity-class)): [EntityLink](//easyquery/javascript/docs/api-reference-6x/@easyquery/odata-package/classes/entitylink-class) | `null`

#### Parameters:
- this: [DataModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/datamodel-class)
- entityFrom: [Entity](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/entity-class)
- entityTo: [Entity](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/entity-class)


**Returns** [EntityLink](//easyquery/javascript/docs/api-reference-6x/@easyquery/odata-package/classes/entitylink-class) | `null`

---
### getEntityLinksByEntity
▸ getEntityLinksByEntity(this: [DataModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/datamodel-class),entity: [Entity](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/entity-class)): [EntityLink](//easyquery/javascript/docs/api-reference-6x/@easyquery/odata-package/classes/entitylink-class)[]

#### Parameters:
- this: [DataModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/datamodel-class)
- entity: [Entity](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/entity-class)


**Returns** [EntityLink](//easyquery/javascript/docs/api-reference-6x/@easyquery/odata-package/classes/entitylink-class)[]

---
### loadFromEdmx
▸ loadFromEdmx(this: [DataModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/datamodel-class),edmString: `string`): `any`

#### Parameters:
- this: [DataModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/datamodel-class)
- edmString: `string`


**Returns** `any`

---
### loadFromEmdxType
▸ loadFromEmdxType(this: [DataModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/datamodel-class),typeName: `string`,depth: `number`,edmString: `string`): `any`

#### Parameters:
- this: [DataModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/datamodel-class)
- typeName: `string`
- depth: `number`
- edmString: `string`


**Returns** `any`

---
