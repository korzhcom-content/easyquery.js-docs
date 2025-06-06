---
title: EqContextHandlers interface
slug: >-
  api-reference-6x/@easyquery/core-package/interfaces/eqcontexthandlers-interface
sidebar:
  order: 100
---

Defines interface for all context event handlers

## Index
### [Properties](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/eqcontexthandlers-interface/#properties-1)
- [beforeExecuteQuery](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/eqcontexthandlers-interface/#beforeexecutequery)
- [beforeExportResult](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/eqcontexthandlers-interface/#beforeexportresult)
- [beforeLoadModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/eqcontexthandlers-interface/#beforeloadmodel)
- [beforeLoadQuery](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/eqcontexthandlers-interface/#beforeloadquery)
- [beforeSyncQuery](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/eqcontexthandlers-interface/#beforesyncquery)
- [listRequestHandler](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/eqcontexthandlers-interface/#listrequesthandler)
- [onError](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/eqcontexthandlers-interface/#onerror)
- [onInit](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/eqcontexthandlers-interface/#oninit)
- [onInitialModelLoad](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/eqcontexthandlers-interface/#oninitialmodelload)
- [onLoadModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/eqcontexthandlers-interface/#onloadmodel)
- [onLoadQuery](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/eqcontexthandlers-interface/#onloadquery)
- [onProcessEnd](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/eqcontexthandlers-interface/#onprocessend)
- [onProcessStart](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/eqcontexthandlers-interface/#onprocessstart)



## Properties

---
### beforeExecuteQuery

● beforeExecuteQuery?: (options: `any`) => `any`

---
### beforeExportResult

● beforeExportResult?: (options: `any`) => `any`

---
### beforeLoadModel

Tuners.
Each tuner is a function which are called before sending a request to the server

● beforeLoadModel?: (options: `any`) => `any`

---
### beforeLoadQuery

● beforeLoadQuery?: (options: `any`) => `any`

---
### beforeSyncQuery

● beforeSyncQuery?: (options: `any`) => `any`

---
### listRequestHandler

● listRequestHandler?: `any`

---
### onError

● onError?: (message: [StatusMessage](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/statusmessage-interface)) => `void`

---
### onInit

● onInit?: () => `void`

---
### onInitialModelLoad

● onInitialModelLoad?: (model: [DataModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/datamodel-class)) => `void`

---
### onLoadModel

● onLoadModel?: (model: [DataModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/datamodel-class)) => `void`

---
### onLoadQuery

● onLoadQuery?: (query: [Query](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/query-class)) => `void`

---
### onProcessEnd

● onProcessEnd?: (message: [StatusMessage](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/statusmessage-interface)) => `void`

---
### onProcessStart

● onProcessStart?: (message: [StatusMessage](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/statusmessage-interface)) => `void`

---
