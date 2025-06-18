---
title: EqModelLoader class
slug: api-reference-old/api-reference-6x/core-package/classes/eqmodelloader-class
sidebar:
  order: 100
---

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqmodelloader-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqmodelloader-class/#constructor)

### [Protected Properties](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqmodelloader-class/#protected-properties-1)
- [modelLoadingRejectFunc](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqmodelloader-class/#modelloadingrejectfunc)
- [modelLoadingResolveFunc](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqmodelloader-class/#modelloadingresolvefunc)
- [modelNeverLoaded](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqmodelloader-class/#modelneverloaded)
- [modelPromise](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqmodelloader-class/#modelpromise)

### [Public Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqmodelloader-class/#public-methods-1)
- [getContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqmodelloader-class/#getcontext)
- [getModelPromise](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqmodelloader-class/#getmodelpromise)
- [init](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqmodelloader-class/#init)
- [startModelLoading](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqmodelloader-class/#startmodelloading)

### [Protected Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqmodelloader-class/#protected-methods-1)
- [createModelLoadingPromise](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqmodelloader-class/#createmodelloadingpromise)
- [sendLoadModelRequest](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqmodelloader-class/#sendloadmodelrequest)


## Constructors

---
#### constructor

⊕ new EqModelLoader(context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)): [EqModelLoader](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqmodelloader-class)

#### Parameters:
- context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)


---

## Protected Properties

---
### modelLoadingRejectFunc

● modelLoadingRejectFunc: (reason?: `any`) => `void`

---
### modelLoadingResolveFunc

● modelLoadingResolveFunc: (value?: [DataModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/datamodel-class) | `PromiseLike`&lt;[DataModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/datamodel-class)&gt;) => `void`

---
### modelNeverLoaded

● modelNeverLoaded: `boolean` = `true`

---
### modelPromise

● modelPromise: `Promise`&lt;[DataModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/datamodel-class)&gt; | `null` = ` null`

---
## Public Methods

---
### getContext
▸ getContext(): [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)


**Returns** [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)


---
### getModelPromise
Returns the `Promise` of the model loading process

▸ getModelPromise(): `Promise`&lt;[DataModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/datamodel-class)&gt;


**Returns** `Promise`&lt;[DataModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/datamodel-class)&gt;


---
### init
▸ init(options: `any`): `void`

#### Parameters:
- options: `any`


**Returns** `void`


---
### startModelLoading
▸ startModelLoading(options: `any`): `Promise`&lt;[DataModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/datamodel-class)&gt;

#### Parameters:
- options: `any`


**Returns** `Promise`&lt;[DataModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/datamodel-class)&gt;


---
## Protected Methods

---
### createModelLoadingPromise
▸ createModelLoadingPromise(): `void`


**Returns** `void`


---
### sendLoadModelRequest
▸ sendLoadModelRequest(options: `any`): `any`

#### Parameters:
- options: `any`


**Returns** `any`


---
