---
title: EQ.client namespace
slug: api-reference-old/api-reference-4-x/eq-client-namespace
sidebar:
  order: 100
---

Contains several functions which help initilize and manage EasyQuery widgets and simplify the communications with server-side code.

## **Functions** ##

## *init* ##
Initializes all EasyQuery objects and widgets.
#### Parameters ####
| Name | Type | Description |
| -------- | ------- | --------------------------- |
| `options` | *Object* | A map of options to pass to EasyQuery core objects and widgets. By default all parameters are taken directly from easyQuerySettings global variable |

 ```javascript 
   EQ.client.init({
       serviceUrl: "EQService.asmx",
       modelName: "nwind",
       columnsPanel: { allowAggrColumns: true, attrElementFormat: "{attr}", showColumnCaptions: false  },
       queryPanel: { listRequestHandler: onListRequest }
   });
``` 


You don't need to call this function directly if eq.view.js or eq.report.js script is used since the initilization code of those scriptions calls this function automatically.


## *loadModel* ##
Sends a "LoadModel" requests to the server and processes the response.
#### Parameters ####
| Name | Type | Description |
| -------- | ------- | --------------------------- |
| `options` | *Object* | A map of options to pass to loadModel function. |

 ```javascript 
EQ.client.loadModel({modelId: "MyModel", success: function(modelJSON) {
    alert("Model loaded!");
});
``` 


## *newQuery* ##
Sends a "NewQuery" request to the server and processes the response.
#### Parameters ####
| Name | Type | Description |
| -------- | ------- | --------------------------- |
| `options` | *Object* | A map of options to pass to newQuery function. |

 ```javascript 
EQ.client.newQuery({modelId: "MyModel", queryName: "New Query", success: function(query) {
    alert("Query created!");
});
``` 


## *loadQuery* ##
Sends a "LoadQuery" request to the server and processes the response.
#### Parameters ####
| Name | Type | Description |
| -------- | ------- | --------------------------- |
| `options` | *Object* | A map of options to pass to loadQuery function. |

 ```javascript 
EQ.client.loadQuery({queryId: "MyQuery", success: function(query) {
    alert("Query loaded!");
});
``` 


## *loadQueryList* ##
Sends a "LoadQueryList" request to the server and processes the response.
The request contains the name of current model
#### Parameters ####
| Name | Type | Description |
| -------- | ------- | --------------------------- |
| `options` | *Object* | The map of options to pass to loadQuery function. |

 ```javascript 
EQ.client.loadQueryList({success: function(listJSON) {
    alert("Queries: " + listJSON);
});
``` 


## *removeQuery* ##
Sends a "RemoveQuery" request to the server and processes the response.
#### Parameters ####
| Name | Type | Description |
| -------- | ------- | --------------------------- |
| `options` | *Object* | A map of options to pass to newQuery function. |

 ```javascript 
EQ.client.removeQuery({modelId: "MyModel", queryId: "New Query", success: function(query) {
    alert("Query created!");
});
``` 


## *clearQuery* ##
Clears all conditions and columns in the current query.

## *saveQuery* ##
Sends "SaveQuery" request to the server and processes the response.
#### Parameters ####
| Name | Type | Description |
| -------- | ------- | --------------------------- |
| `options` | *Object* | The map of options to pass to SaveQuery function. |

## *buildQuery* ##
Sends "BuildQuery" request to the server and processes the response.
#### Parameters ####
| Name | Type | Description |
| -------- | ------- | --------------------------- |
| `params` | *Object* | A map of parameters to pass to buildQuery function. |

## *syncQuery* ##
Sends "SyncQuery" request to the server and processes the response.
#### Parameters ####
| Name | Type | Description |
| -------- | ------- | --------------------------- |
| `params` | *Object* | A map of parameters to pass to buildQuery function. |

## *buildAndExecute* ##
Sends "ExecuteQuery" request to the server and processes the response.
#### Parameters ####
| Name | Type | Description |
| -------- | ------- | --------------------------- |
| `params` | *Object* | A map of parameters to pass to buildQuery function. |
