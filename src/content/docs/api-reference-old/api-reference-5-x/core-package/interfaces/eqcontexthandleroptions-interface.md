---
title: EqContextHandlerOptions interface
slug: >-
  api-reference-old/api-reference-5-x/core-package/interfaces/eqcontexthandleroptions-interface
sidebar:
  order: 100
---

Defines interface for all context event handlers

## Index
### [Properties](api-reference-old/api-reference-5-x/core-package/interfaces/eqcontexthandleroptions-interface#properties-1)
- [listRequestHandler](api-reference-old/api-reference-5-x/core-package/interfaces/eqcontexthandleroptions-interface#listrequesthandler)
- [onError](api-reference-old/api-reference-5-x/core-package/interfaces/eqcontexthandleroptions-interface#onerror)
- [onInit](api-reference-old/api-reference-5-x/core-package/interfaces/eqcontexthandleroptions-interface#oninit)
- [onInitialModelLoad](api-reference-old/api-reference-5-x/core-package/interfaces/eqcontexthandleroptions-interface#oninitialmodelload)
- [onLoadModel](api-reference-old/api-reference-5-x/core-package/interfaces/eqcontexthandleroptions-interface#onloadmodel)
- [onLoadQuery](api-reference-old/api-reference-5-x/core-package/interfaces/eqcontexthandleroptions-interface#onloadquery)
- [onProcessEnd](api-reference-old/api-reference-5-x/core-package/interfaces/eqcontexthandleroptions-interface#onprocessend)
- [onProcessStart](api-reference-old/api-reference-5-x/core-package/interfaces/eqcontexthandleroptions-interface#onprocessstart)



## Properties

---
### listRequestHandler

● listRequestHandler?: `any`

---
### onError

● onError?: (message: [ErrorMessage](api-reference-old/api-reference-5-x/core-package/interfaces/errormessage-interface)) => `void`

---
### onInit

● onInit?: () => `void`

---
### onInitialModelLoad

● onInitialModelLoad?: (model: [DataModel](api-reference-old/api-reference-5-x/core-package/classes/datamodel-class)) => `void`

---
### onLoadModel

● onLoadModel?: (model: [DataModel](api-reference-old/api-reference-5-x/core-package/classes/datamodel-class)) => `void`

---
### onLoadQuery

● onLoadQuery?: (query: [Query](api-reference-old/api-reference-5-x/core-package/classes/query-class)) => `void`

---
### onProcessEnd

● onProcessEnd?: (message: [Message](api-reference-old/api-reference-5-x/core-package/interfaces/message-interface)) => `void`

---
### onProcessStart

● onProcessStart?: (message: [Message](api-reference-old/api-reference-5-x/core-package/interfaces/message-interface)) => `void`

---
