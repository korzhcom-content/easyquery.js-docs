---
title: HttpRequest class
slug: api-reference-7x/@easydata/core-package/classes/httprequest-class
sidebar:
  order: 100
---

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttprequest-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttprequest-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttprequest-class/#public-properties-1)
- [data](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttprequest-class/#data)
- [method](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttprequest-class/#method)
- [url](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttprequest-class/#url)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttprequest-class/#public-methods-1)
- [abort](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttprequest-class/#abort)
- [getResponseHeaders](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttprequest-class/#getresponseheaders)
- [getXMLHttpRequest](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttprequest-class/#getxmlhttprequest)
- [open](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttprequest-class/#open)
- [setHeader](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttprequest-class/#setheader)
- [setQueryParam](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttprequest-class/#setqueryparam)


## Constructors

---
#### constructor

⊕ new HttpRequest(xhr: `XMLHttpRequest`,descriptor: [HttpRequestDescriptor](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/interfaceshttprequestdescriptor-interface)): [HttpRequest](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classeshttprequest-class)

#### Parameters:
- xhr: `XMLHttpRequest`
- descriptor: [HttpRequestDescriptor](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/interfaceshttprequestdescriptor-interface)


---

## Public Properties

---
### data

● data?: `any`

---
### method

● method: [HttpMethod](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/enumerationshttpmethod-enum)

---
### url

● url: `string`

---
## Public Methods

---
### abort
▸ abort(): `void`


**Returns** `void`


---
### getResponseHeaders
▸ getResponseHeaders(): [HttpHeaders](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/interfaceshttpheaders-interface)


**Returns** [HttpHeaders](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/interfaceshttpheaders-interface)


---
### getXMLHttpRequest
▸ getXMLHttpRequest(): `XMLHttpRequest`


**Returns** `XMLHttpRequest`


---
### open
▸ open(): `void`


**Returns** `void`


---
### setHeader
▸ setHeader(name: `string`,value: `string`): `void`

#### Parameters:
- name: `string`
- value: `string`


**Returns** `void`


---
### setQueryParam
▸ setQueryParam(name: `string`,value: `string`): `void`

#### Parameters:
- name: `string`
- value: `string`


**Returns** `void`


---
