---
title: ODataModelLoader class
slug: api-reference-7x/@easyquery/odata-package/classes/odatamodelloader-class
sidebar:
  order: 100
---

## Extends
[EqModelLoader](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqmodelloader-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easyquery/odata-package/classes/odatamodelloader-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easyquery/odata-package/classes/odatamodelloader-class/#constructor)

### [Protected Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/odata-package/classes/odatamodelloader-class/#protected-properties-1)
- [context](//easyquery/javascript/docs/api-reference-7x/@easyquery/odata-package/classes/odatamodelloader-class/#context)
- [modelLoadingRejectFunc](//easyquery/javascript/docs/api-reference-7x/@easyquery/odata-package/classes/odatamodelloader-class/#modelloadingrejectfunc)
- [modelLoadingResolveFunc](//easyquery/javascript/docs/api-reference-7x/@easyquery/odata-package/classes/odatamodelloader-class/#modelloadingresolvefunc)
- [modelPromise](//easyquery/javascript/docs/api-reference-7x/@easyquery/odata-package/classes/odatamodelloader-class/#modelpromise)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/odata-package/classes/odatamodelloader-class/#public-methods-1)
- [getContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/odata-package/classes/odatamodelloader-class/#getcontext)
- [getModelPromise](//easyquery/javascript/docs/api-reference-7x/@easyquery/odata-package/classes/odatamodelloader-class/#getmodelpromise)
- [init](//easyquery/javascript/docs/api-reference-7x/@easyquery/odata-package/classes/odatamodelloader-class/#init)
- [startModelLoading](//easyquery/javascript/docs/api-reference-7x/@easyquery/odata-package/classes/odatamodelloader-class/#startmodelloading)

### [Protected Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/odata-package/classes/odatamodelloader-class/#protected-methods-1)
- [createModelLoadingPromise](//easyquery/javascript/docs/api-reference-7x/@easyquery/odata-package/classes/odatamodelloader-class/#createmodelloadingpromise)
- [sendLoadModelRequest](//easyquery/javascript/docs/api-reference-7x/@easyquery/odata-package/classes/odatamodelloader-class/#sendloadmodelrequest)


## Constructors

---
#### constructor

⊕ new ODataModelLoader(context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class),options?: `any`): [ODataModelLoader](//easyquery/javascript/docs/api-reference-7x/@easyquery/odata-package/classes/odatamodelloader-class)

#### Parameters:
- context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)
- options: `any`, *Optional* 


---

## Protected Properties

---
### context

● context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)

---
### modelLoadingRejectFunc

● modelLoadingRejectFunc: (reason?: `any`) => `void`

---
### modelLoadingResolveFunc

● modelLoadingResolveFunc: (value?: [ModelPlainData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/modelplaindata-interface) | `PromiseLike`&lt;[ModelPlainData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/modelplaindata-interface)&gt;) => `void`

---
### modelPromise

● modelPromise: `Promise`&lt;[ModelPlainData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/modelplaindata-interface)&gt; | `null`

---
## Public Methods

---
### getContext
▸ getContext(): [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)


**Returns** [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)


---
### getModelPromise
Returns the `Promise` of the model loading process

▸ getModelPromise(): `Promise`&lt;[ModelPlainData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/modelplaindata-interface)&gt;


**Returns** `Promise`&lt;[ModelPlainData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/modelplaindata-interface)&gt;


---
### init
▸ init(options?: `any`): `void`

#### Parameters:
- options: `any`, *Optional* 


**Returns** `void`


---
### startModelLoading
▸ startModelLoading(options: [ModelLoadOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/modelloadoptions-interface)): `Promise`&lt;[ModelPlainData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/modelplaindata-interface)&gt;

#### Parameters:
- options: [ModelLoadOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/modelloadoptions-interface)


**Returns** `Promise`&lt;[ModelPlainData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/modelplaindata-interface)&gt;


---
## Protected Methods

---
### createModelLoadingPromise
▸ createModelLoadingPromise(): `void`


**Returns** `void`


---
### sendLoadModelRequest
▸ sendLoadModelRequest(options?: `any`): `void`

#### Parameters:
- options: `any`, *Optional* 


**Returns** `void`


---
