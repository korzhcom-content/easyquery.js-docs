---
title: EqContextHandlerOptions interface
slug: >-
  api-reference-old/api-reference-5-x/core-package/interfaces/eqcontexthandleroptions-interface
sidebar:
  order: 100
---

Defines interface for all context event handlers

## Index
### [Properties](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqcontexthandleroptions-interface/#properties-1)
- [listRequestHandler](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqcontexthandleroptions-interface/#listrequesthandler)
- [onError](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqcontexthandleroptions-interface/#onerror)
- [onInit](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqcontexthandleroptions-interface/#oninit)
- [onInitialModelLoad](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqcontexthandleroptions-interface/#oninitialmodelload)
- [onLoadModel](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqcontexthandleroptions-interface/#onloadmodel)
- [onLoadQuery](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqcontexthandleroptions-interface/#onloadquery)
- [onProcessEnd](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqcontexthandleroptions-interface/#onprocessend)
- [onProcessStart](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqcontexthandleroptions-interface/#onprocessstart)



## Properties

---
### listRequestHandler

● listRequestHandler?: `any`

---
### onError

● onError?: (message: [ErrorMessage](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/errormessage-interface)) => `void`

---
### onInit

● onInit?: () => `void`

---
### onInitialModelLoad

● onInitialModelLoad?: (model: [DataModel](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class)) => `void`

---
### onLoadModel

● onLoadModel?: (model: [DataModel](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class)) => `void`

---
### onLoadQuery

● onLoadQuery?: (query: [Query](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class)) => `void`

---
### onProcessEnd

● onProcessEnd?: (message: [Message](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/message-interface)) => `void`

---
### onProcessStart

● onProcessStart?: (message: [Message](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/message-interface)) => `void`

---
