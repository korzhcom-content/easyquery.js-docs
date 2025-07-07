---
title: EqServerQueryStorage class
slug: >-
  api-reference-old/api-reference-6x/enterprise-package/classes/eqserverquerystorage-class
sidebar:
  order: 100
---

## Implements
[QueryStorage](api-reference-old/api-reference-6x/core-package/interfaces/querystorage-interface)

## Index
### [Constructors](api-reference-old/api-reference-6x/enterprise-package/classes/eqserverquerystorage-class#constructors-1)
- [constructor](api-reference-old/api-reference-6x/enterprise-package/classes/eqserverquerystorage-class#constructor)

### [Public Methods](api-reference-old/api-reference-6x/enterprise-package/classes/eqserverquerystorage-class#public-methods-1)
- [getQueryList](api-reference-old/api-reference-6x/enterprise-package/classes/eqserverquerystorage-class#getquerylist)
- [init](api-reference-old/api-reference-6x/enterprise-package/classes/eqserverquerystorage-class#init)
- [loadQuery](api-reference-old/api-reference-6x/enterprise-package/classes/eqserverquerystorage-class#loadquery)
- [newQuery](api-reference-old/api-reference-6x/enterprise-package/classes/eqserverquerystorage-class#newquery)
- [removeQuery](api-reference-old/api-reference-6x/enterprise-package/classes/eqserverquerystorage-class#removequery)
- [saveQuery](api-reference-old/api-reference-6x/enterprise-package/classes/eqserverquerystorage-class#savequery)


## Constructors

---
#### constructor

⊕ new EqServerQueryStorage(context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)): [EqServerQueryStorage](api-reference-old/api-reference-6x/enterprise-package/classes/eqserverquerystorage-class)

#### Parameters:
- context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)


---

## Public Methods

---
### getQueryList
▸ getQueryList(options?: `any`): `Promise`&lt;[QueryListItem](api-reference-old/api-reference-6x/core-package/interfaces/querylistitem-interface)[]&gt;

#### Parameters:
- options: `any`, *Optional* 


**Returns** `Promise`&lt;[QueryListItem](api-reference-old/api-reference-6x/core-package/interfaces/querylistitem-interface)[]&gt;


---
### init
▸ init(options?: `any`): `void`

#### Parameters:
- options: `any`, *Optional* 


**Returns** `void`


---
### loadQuery
▸ loadQuery(options?: `any`): `Promise`&lt;`void`&gt;

#### Parameters:
- options: `any`, *Optional* 


**Returns** `Promise`&lt;`void`&gt;


---
### newQuery
▸ newQuery(options?: `any`): `Promise`&lt;`any`&gt;

#### Parameters:
- options: `any`, *Optional* 


**Returns** `Promise`&lt;`any`&gt;


---
### removeQuery
▸ removeQuery(options?: `any`): `Promise`&lt;`boolean`&gt;

#### Parameters:
- options: `any`, *Optional* 


**Returns** `Promise`&lt;`boolean`&gt;


---
### saveQuery
▸ saveQuery(options?: `any`): `Promise`&lt;`boolean`&gt;

#### Parameters:
- options: `any`, *Optional* 


**Returns** `Promise`&lt;`boolean`&gt;


---
