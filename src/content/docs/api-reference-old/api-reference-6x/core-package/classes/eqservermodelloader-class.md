---
title: EqServerModelLoader class
slug: >-
  api-reference-old/api-reference-6x/core-package/classes/eqservermodelloader-class
sidebar:
  order: 100
---

## Extends
[EqModelLoader](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqmodelloader-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqservermodelloader-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqservermodelloader-class/#constructor)

### [Protected Properties](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqservermodelloader-class/#protected-properties-1)
- [modelLoadingRejectFunc](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqservermodelloader-class/#modelloadingrejectfunc)
- [modelLoadingResolveFunc](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqservermodelloader-class/#modelloadingresolvefunc)
- [modelNeverLoaded](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqservermodelloader-class/#modelneverloaded)
- [modelPromise](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqservermodelloader-class/#modelpromise)

### [Public Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqservermodelloader-class/#public-methods-1)
- [getContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqservermodelloader-class/#getcontext)
- [getModelPromise](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqservermodelloader-class/#getmodelpromise)
- [init](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqservermodelloader-class/#init)
- [startModelLoading](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqservermodelloader-class/#startmodelloading)

### [Protected Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqservermodelloader-class/#protected-methods-1)
- [createModelLoadingPromise](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqservermodelloader-class/#createmodelloadingpromise)
- [sendLoadModelRequest](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqservermodelloader-class/#sendloadmodelrequest)


## Constructors

---
#### constructor

⊕ new EqServerModelLoader(context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)): [EqServerModelLoader](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqservermodelloader-class)

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
▸ init(options?: `any`): `void`

#### Parameters:
- options: `any`, *Optional* 


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
▸ sendLoadModelRequest(options: `any`): `void`

#### Parameters:
- options: `any`


**Returns** `void`


---
