---
title: EqContext class
slug: api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class
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
### [Constructors](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#constructor)

### [Public Properties](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#public-properties-1)
- [calcTotals](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#calctotals)
- [clientListRequestHandler](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#clientlistrequesthandler)
- [dataLoader](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#dataloader)
- [defaultModelId](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#defaultmodelid)
- [defaultQueryId](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#defaultqueryid)
- [initialQuery](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#initialquery)
- [loadModelOnStart](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#loadmodelonstart)
- [loadQueryOnStart](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#loadqueryonstart)
- [resultContent](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#resultcontent)
- [resultStatement](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#resultstatement)
- [resultTable](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#resulttable)
- [useBootstrap](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#usebootstrap)

### [Public Methods](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#public-methods-1)
- [addDefaultExporters](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#adddefaultexporters)
- [addEventListener](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#addeventlistener)
- [addLocale](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#addlocale)
- [addQueryChangedCallback](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#addquerychangedcallback)
- [addWidget](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#addwidget)
- [callWhenModelLoaded](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#callwhenmodelloaded)
- [clearQuery](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#clearquery)
- [clearResult](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#clearresult)
- [createQuery](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#createquery)
- [endProcess](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#endprocess)
- [exportResult](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#exportresult)
- [fetchData](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#fetchdata)
- [fetchDataChunk](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#fetchdatachunk)
- [fetchDrillDownData](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#fetchdrilldowndata)
- [fireEvent](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#fireevent)
- [getAllWidgetsByType](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#getallwidgetsbytype)
- [getBaseEndpoint](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#getbaseendpoint)
- [getDefaultTotalsSettings](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#getdefaulttotalssettings)
- [getExportFormats](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#getexportformats)
- [getExporter](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#getexporter)
- [getListRequestHandler](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#getlistrequesthandler)
- [getModel](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#getmodel)
- [getQuery](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#getquery)
- [getQueryFile](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#getqueryfile)
- [getServices](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#getservices)
- [getTotalsSettings](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#gettotalssettings)
- [getWidgetByType](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#getwidgetbytype)
- [init](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#init)
- [loadDefaultModel](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#loaddefaultmodel)
- [loadModel](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#loadmodel)
- [loadModelFromData](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#loadmodelfromdata)
- [loadQuery](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#loadquery)
- [loadQueryList](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#loadquerylist)
- [loadValueList](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#loadvaluelist)
- [newQuery](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#newquery)
- [refreshWidgets](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#refreshwidgets)
- [registerExporter](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#registerexporter)
- [registerServerExporter](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#registerserverexporter)
- [removeEventListener](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#removeeventlistener)
- [removeQuery](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#removequery)
- [removeQueryChangedCallback](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#removequerychangedcallback)
- [resetListCache](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#resetlistcache)
- [resolveEndpoint](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#resolveendpoint)
- [saveQuery](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#savequery)
- [setDefaultModelId](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#setdefaultmodelid)
- [setEndpoint](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#setendpoint)
- [setEnpointIfNotExist](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#setenpointifnotexist)
- [setExternalListCache](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#setexternallistcache)
- [setTotalsSettings](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#settotalssettings)
- [startProcess](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#startprocess)
- [syncQuery](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#syncquery)
- [throwError](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#throwerror)
- [uploadQueryFile](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#uploadqueryfile)
- [useEndpoint](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#useendpoint)
- [wereTotalsColumnsChanged](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#weretotalscolumnschanged)

### [Protected Methods](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#protected-methods-1)
- [startQueryListLoading](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class#startquerylistloading)


## Constructors

---
#### constructor

⊕ new EqContext(): [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)


---

## Public Properties

---
### calcTotals

● calcTotals: `boolean` = `false`

---
### clientListRequestHandler

● clientListRequestHandler: (data: `any`, callback: (list: `any`) => `void`) => `boolean`

---
### dataLoader

● dataLoader: [EasyQueryDataLoader](api-reference-7x/easyquery-packages/core-package/classes/easyquerydataloader-class)

---
### defaultModelId

● defaultModelId?: `string`

---
### defaultQueryId

● defaultQueryId?: `string`

---
### initialQuery

● initialQuery?: [QueryData](api-reference-7x/easyquery-packages/core-package/interfaces/querydata-interface)

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
### resultStatement

● resultStatement?: `string`

---
### resultTable

● resultTable: `EasyDataTable`

---
### useBootstrap

● useBootstrap: `boolean` = `false`

---
## Public Methods

---
### addDefaultExporters
▸ addDefaultExporters(): `void`


**Returns** `void`


---
### addEventListener
Adds event listener for event type.

▸ addEventListener(eventType: `"ready"` | `"loadModel"` | `"initialModelLoad"` | `"loadQuery"` | `"syncQuery"` | `"fetchData"` | `"exportResult"`,handler: (context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)) => `void`): `string`

#### Parameters:
- eventType: `"ready"` | `"loadModel"` | `"initialModelLoad"` | `"loadQuery"` | `"syncQuery"` | `"fetchData"` | `"exportResult"` - The event type
- handler: (context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)) => `void` - The handler for event



**Returns** `string`

▸ addEventListener(eventType: `"processStart"` | `"processEnd"`,handler: (context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class), status: [ActionStatus](api-reference-7x/easyquery-packages/core-package/interfaces/actionstatus-interface)) => `void`): `string`

#### Parameters:
- eventType: `"processStart"` | `"processEnd"`
- handler: (context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class), status: [ActionStatus](api-reference-7x/easyquery-packages/core-package/interfaces/actionstatus-interface)) => `void`


**Returns** `string`

▸ addEventListener(eventType: `"error"`,handler: (context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class), status: [ActionStatus](api-reference-7x/easyquery-packages/core-package/interfaces/actionstatus-interface)) => `void`): `string`

#### Parameters:
- eventType: `"error"`
- handler: (context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class), status: [ActionStatus](api-reference-7x/easyquery-packages/core-package/interfaces/actionstatus-interface)) => `void`


**Returns** `string`


---
### addLocale
Adds the translations of the EasyQuery messages for some locale

▸ addLocale(locale: `string`,localeInfo: `LocaleInfo`): `void`

#### Parameters:
- locale: `string` - the ISO code of the locale (like `en` or `uk`)
- localeInfo: `LocaleInfo` - Locale settings and translations of EasyQuery texts and messages.
We expected an object with the struture of LocaleInfo interface here.



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

▸ addWidget(widget: [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class)): `void`

#### Parameters:
- widget: [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class) - 



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
### createQuery
Creates a new query object using the current instance of EqServices

▸ createQuery(): [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)


**Returns** [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)


---
### endProcess
Notifies all context components about the finishing of some long process

▸ endProcess(action: [ActionStatus](api-reference-7x/easyquery-packages/core-package/interfaces/actionstatus-interface),groups?: [WidgetGroup](api-reference-7x/easyquery-packages/core-package/enumerations/widgetgroup-enum)): `void`

#### Parameters:
- action: [ActionStatus](api-reference-7x/easyquery-packages/core-package/interfaces/actionstatus-interface)
- groups: [WidgetGroup](api-reference-7x/easyquery-packages/core-package/enumerations/widgetgroup-enum), *Optional*  - 



**Returns** `void`


---
### exportResult
Fetches the data for defined by this context and exports them to the specified format.

▸ exportResult(options?: [ContextExportResultOptions](api-reference-7x/easyquery-packages/core-package/interfaces/contextexportresultoptions-interface)): `void`

#### Parameters:
- options: [ContextExportResultOptions](api-reference-7x/easyquery-packages/core-package/interfaces/contextexportresultoptions-interface), *Optional*  - 
The content of the `options` parameter depends on `EqExporter` implementation.
Usually it contains `format` property which defines the format of the exported data (e.g. `csv`),
and `success` and `error` callbacks


**Returns** `void`

#### Example: 
```typescript

context.exportResult({
     format: csv
});


```

---
### fetchData
Fetches the data (usuall by executing current query) and processes the result.

▸ fetchData(options?: [ContextFetchDataOptions](api-reference-7x/easyquery-packages/core-package/interfaces/contextfetchdataoptions-interface)): `void`

#### Parameters:
- options: [ContextFetchDataOptions](api-reference-7x/easyquery-packages/core-package/interfaces/contextfetchdataoptions-interface), *Optional*  - 
The `options` parameter in addition to the options defined in ExecuteQueryOptions structure may also contain `success` and `error` callbacks.


**Returns** `void`

#### Example: 
```typescript

context.fetchData({ success: function(result) {
  //do whatever you want with the result
}})


```

---
### fetchDataChunk
▸ fetchDataChunk(options?: [ContextFetchDataOptions](api-reference-7x/easyquery-packages/core-package/interfaces/contextfetchdataoptions-interface)): `void`

#### Parameters:
- options: [ContextFetchDataOptions](api-reference-7x/easyquery-packages/core-package/interfaces/contextfetchdataoptions-interface), *Optional* 


**Returns** `void`


---
### fetchDrillDownData
Fetches the data for a drill-down query (if defined) and processes the result.

▸ fetchDrillDownData(options: [ContextFetchDataOptions](api-reference-7x/easyquery-packages/core-package/interfaces/contextfetchdataoptions-interface)): `void`

#### Parameters:
- options: [ContextFetchDataOptions](api-reference-7x/easyquery-packages/core-package/interfaces/contextfetchdataoptions-interface) - 



**Returns** `void`


---
### fireEvent
Fires event.

▸ fireEvent(eventType: `"ready"` | `"loadModel"` | `"initialModelLoad"` | `"loadQuery"` | `"syncQuery"` | `"fetchData"` | `"exportResult"`): `any`

#### Parameters:
- eventType: `"ready"` | `"loadModel"` | `"initialModelLoad"` | `"loadQuery"` | `"syncQuery"` | `"fetchData"` | `"exportResult"` - The event type.



**Returns** `any`

▸ fireEvent(eventType: `"processStart"` | `"processEnd"`,data: [ActionStatus](api-reference-7x/easyquery-packages/core-package/interfaces/actionstatus-interface)): `any`

#### Parameters:
- eventType: `"processStart"` | `"processEnd"`
- data: [ActionStatus](api-reference-7x/easyquery-packages/core-package/interfaces/actionstatus-interface)


**Returns** `any`

▸ fireEvent(eventType: `"error"`,data: `Error`): `any`

#### Parameters:
- eventType: `"error"`
- data: `Error`


**Returns** `any`


---
### getAllWidgetsByType
Returns all widgets with current type.

▸ getAllWidgetsByType(widgetType: `string`): [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class)[]

#### Parameters:
- widgetType: `string` - The widget type



**Returns** [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class)[]


---
### getBaseEndpoint
▸ getBaseEndpoint(): `string`


**Returns** `string`


---
### getDefaultTotalsSettings
▸ getDefaultTotalsSettings(): `TotalsOptions`


**Returns** `TotalsOptions`


---
### getExportFormats
▸ getExportFormats(): `string`[]


**Returns** `string`[]


---
### getExporter
▸ getExporter(format: `string`): [EqExporter](api-reference-7x/easyquery-packages/core-package/interfaces/eqexporter-interface) | `null`

#### Parameters:
- format: `string`


**Returns** [EqExporter](api-reference-7x/easyquery-packages/core-package/interfaces/eqexporter-interface) | `null`


---
### getListRequestHandler
Gets the handler for 'GetList' requests

▸ getListRequestHandler(): `any`


**Returns** `any`


---
### getModel
Gets the current data model

▸ getModel(): [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class)


**Returns** [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class)


---
### getQuery
Gets the current query

▸ getQuery(): [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)


**Returns** [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)


---
### getQueryFile
▸ getQueryFile(options?: [ContextGetQueryFileOptions](api-reference-7x/easyquery-packages/core-package/interfaces/contextgetqueryfileoptions-interface)): `void`

#### Parameters:
- options: [ContextGetQueryFileOptions](api-reference-7x/easyquery-packages/core-package/interfaces/contextgetqueryfileoptions-interface), *Optional* 


**Returns** `void`


---
### getServices
▸ getServices(): [EqServiceProvider](api-reference-7x/easyquery-packages/core-package/classes/eqserviceprovider-class)


**Returns** [EqServiceProvider](api-reference-7x/easyquery-packages/core-package/classes/eqserviceprovider-class)


---
### getTotalsSettings
▸ getTotalsSettings(): `TotalsOptions`


**Returns** `TotalsOptions`


---
### getWidgetByType
Returns first registerd widget with current type

▸ getWidgetByType(widgetType: `string`): [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class) | `null`

#### Parameters:
- widgetType: `string` - The widget type



**Returns** [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class) | `null`


---
### init
Initializes the context

▸ init(options?: [EqContextOptions](api-reference-7x/easyquery-packages/core-package/interfaces/eqcontextoptions-interface)): `void`

#### Parameters:
- options: [EqContextOptions](api-reference-7x/easyquery-packages/core-package/interfaces/eqcontextoptions-interface), *Optional*  - 



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

▸ loadModel(options?: [ContextLoadModelOptions](api-reference-7x/easyquery-packages/core-package/interfaces/contextloadmodeloptions-interface)): `Promise`&lt;[DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class)&gt;

#### Parameters:
- options: [ContextLoadModelOptions](api-reference-7x/easyquery-packages/core-package/interfaces/contextloadmodeloptions-interface), *Optional*  - A map of options to pass to `loadModel` function (can be ommited)


**Returns** `Promise`&lt;[DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class)&gt;

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

▸ loadModelFromData(modelPlainData: [ModelPlainData](api-reference-7x/easyquery-packages/core-package/interfaces/modelplaindata-interface)): `void`

#### Parameters:
- modelPlainData: [ModelPlainData](api-reference-7x/easyquery-packages/core-package/interfaces/modelplaindata-interface)


**Returns** `void`


---
### loadQuery
Loads the query

▸ loadQuery(options?: [ContextLoadQueryOptions](api-reference-7x/easyquery-packages/core-package/interfaces/contextloadqueryoptions-interface)): `void`

#### Parameters:
- options: [ContextLoadQueryOptions](api-reference-7x/easyquery-packages/core-package/interfaces/contextloadqueryoptions-interface), *Optional*  - 
The content of the `options` parameter depends on `QueryStorage` implementation.
Usually it contains `success`, `error` callbacks and `queryId` property of the query to load.


**Returns** `void`

#### Example: 
```typescript

context.loadQuery({
     queryId: "query-id"
});

```

---
### loadQueryList
Loads the list of queries available for the current user.

▸ loadQueryList(options?: [ContextLoadQueryListOptions](api-reference-7x/easyquery-packages/core-package/interfaces/contextloadquerylistoptions-interface)): `void`

#### Parameters:
- options: [ContextLoadQueryListOptions](api-reference-7x/easyquery-packages/core-package/interfaces/contextloadquerylistoptions-interface), *Optional*  - 
The content of the `options` parameter depends on `QueryStorage` implementation.
Usually it contains `success`, `error` callbacks



**Returns** `void`


---
### loadValueList
Sends a `loadValueList` requesthe server and processes the response.

▸ loadValueList(options?: [ContextLoadValueListOptions](api-reference-7x/easyquery-packages/core-package/interfaces/contextloadvaluelistoptions-interface)): `void`

#### Parameters:
- options: [ContextLoadValueListOptions](api-reference-7x/easyquery-packages/core-package/interfaces/contextloadvaluelistoptions-interface), *Optional*  - A map of options to pass to `loadValueList` function.



**Returns** `void`


---
### newQuery
Creates a new query and returns its content back to the client-side.

▸ newQuery(options?: [ContextNewQueryOptions](api-reference-7x/easyquery-packages/core-package/interfaces/contextnewqueryoptions-interface)): [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)

#### Parameters:
- options: [ContextNewQueryOptions](api-reference-7x/easyquery-packages/core-package/interfaces/contextnewqueryoptions-interface), *Optional*  - 
The content of the `options` parameter depends on `QueryStorage` implementation.
Usually it contains `success`, `error` callbacks and `silent` option


**Returns** [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)

#### Example: 
```typescript

context.newQuery({
   silent: true
});

```

---
### refreshWidgets
This method is called automatically when some change was made either in context's data model or query

▸ refreshWidgets(groups?: [WidgetGroup](api-reference-7x/easyquery-packages/core-package/enumerations/widgetgroup-enum)): `void`

#### Parameters:
- groups: [WidgetGroup](api-reference-7x/easyquery-packages/core-package/enumerations/widgetgroup-enum), *Default value* = ` WidgetGroup.All` - 



**Returns** `void`


---
### registerExporter
▸ registerExporter(format: `string`,resolver: `EqExporterResolver`): `void`

#### Parameters:
- format: `string`
- resolver: `EqExporterResolver`


**Returns** `void`


---
### registerServerExporter
▸ registerServerExporter(format: `string`,responseType: `XMLHttpRequestResponseType`): `void`

#### Parameters:
- format: `string`
- responseType: `XMLHttpRequestResponseType`


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

▸ removeQuery(options?: [ContextRemoveQueryOptions](api-reference-7x/easyquery-packages/core-package/interfaces/contextremovequeryoptions-interface)): `void`

#### Parameters:
- options: [ContextRemoveQueryOptions](api-reference-7x/easyquery-packages/core-package/interfaces/contextremovequeryoptions-interface), *Optional*  - 
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

▸ saveQuery(options?: [ContextSaveQueryOptions](api-reference-7x/easyquery-packages/core-package/interfaces/contextsavequeryoptions-interface)): `void`

#### Parameters:
- options: [ContextSaveQueryOptions](api-reference-7x/easyquery-packages/core-package/interfaces/contextsavequeryoptions-interface), *Optional*  - 
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

▸ setExternalListCache(cache: [ExternalListCache](api-reference-7x/easyquery-packages/core-package/interfaces/externallistcache-interface)): `void`

#### Parameters:
- cache: [ExternalListCache](api-reference-7x/easyquery-packages/core-package/interfaces/externallistcache-interface) - 



**Returns** `void`


---
### setTotalsSettings
▸ setTotalsSettings(settings: `TotalsOptions`,silent?: `boolean`): `void`

#### Parameters:
- settings: `TotalsOptions`
- silent: `boolean`, *Default value* = `false`


**Returns** `void`


---
### startProcess
Notifies context components about starting of some long process (e.g. model loading)
This method raises onProcessStart event in the context and all its widgets

▸ startProcess(message: [ActionStatus](api-reference-7x/easyquery-packages/core-package/interfaces/actionstatus-interface),groups?: [WidgetGroup](api-reference-7x/easyquery-packages/core-package/enumerations/widgetgroup-enum)): `void`

#### Parameters:
- message: [ActionStatus](api-reference-7x/easyquery-packages/core-package/interfaces/actionstatus-interface)
- groups: [WidgetGroup](api-reference-7x/easyquery-packages/core-package/enumerations/widgetgroup-enum), *Optional*  - 



**Returns** `void`


---
### syncQuery
Syncronizes the current query.

▸ syncQuery(options?: [ContextSyncQueryOptions](api-reference-7x/easyquery-packages/core-package/interfaces/contextsyncqueryoptions-interface)): `void`

#### Parameters:
- options: [ContextSyncQueryOptions](api-reference-7x/easyquery-packages/core-package/interfaces/contextsyncqueryoptions-interface), *Optional*  - 
The content of the `options` parameter depends on `QuerySyncronizer` implementation.
Usually it contains `success` and `error` callbacks



**Returns** `void`


---
### throwError
Throws the error passed in the function parameter.
If onError event handler is defined - we call that method.
Otherwise - just place the error message to the browser console.

▸ throwError(action: [ActionStatus](api-reference-7x/easyquery-packages/core-package/interfaces/actionstatus-interface)): `void`

#### Parameters:
- action: [ActionStatus](api-reference-7x/easyquery-packages/core-package/interfaces/actionstatus-interface)


**Returns** `void`


---
### uploadQueryFile
▸ uploadQueryFile(options?: [ContextUploadQueryFileOptions](api-reference-7x/easyquery-packages/core-package/interfaces/contextuploadqueryfileoptions-interface)): `void`

#### Parameters:
- options: [ContextUploadQueryFileOptions](api-reference-7x/easyquery-packages/core-package/interfaces/contextuploadqueryfileoptions-interface), *Optional* 


**Returns** `void`


---
### useEndpoint
Sets endpoint for all EasyQuery actions. Should be called before `init` and
`useEnterprise` methods

▸ useEndpoint(endpoint: `string`): [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)

#### Parameters:
- endpoint: `string`


**Returns** [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)

#### Example: 
```typescript

```
view.getContext()
    .useEndpoint('/api/easyquery')
    .useEnterprise(function () {
         view.init();
    });
```

```

---
### wereTotalsColumnsChanged
▸ wereTotalsColumnsChanged(settings?: `TotalsOptions`): `boolean`

#### Parameters:
- settings: `TotalsOptions`, *Optional* 


**Returns** `boolean`


---
## Protected Methods

---
### startQueryListLoading
▸ startQueryListLoading(options?: [ContextLoadQueryListOptions](api-reference-7x/easyquery-packages/core-package/interfaces/contextloadquerylistoptions-interface)): `void`

#### Parameters:
- options: [ContextLoadQueryListOptions](api-reference-7x/easyquery-packages/core-package/interfaces/contextloadquerylistoptions-interface), *Optional* 


**Returns** `void`


---
