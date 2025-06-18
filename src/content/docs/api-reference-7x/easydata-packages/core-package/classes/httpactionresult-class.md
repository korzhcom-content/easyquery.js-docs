---
title: HttpActionResult class
slug: api-reference-7x/easydata-packages/core-package/classes/httpactionresult-class
sidebar:
  order: 100
---

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttpactionresult-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttpactionresult-class/#constructor)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttpactionresult-class/#public-methods-1)
- [catch](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttpactionresult-class/#catch)
- [finally](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttpactionresult-class/#finally)
- [getPromise](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttpactionresult-class/#getpromise)
- [getRequest](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttpactionresult-class/#getrequest)
- [then](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttpactionresult-class/#then)


## Constructors

---
#### constructor

⊕ new HttpActionResult(request: [HttpRequest](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttprequest-class),promise: `Promise`&lt;`T`&gt;): [HttpActionResult](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttpactionresult-class)

#### Parameters:
- request: [HttpRequest](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttprequest-class)
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
▸ getRequest(): [HttpRequest](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttprequest-class)


**Returns** [HttpRequest](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttprequest-class)


---
### then
▸ then(onfulfilled?: (value: `T`) => `TResult1` | `PromiseLike`&lt;`TResult1`&gt;,onrejected?: (reason: `any`) => `TResult2` | `PromiseLike`&lt;`TResult2`&gt;): `Promise`&lt;`TResult1` | `TResult2`&gt;

#### Parameters:
- onfulfilled: (value: `T`) => `TResult1` | `PromiseLike`&lt;`TResult1`&gt;, *Optional* 
- onrejected: (reason: `any`) => `TResult2` | `PromiseLike`&lt;`TResult2`&gt;, *Optional* 


**Returns** `Promise`&lt;`TResult1` | `TResult2`&gt;


---
