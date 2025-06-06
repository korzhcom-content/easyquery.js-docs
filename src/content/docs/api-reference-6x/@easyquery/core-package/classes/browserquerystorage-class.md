---
title: BrowserQueryStorage class
slug: api-reference-6x/@easyquery/core-package/classes/browserquerystorage-class
sidebar:
  order: 100
---

## Implements
[QueryStorage](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/querystorage-interface)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/browserquerystorage-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/browserquerystorage-class/#constructor)

### [Public Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/browserquerystorage-class/#public-methods-1)
- [getQueryList](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/browserquerystorage-class/#getquerylist)
- [init](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/browserquerystorage-class/#init)
- [loadQuery](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/browserquerystorage-class/#loadquery)
- [newQuery](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/browserquerystorage-class/#newquery)
- [removeQuery](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/browserquerystorage-class/#removequery)
- [saveQuery](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/browserquerystorage-class/#savequery)


## Constructors

---
#### constructor

⊕ new BrowserQueryStorage(context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)): [BrowserQueryStorage](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/browserquerystorage-class)

#### Parameters:
- context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)


---

## Public Methods

---
### getQueryList
▸ getQueryList(options?: `any`): `Promise`&lt;[QueryListItem](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/querylistitem-interface)[]&gt;

#### Parameters:
- options: `any`, *Optional* 


**Returns** `Promise`&lt;[QueryListItem](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/querylistitem-interface)[]&gt;


---
### init
▸ init(options?: `any`): `void`

#### Parameters:
- options: `any`, *Optional* 


**Returns** `void`


---
### loadQuery
▸ loadQuery(options?: `any`): `Promise`&lt;`any`&gt;

#### Parameters:
- options: `any`, *Optional* 


**Returns** `Promise`&lt;`any`&gt;


---
### newQuery
▸ newQuery(queryName?: `string`): `Promise`&lt;`any`&gt;

#### Parameters:
- queryName: `string`, *Optional* 


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
