---
title: EqServerBroker class
slug: >-
  api-reference-old/api-reference-5-x/broker-eqs-package/classes/eqserverbroker-class
sidebar:
  order: 100
---

EasyQuuery server implementation of EqBroker.

## Implements
[EqBroker](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqbroker-interface)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-5-x/@easyquery/broker-eqs-package/classes/eqserverbroker-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-5-x/@easyquery/broker-eqs-package/classes/eqserverbroker-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-5-x/@easyquery/broker-eqs-package/classes/eqserverbroker-class/#public-properties-1)
- [antiForgeryToken](//easyquery/javascript/docs/api-reference-5-x/@easyquery/broker-eqs-package/classes/eqserverbroker-class/#antiforgerytoken)
- [endpoint](//easyquery/javascript/docs/api-reference-5-x/@easyquery/broker-eqs-package/classes/eqserverbroker-class/#endpoint)
- [executeQueryUrl](//easyquery/javascript/docs/api-reference-5-x/@easyquery/broker-eqs-package/classes/eqserverbroker-class/#executequeryurl)
- [exportResultUrl](//easyquery/javascript/docs/api-reference-5-x/@easyquery/broker-eqs-package/classes/eqserverbroker-class/#exportresulturl)
- [loadModelUrl](//easyquery/javascript/docs/api-reference-5-x/@easyquery/broker-eqs-package/classes/eqserverbroker-class/#loadmodelurl)
- [loadQueryListUrl](//easyquery/javascript/docs/api-reference-5-x/@easyquery/broker-eqs-package/classes/eqserverbroker-class/#loadquerylisturl)
- [loadQueryUrl](//easyquery/javascript/docs/api-reference-5-x/@easyquery/broker-eqs-package/classes/eqserverbroker-class/#loadqueryurl)
- [newQueryUrl](//easyquery/javascript/docs/api-reference-5-x/@easyquery/broker-eqs-package/classes/eqserverbroker-class/#newqueryurl)
- [removeQueryUrl](//easyquery/javascript/docs/api-reference-5-x/@easyquery/broker-eqs-package/classes/eqserverbroker-class/#removequeryurl)
- [saveQueryUrl](//easyquery/javascript/docs/api-reference-5-x/@easyquery/broker-eqs-package/classes/eqserverbroker-class/#savequeryurl)
- [syncQueryUrl](//easyquery/javascript/docs/api-reference-5-x/@easyquery/broker-eqs-package/classes/eqserverbroker-class/#syncqueryurl)
- [valueListRequestUrl](//easyquery/javascript/docs/api-reference-5-x/@easyquery/broker-eqs-package/classes/eqserverbroker-class/#valuelistrequesturl)

### [Public Methods](//easyquery/javascript/docs/api-reference-5-x/@easyquery/broker-eqs-package/classes/eqserverbroker-class/#public-methods-1)
- [buildAndExecute](//easyquery/javascript/docs/api-reference-5-x/@easyquery/broker-eqs-package/classes/eqserverbroker-class/#buildandexecute)
- [exportResult](//easyquery/javascript/docs/api-reference-5-x/@easyquery/broker-eqs-package/classes/eqserverbroker-class/#exportresult)
- [getModelPromise](//easyquery/javascript/docs/api-reference-5-x/@easyquery/broker-eqs-package/classes/eqserverbroker-class/#getmodelpromise)
- [init](//easyquery/javascript/docs/api-reference-5-x/@easyquery/broker-eqs-package/classes/eqserverbroker-class/#init)
- [loadModel](//easyquery/javascript/docs/api-reference-5-x/@easyquery/broker-eqs-package/classes/eqserverbroker-class/#loadmodel)
- [loadQuery](//easyquery/javascript/docs/api-reference-5-x/@easyquery/broker-eqs-package/classes/eqserverbroker-class/#loadquery)
- [loadQueryList](//easyquery/javascript/docs/api-reference-5-x/@easyquery/broker-eqs-package/classes/eqserverbroker-class/#loadquerylist)
- [loadValueList](//easyquery/javascript/docs/api-reference-5-x/@easyquery/broker-eqs-package/classes/eqserverbroker-class/#loadvaluelist)
- [newQuery](//easyquery/javascript/docs/api-reference-5-x/@easyquery/broker-eqs-package/classes/eqserverbroker-class/#newquery)
- [removeQuery](//easyquery/javascript/docs/api-reference-5-x/@easyquery/broker-eqs-package/classes/eqserverbroker-class/#removequery)
- [saveQuery](//easyquery/javascript/docs/api-reference-5-x/@easyquery/broker-eqs-package/classes/eqserverbroker-class/#savequery)
- [syncQuery](//easyquery/javascript/docs/api-reference-5-x/@easyquery/broker-eqs-package/classes/eqserverbroker-class/#syncquery)


## Constructors

---
#### constructor

The default constructon
⊕ new EqServerBroker(context: [EqContext](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqcontext-class)): [EqServerBroker](//easyquery/javascript/docs/api-reference-5-x/@easyquery/broker-eqs-package/classes/eqserverbroker-class)

#### Parameters:
- context: [EqContext](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqcontext-class) - The context.



---

## Public Properties

---
### antiForgeryToken

Anti-forgery token.

● antiForgeryToken: `string`

---
### endpoint

The endpoint

● endpoint: `string` = `"/api/easyquery"`

---
### executeQueryUrl

executeQuery url resolver.

● executeQueryUrl: (modelId: `any`, queryId: `string`) => `string`

---
### exportResultUrl

exportResult url resolver.

● exportResultUrl: (modelId: `any`, queryId: `any`, format: `string`) => `string`

---
### loadModelUrl

loadModel url resolver.

● loadModelUrl: (modelId: `string`) => `string`

---
### loadQueryListUrl

loadQueryList url resolver.

● loadQueryListUrl: (modelId: `string`) => `string`

---
### loadQueryUrl

loadQuery url resolver.

● loadQueryUrl: (modelId: `any`, queryId: `string`) => `string`

---
### newQueryUrl

newQuery url resolver.

● newQueryUrl: (modelId: `string`) => `string`

---
### removeQueryUrl

removeQuery url resolver.

● removeQueryUrl: (modelId: `any`, queryId: `string`) => `string`

---
### saveQueryUrl

saveQuery url resolver.

● saveQueryUrl: (modelId: `any`, queryId: `string`) => `string`

---
### syncQueryUrl

syncQuery url resolver.

● syncQueryUrl: (modelId: `any`, queryId: `string`) => `string`

---
### valueListRequestUrl

valueListRequest url resolver.

● valueListRequestUrl: (modelId: `any`, listId: `string`) => `string`

---
## Public Methods

---
### buildAndExecute
Sends a `execureQuery` request to the server and processes the response.

▸ buildAndExecute(params?: `any`): `void`

#### Parameters:
- params: `any`, *Optional*  - A map of options to pass to `buildAndExecute` function.



**Returns** `void`

---
### exportResult
Sends a `exportResult` request to the server and processes the response.

▸ exportResult(options?: `any`): `void`

#### Parameters:
- options: `any`, *Optional* 


**Returns** `void`

---
### getModelPromise
Gets the loadModel promise

▸ getModelPromise(): `Promise`&lt;[DataModel](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class)&gt;


**Returns** `Promise`&lt;[DataModel](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class)&gt; - The promise.


---
### init
Initialize broker.

▸ init(options: [EqServerBrokerOptions](//easyquery/javascript/docs/api-reference-5-x/@easyquery/broker-eqs-package/interfaces/eqserverbrokeroptions-interface)): `void`

#### Parameters:
- options: [EqServerBrokerOptions](//easyquery/javascript/docs/api-reference-5-x/@easyquery/broker-eqs-package/interfaces/eqserverbrokeroptions-interface) - The options.



**Returns** `void`

---
### loadModel
Sends a `LoadModel` request to the server and processes the response.

▸ loadModel(options: `any`): `void`

#### Parameters:
- options: `any` - A map of options to pass to `loadModel` function.


**Returns** `void`
#### Example: 
```typescript

let broker = new EqServerBroker(context);
broker.loadModel({
   modelId: "MyModel",
   success: function(model) {
      alert("Model loaded!");
   }
});

```

---
### loadQuery
Sends a `LoadQuery` request to the server and processes the response.

▸ loadQuery(options: `any`): `void`

#### Parameters:
- options: `any` - A map of options to pass to loadQuery function.


**Returns** `void`
#### Example: 
```typescript

let broker = new EqServerBroker(context);
broker.loadQuery({
   id: "MyQuery",
   success: function(query) {
      alert("Query loaded!");
   }
});

```

---
### loadQueryList
Sends a `LoadQueryList` request to the server and processes the response.

▸ loadQueryList(options: `any`): `void`

#### Parameters:
- options: `any` - A map of options to pass to `loadQueryList` function.


**Returns** `void`
#### Example: 
```typescript

let broker = new EqServerBroker(context);
broker.loadQueryListt({
   modelId: "MyModel",
   success: function(queries) {
      alert("Queries loaded!");
   }
});

```

---
### loadValueList
Sends a `loadValueList` request to the server and processes the response.

▸ loadValueList(options?: `any`): `void`

#### Parameters:
- options: `any`, *Optional* 


**Returns** `void`

---
### newQuery
Sends a `newQuery` request to the server and processes the response.

▸ newQuery(options: `any`): `void`

#### Parameters:
- options: `any` - A map of options to pass to `newQuery` function.


**Returns** `void`
#### Example: 
```typescript

let broker = new EqServerBroker(context);
broker.newQuery({
   queryId: "MyQuery",
   queryName: "NewQuery",
   success: function(query) {
      alert("Query created!");
   }
});

```

---
### removeQuery
Sends a `removeQuery` request to the server and processes the response.

▸ removeQuery(options?: `any`): `void`

#### Parameters:
- options: `any`, *Optional*  - A map of options to pass to `removeQuery` function.


**Returns** `void`
#### Example: 
```typescript

let broker = new EqServerBroker(context);
broker.removeQuery({
   modelId: "MyModel",
   queryId: "MyQuery",
   success: function() {
      alert("Query deleted!");
   }
});

```

---
### saveQuery
Sends a `saveQuery` request to the server and processes the response.

▸ saveQuery(options?: `any`): `void`

#### Parameters:
- options: `any`, *Optional*  - A map of options to pass to `saveQuery` function.



**Returns** `void`

---
### syncQuery
Sends a `syncQuery` request to the server and processes the response.

▸ syncQuery(params?: `any`): `void`

#### Parameters:
- params: `any`, *Optional*  - A map of options to pass to `syncQuery` function.



**Returns** `void`

---
