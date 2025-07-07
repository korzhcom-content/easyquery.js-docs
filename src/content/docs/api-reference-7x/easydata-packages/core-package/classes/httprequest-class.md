---
title: HttpRequest class
slug: api-reference-7x/easydata-packages/core-package/classes/httprequest-class
sidebar:
  order: 100
---

## Index
### [Constructors](api-reference-7x/easydata-packages/core-package/classeshttprequest-class#constructors-1)
- [constructor](api-reference-7x/easydata-packages/core-package/classeshttprequest-class#constructor)

### [Public Properties](api-reference-7x/easydata-packages/core-package/classeshttprequest-class#public-properties-1)
- [data](api-reference-7x/easydata-packages/core-package/classeshttprequest-class#data)
- [method](api-reference-7x/easydata-packages/core-package/classeshttprequest-class#method)
- [url](api-reference-7x/easydata-packages/core-package/classeshttprequest-class#url)

### [Public Methods](api-reference-7x/easydata-packages/core-package/classeshttprequest-class#public-methods-1)
- [abort](api-reference-7x/easydata-packages/core-package/classeshttprequest-class#abort)
- [getResponseHeaders](api-reference-7x/easydata-packages/core-package/classeshttprequest-class#getresponseheaders)
- [getXMLHttpRequest](api-reference-7x/easydata-packages/core-package/classeshttprequest-class#getxmlhttprequest)
- [open](api-reference-7x/easydata-packages/core-package/classeshttprequest-class#open)
- [setHeader](api-reference-7x/easydata-packages/core-package/classeshttprequest-class#setheader)
- [setQueryParam](api-reference-7x/easydata-packages/core-package/classeshttprequest-class#setqueryparam)


## Constructors

---
#### constructor

⊕ new HttpRequest(xhr: `XMLHttpRequest`,descriptor: [HttpRequestDescriptor](api-reference-7x/easydata-packages/core-package/interfaceshttprequestdescriptor-interface)): [HttpRequest](api-reference-7x/easydata-packages/core-package/classeshttprequest-class)

#### Parameters:
- xhr: `XMLHttpRequest`
- descriptor: [HttpRequestDescriptor](api-reference-7x/easydata-packages/core-package/interfaceshttprequestdescriptor-interface)


---

## Public Properties

---
### data

● data?: `any`

---
### method

● method: [HttpMethod](api-reference-7x/easydata-packages/core-package/enumerationshttpmethod-enum)

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
▸ getResponseHeaders(): [HttpHeaders](api-reference-7x/easydata-packages/core-package/interfaceshttpheaders-interface)


**Returns** [HttpHeaders](api-reference-7x/easydata-packages/core-package/interfaceshttpheaders-interface)


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
