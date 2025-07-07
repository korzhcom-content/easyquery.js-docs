---
title: HttpActionResult class
slug: api-reference-7x/easydata-packages/core-package/classes/httpactionresult-class
sidebar:
  order: 100
---

## Index
### [Constructors](api-reference-7x/easydata-packages/core-package/classeshttpactionresult-class#constructors-1)
- [constructor](api-reference-7x/easydata-packages/core-package/classeshttpactionresult-class#constructor)

### [Public Methods](api-reference-7x/easydata-packages/core-package/classeshttpactionresult-class#public-methods-1)
- [catch](api-reference-7x/easydata-packages/core-package/classeshttpactionresult-class#catch)
- [finally](api-reference-7x/easydata-packages/core-package/classeshttpactionresult-class#finally)
- [getPromise](api-reference-7x/easydata-packages/core-package/classeshttpactionresult-class#getpromise)
- [getRequest](api-reference-7x/easydata-packages/core-package/classeshttpactionresult-class#getrequest)
- [then](api-reference-7x/easydata-packages/core-package/classeshttpactionresult-class#then)


## Constructors

---
#### constructor

⊕ new HttpActionResult(request: [HttpRequest](api-reference-7x/easydata-packages/core-package/classeshttprequest-class),promise: `Promise`&lt;`T`&gt;): [HttpActionResult](api-reference-7x/easydata-packages/core-package/classeshttpactionresult-class)

#### Parameters:
- request: [HttpRequest](api-reference-7x/easydata-packages/core-package/classeshttprequest-class)
- promise: `Promise`&lt;`T`&gt;


---

## Public Methods

---
### catch
▸ catch(onrejected?: (reason: `any`) => `TResult` | `PromiseLike`&lt;`TResult`&gt;): `Promise`&lt;`T` | `TResult`&gt;

#### Parameters:
- onrejected: (reason: `any`) => `TResult` | `PromiseLike`&lt;`TResult`&gt;, *Optional* 


**Returns** `Promise`&lt;`T` | `TResult`&gt;


---
### finally
▸ finally(onfinally?: () => `void`): `Promise`&lt;`T`&gt;

#### Parameters:
- onfinally: () => `void`, *Optional* 


**Returns** `Promise`&lt;`T`&gt;


---
### getPromise
▸ getPromise(): `Promise`&lt;`T`&gt;


**Returns** `Promise`&lt;`T`&gt;


---
### getRequest
▸ getRequest(): [HttpRequest](api-reference-7x/easydata-packages/core-package/classeshttprequest-class)


**Returns** [HttpRequest](api-reference-7x/easydata-packages/core-package/classeshttprequest-class)


---
### then
▸ then(onfulfilled?: (value: `T`) => `TResult1` | `PromiseLike`&lt;`TResult1`&gt;,onrejected?: (reason: `any`) => `TResult2` | `PromiseLike`&lt;`TResult2`&gt;): `Promise`&lt;`TResult1` | `TResult2`&gt;

#### Parameters:
- onfulfilled: (value: `T`) => `TResult1` | `PromiseLike`&lt;`TResult1`&gt;, *Optional* 
- onrejected: (reason: `any`) => `TResult2` | `PromiseLike`&lt;`TResult2`&gt;, *Optional* 


**Returns** `Promise`&lt;`TResult1` | `TResult2`&gt;


---
