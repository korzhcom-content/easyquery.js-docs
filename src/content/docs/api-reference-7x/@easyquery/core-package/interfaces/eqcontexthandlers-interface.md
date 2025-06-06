---
title: EqContextHandlers interface
slug: >-
  api-reference-7x/@easyquery/core-package/interfaces/eqcontexthandlers-interface
sidebar:
  order: 100
---

Defines interface for all context event handlers

## Index
### [Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/eqcontexthandlers-interface/#properties-1)
- [afterExportResult](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/eqcontexthandlers-interface/#afterexportresult)
- [afterFetchData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/eqcontexthandlers-interface/#afterfetchdata)
- [afterLoadModel](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/eqcontexthandlers-interface/#afterloadmodel)
- [afterLoadQuery](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/eqcontexthandlers-interface/#afterloadquery)
- [afterSyncQuery](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/eqcontexthandlers-interface/#aftersyncquery)
- [beforeExportResult](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/eqcontexthandlers-interface/#beforeexportresult)
- [beforeFetchData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/eqcontexthandlers-interface/#beforefetchdata)
- [beforeLoadModel](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/eqcontexthandlers-interface/#beforeloadmodel)
- [beforeLoadQuery](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/eqcontexthandlers-interface/#beforeloadquery)
- [beforeSyncQuery](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/eqcontexthandlers-interface/#beforesyncquery)
- [onError](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/eqcontexthandlers-interface/#onerror)
- [onInit](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/eqcontexthandlers-interface/#oninit)
- [onListRequest](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/eqcontexthandlers-interface/#onlistrequest)
- [onProcessEnd](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/eqcontexthandlers-interface/#onprocessend)
- [onProcessStart](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/eqcontexthandlers-interface/#onprocessstart)



## Properties

---
### afterExportResult

● afterExportResult?: (context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)) => `void`

---
### afterFetchData

● afterFetchData?: (context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)) => `void`

---
### afterLoadModel

● afterLoadModel?: (context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)) => `void`

---
### afterLoadQuery

● afterLoadQuery?: (context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)) => `void`

---
### afterSyncQuery

● afterSyncQuery?: (context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)) => `void`

---
### beforeExportResult

● beforeExportResult?: (context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class), options?: [ContextExportResultOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/contextexportresultoptions-interface)) => `void`

---
### beforeFetchData

● beforeFetchData?: (context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class), options?: [ContextFetchDataOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/contextfetchdataoptions-interface)) => `void`

---
### beforeLoadModel

Tuners.
Each tuner is a function which are called before sending a request to the server

● beforeLoadModel?: (context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class), options?: [ContextLoadModelOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/contextloadmodeloptions-interface)) => `void`

---
### beforeLoadQuery

● beforeLoadQuery?: (context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class), options?: [ContextLoadQueryOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/contextloadqueryoptions-interface)) => `void`

---
### beforeSyncQuery

● beforeSyncQuery?: (context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class), options?: [ContextSyncQueryOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/contextsyncqueryoptions-interface)) => `void`

---
### onError

● onError?: (context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class), status: [ActionStatus](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/actionstatus-interface)) => `void`

---
### onInit

● onInit?: (context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)) => `void`

---
### onListRequest

● onListRequest?: (data: `any`, callback: (list: `any`) => `void`) => `boolean`

---
### onProcessEnd

● onProcessEnd?: (context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class), status: [ActionStatus](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/actionstatus-interface)) => `void`

---
### onProcessStart

● onProcessStart?: (context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class), status: [ActionStatus](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/actionstatus-interface)) => `void`

---
