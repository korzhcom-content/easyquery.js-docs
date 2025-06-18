---
title: EqBrokerOptions interface
slug: >-
  api-reference-old/api-reference-6x/core-package/interfaces/eqbrokeroptions-interface
sidebar:
  order: 100
---

Obsolete!!!!!. Left for backward compatibilty only

## Index
### [Properties](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/eqbrokeroptions-interface/#properties-1)
- [endpoint](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/eqbrokeroptions-interface/#endpoint)
- [onExecuteQuery](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/eqbrokeroptions-interface/#onexecutequery)
- [onExportResult](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/eqbrokeroptions-interface/#onexportresult)
- [onLoadModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/eqbrokeroptions-interface/#onloadmodel)
- [onLoadQuery](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/eqbrokeroptions-interface/#onloadquery)
- [onRequest](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/eqbrokeroptions-interface/#onrequest)
- [onSyncQuery](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/eqbrokeroptions-interface/#onsyncquery)
- [serviceUrl](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/eqbrokeroptions-interface/#serviceurl)



## Properties

---
### endpoint

The endpoint.

● endpoint?: `string`

---
### onExecuteQuery

● onExecuteQuery?: (options: `any`) => `any`

---
### onExportResult

● onExportResult?: (options: `any`) => `any`

---
### onLoadModel

Tuners.
Each tuner is a function which are called before sending a request to the server

● onLoadModel?: (options: `any`) => `any`

---
### onLoadQuery

● onLoadQuery?: (options: `any`) => `any`

---
### onRequest

Calls to setup request before sending to the server

● onRequest?: (xhr: `XMLHttpRequest`) => `void`

---
### onSyncQuery

● onSyncQuery?: (options: `any`) => `any`

---
### serviceUrl

● serviceUrl?: `string`

---
