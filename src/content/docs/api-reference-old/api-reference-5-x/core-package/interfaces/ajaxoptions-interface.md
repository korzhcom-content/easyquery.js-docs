---
title: AjaxOptions interface
slug: >-
  api-reference-old/api-reference-5-x/core-package/interfaces/ajaxoptions-interface
sidebar:
  order: 100
---

Defines the structure of AJAX request

## Index
### [Properties](api-reference-old/api-reference-5-x/core-package/interfaces/ajaxoptions-interface#properties-1)
- [beforeSend](api-reference-old/api-reference-5-x/core-package/interfaces/ajaxoptions-interface#beforesend)
- [contentType](api-reference-old/api-reference-5-x/core-package/interfaces/ajaxoptions-interface#contenttype)
- [data](api-reference-old/api-reference-5-x/core-package/interfaces/ajaxoptions-interface#data)
- [dataType](api-reference-old/api-reference-5-x/core-package/interfaces/ajaxoptions-interface#datatype)
- [error](api-reference-old/api-reference-5-x/core-package/interfaces/ajaxoptions-interface#error)
- [success](api-reference-old/api-reference-5-x/core-package/interfaces/ajaxoptions-interface#success)
- [type](api-reference-old/api-reference-5-x/core-package/interfaces/ajaxoptions-interface#type)
- [url](api-reference-old/api-reference-5-x/core-package/interfaces/ajaxoptions-interface#url)



## Properties

---
### beforeSend

● beforeSend?: (xhr: `XMLHttpRequest`, data: `any`) => `void`

---
### contentType

● contentType?: `string`

---
### data

● data?: `any`

---
### dataType

● dataType?: `string`

---
### error

● error?: (error: `XMLHttpRequest`, status: `number`, statusMessage: `string`) => `void`

---
### success

● success?: (result: `any`, xhr?: `XMLHttpRequest`) => `void`

---
### type

● type?: `string`

---
### url

● url: `string`

---
