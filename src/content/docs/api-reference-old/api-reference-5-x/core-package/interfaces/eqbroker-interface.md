---
title: EqBroker interface
slug: api-reference-old/api-reference-5-x/core-package/interfaces/eqbroker-interface
sidebar:
  order: 100
---

Defines the broker's interfaces.
Broker is one of the important parts of EasyQuery library
which is responsible for the communication with the server-side:
getting information about the model, generating SQL (or other type of queries), executing queries, etc.

## Index
### [Methods](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqbroker-interface/#methods-1)
- [buildAndExecute](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqbroker-interface/#buildandexecute)
- [exportResult](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqbroker-interface/#exportresult)
- [getModelPromise](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqbroker-interface/#getmodelpromise)
- [init](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqbroker-interface/#init)
- [loadModel](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqbroker-interface/#loadmodel)
- [loadQuery](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqbroker-interface/#loadquery)
- [loadQueryList](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqbroker-interface/#loadquerylist)
- [loadValueList](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqbroker-interface/#loadvaluelist)
- [newQuery](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqbroker-interface/#newquery)
- [removeQuery](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqbroker-interface/#removequery)
- [saveQuery](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqbroker-interface/#savequery)
- [syncQuery](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqbroker-interface/#syncquery)



## Methods

---
### buildAndExecute
Executes the current query and processes the result.

▸ buildAndExecute(options?: `any`): `any`

#### Parameters:
- options: `any`, *Optional*  - 
The content of the `options` parameter depends on broker's implementation.
Usually it contains the `query` property
which contains a JSON representation of the query.



**Returns** `any`

---
### exportResult
Executes the current query and exports the result to the specified format.

▸ exportResult(options?: `any`): `any`

#### Parameters:
- options: `any`, *Optional*  - 
The content of the `options` parameter depends on broker's implementation.
Usually it contains the `query` property
which contains a JSON representation of the query
and `format` property which defines the format of the exported data (e.g. `csv`).



**Returns** `any`

---
### getModelPromise
Returns the `Promise` of the model loading process

▸ getModelPromise(): `Promise`&lt;[DataModel](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class)&gt;


**Returns** `Promise`&lt;[DataModel](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class)&gt;

---
### init
Initializes the broker

▸ init(options?: `any`): `any`

#### Parameters:
- options: `any`, *Optional*  - 



**Returns** `any`

---
### loadModel
Loads the data model

▸ loadModel(options?: `any`): `any`

#### Parameters:
- options: `any`, *Optional*  - 
The content of the `options` parameter depends on broker's implementation.
Usually it contains the `modelId` property which defines the ID
of the model we want to load



**Returns** `any`

---
### loadQuery
Loads the query

▸ loadQuery(options?: `any`): `any`

#### Parameters:
- options: `any`, *Optional*  - 
The content of the `options` parameter depends on broker's implementation.
Usually it contains the `id` property which defines the ID
of the query we want to load



**Returns** `any`

---
### loadQueryList
Loads the list of queries available for the current user.

▸ loadQueryList(options?: `any`): `any`

#### Parameters:
- options: `any`, *Optional*  - 
The content of the `options` parameter depends on broker's implementation.
Usually it contains the `modelId` property which defines the ID
of the model for which we want to load the list of available queries.



**Returns** `any`

---
### loadValueList
Load the list of values for some value editor

▸ loadValueList(options?: `any`): `any`

#### Parameters:
- options: `any`, *Optional*  - 
The content of the `options` parameter depends on broker's implementation.
Usually it contains the `editoId` or `listName` propertis
which define the ID of the value editor or the name of the list we want to get



**Returns** `any`

---
### newQuery
Creates a new query and returns its content back to the client-side.

▸ newQuery(options?: `any`): `any`

#### Parameters:
- options: `any`, *Optional*  - 
The content of the `options` parameter depends on broker's implementation.
Usually it contains the `modelId` property which defines the ID
of the model for which we want to create a new query.



**Returns** `any`

---
### removeQuery
Removes the current query from some storage on the server-side.

▸ removeQuery(options?: `any`): `any`

#### Parameters:
- options: `any`, *Optional*  - 
The content of the `options` parameter depends on broker's implementation.
Usually it contains the `id` property
which defines the ID of the query we would like to remove.



**Returns** `any`

---
### saveQuery
Saves the current query to some storage on the server-side.

▸ saveQuery(options?: `any`): `any`

#### Parameters:
- options: `any`, *Optional*  - 
The content of the `options` parameter depends on broker's implementation.
Usually it contains the `query` property
which contains a JSON representation of the query to save.



**Returns** `any`

---
### syncQuery
Syncs the content of the current query with the server-side.

▸ syncQuery(options?: `any`): `any`

#### Parameters:
- options: `any`, *Optional*  - 
The content of the `options` parameter depends on broker's implementation.
Usually it contains the `query` property
which contains a JSON representation of the query.



**Returns** `any`

---
