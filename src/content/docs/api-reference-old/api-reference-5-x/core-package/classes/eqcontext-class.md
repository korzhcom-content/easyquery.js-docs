---
title: EqContext class
slug: api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class
sidebar:
  order: 100
---

Encapsulates all information about EasyQuery components on some webpage.
Each context includes the following main components:
 - one data model,
 - one query,
 - one result set
 - one broker
 - several UI widgets.

## Index
### [Constructors](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#constructors-1)
- [constructor](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#constructor)

### [Public Properties](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#public-properties-1)
- [clientListRequestHandler](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#clientlistrequesthandler)
- [dataModel](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#datamodel)
- [defaultModelId](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#defaultmodelid)
- [defaultQueryId](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#defaultqueryid)
- [initialQuery](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#initialquery)
- [loadModelOnStart](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#loadmodelonstart)
- [loadQueryOnStart](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#loadqueryonstart)
- [onError](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#onerror)
- [onInit](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#oninit)
- [onInitialModelLoad](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#oninitialmodelload)
- [onLoadModel](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#onloadmodel)
- [onLoadQuery](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#onloadquery)
- [onProcessEnd](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#onprocessend)
- [onProcessStart](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#onprocessstart)
- [paging](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#paging)
- [query](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#query)
- [resultContent](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#resultcontent)
- [resultSet](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#resultset)
- [resultStatement](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#resultstatement)
- [useBootstrap](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#usebootstrap)

### [Public Methods](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#public-methods-1)
- [addLocale](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#addlocale)
- [addQueryChangedCallback](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#addquerychangedcallback)
- [addWidget](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#addwidget)
- [clearQuery](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#clearquery)
- [clearResult](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#clearresult)
- [endProcess](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#endprocess)
- [getBroker](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#getbroker)
- [getListRequestHandler](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#getlistrequesthandler)
- [getModel](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#getmodel)
- [getQuery](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#getquery)
- [init](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#init)
- [loadDefaultModel](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#loaddefaultmodel)
- [refreshWidgets](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#refreshwidgets)
- [removeQueryChangedCallback](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#removequerychangedcallback)
- [resetListCache](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#resetlistcache)
- [setDefaultModelId](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#setdefaultmodelid)
- [setExternalListCache](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#setexternallistcache)
- [setModel](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#setmodel)
- [startProcess](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#startprocess)
- [throwError](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class#throwerror)


## Constructors

---
#### constructor

⊕ new EqContext(): [EqContext](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class)


---

## Public Properties

---
### clientListRequestHandler

● clientListRequestHandler: (data: `any`, callback: (list: `any`) => `void`) => `boolean`

---
### dataModel

● dataModel: [DataModel](api-reference-old/api-reference-5-x/core-package/classes/datamodel-class)

---
### defaultModelId

● defaultModelId?: `string`

---
### defaultQueryId

● defaultQueryId?: `string`

---
### initialQuery

● initialQuery?: [QueryData](api-reference-old/api-reference-5-x/core-package/interfaces/querydata-interface)

---
### loadModelOnStart

● loadModelOnStart: `boolean` = `true`

---
### loadQueryOnStart

● loadQueryOnStart: `boolean` = `false`

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
### paging

● paging: [EqPagingOptions](api-reference-old/api-reference-5-x/core-package/interfaces/eqpagingoptions-interface)

---
### query

● query: [Query](api-reference-old/api-reference-5-x/core-package/classes/query-class)

---
### resultContent

● resultContent?: `string`

---
### resultSet

● resultSet?: [EqDataTable](api-reference-old/api-reference-5-x/core-package/classes/eqdatatable-class)

---
### resultStatement

● resultStatement?: `string`

---
### useBootstrap

● useBootstrap: `boolean` = `false`

---
## Public Methods

---
### addLocale
Adds the translations of the EasyQuery messages for some locale

▸ addLocale(locale: `string`,localeTexts: `any`): `void`

#### Parameters:
- locale: `string` - the ISO code of the locale (like `en` or `uk`)
- localeTexts: `any` - The translations of EasyQuery texts and messages.
We expected an object with the struture of TextResources class here.



**Returns** `void`

---
### addQueryChangedCallback
Register a new handler for "query changed" event

▸ addQueryChangedCallback(callback: `any`): `void`

#### Parameters:
- callback: `any` - 



**Returns** `void`

---
### addWidget
Add a new widget to the context.
After that the widget will start to receive messages from other context components.

▸ addWidget(widget: [Widget](api-reference-old/api-reference-5-x/core-package/classes/widget-class)): `void`

#### Parameters:
- widget: [Widget](api-reference-old/api-reference-5-x/core-package/classes/widget-class) - 



**Returns** `void`

---
### clearQuery
Clears the content of the current query

▸ clearQuery(): `void`


**Returns** `void`

---
### clearResult
Clears all query results (the data set and the statement, if any)

▸ clearResult(): `void`


**Returns** `void`

---
### endProcess
Notifies all context components about the finishing of some long process

▸ endProcess(message: [Message](api-reference-old/api-reference-5-x/core-package/interfaces/message-interface),groups?: [WidgetGroup](api-reference-old/api-reference-5-x/core-package/enumerations/widgetgroup-enum)): `void`

#### Parameters:
- message: [Message](api-reference-old/api-reference-5-x/core-package/interfaces/message-interface)
- groups: [WidgetGroup](api-reference-old/api-reference-5-x/core-package/enumerations/widgetgroup-enum), *Optional*  - 



**Returns** `void`

---
### getBroker
Gets the current broker component

▸ getBroker(): [EqBroker](api-reference-old/api-reference-5-x/core-package/interfaces/eqbroker-interface)


**Returns** [EqBroker](api-reference-old/api-reference-5-x/core-package/interfaces/eqbroker-interface)

---
### getListRequestHandler
Gets the handler for "GetList" requests

▸ getListRequestHandler(): `any`


**Returns** `any`

---
### getModel
Gets the current data model

▸ getModel(): [DataModel](api-reference-old/api-reference-5-x/core-package/classes/datamodel-class)


**Returns** [DataModel](api-reference-old/api-reference-5-x/core-package/classes/datamodel-class)

---
### getQuery
Gets the current query

▸ getQuery(): [Query](api-reference-old/api-reference-5-x/core-package/classes/query-class)


**Returns** [Query](api-reference-old/api-reference-5-x/core-package/classes/query-class)

---
### init
Initializes the context

▸ init(options?: [EqContextOptions](api-reference-old/api-reference-5-x/core-package/interfaces/eqcontextoptions-interface)): `void`

#### Parameters:
- options: [EqContextOptions](api-reference-old/api-reference-5-x/core-package/interfaces/eqcontextoptions-interface), *Optional*  - 



**Returns** `void`

---
### loadDefaultModel
If `defaultModelId` property is define - this method calls `loadModel` function in the broker
to load the model with such ID.

▸ loadDefaultModel(): `void`


**Returns** `void`

---
### refreshWidgets
This method is called automatically when some change was made either in context's data model or query

▸ refreshWidgets(groups?: [WidgetGroup](api-reference-old/api-reference-5-x/core-package/enumerations/widgetgroup-enum)): `void`

#### Parameters:
- groups: [WidgetGroup](api-reference-old/api-reference-5-x/core-package/enumerations/widgetgroup-enum), *Default value* = ` WidgetGroup.All` - 



**Returns** `void`

---
### removeQueryChangedCallback
Removes the function from the list of registerd handlers for "query changed" event

▸ removeQueryChangedCallback(callback: `any`): `void`

#### Parameters:
- callback: `any` - 



**Returns** `void`

---
### resetListCache
Clears the current list cache.

▸ resetListCache(): `void`


**Returns** `void`

---
### setDefaultModelId
Sets the ID of the default model

▸ setDefaultModelId(modelId: `string`): `void`

#### Parameters:
- modelId: `string` - 



**Returns** `void`

---
### setExternalListCache
Sets the external "list cache" provider - an object which implements `ExpternalListCache` inteface

▸ setExternalListCache(cache: [ExternalListCache](api-reference-old/api-reference-5-x/core-package/interfaces/externallistcache-interface)): `void`

#### Parameters:
- cache: [ExternalListCache](api-reference-old/api-reference-5-x/core-package/interfaces/externallistcache-interface) - 



**Returns** `void`

---
### setModel
Sets the content of the current data model

▸ setModel(dataModel: [DataModelData](api-reference-old/api-reference-5-x/core-package/interfaces/datamodeldata-interface)): `void`

#### Parameters:
- dataModel: [DataModelData](api-reference-old/api-reference-5-x/core-package/interfaces/datamodeldata-interface)


**Returns** `void`

---
### startProcess
Notifies context components about starting of some long process (e.g. model loading)
This method raises onProcessStart event in the context and all its widgets

▸ startProcess(message: [Message](api-reference-old/api-reference-5-x/core-package/interfaces/message-interface),groups?: [WidgetGroup](api-reference-old/api-reference-5-x/core-package/enumerations/widgetgroup-enum)): `void`

#### Parameters:
- message: [Message](api-reference-old/api-reference-5-x/core-package/interfaces/message-interface)
- groups: [WidgetGroup](api-reference-old/api-reference-5-x/core-package/enumerations/widgetgroup-enum), *Optional*  - 



**Returns** `void`

---
### throwError
Throws the error passed in the function parameter.
If onError event handler is defined - we call that method.
Otherwise - just place the error message to the browser console.

▸ throwError(error: [ErrorMessage](api-reference-old/api-reference-5-x/core-package/interfaces/errormessage-interface)): `void`

#### Parameters:
- error: [ErrorMessage](api-reference-old/api-reference-5-x/core-package/interfaces/errormessage-interface) - 



**Returns** `void`

---
