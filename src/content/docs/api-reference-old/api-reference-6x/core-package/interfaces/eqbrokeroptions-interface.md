---
title: EqBrokerOptions interface
slug: >-
  api-reference-old/api-reference-6x/core-package/interfaces/eqbrokeroptions-interface
sidebar:
  order: 100
---

Obsolete!!!!!. Left for backward compatibilty only

## Index
### [Properties](api-reference-old/api-reference-6x/core-package/interfaces/eqbrokeroptions-interface#properties-1)
- [endpoint](api-reference-old/api-reference-6x/core-package/interfaces/eqbrokeroptions-interface#endpoint)
- [onExecuteQuery](api-reference-old/api-reference-6x/core-package/interfaces/eqbrokeroptions-interface#onexecutequery)
- [onExportResult](api-reference-old/api-reference-6x/core-package/interfaces/eqbrokeroptions-interface#onexportresult)
- [onLoadModel](api-reference-old/api-reference-6x/core-package/interfaces/eqbrokeroptions-interface#onloadmodel)
- [onLoadQuery](api-reference-old/api-reference-6x/core-package/interfaces/eqbrokeroptions-interface#onloadquery)
- [onRequest](api-reference-old/api-reference-6x/core-package/interfaces/eqbrokeroptions-interface#onrequest)
- [onSyncQuery](api-reference-old/api-reference-6x/core-package/interfaces/eqbrokeroptions-interface#onsyncquery)
- [serviceUrl](api-reference-old/api-reference-6x/core-package/interfaces/eqbrokeroptions-interface#serviceurl)



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
