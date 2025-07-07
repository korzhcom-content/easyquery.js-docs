---
title: EqContextHandlers interface
slug: >-
  api-reference-old/api-reference-6x/core-package/interfaces/eqcontexthandlers-interface
sidebar:
  order: 100
---

Defines interface for all context event handlers

## Index
### [Properties](api-reference-old/api-reference-6x/core-package/interfaces/eqcontexthandlers-interface#properties-1)
- [beforeExecuteQuery](api-reference-old/api-reference-6x/core-package/interfaces/eqcontexthandlers-interface#beforeexecutequery)
- [beforeExportResult](api-reference-old/api-reference-6x/core-package/interfaces/eqcontexthandlers-interface#beforeexportresult)
- [beforeLoadModel](api-reference-old/api-reference-6x/core-package/interfaces/eqcontexthandlers-interface#beforeloadmodel)
- [beforeLoadQuery](api-reference-old/api-reference-6x/core-package/interfaces/eqcontexthandlers-interface#beforeloadquery)
- [beforeSyncQuery](api-reference-old/api-reference-6x/core-package/interfaces/eqcontexthandlers-interface#beforesyncquery)
- [listRequestHandler](api-reference-old/api-reference-6x/core-package/interfaces/eqcontexthandlers-interface#listrequesthandler)
- [onError](api-reference-old/api-reference-6x/core-package/interfaces/eqcontexthandlers-interface#onerror)
- [onInit](api-reference-old/api-reference-6x/core-package/interfaces/eqcontexthandlers-interface#oninit)
- [onInitialModelLoad](api-reference-old/api-reference-6x/core-package/interfaces/eqcontexthandlers-interface#oninitialmodelload)
- [onLoadModel](api-reference-old/api-reference-6x/core-package/interfaces/eqcontexthandlers-interface#onloadmodel)
- [onLoadQuery](api-reference-old/api-reference-6x/core-package/interfaces/eqcontexthandlers-interface#onloadquery)
- [onProcessEnd](api-reference-old/api-reference-6x/core-package/interfaces/eqcontexthandlers-interface#onprocessend)
- [onProcessStart](api-reference-old/api-reference-6x/core-package/interfaces/eqcontexthandlers-interface#onprocessstart)



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

● onError?: (message: [StatusMessage](api-reference-old/api-reference-6x/core-package/interfaces/statusmessage-interface)) => `void`

---
### onInit

● onInit?: () => `void`

---
### onInitialModelLoad

● onInitialModelLoad?: (model: [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class)) => `void`

---
### onLoadModel

● onLoadModel?: (model: [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class)) => `void`

---
### onLoadQuery

● onLoadQuery?: (query: [Query](api-reference-old/api-reference-6x/core-package/classes/query-class)) => `void`

---
### onProcessEnd

● onProcessEnd?: (message: [StatusMessage](api-reference-old/api-reference-6x/core-package/interfaces/statusmessage-interface)) => `void`

---
### onProcessStart

● onProcessStart?: (message: [StatusMessage](api-reference-old/api-reference-6x/core-package/interfaces/statusmessage-interface)) => `void`

---
