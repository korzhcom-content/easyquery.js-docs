---
title: EqServerQueryStorage class
slug: >-
  api-reference-7x/@easyquery/enterprise-package/classes/eqserverquerystorage-class
sidebar:
  order: 100
---

## Implements
[QueryStorage](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/querystorage-interface)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easyquery/enterprise-package/classes/eqserverquerystorage-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easyquery/enterprise-package/classes/eqserverquerystorage-class/#constructor)

### [Protected Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/enterprise-package/classes/eqserverquerystorage-class/#protected-properties-1)
- [context](//easyquery/javascript/docs/api-reference-7x/@easyquery/enterprise-package/classes/eqserverquerystorage-class/#context)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/enterprise-package/classes/eqserverquerystorage-class/#public-methods-1)
- [getQueryList](//easyquery/javascript/docs/api-reference-7x/@easyquery/enterprise-package/classes/eqserverquerystorage-class/#getquerylist)
- [init](//easyquery/javascript/docs/api-reference-7x/@easyquery/enterprise-package/classes/eqserverquerystorage-class/#init)
- [loadQuery](//easyquery/javascript/docs/api-reference-7x/@easyquery/enterprise-package/classes/eqserverquerystorage-class/#loadquery)
- [newQuery](//easyquery/javascript/docs/api-reference-7x/@easyquery/enterprise-package/classes/eqserverquerystorage-class/#newquery)
- [removeQuery](//easyquery/javascript/docs/api-reference-7x/@easyquery/enterprise-package/classes/eqserverquerystorage-class/#removequery)
- [saveQuery](//easyquery/javascript/docs/api-reference-7x/@easyquery/enterprise-package/classes/eqserverquerystorage-class/#savequery)


## Constructors

---
#### constructor

⊕ new EqServerQueryStorage(context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)): [EqServerQueryStorage](//easyquery/javascript/docs/api-reference-7x/@easyquery/enterprise-package/classes/eqserverquerystorage-class)

#### Parameters:
- context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)


---

## Protected Properties

---
### context

● context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)

---
## Public Methods

---
### getQueryList
▸ getQueryList(options?: [GetQueryListOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/getquerylistoptions-interface)): `Promise`&lt;[QueryListItem](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/querylistitem-interface)[]&gt;

#### Parameters:
- options: [GetQueryListOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/getquerylistoptions-interface), *Optional* 


**Returns** `Promise`&lt;[QueryListItem](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/querylistitem-interface)[]&gt;


---
### init
▸ init(): `void`


**Returns** `void`


---
### loadQuery
▸ loadQuery(options?: [LoadQueryOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/loadqueryoptions-interface)): `Promise`&lt;[QueryData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/querydata-interface)&gt;

#### Parameters:
- options: [LoadQueryOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/loadqueryoptions-interface), *Optional* 


**Returns** `Promise`&lt;[QueryData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/querydata-interface)&gt;


---
### newQuery
▸ newQuery(options?: [NewQueryOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/newqueryoptions-interface)): `Promise`&lt;[QueryData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/querydata-interface)&gt;

#### Parameters:
- options: [NewQueryOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/newqueryoptions-interface), *Optional* 


**Returns** `Promise`&lt;[QueryData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/querydata-interface)&gt;


---
### removeQuery
▸ removeQuery(options?: [RemoveQueryOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/removequeryoptions-interface)): `Promise`&lt;`void`&gt;

#### Parameters:
- options: [RemoveQueryOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/removequeryoptions-interface), *Optional* 


**Returns** `Promise`&lt;`void`&gt;


---
### saveQuery
▸ saveQuery(options?: [SaveQueryOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/savequeryoptions-interface)): `Promise`&lt;[QueryData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/querydata-interface)&gt;

#### Parameters:
- options: [SaveQueryOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/savequeryoptions-interface), *Optional* 


**Returns** `Promise`&lt;[QueryData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/querydata-interface)&gt;


---
