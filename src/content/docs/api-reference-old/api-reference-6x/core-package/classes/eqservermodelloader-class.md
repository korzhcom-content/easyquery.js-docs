---
title: EqServerModelLoader class
slug: >-
  api-reference-old/api-reference-6x/core-package/classes/eqservermodelloader-class
sidebar:
  order: 100
---

## Extends
[EqModelLoader](api-reference-old/api-reference-6x/core-package/classes/eqmodelloader-class)

## Index
### [Constructors](api-reference-old/api-reference-6x/core-package/classes/eqservermodelloader-class#constructors-1)
- [constructor](api-reference-old/api-reference-6x/core-package/classes/eqservermodelloader-class#constructor)

### [Protected Properties](api-reference-old/api-reference-6x/core-package/classes/eqservermodelloader-class#protected-properties-1)
- [modelLoadingRejectFunc](api-reference-old/api-reference-6x/core-package/classes/eqservermodelloader-class#modelloadingrejectfunc)
- [modelLoadingResolveFunc](api-reference-old/api-reference-6x/core-package/classes/eqservermodelloader-class#modelloadingresolvefunc)
- [modelNeverLoaded](api-reference-old/api-reference-6x/core-package/classes/eqservermodelloader-class#modelneverloaded)
- [modelPromise](api-reference-old/api-reference-6x/core-package/classes/eqservermodelloader-class#modelpromise)

### [Public Methods](api-reference-old/api-reference-6x/core-package/classes/eqservermodelloader-class#public-methods-1)
- [getContext](api-reference-old/api-reference-6x/core-package/classes/eqservermodelloader-class#getcontext)
- [getModelPromise](api-reference-old/api-reference-6x/core-package/classes/eqservermodelloader-class#getmodelpromise)
- [init](api-reference-old/api-reference-6x/core-package/classes/eqservermodelloader-class#init)
- [startModelLoading](api-reference-old/api-reference-6x/core-package/classes/eqservermodelloader-class#startmodelloading)

### [Protected Methods](api-reference-old/api-reference-6x/core-package/classes/eqservermodelloader-class#protected-methods-1)
- [createModelLoadingPromise](api-reference-old/api-reference-6x/core-package/classes/eqservermodelloader-class#createmodelloadingpromise)
- [sendLoadModelRequest](api-reference-old/api-reference-6x/core-package/classes/eqservermodelloader-class#sendloadmodelrequest)


## Constructors

---
#### constructor

⊕ new EqServerModelLoader(context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)): [EqServerModelLoader](api-reference-old/api-reference-6x/core-package/classes/eqservermodelloader-class)

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
▸ init(options?: `any`): `void`

#### Parameters:
- options: `any`, *Optional* 


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
▸ sendLoadModelRequest(options: `any`): `void`

#### Parameters:
- options: `any`


**Returns** `void`


---
