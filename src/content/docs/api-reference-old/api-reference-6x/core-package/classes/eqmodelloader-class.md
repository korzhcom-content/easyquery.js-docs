---
title: EqModelLoader class
slug: api-reference-old/api-reference-6x/core-package/classes/eqmodelloader-class
sidebar:
  order: 100
---

## Index
### [Constructors](api-reference-old/api-reference-6x/core-package/classes/eqmodelloader-class#constructors-1)
- [constructor](api-reference-old/api-reference-6x/core-package/classes/eqmodelloader-class#constructor)

### [Protected Properties](api-reference-old/api-reference-6x/core-package/classes/eqmodelloader-class#protected-properties-1)
- [modelLoadingRejectFunc](api-reference-old/api-reference-6x/core-package/classes/eqmodelloader-class#modelloadingrejectfunc)
- [modelLoadingResolveFunc](api-reference-old/api-reference-6x/core-package/classes/eqmodelloader-class#modelloadingresolvefunc)
- [modelNeverLoaded](api-reference-old/api-reference-6x/core-package/classes/eqmodelloader-class#modelneverloaded)
- [modelPromise](api-reference-old/api-reference-6x/core-package/classes/eqmodelloader-class#modelpromise)

### [Public Methods](api-reference-old/api-reference-6x/core-package/classes/eqmodelloader-class#public-methods-1)
- [getContext](api-reference-old/api-reference-6x/core-package/classes/eqmodelloader-class#getcontext)
- [getModelPromise](api-reference-old/api-reference-6x/core-package/classes/eqmodelloader-class#getmodelpromise)
- [init](api-reference-old/api-reference-6x/core-package/classes/eqmodelloader-class#init)
- [startModelLoading](api-reference-old/api-reference-6x/core-package/classes/eqmodelloader-class#startmodelloading)

### [Protected Methods](api-reference-old/api-reference-6x/core-package/classes/eqmodelloader-class#protected-methods-1)
- [createModelLoadingPromise](api-reference-old/api-reference-6x/core-package/classes/eqmodelloader-class#createmodelloadingpromise)
- [sendLoadModelRequest](api-reference-old/api-reference-6x/core-package/classes/eqmodelloader-class#sendloadmodelrequest)


## Constructors

---
#### constructor

⊕ new EqModelLoader(context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)): [EqModelLoader](api-reference-old/api-reference-6x/core-package/classes/eqmodelloader-class)

#### Parameters:
- context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)


---

## Protected Properties

---
### modelLoadingRejectFunc

● modelLoadingRejectFunc: (reason?: `any`) => `void`

---
### modelLoadingResolveFunc

● modelLoadingResolveFunc: (value?: [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class) | `PromiseLike`&lt;[DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class)&gt;) => `void`

---
### modelNeverLoaded

● modelNeverLoaded: `boolean` = `true`

---
### modelPromise

● modelPromise: `Promise`&lt;[DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class)&gt; | `null` = ` null`

---
## Public Methods

---
### getContext
▸ getContext(): [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)


**Returns** [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)


---
### getModelPromise
Returns the `Promise` of the model loading process

▸ getModelPromise(): `Promise`&lt;[DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class)&gt;


**Returns** `Promise`&lt;[DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class)&gt;


---
### init
▸ init(options: `any`): `void`

#### Parameters:
- options: `any`


**Returns** `void`


---
### startModelLoading
▸ startModelLoading(options: `any`): `Promise`&lt;[DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class)&gt;

#### Parameters:
- options: `any`


**Returns** `Promise`&lt;[DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class)&gt;


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
