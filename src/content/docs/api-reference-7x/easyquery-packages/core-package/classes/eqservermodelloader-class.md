---
title: EqServerModelLoader class
slug: >-
  api-reference-7x/easyquery-packages/core-package/classes/eqservermodelloader-class
sidebar:
  order: 100
---

## Extends
[EqModelLoader](api-reference-7x/easyquery-packages/core-package/classes/eqmodelloader-class)

## Index
### [Constructors](api-reference-7x/easyquery-packages/core-package/classes/eqservermodelloader-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/core-package/classes/eqservermodelloader-class#constructor)

### [Protected Properties](api-reference-7x/easyquery-packages/core-package/classes/eqservermodelloader-class#protected-properties-1)
- [context](api-reference-7x/easyquery-packages/core-package/classes/eqservermodelloader-class#context)
- [modelLoadingRejectFunc](api-reference-7x/easyquery-packages/core-package/classes/eqservermodelloader-class#modelloadingrejectfunc)
- [modelLoadingResolveFunc](api-reference-7x/easyquery-packages/core-package/classes/eqservermodelloader-class#modelloadingresolvefunc)
- [modelPromise](api-reference-7x/easyquery-packages/core-package/classes/eqservermodelloader-class#modelpromise)

### [Public Methods](api-reference-7x/easyquery-packages/core-package/classes/eqservermodelloader-class#public-methods-1)
- [getContext](api-reference-7x/easyquery-packages/core-package/classes/eqservermodelloader-class#getcontext)
- [getModelPromise](api-reference-7x/easyquery-packages/core-package/classes/eqservermodelloader-class#getmodelpromise)
- [init](api-reference-7x/easyquery-packages/core-package/classes/eqservermodelloader-class#init)
- [startModelLoading](api-reference-7x/easyquery-packages/core-package/classes/eqservermodelloader-class#startmodelloading)

### [Protected Methods](api-reference-7x/easyquery-packages/core-package/classes/eqservermodelloader-class#protected-methods-1)
- [createModelLoadingPromise](api-reference-7x/easyquery-packages/core-package/classes/eqservermodelloader-class#createmodelloadingpromise)
- [sendLoadModelRequest](api-reference-7x/easyquery-packages/core-package/classes/eqservermodelloader-class#sendloadmodelrequest)


## Constructors

---
#### constructor

⊕ new EqServerModelLoader(context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)): [EqServerModelLoader](api-reference-7x/easyquery-packages/core-package/classes/eqservermodelloader-class)

#### Parameters:
- context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)


---

## Protected Properties

---
### context

● context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)

---
### modelLoadingRejectFunc

● modelLoadingRejectFunc: (reason?: `any`) => `void`

---
### modelLoadingResolveFunc

● modelLoadingResolveFunc: (value?: [ModelPlainData](api-reference-7x/easyquery-packages/core-package/interfaces/modelplaindata-interface) | `PromiseLike`&lt;[ModelPlainData](api-reference-7x/easyquery-packages/core-package/interfaces/modelplaindata-interface)&gt;) => `void`

---
### modelPromise

● modelPromise: `Promise`&lt;[ModelPlainData](api-reference-7x/easyquery-packages/core-package/interfaces/modelplaindata-interface)&gt; | `null` = ` null`

---
## Public Methods

---
### getContext
▸ getContext(): [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)


**Returns** [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)


---
### getModelPromise
Returns the `Promise` of the model loading process

▸ getModelPromise(): `Promise`&lt;[ModelPlainData](api-reference-7x/easyquery-packages/core-package/interfaces/modelplaindata-interface)&gt;


**Returns** `Promise`&lt;[ModelPlainData](api-reference-7x/easyquery-packages/core-package/interfaces/modelplaindata-interface)&gt;


---
### init
▸ init(): `void`


**Returns** `void`


---
### startModelLoading
▸ startModelLoading(options: [ModelLoadOptions](api-reference-7x/easyquery-packages/core-package/interfaces/modelloadoptions-interface)): `Promise`&lt;[ModelPlainData](api-reference-7x/easyquery-packages/core-package/interfaces/modelplaindata-interface)&gt;

#### Parameters:
- options: [ModelLoadOptions](api-reference-7x/easyquery-packages/core-package/interfaces/modelloadoptions-interface)


**Returns** `Promise`&lt;[ModelPlainData](api-reference-7x/easyquery-packages/core-package/interfaces/modelplaindata-interface)&gt;


---
## Protected Methods

---
### createModelLoadingPromise
▸ createModelLoadingPromise(): `void`


**Returns** `void`


---
### sendLoadModelRequest
▸ sendLoadModelRequest(options: `LoadModelOptions`): `void`

#### Parameters:
- options: `LoadModelOptions`


**Returns** `void`


---
