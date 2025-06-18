---
title: EqQueryFileLoader class
slug: >-
  api-reference-7x/easyquery-packages/core-package/classes/eqqueryfileloader-class
sidebar:
  order: 100
---

## Implements
[QueryFileLoader](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/queryfileloader-interface)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqqueryfileloader-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqqueryfileloader-class/#constructor)

### [Protected Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqqueryfileloader-class/#protected-properties-1)
- [context](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqqueryfileloader-class/#context)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqqueryfileloader-class/#public-methods-1)
- [getQueryFile](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqqueryfileloader-class/#getqueryfile)
- [uploadQueryFile](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqqueryfileloader-class/#uploadqueryfile)


## Constructors

---
#### constructor

⊕ new EqQueryFileLoader(context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)): [EqQueryFileLoader](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqqueryfileloader-class)

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
### getQueryFile
▸ getQueryFile(options?: [GetQueryFileOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/getqueryfileoptions-interface)): `Promise`&lt;`void`&gt;

#### Parameters:
- options: [GetQueryFileOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/getqueryfileoptions-interface), *Optional* 


**Returns** `Promise`&lt;`void`&gt;


---
### uploadQueryFile
▸ uploadQueryFile(options?: [UploadQueryFileOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/uploadqueryfileoptions-interface)): `Promise`&lt;[QueryData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/querydata-interface)&gt;

#### Parameters:
- options: [UploadQueryFileOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/uploadqueryfileoptions-interface), *Optional* 


**Returns** `Promise`&lt;[QueryData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/querydata-interface)&gt;


---
