---
title: EqContextHandlers interface
slug: >-
  api-reference-7x/easyquery-packages/core-package/interfaces/eqcontexthandlers-interface
sidebar:
  order: 100
---

Defines interface for all context event handlers

## Index
### [Properties](api-reference-7x/easyquery-packages/core-package/interfaces/eqcontexthandlers-interface#properties-1)
- [afterExportResult](api-reference-7x/easyquery-packages/core-package/interfaces/eqcontexthandlers-interface#afterexportresult)
- [afterFetchData](api-reference-7x/easyquery-packages/core-package/interfaces/eqcontexthandlers-interface#afterfetchdata)
- [afterLoadModel](api-reference-7x/easyquery-packages/core-package/interfaces/eqcontexthandlers-interface#afterloadmodel)
- [afterLoadQuery](api-reference-7x/easyquery-packages/core-package/interfaces/eqcontexthandlers-interface#afterloadquery)
- [afterSyncQuery](api-reference-7x/easyquery-packages/core-package/interfaces/eqcontexthandlers-interface#aftersyncquery)
- [beforeExportResult](api-reference-7x/easyquery-packages/core-package/interfaces/eqcontexthandlers-interface#beforeexportresult)
- [beforeFetchData](api-reference-7x/easyquery-packages/core-package/interfaces/eqcontexthandlers-interface#beforefetchdata)
- [beforeLoadModel](api-reference-7x/easyquery-packages/core-package/interfaces/eqcontexthandlers-interface#beforeloadmodel)
- [beforeLoadQuery](api-reference-7x/easyquery-packages/core-package/interfaces/eqcontexthandlers-interface#beforeloadquery)
- [beforeSyncQuery](api-reference-7x/easyquery-packages/core-package/interfaces/eqcontexthandlers-interface#beforesyncquery)
- [onError](api-reference-7x/easyquery-packages/core-package/interfaces/eqcontexthandlers-interface#onerror)
- [onInit](api-reference-7x/easyquery-packages/core-package/interfaces/eqcontexthandlers-interface#oninit)
- [onListRequest](api-reference-7x/easyquery-packages/core-package/interfaces/eqcontexthandlers-interface#onlistrequest)
- [onProcessEnd](api-reference-7x/easyquery-packages/core-package/interfaces/eqcontexthandlers-interface#onprocessend)
- [onProcessStart](api-reference-7x/easyquery-packages/core-package/interfaces/eqcontexthandlers-interface#onprocessstart)



## Properties

---
### afterExportResult

● afterExportResult?: (context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)) => `void`

---
### afterFetchData

● afterFetchData?: (context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)) => `void`

---
### afterLoadModel

● afterLoadModel?: (context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)) => `void`

---
### afterLoadQuery

● afterLoadQuery?: (context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)) => `void`

---
### afterSyncQuery

● afterSyncQuery?: (context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)) => `void`

---
### beforeExportResult

● beforeExportResult?: (context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class), options?: [ContextExportResultOptions](api-reference-7x/easyquery-packages/core-package/interfaces/contextexportresultoptions-interface)) => `void`

---
### beforeFetchData

● beforeFetchData?: (context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class), options?: [ContextFetchDataOptions](api-reference-7x/easyquery-packages/core-package/interfaces/contextfetchdataoptions-interface)) => `void`

---
### beforeLoadModel

Tuners.
Each tuner is a function which are called before sending a request to the server

● beforeLoadModel?: (context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class), options?: [ContextLoadModelOptions](api-reference-7x/easyquery-packages/core-package/interfaces/contextloadmodeloptions-interface)) => `void`

---
### beforeLoadQuery

● beforeLoadQuery?: (context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class), options?: [ContextLoadQueryOptions](api-reference-7x/easyquery-packages/core-package/interfaces/contextloadqueryoptions-interface)) => `void`

---
### beforeSyncQuery

● beforeSyncQuery?: (context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class), options?: [ContextSyncQueryOptions](api-reference-7x/easyquery-packages/core-package/interfaces/contextsyncqueryoptions-interface)) => `void`

---
### onError

● onError?: (context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class), status: [ActionStatus](api-reference-7x/easyquery-packages/core-package/interfaces/actionstatus-interface)) => `void`

---
### onInit

● onInit?: (context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)) => `void`

---
### onListRequest

● onListRequest?: (data: `any`, callback: (list: `any`) => `void`) => `boolean`

---
### onProcessEnd

● onProcessEnd?: (context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class), status: [ActionStatus](api-reference-7x/easyquery-packages/core-package/interfaces/actionstatus-interface)) => `void`

---
### onProcessStart

● onProcessStart?: (context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class), status: [ActionStatus](api-reference-7x/easyquery-packages/core-package/interfaces/actionstatus-interface)) => `void`

---
