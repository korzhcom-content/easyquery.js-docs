---
title: HttpClient class
slug: api-reference-7x/easydata-packages/core-package/classes/httpclient-class
sidebar:
  order: 100
---

## Index
### [Constructors](api-reference-7x/easydata-packages/core-package/classeshttpclient-class#constructors-1)
- [constructor](api-reference-7x/easydata-packages/core-package/classeshttpclient-class#constructor)

### [Public Properties](api-reference-7x/easydata-packages/core-package/classeshttpclient-class#public-properties-1)
- [beforeEachRequest](api-reference-7x/easydata-packages/core-package/classeshttpclient-class#beforeeachrequest)
- [customPayload](api-reference-7x/easydata-packages/core-package/classeshttpclient-class#custompayload)
- [defaultHeaders](api-reference-7x/easydata-packages/core-package/classeshttpclient-class#defaultheaders)
- [onRequest](api-reference-7x/easydata-packages/core-package/classeshttpclient-class#onrequest)

### [Public Methods](api-reference-7x/easydata-packages/core-package/classeshttpclient-class#public-methods-1)
- [delete](api-reference-7x/easydata-packages/core-package/classeshttpclient-class#delete)
- [get](api-reference-7x/easydata-packages/core-package/classeshttpclient-class#get)
- [post](api-reference-7x/easydata-packages/core-package/classeshttpclient-class#post)
- [put](api-reference-7x/easydata-packages/core-package/classeshttpclient-class#put)
- [send](api-reference-7x/easydata-packages/core-package/classeshttpclient-class#send)


## Constructors

---
#### constructor

⊕ new HttpClient(): [HttpClient](api-reference-7x/easydata-packages/core-package/classeshttpclient-class)


---

## Public Properties

---
### beforeEachRequest

This option is deprecated and will be removed in future updates.
Use 'onRequest' instead.

● beforeEachRequest?: (request: [HttpRequest](api-reference-7x/easydata-packages/core-package/classeshttprequest-class)) => `void`

---
### customPayload

● customPayload: ``

---
### defaultHeaders

● defaultHeaders: [HttpHeaders](api-reference-7x/easydata-packages/core-package/interfaceshttpheaders-interface)

---
### onRequest

● onRequest?: (request: [HttpRequest](api-reference-7x/easydata-packages/core-package/classeshttprequest-class)) => `void`

---
## Public Methods

---
### delete
▸ delete(url: `string`,data?: `any`,options?: [HttpRequestOptions](api-reference-7x/easydata-packages/core-package/interfaceshttprequestoptions-interface)): [HttpActionResult](api-reference-7x/easydata-packages/core-package/classeshttpactionresult-class)&lt;`T`&gt;

#### Parameters:
- url: `string`
- data: `any`, *Optional* 
- options: [HttpRequestOptions](api-reference-7x/easydata-packages/core-package/interfaceshttprequestoptions-interface), *Optional* 


**Returns** [HttpActionResult](api-reference-7x/easydata-packages/core-package/classeshttpactionresult-class)&lt;`T`&gt;


---
### get
▸ get(url: `string`,options?: [HttpRequestOptions](api-reference-7x/easydata-packages/core-package/interfaceshttprequestoptions-interface)): [HttpActionResult](api-reference-7x/easydata-packages/core-package/classeshttpactionresult-class)&lt;`T`&gt;

#### Parameters:
- url: `string`
- options: [HttpRequestOptions](api-reference-7x/easydata-packages/core-package/interfaceshttprequestoptions-interface), *Optional* 


**Returns** [HttpActionResult](api-reference-7x/easydata-packages/core-package/classeshttpactionresult-class)&lt;`T`&gt;


---
### post
▸ post(url: `string`,data: `any`,options?: [HttpRequestOptions](api-reference-7x/easydata-packages/core-package/interfaceshttprequestoptions-interface)): [HttpActionResult](api-reference-7x/easydata-packages/core-package/classeshttpactionresult-class)&lt;`T`&gt;

#### Parameters:
- url: `string`
- data: `any`
- options: [HttpRequestOptions](api-reference-7x/easydata-packages/core-package/interfaceshttprequestoptions-interface), *Optional* 


**Returns** [HttpActionResult](api-reference-7x/easydata-packages/core-package/classeshttpactionresult-class)&lt;`T`&gt;


---
### put
▸ put(url: `string`,data: `any`,options?: [HttpRequestOptions](api-reference-7x/easydata-packages/core-package/interfaceshttprequestoptions-interface)): [HttpActionResult](api-reference-7x/easydata-packages/core-package/classeshttpactionresult-class)&lt;`T`&gt;

#### Parameters:
- url: `string`
- data: `any`
- options: [HttpRequestOptions](api-reference-7x/easydata-packages/core-package/interfaceshttprequestoptions-interface), *Optional* 


**Returns** [HttpActionResult](api-reference-7x/easydata-packages/core-package/classeshttpactionresult-class)&lt;`T`&gt;


---
### send
▸ send(method: [HttpMethod](api-reference-7x/easydata-packages/core-package/enumerationshttpmethod-enum),url: `string`,data?: `any`,options?: [HttpRequestOptions](api-reference-7x/easydata-packages/core-package/interfaceshttprequestoptions-interface)): [HttpActionResult](api-reference-7x/easydata-packages/core-package/classeshttpactionresult-class)&lt;`T`&gt;

#### Parameters:
- method: [HttpMethod](api-reference-7x/easydata-packages/core-package/enumerationshttpmethod-enum)
- url: `string`
- data: `any`, *Optional* 
- options: [HttpRequestOptions](api-reference-7x/easydata-packages/core-package/interfaceshttprequestoptions-interface), *Optional* 


**Returns** [HttpActionResult](api-reference-7x/easydata-packages/core-package/classeshttpactionresult-class)&lt;`T`&gt;


---
