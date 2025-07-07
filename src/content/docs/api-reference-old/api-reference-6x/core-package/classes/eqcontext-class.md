---
title: EqContext class
slug: api-reference-old/api-reference-6x/core-package/classes/eqcontext-class
sidebar:
  order: 100
---

Encapsulates all information about EasyQuery components on some webpage
and provides some basic operation over those components
Each context includes the following main components:
 - one data model,
 - one query,
 - one result set
 - several UI widgets.

## Index
### [Constructors](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#constructors-1)
- [constructor](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#constructor)

### [Public Properties](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#public-properties-1)
- [clientListRequestHandler](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#clientlistrequesthandler)
- [defaultModelId](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#defaultmodelid)
- [defaultQueryId](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#defaultqueryid)
- [initialQuery](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#initialquery)
- [loadModelOnStart](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#loadmodelonstart)
- [loadQueryOnStart](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#loadqueryonstart)
- [resultContent](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#resultcontent)
- [resultSet](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#resultset)
- [resultStatement](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#resultstatement)
- [useBootstrap](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#usebootstrap)

### [Protected Properties](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#protected-properties-1)
- [antiForgeryToken](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#antiforgerytoken)

### [Public Methods](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#public-methods-1)
- [addDefaultExporters](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#adddefaultexporters)
- [addEventListener](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#addeventlistener)
- [addLocale](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#addlocale)
- [addQueryChangedCallback](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#addquerychangedcallback)
- [addWidget](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#addwidget)
- [callWhenModelLoaded](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#callwhenmodelloaded)
- [clearQuery](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#clearquery)
- [clearResult](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#clearresult)
- [endProcess](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#endprocess)
- [executeQuery](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#executequery)
- [exportResult](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#exportresult)
- [fireEvent](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#fireevent)
- [getBaseEndpoint](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#getbaseendpoint)
- [getBroker](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#getbroker)
- [getExporter](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#getexporter)
- [getListRequestHandler](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#getlistrequesthandler)
- [getModel](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#getmodel)
- [getQuery](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#getquery)
- [getServices](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#getservices)
- [init](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#init)
- [loadDefaultModel](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#loaddefaultmodel)
- [loadModel](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#loadmodel)
- [loadModelFromData](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#loadmodelfromdata)
- [loadQuery](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#loadquery)
- [loadQueryList](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#loadquerylist)
- [loadValueList](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#loadvaluelist)
- [newQuery](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#newquery)
- [refreshWidgets](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#refreshwidgets)
- [registerExporter](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#registerexporter)
- [removeEventListener](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#removeeventlistener)
- [removeQuery](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#removequery)
- [removeQueryChangedCallback](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#removequerychangedcallback)
- [resetListCache](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#resetlistcache)
- [resolveEndpoint](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#resolveendpoint)
- [saveQuery](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#savequery)
- [setDefaultModelId](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#setdefaultmodelid)
- [setEndpoint](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#setendpoint)
- [setEnpointIfNotExist](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#setenpointifnotexist)
- [setExternalListCache](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#setexternallistcache)
- [startProcess](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#startprocess)
- [syncQuery](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#syncquery)
- [throwError](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class#throwerror)


## Constructors

---
#### constructor

⊕ new EqContext(): [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)


---

## Public Properties

---
### clientListRequestHandler

● clientListRequestHandler: (data: `any`, callback: (list: `any`) => `void`) => `boolean`

---
### defaultModelId

● defaultModelId?: `string`

---
### defaultQueryId

● defaultQueryId?: `string`

---
### initialQuery

● initialQuery?: [QueryData](api-reference-old/api-reference-6x/core-package/interfaces/querydata-interface)

---
### loadModelOnStart

● loadModelOnStart: `boolean` = `true`

---
### loadQueryOnStart

● loadQueryOnStart: `boolean` = `false`

---
### resultContent

● resultContent?: `string`

---
### resultSet

● resultSet?: [EqDataTable](api-reference-old/api-reference-6x/core-package/classes/eqdatatable-class)

---
### resultStatement

● resultStatement?: `string`

---
### useBootstrap

● useBootstrap: `boolean` = `false`

---
## Protected Properties

---
### antiForgeryToken

● antiForgeryToken: `string`

---
## Public Methods

---
### addDefaultExporters
▸ addDefaultExporters(): `void`


**Returns** `void`


---
### addEventListener
Adds event listener for event type.

▸ addEventListener(eventType: `"ready"`,handler: () => `void`): `string`

#### Parameters:
- eventType: `"ready"` - The event type
- handler: () => `void` - The handler for event



**Returns** `string`

▸ addEventListener(eventType: `"loadModel"` | `"initialModelLoad"`,handler: (model: [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class)) => `void`): `string`

#### Parameters:
- eventType: `"loadModel"` | `"initialModelLoad"`
- handler: (model: [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class)) => `void`


**Returns** `string`

▸ addEventListener(eventType: `"loadQuery"`,handler: (query: [Query](api-reference-old/api-reference-6x/core-package/classes/query-class)) => `void`): `string`

#### Parameters:
- eventType: `"loadQuery"`
- handler: (query: [Query](api-reference-old/api-reference-6x/core-package/classes/query-class)) => `void`


**Returns** `string`

▸ addEventListener(eventType: `"processStart"` | `"processEnd"`,handler: (message: [StatusMessage](api-reference-old/api-reference-6x/core-package/interfaces/statusmessage-interface)) => `void`): `string`

#### Parameters:
- eventType: `"processStart"` | `"processEnd"`
- handler: (message: [StatusMessage](api-reference-old/api-reference-6x/core-package/interfaces/statusmessage-interface)) => `void`


**Returns** `string`

▸ addEventListener(eventType: `"error"`,handler: (error: [StatusMessage](api-reference-old/api-reference-6x/core-package/interfaces/statusmessage-interface)) => `void`): `string`

#### Parameters:
- eventType: `"error"`
- handler: (error: [StatusMessage](api-reference-old/api-reference-6x/core-package/interfaces/statusmessage-interface)) => `void`


**Returns** `string`


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
Register a new handler for 'query changed' event

▸ addQueryChangedCallback(callback: `any`): `void`

#### Parameters:
- callback: `any` - 



**Returns** `void`


---
### addWidget
Add a new widget to the context.
After that the widget will start to receive messages from other context components.

▸ addWidget(widget: [Widget](api-reference-old/api-reference-6x/core-package/classes/widget-class)): `void`

#### Parameters:
- widget: [Widget](api-reference-old/api-reference-6x/core-package/classes/widget-class) - 



**Returns** `void`


---
### callWhenModelLoaded
▸ callWhenModelLoaded(callFunc: `any`): `void`

#### Parameters:
- callFunc: `any`


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

▸ endProcess(message: [StatusMessage](api-reference-old/api-reference-6x/core-package/interfaces/statusmessage-interface),groups?: [WidgetGroup](api-reference-old/api-reference-6x/core-package/enumerations/widgetgroup-enum)): `void`

#### Parameters:
- message: [StatusMessage](api-reference-old/api-reference-6x/core-package/interfaces/statusmessage-interface)
- groups: [WidgetGroup](api-reference-old/api-reference-6x/core-package/enumerations/widgetgroup-enum), *Optional*  - 



**Returns** `void`


---
### executeQuery
Executes the current query and processes the result.

▸ executeQuery(options?: `any`): `void`

#### Parameters:
- options: `any`, *Optional*  - 
The content of the `options` parameter depends on `QueryExecutor` implementation.
Usually it contains `page` property which defines the page of the executed result (e.g. 2),
`success` and `error` callbacks


**Returns** `void`

#### Example: 
```typescript

context.executeQuery({
     page: 2
})


```

---
### exportResult
Executes the current query and exports the result to the specified format.

▸ exportResult(options?: `any`): `void`

#### Parameters:
- options: `any`, *Optional*  - 
The content of the `options` parameter depends on `EqExporter` implementation.
Usually it contains `format` property which defines the format of the exported data (e.g. `csv`),
`success` and `error` callbacks


**Returns** `void`

#### Example: 
```typescript

context.exportResult({
     format: csv
});


```

---
### fireEvent
Fires event.

▸ fireEvent(eventType: `"ready"`): `any`

#### Parameters:
- eventType: `"ready"` - The event type.



**Returns** `any`

▸ fireEvent(eventType: `"loadModel"` | `"initialModelLoad"`,data: [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class)): `any`

#### Parameters:
- eventType: `"loadModel"` | `"initialModelLoad"`
- data: [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class)


**Returns** `any`

▸ fireEvent(eventType: `"loadQuery"`,data: [Query](api-reference-old/api-reference-6x/core-package/classes/query-class)): `any`

#### Parameters:
- eventType: `"loadQuery"`
- data: [Query](api-reference-old/api-reference-6x/core-package/classes/query-class)


**Returns** `any`

▸ fireEvent(eventType: `"processStart"` | `"processEnd"`,data: [StatusMessage](api-reference-old/api-reference-6x/core-package/interfaces/statusmessage-interface)): `any`

#### Parameters:
- eventType: `"processStart"` | `"processEnd"`
- data: [StatusMessage](api-reference-old/api-reference-6x/core-package/interfaces/statusmessage-interface)


**Returns** `any`

▸ fireEvent(eventType: `"error"`,data: `Error`): `any`

#### Parameters:
- eventType: `"error"`
- data: `Error`


**Returns** `any`


---
### getBaseEndpoint
▸ getBaseEndpoint(): `string`


**Returns** `string`


---
### getBroker
Gets the current broker component. REMOVE!!!!!

▸ getBroker(): `this`


**Returns** `this`


---
### getExporter
▸ getExporter(format: `string`): [EqExporter](api-reference-old/api-reference-6x/core-package/interfaces/eqexporter-interface) | `null`

#### Parameters:
- format: `string`


**Returns** [EqExporter](api-reference-old/api-reference-6x/core-package/interfaces/eqexporter-interface) | `null`


---
### getListRequestHandler
Gets the handler for 'GetList' requests

▸ getListRequestHandler(): `any`


**Returns** `any`


---
### getModel
Gets the current data model

▸ getModel(): [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class)


**Returns** [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class)


---
### getQuery
Gets the current query

▸ getQuery(): [Query](api-reference-old/api-reference-6x/core-package/classes/query-class)


**Returns** [Query](api-reference-old/api-reference-6x/core-package/classes/query-class)


---
### getServices
▸ getServices(): [EqServiceProvider](api-reference-old/api-reference-6x/core-package/classes/eqserviceprovider-class)


**Returns** [EqServiceProvider](api-reference-old/api-reference-6x/core-package/classes/eqserviceprovider-class)


---
### init
Initializes the context

▸ init(options?: [EqContextOptions](api-reference-old/api-reference-6x/core-package/interfaces/eqcontextoptions-interface)): `void`

#### Parameters:
- options: [EqContextOptions](api-reference-old/api-reference-6x/core-package/interfaces/eqcontextoptions-interface), *Optional*  - 



**Returns** `void`


---
### loadDefaultModel
If `defaultModelId` property is define - this method calls `loadModel` function in the broker
to load the model with such ID.

▸ loadDefaultModel(): `void`


**Returns** `void`


---
### loadModel
Starts the process of the model loading.
This method can initiate a request to EasyQueryServer backend or get the model from OData or GraphQL endpoint
The content of the `options` parameter depends on concrete loader implementation.

▸ loadModel(options?: `any`): `Promise`&lt;[DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class)&gt;

#### Parameters:
- options: `any`, *Optional*  - A map of options to pass to `loadModel` function (can be ommited)


**Returns** `Promise`&lt;[DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class)&gt;

#### Example: 
```typescript

context.loadModel()
   .then(model => {
      alert("Model loaded!");
   });

```

---
### loadModelFromData
Sets the content of the current data model

▸ loadModelFromData(modelPlainData: [ModelPlainData](api-reference-old/api-reference-6x/core-package/interfaces/modelplaindata-interface)): `void`

#### Parameters:
- modelPlainData: [ModelPlainData](api-reference-old/api-reference-6x/core-package/interfaces/modelplaindata-interface)


**Returns** `void`


---
### loadQuery
Loads the query

▸ loadQuery(options?: `any`): `void`

#### Parameters:
- options: `any`, *Optional*  - 
The content of the `options` parameter depends on `QueryStorage` implementation.
Usually it contains `success`, `error` callbacks and `id` option of query to load.


**Returns** `void`

#### Example: 
```typescript

context.loadQuery({
     id: "query-id"
});

```

---
### loadQueryList
Loads the list of queries available for the current user.

▸ loadQueryList(options?: `any`): `void`

#### Parameters:
- options: `any`, *Optional*  - 
The content of the `options` parameter depends on `QueryStorage` implementation.
Usually it contains `success`, `error` callbacks



**Returns** `void`


---
### loadValueList
Sends a `loadValueList` requesthe server and processes the response.

▸ loadValueList(options?: `any`): `void`

#### Parameters:
- options: `any`, *Optional*  - A map of options to pass to `loadValueList` function.



**Returns** `void`


---
### newQuery
Creates a new query and returns its content back to the client-side.

▸ newQuery(options?: `any`): `void`

#### Parameters:
- options: `any`, *Optional*  - 
The content of the `options` parameter depends on `QueryStorage` implementation.
Usually it contains `success`, `error` callbacks and `silent` option


**Returns** `void`

#### Example: 
```typescript

context.newQuery({
   silent: true
});

```

---
### refreshWidgets
This method is called automatically when some change was made either in context's data model or query

▸ refreshWidgets(groups?: [WidgetGroup](api-reference-old/api-reference-6x/core-package/enumerations/widgetgroup-enum)): `void`

#### Parameters:
- groups: [WidgetGroup](api-reference-old/api-reference-6x/core-package/enumerations/widgetgroup-enum), *Default value* = ` WidgetGroup.All` - 



**Returns** `void`


---
### registerExporter
▸ registerExporter(format: `string`,resolver: `EqExporterResolver`): `void`

#### Parameters:
- format: `string`
- resolver: `EqExporterResolver`


**Returns** `void`


---
### removeEventListener
Remove event handler for event type .

▸ removeEventListener(eventType: `string`,handlerId: `string`): `void`

#### Parameters:
- eventType: `string` - The event type.
- handlerId: `string` - The handler id.



**Returns** `void`


---
### removeQuery
Removes the current query from some storage on the server-side.

▸ removeQuery(options?: `any`): `void`

#### Parameters:
- options: `any`, *Optional*  - 
The content of the `options` parameter depends on `QueryStorage` implementation.
Usually it contains `success` and `error` callbacks



**Returns** `void`


---
### removeQueryChangedCallback
Removes the function from the list of registerd handlers for 'query changed' event

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
### resolveEndpoint
▸ resolveEndpoint(endpointKey: `EqEndpointKey`,options?: `any`): `string`

#### Parameters:
- endpointKey: `EqEndpointKey`
- options: `any`, *Optional* 


**Returns** `string`


---
### saveQuery
Saves the current query to some storage on the server-side.

▸ saveQuery(options?: `any`): `void`

#### Parameters:
- options: `any`, *Optional*  - 
The content of the `options` parameter depends on `QueryStorage` implementation.
Usually it contains `success` and `error` callbacks



**Returns** `void`


---
### setDefaultModelId
Sets the ID of the default model

▸ setDefaultModelId(modelId: `string`): `void`

#### Parameters:
- modelId: `string` - 



**Returns** `void`


---
### setEndpoint
▸ setEndpoint(key: `EqEndpointKey`,value: `string`): `void`

#### Parameters:
- key: `EqEndpointKey`
- value: `string`


**Returns** `void`


---
### setEnpointIfNotExist
▸ setEnpointIfNotExist(key: `EqEndpointKey`,value: `string`): `void`

#### Parameters:
- key: `EqEndpointKey`
- value: `string`


**Returns** `void`


---
### setExternalListCache
Sets the external 'list cache' provider - an object which implements `ExternalListCache` inteface

▸ setExternalListCache(cache: [ExternalListCache](api-reference-old/api-reference-6x/core-package/interfaces/externallistcache-interface)): `void`

#### Parameters:
- cache: [ExternalListCache](api-reference-old/api-reference-6x/core-package/interfaces/externallistcache-interface) - 



**Returns** `void`


---
### startProcess
Notifies context components about starting of some long process (e.g. model loading)
This method raises onProcessStart event in the context and all its widgets

▸ startProcess(message: [StatusMessage](api-reference-old/api-reference-6x/core-package/interfaces/statusmessage-interface),groups?: [WidgetGroup](api-reference-old/api-reference-6x/core-package/enumerations/widgetgroup-enum)): `void`

#### Parameters:
- message: [StatusMessage](api-reference-old/api-reference-6x/core-package/interfaces/statusmessage-interface)
- groups: [WidgetGroup](api-reference-old/api-reference-6x/core-package/enumerations/widgetgroup-enum), *Optional*  - 



**Returns** `void`


---
### syncQuery
Syncronizes the current query.

▸ syncQuery(options?: `any`): `void`

#### Parameters:
- options: `any`, *Optional*  - 
The content of the `options` parameter depends on `QuerySyncronizer` implementation.
Usually it contains `success` and `error` callbacks



**Returns** `void`


---
### throwError
Throws the error passed in the function parameter.
If onError event handler is defined - we call that method.
Otherwise - just place the error message to the browser console.

▸ throwError(msg: [StatusMessage](api-reference-old/api-reference-6x/core-package/interfaces/statusmessage-interface)): `void`

#### Parameters:
- msg: [StatusMessage](api-reference-old/api-reference-6x/core-package/interfaces/statusmessage-interface)


**Returns** `void`


---
