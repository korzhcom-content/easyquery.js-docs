---
title: EqQueryFileLoader class
slug: >-
  api-reference-7x/easyquery-packages/core-package/classes/eqqueryfileloader-class
sidebar:
  order: 100
---

## Implements
[QueryFileLoader](api-reference-7x/easyquery-packages/core-package/interfaces/queryfileloader-interface)

## Index
### [Constructors](api-reference-7x/easyquery-packages/core-package/classes/eqqueryfileloader-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/core-package/classes/eqqueryfileloader-class#constructor)

### [Protected Properties](api-reference-7x/easyquery-packages/core-package/classes/eqqueryfileloader-class#protected-properties-1)
- [context](api-reference-7x/easyquery-packages/core-package/classes/eqqueryfileloader-class#context)

### [Public Methods](api-reference-7x/easyquery-packages/core-package/classes/eqqueryfileloader-class#public-methods-1)
- [getQueryFile](api-reference-7x/easyquery-packages/core-package/classes/eqqueryfileloader-class#getqueryfile)
- [uploadQueryFile](api-reference-7x/easyquery-packages/core-package/classes/eqqueryfileloader-class#uploadqueryfile)


## Constructors

---
#### constructor

⊕ new EqQueryFileLoader(context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)): [EqQueryFileLoader](api-reference-7x/easyquery-packages/core-package/classes/eqqueryfileloader-class)

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
### getQueryFile
▸ getQueryFile(options?: [GetQueryFileOptions](api-reference-7x/easyquery-packages/core-package/interfaces/getqueryfileoptions-interface)): `Promise`&lt;`void`&gt;

#### Parameters:
- options: [GetQueryFileOptions](api-reference-7x/easyquery-packages/core-package/interfaces/getqueryfileoptions-interface), *Optional* 


**Returns** `Promise`&lt;`void`&gt;


---
### uploadQueryFile
▸ uploadQueryFile(options?: [UploadQueryFileOptions](api-reference-7x/easyquery-packages/core-package/interfaces/uploadqueryfileoptions-interface)): `Promise`&lt;[QueryData](api-reference-7x/easyquery-packages/core-package/interfaces/querydata-interface)&gt;

#### Parameters:
- options: [UploadQueryFileOptions](api-reference-7x/easyquery-packages/core-package/interfaces/uploadqueryfileoptions-interface), *Optional* 


**Returns** `Promise`&lt;[QueryData](api-reference-7x/easyquery-packages/core-package/interfaces/querydata-interface)&gt;


---
