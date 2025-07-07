---
title: EdmxDocument class
slug: api-reference-old/api-reference-6x/odata-package/classes/edmxdocument-class
sidebar:
  order: 100
---

## Index
### [Constructors](api-reference-old/api-reference-6x/odata-package/classes/edmxdocument-class#constructors-1)
- [constructor](api-reference-old/api-reference-6x/odata-package/classes/edmxdocument-class#constructor)

### [Protected Properties](api-reference-old/api-reference-6x/odata-package/classes/edmxdocument-class#protected-properties-1)
- [document](api-reference-old/api-reference-6x/odata-package/classes/edmxdocument-class#document)

### [Public Methods](api-reference-old/api-reference-6x/odata-package/classes/edmxdocument-class#public-methods-1)
- [getEntitySets](api-reference-old/api-reference-6x/odata-package/classes/edmxdocument-class#getentitysets)
- [getEntityType](api-reference-old/api-reference-6x/odata-package/classes/edmxdocument-class#getentitytype)
- [getEnumType](api-reference-old/api-reference-6x/odata-package/classes/edmxdocument-class#getenumtype)
- [load](api-reference-old/api-reference-6x/odata-package/classes/edmxdocument-class#load)


## Constructors

---
#### constructor

⊕ new EdmxDocument(): [EdmxDocument](api-reference-old/api-reference-6x/odata-package/classes/edmxdocument-class)


---

## Protected Properties

---
### document

● document: `Document`

---
## Public Methods

---
### getEntitySets
▸ getEntitySets(): [EntitySet](api-reference-old/api-reference-6x/odata-package/interfaces/entityset-interface)[]


**Returns** [EntitySet](api-reference-old/api-reference-6x/odata-package/interfaces/entityset-interface)[]

---
### getEntityType
▸ getEntityType(type: `string`): [EntityType](api-reference-old/api-reference-6x/odata-package/interfaces/entitytype-interface) | `null`

#### Parameters:
- type: `string`


**Returns** [EntityType](api-reference-old/api-reference-6x/odata-package/interfaces/entitytype-interface) | `null`

---
### getEnumType
▸ getEnumType(type: `string`): [EnumType](api-reference-old/api-reference-6x/odata-package/interfaces/enumtype-interface) | `null`

#### Parameters:
- type: `string`


**Returns** [EnumType](api-reference-old/api-reference-6x/odata-package/interfaces/enumtype-interface) | `null`

---
### load
▸ load(edm: `string` | `Document`): `void`

#### Parameters:
- edm: `string` | `Document`


**Returns** `void`

---
