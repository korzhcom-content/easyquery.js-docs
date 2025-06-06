---
title: EdmxDocument class
slug: api-reference-7x/@easyquery/odata-package/classes/edmxdocument-class
sidebar:
  order: 100
---

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easyquery/odata-package/classes/edmxdocument-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easyquery/odata-package/classes/edmxdocument-class/#constructor)

### [Protected Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/odata-package/classes/edmxdocument-class/#protected-properties-1)
- [document](//easyquery/javascript/docs/api-reference-7x/@easyquery/odata-package/classes/edmxdocument-class/#document)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/odata-package/classes/edmxdocument-class/#public-methods-1)
- [getEntitySets](//easyquery/javascript/docs/api-reference-7x/@easyquery/odata-package/classes/edmxdocument-class/#getentitysets)
- [getEntityType](//easyquery/javascript/docs/api-reference-7x/@easyquery/odata-package/classes/edmxdocument-class/#getentitytype)
- [getEnumType](//easyquery/javascript/docs/api-reference-7x/@easyquery/odata-package/classes/edmxdocument-class/#getenumtype)
- [load](//easyquery/javascript/docs/api-reference-7x/@easyquery/odata-package/classes/edmxdocument-class/#load)


## Constructors

---
#### constructor

⊕ new EdmxDocument(): [EdmxDocument](//easyquery/javascript/docs/api-reference-7x/@easyquery/odata-package/classes/edmxdocument-class)


---

## Protected Properties

---
### document

● document: `Document`

---
## Public Methods

---
### getEntitySets
▸ getEntitySets(): [EntitySet](//easyquery/javascript/docs/api-reference-7x/@easyquery/odata-package/interfaces/entityset-interface)[]


**Returns** [EntitySet](//easyquery/javascript/docs/api-reference-7x/@easyquery/odata-package/interfaces/entityset-interface)[]


---
### getEntityType
▸ getEntityType(type: `string`): [EntityType](//easyquery/javascript/docs/api-reference-7x/@easyquery/odata-package/interfaces/entitytype-interface) | `null`

#### Parameters:
- type: `string`


**Returns** [EntityType](//easyquery/javascript/docs/api-reference-7x/@easyquery/odata-package/interfaces/entitytype-interface) | `null`


---
### getEnumType
▸ getEnumType(type: `string`): [EnumType](//easyquery/javascript/docs/api-reference-7x/@easyquery/odata-package/interfaces/enumtype-interface) | `null`

#### Parameters:
- type: `string`


**Returns** [EnumType](//easyquery/javascript/docs/api-reference-7x/@easyquery/odata-package/interfaces/enumtype-interface) | `null`


---
### load
▸ load(edm: `string` | `Document`): `void`

#### Parameters:
- edm: `string` | `Document`


**Returns** `void`


---
