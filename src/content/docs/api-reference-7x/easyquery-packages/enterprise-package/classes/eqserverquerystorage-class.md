---
title: EqServerQueryStorage class
slug: >-
  api-reference-7x/easyquery-packages/enterprise-package/classes/eqserverquerystorage-class
sidebar:
  order: 100
---

## Implements
[QueryStorage](api-reference-7x/easyquery-packages/core-package/interfaces/querystorage-interface)

## Index
### [Constructors](api-reference-7x/easyquery-packages/enterprise-package/classes/eqserverquerystorage-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/enterprise-package/classes/eqserverquerystorage-class#constructor)

### [Protected Properties](api-reference-7x/easyquery-packages/enterprise-package/classes/eqserverquerystorage-class#protected-properties-1)
- [context](api-reference-7x/easyquery-packages/enterprise-package/classes/eqserverquerystorage-class#context)

### [Public Methods](api-reference-7x/easyquery-packages/enterprise-package/classes/eqserverquerystorage-class#public-methods-1)
- [getQueryList](api-reference-7x/easyquery-packages/enterprise-package/classes/eqserverquerystorage-class#getquerylist)
- [init](api-reference-7x/easyquery-packages/enterprise-package/classes/eqserverquerystorage-class#init)
- [loadQuery](api-reference-7x/easyquery-packages/enterprise-package/classes/eqserverquerystorage-class#loadquery)
- [newQuery](api-reference-7x/easyquery-packages/enterprise-package/classes/eqserverquerystorage-class#newquery)
- [removeQuery](api-reference-7x/easyquery-packages/enterprise-package/classes/eqserverquerystorage-class#removequery)
- [saveQuery](api-reference-7x/easyquery-packages/enterprise-package/classes/eqserverquerystorage-class#savequery)


## Constructors

---
#### constructor

⊕ new EqServerQueryStorage(context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)): [EqServerQueryStorage](api-reference-7x/easyquery-packages/enterprise-package/classes/eqserverquerystorage-class)

#### Parameters:
- context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)


---

## Protected Properties

---
### context

● context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)

---
## Public Methods

---
### getQueryList
▸ getQueryList(options?: [GetQueryListOptions](api-reference-7x/easyquery-packages/core-package/interfaces/getquerylistoptions-interface)): `Promise`&lt;[QueryListItem](api-reference-7x/easyquery-packages/core-package/interfaces/querylistitem-interface)[]&gt;

#### Parameters:
- options: [GetQueryListOptions](api-reference-7x/easyquery-packages/core-package/interfaces/getquerylistoptions-interface), *Optional* 


**Returns** `Promise`&lt;[QueryListItem](api-reference-7x/easyquery-packages/core-package/interfaces/querylistitem-interface)[]&gt;


---
### init
▸ init(): `void`


**Returns** `void`


---
### loadQuery
▸ loadQuery(options?: [LoadQueryOptions](api-reference-7x/easyquery-packages/core-package/interfaces/loadqueryoptions-interface)): `Promise`&lt;[QueryData](api-reference-7x/easyquery-packages/core-package/interfaces/querydata-interface)&gt;

#### Parameters:
- options: [LoadQueryOptions](api-reference-7x/easyquery-packages/core-package/interfaces/loadqueryoptions-interface), *Optional* 


**Returns** `Promise`&lt;[QueryData](api-reference-7x/easyquery-packages/core-package/interfaces/querydata-interface)&gt;


---
### newQuery
▸ newQuery(options?: [NewQueryOptions](api-reference-7x/easyquery-packages/core-package/interfaces/newqueryoptions-interface)): `Promise`&lt;[QueryData](api-reference-7x/easyquery-packages/core-package/interfaces/querydata-interface)&gt;

#### Parameters:
- options: [NewQueryOptions](api-reference-7x/easyquery-packages/core-package/interfaces/newqueryoptions-interface), *Optional* 


**Returns** `Promise`&lt;[QueryData](api-reference-7x/easyquery-packages/core-package/interfaces/querydata-interface)&gt;


---
### removeQuery
▸ removeQuery(options?: [RemoveQueryOptions](api-reference-7x/easyquery-packages/core-package/interfaces/removequeryoptions-interface)): `Promise`&lt;`void`&gt;

#### Parameters:
- options: [RemoveQueryOptions](api-reference-7x/easyquery-packages/core-package/interfaces/removequeryoptions-interface), *Optional* 


**Returns** `Promise`&lt;`void`&gt;


---
### saveQuery
▸ saveQuery(options?: [SaveQueryOptions](api-reference-7x/easyquery-packages/core-package/interfaces/savequeryoptions-interface)): `Promise`&lt;[QueryData](api-reference-7x/easyquery-packages/core-package/interfaces/querydata-interface)&gt;

#### Parameters:
- options: [SaveQueryOptions](api-reference-7x/easyquery-packages/core-package/interfaces/savequeryoptions-interface), *Optional* 


**Returns** `Promise`&lt;[QueryData](api-reference-7x/easyquery-packages/core-package/interfaces/querydata-interface)&gt;


---
