---
title: HttpClient class
slug: api-reference-old/api-reference-6x/core-package/classes/httpclient-class
sidebar:
  order: 100
---

## Index
### [Constructors](api-reference-old/api-reference-6x/core-package/classeshttpclient-class#constructors-1)
- [constructor](api-reference-old/api-reference-6x/core-package/classeshttpclient-class#constructor)

### [Public Properties](api-reference-old/api-reference-6x/core-package/classeshttpclient-class#public-properties-1)
- [beforeEachRequest](api-reference-old/api-reference-6x/core-package/classeshttpclient-class#beforeeachrequest)
- [customPayload](api-reference-old/api-reference-6x/core-package/classeshttpclient-class#custompayload)
- [defaultHeaders](api-reference-old/api-reference-6x/core-package/classeshttpclient-class#defaultheaders)

### [Public Methods](api-reference-old/api-reference-6x/core-package/classeshttpclient-class#public-methods-1)
- [delete](api-reference-old/api-reference-6x/core-package/classeshttpclient-class#delete)
- [get](api-reference-old/api-reference-6x/core-package/classeshttpclient-class#get)
- [post](api-reference-old/api-reference-6x/core-package/classeshttpclient-class#post)
- [put](api-reference-old/api-reference-6x/core-package/classeshttpclient-class#put)
- [send](api-reference-old/api-reference-6x/core-package/classeshttpclient-class#send)

### [Protected Methods](api-reference-old/api-reference-6x/core-package/classeshttpclient-class#protected-methods-1)
- [getEqJsVersionHeader](api-reference-old/api-reference-6x/core-package/classeshttpclient-class#geteqjsversionheader)


## Constructors

---
#### constructor

⊕ new HttpClient(): [HttpClient](api-reference-old/api-reference-6x/core-package/classeshttpclient-class)


---

## Public Properties

---
### beforeEachRequest

● beforeEachRequest?: (request: [HttpRequest](api-reference-old/api-reference-6x/core-package/classeshttprequest-class)) => `void`

---
### customPayload

● customPayload: ``

---
### defaultHeaders

● defaultHeaders: [HttpHeaders](api-reference-old/api-reference-6x/core-package/interfaceshttpheaders-interface)

---
## Public Methods

---
### delete
▸ delete(url: `string`,data?: `any`,options?: [HttpRequestOptions](api-reference-old/api-reference-6x/core-package/interfaceshttprequestoptions-interface)): [HttpActionResult](api-reference-old/api-reference-6x/core-package/classeshttpactionresult-class)&lt;`T`&gt;

#### Parameters:
- url: `string`
- data: `any`, *Optional* 
- options: [HttpRequestOptions](api-reference-old/api-reference-6x/core-package/interfaceshttprequestoptions-interface), *Optional* 


**Returns** [HttpActionResult](api-reference-old/api-reference-6x/core-package/classeshttpactionresult-class)&lt;`T`&gt;


---
### get
▸ get(url: `string`,options?: [HttpRequestOptions](api-reference-old/api-reference-6x/core-package/interfaceshttprequestoptions-interface)): [HttpActionResult](api-reference-old/api-reference-6x/core-package/classeshttpactionresult-class)&lt;`T`&gt;

#### Parameters:
- url: `string`
- options: [HttpRequestOptions](api-reference-old/api-reference-6x/core-package/interfaceshttprequestoptions-interface), *Optional* 


**Returns** [HttpActionResult](api-reference-old/api-reference-6x/core-package/classeshttpactionresult-class)&lt;`T`&gt;


---
### post
▸ post(url: `string`,data: `any`,options?: [HttpRequestOptions](api-reference-old/api-reference-6x/core-package/interfaceshttprequestoptions-interface)): [HttpActionResult](api-reference-old/api-reference-6x/core-package/classeshttpactionresult-class)&lt;`T`&gt;

#### Parameters:
- url: `string`
- data: `any`
- options: [HttpRequestOptions](api-reference-old/api-reference-6x/core-package/interfaceshttprequestoptions-interface), *Optional* 


**Returns** [HttpActionResult](api-reference-old/api-reference-6x/core-package/classeshttpactionresult-class)&lt;`T`&gt;


---
### put
▸ put(url: `string`,data: `any`,options?: [HttpRequestOptions](api-reference-old/api-reference-6x/core-package/interfaceshttprequestoptions-interface)): [HttpActionResult](api-reference-old/api-reference-6x/core-package/classeshttpactionresult-class)&lt;`T`&gt;

#### Parameters:
- url: `string`
- data: `any`
- options: [HttpRequestOptions](api-reference-old/api-reference-6x/core-package/interfaceshttprequestoptions-interface), *Optional* 


**Returns** [HttpActionResult](api-reference-old/api-reference-6x/core-package/classeshttpactionresult-class)&lt;`T`&gt;


---
### send
▸ send(method: [HttpMethod](api-reference-old/api-reference-6x/core-package/enumerationshttpmethod-enum),url: `string`,data?: `any`,options?: [HttpRequestOptions](api-reference-old/api-reference-6x/core-package/interfaceshttprequestoptions-interface)): [HttpActionResult](api-reference-old/api-reference-6x/core-package/classeshttpactionresult-class)&lt;`T`&gt;

#### Parameters:
- method: [HttpMethod](api-reference-old/api-reference-6x/core-package/enumerationshttpmethod-enum)
- url: `string`
- data: `any`, *Optional* 
- options: [HttpRequestOptions](api-reference-old/api-reference-6x/core-package/interfaceshttprequestoptions-interface), *Optional* 


**Returns** [HttpActionResult](api-reference-old/api-reference-6x/core-package/classeshttpactionresult-class)&lt;`T`&gt;


---
## Protected Methods

---
### getEqJsVersionHeader
▸ getEqJsVersionHeader(): `any`


**Returns** `any`


---
