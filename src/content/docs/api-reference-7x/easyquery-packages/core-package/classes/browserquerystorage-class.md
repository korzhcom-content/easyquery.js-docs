---
title: BrowserQueryStorage class
slug: >-
  api-reference-7x/easyquery-packages/core-package/classes/browserquerystorage-class
sidebar:
  order: 100
---

## Implements
[QueryStorage](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/querystorage-interface)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/browserquerystorage-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/browserquerystorage-class/#constructor)

### [Protected Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/browserquerystorage-class/#protected-properties-1)
- [context](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/browserquerystorage-class/#context)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/browserquerystorage-class/#public-methods-1)
- [getQueryList](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/browserquerystorage-class/#getquerylist)
- [init](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/browserquerystorage-class/#init)
- [loadQuery](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/browserquerystorage-class/#loadquery)
- [newQuery](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/browserquerystorage-class/#newquery)
- [removeQuery](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/browserquerystorage-class/#removequery)
- [saveQuery](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/browserquerystorage-class/#savequery)


## Constructors

---
#### constructor

⊕ new BrowserQueryStorage(context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)): [BrowserQueryStorage](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/browserquerystorage-class)

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
▸ init(options?: [BrowserQueryStorageOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/browserquerystorageoptions-interface)): `void`

#### Parameters:
- options: [BrowserQueryStorageOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/browserquerystorageoptions-interface), *Optional* 


**Returns** `void`


---
### loadQuery
▸ loadQuery(options?: [LoadQueryOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/loadqueryoptions-interface)): `Promise`&lt;[QueryData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/querydata-interface)&gt;

#### Parameters:
- options: [LoadQueryOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/loadqueryoptions-interface), *Optional* 


**Returns** `Promise`&lt;[QueryData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/querydata-interface)&gt;


---
### newQuery
▸ newQuery(options?: [NewQueryOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/newqueryoptions-interface)): `Promise`&lt;`any`&gt;

#### Parameters:
- options: [NewQueryOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/newqueryoptions-interface), *Optional* 


**Returns** `Promise`&lt;`any`&gt;


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
