---
title: HttpClient class
slug: api-reference-7x/easydata-packages/core-package/classes/httpclient-class
sidebar:
  order: 100
---

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttpclient-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttpclient-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttpclient-class/#public-properties-1)
- [beforeEachRequest](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttpclient-class/#beforeeachrequest)
- [customPayload](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttpclient-class/#custompayload)
- [defaultHeaders](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttpclient-class/#defaultheaders)
- [onRequest](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttpclient-class/#onrequest)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttpclient-class/#public-methods-1)
- [delete](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttpclient-class/#delete)
- [get](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttpclient-class/#get)
- [post](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttpclient-class/#post)
- [put](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttpclient-class/#put)
- [send](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttpclient-class/#send)


## Constructors

---
#### constructor

⊕ new HttpClient(): [HttpClient](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttpclient-class)


---

## Public Properties

---
### beforeEachRequest

This option is deprecated and will be removed in future updates.
Use 'onRequest' instead.

● beforeEachRequest?: (request: [HttpRequest](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttprequest-class)) => `void`

---
### customPayload

● customPayload: ``

---
### defaultHeaders

● defaultHeaders: [HttpHeaders](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/interfaceshttpheaders-interface)

---
### onRequest

● onRequest?: (request: [HttpRequest](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttprequest-class)) => `void`

---
## Public Methods

---
### delete
▸ delete(url: `string`,data?: `any`,options?: [HttpRequestOptions](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/interfaceshttprequestoptions-interface)): [HttpActionResult](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttpactionresult-class)&lt;`T`&gt;

#### Parameters:
- url: `string`
- data: `any`, *Optional* 
- options: [HttpRequestOptions](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/interfaceshttprequestoptions-interface), *Optional* 


**Returns** [HttpActionResult](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttpactionresult-class)&lt;`T`&gt;


---
### get
▸ get(url: `string`,options?: [HttpRequestOptions](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/interfaceshttprequestoptions-interface)): [HttpActionResult](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttpactionresult-class)&lt;`T`&gt;

#### Parameters:
- url: `string`
- options: [HttpRequestOptions](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/interfaceshttprequestoptions-interface), *Optional* 


**Returns** [HttpActionResult](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttpactionresult-class)&lt;`T`&gt;


---
### post
▸ post(url: `string`,data: `any`,options?: [HttpRequestOptions](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/interfaceshttprequestoptions-interface)): [HttpActionResult](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttpactionresult-class)&lt;`T`&gt;

#### Parameters:
- url: `string`
- data: `any`
- options: [HttpRequestOptions](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/interfaceshttprequestoptions-interface), *Optional* 


**Returns** [HttpActionResult](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttpactionresult-class)&lt;`T`&gt;


---
### put
▸ put(url: `string`,data: `any`,options?: [HttpRequestOptions](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/interfaceshttprequestoptions-interface)): [HttpActionResult](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttpactionresult-class)&lt;`T`&gt;

#### Parameters:
- url: `string`
- data: `any`
- options: [HttpRequestOptions](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/interfaceshttprequestoptions-interface), *Optional* 


**Returns** [HttpActionResult](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttpactionresult-class)&lt;`T`&gt;


---
### send
▸ send(method: [HttpMethod](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/enumerationshttpmethod-enum),url: `string`,data?: `any`,options?: [HttpRequestOptions](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/interfaceshttprequestoptions-interface)): [HttpActionResult](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttpactionresult-class)&lt;`T`&gt;

#### Parameters:
- method: [HttpMethod](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/enumerationshttpmethod-enum)
- url: `string`
- data: `any`, *Optional* 
- options: [HttpRequestOptions](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/interfaceshttprequestoptions-interface), *Optional* 


**Returns** [HttpActionResult](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttpactionresult-class)&lt;`T`&gt;


---
