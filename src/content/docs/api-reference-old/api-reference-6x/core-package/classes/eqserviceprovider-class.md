---
title: EqServiceProvider class
slug: >-
  api-reference-old/api-reference-6x/core-package/classes/eqserviceprovider-class
sidebar:
  order: 100
---

## Index
### [Constructors](api-reference-old/api-reference-6x/core-package/classes/eqserviceprovider-class#constructors-1)
- [constructor](api-reference-old/api-reference-6x/core-package/classes/eqserviceprovider-class#constructor)

### [Public Methods](api-reference-old/api-reference-6x/core-package/classes/eqserviceprovider-class#public-methods-1)
- [createDataModel](api-reference-old/api-reference-6x/core-package/classes/eqserviceprovider-class#createdatamodel)
- [createQuery](api-reference-old/api-reference-6x/core-package/classes/eqserviceprovider-class#createquery)
- [getHttpClient](api-reference-old/api-reference-6x/core-package/classes/eqserviceprovider-class#gethttpclient)
- [getModelLoader](api-reference-old/api-reference-6x/core-package/classes/eqserviceprovider-class#getmodelloader)
- [getQueryExecutor](api-reference-old/api-reference-6x/core-package/classes/eqserviceprovider-class#getqueryexecutor)
- [getQueryStorage](api-reference-old/api-reference-6x/core-package/classes/eqserviceprovider-class#getquerystorage)
- [getQuerySynchronizer](api-reference-old/api-reference-6x/core-package/classes/eqserviceprovider-class#getquerysynchronizer)
- [getValueListResolver](api-reference-old/api-reference-6x/core-package/classes/eqserviceprovider-class#getvaluelistresolver)
- [registerDataModelResolver](api-reference-old/api-reference-6x/core-package/classes/eqserviceprovider-class#registerdatamodelresolver)
- [registerModelLoaderResolver](api-reference-old/api-reference-6x/core-package/classes/eqserviceprovider-class#registermodelloaderresolver)
- [registerQueryExecutorResolver](api-reference-old/api-reference-6x/core-package/classes/eqserviceprovider-class#registerqueryexecutorresolver)
- [registerQueryResolver](api-reference-old/api-reference-6x/core-package/classes/eqserviceprovider-class#registerqueryresolver)
- [registerQueryStorageResolver](api-reference-old/api-reference-6x/core-package/classes/eqserviceprovider-class#registerquerystorageresolver)
- [registerQuerySyncronizerResolver](api-reference-old/api-reference-6x/core-package/classes/eqserviceprovider-class#registerquerysyncronizerresolver)
- [registerValueListResolver](api-reference-old/api-reference-6x/core-package/classes/eqserviceprovider-class#registervaluelistresolver)
- [reset](api-reference-old/api-reference-6x/core-package/classes/eqserviceprovider-class#reset)


## Constructors

---
#### constructor

⊕ new EqServiceProvider(): [EqServiceProvider](api-reference-old/api-reference-6x/core-package/classes/eqserviceprovider-class)


---

## Public Methods

---
### createDataModel
▸ createDataModel(context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)): [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class)

#### Parameters:
- context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)


**Returns** [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class)


---
### createQuery
▸ createQuery(context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)): [Query](api-reference-old/api-reference-6x/core-package/classes/query-class)

#### Parameters:
- context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)


**Returns** [Query](api-reference-old/api-reference-6x/core-package/classes/query-class)


---
### getHttpClient
▸ getHttpClient(): [HttpClient](api-reference-old/api-reference-6x/core-package/classeshttpclient-class)


**Returns** [HttpClient](api-reference-old/api-reference-6x/core-package/classeshttpclient-class)


---
### getModelLoader
▸ getModelLoader(context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)): [EqModelLoader](api-reference-old/api-reference-6x/core-package/classes/eqmodelloader-class)

#### Parameters:
- context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)


**Returns** [EqModelLoader](api-reference-old/api-reference-6x/core-package/classes/eqmodelloader-class)


---
### getQueryExecutor
▸ getQueryExecutor(context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)): [QueryExecutor](api-reference-old/api-reference-6x/core-package/interfaces/queryexecutor-interface)

#### Parameters:
- context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)


**Returns** [QueryExecutor](api-reference-old/api-reference-6x/core-package/interfaces/queryexecutor-interface)


---
### getQueryStorage
▸ getQueryStorage(context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)): [QueryStorage](api-reference-old/api-reference-6x/core-package/interfaces/querystorage-interface)

#### Parameters:
- context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)


**Returns** [QueryStorage](api-reference-old/api-reference-6x/core-package/interfaces/querystorage-interface)


---
### getQuerySynchronizer
▸ getQuerySynchronizer(context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)): [QuerySynchronizer](api-reference-old/api-reference-6x/core-package/interfaces/querysynchronizer-interface)

#### Parameters:
- context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)


**Returns** [QuerySynchronizer](api-reference-old/api-reference-6x/core-package/interfaces/querysynchronizer-interface)


---
### getValueListResolver
▸ getValueListResolver(context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)): [EqValueListResolver](api-reference-old/api-reference-6x/core-package/interfaces/eqvaluelistresolver-interface)

#### Parameters:
- context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)


**Returns** [EqValueListResolver](api-reference-old/api-reference-6x/core-package/interfaces/eqvaluelistresolver-interface)


---
### registerDataModelResolver
▸ registerDataModelResolver(resolver: (context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)) => [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class)): `void`

#### Parameters:
- resolver: (context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)) => [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class)


**Returns** `void`


---
### registerModelLoaderResolver
▸ registerModelLoaderResolver(resolver: (context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)) => [EqModelLoader](api-reference-old/api-reference-6x/core-package/classes/eqmodelloader-class)): `void`

#### Parameters:
- resolver: (context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)) => [EqModelLoader](api-reference-old/api-reference-6x/core-package/classes/eqmodelloader-class)


**Returns** `void`


---
### registerQueryExecutorResolver
▸ registerQueryExecutorResolver(resolver: (context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)) => [QueryExecutor](api-reference-old/api-reference-6x/core-package/interfaces/queryexecutor-interface)): `void`

#### Parameters:
- resolver: (context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)) => [QueryExecutor](api-reference-old/api-reference-6x/core-package/interfaces/queryexecutor-interface)


**Returns** `void`


---
### registerQueryResolver
▸ registerQueryResolver(resolver: (context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)) => [Query](api-reference-old/api-reference-6x/core-package/classes/query-class)): `void`

#### Parameters:
- resolver: (context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)) => [Query](api-reference-old/api-reference-6x/core-package/classes/query-class)


**Returns** `void`


---
### registerQueryStorageResolver
▸ registerQueryStorageResolver(resolver: (context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)) => [QueryStorage](api-reference-old/api-reference-6x/core-package/interfaces/querystorage-interface)): `void`

#### Parameters:
- resolver: (context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)) => [QueryStorage](api-reference-old/api-reference-6x/core-package/interfaces/querystorage-interface)


**Returns** `void`


---
### registerQuerySyncronizerResolver
▸ registerQuerySyncronizerResolver(resolver: (context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)) => [QuerySynchronizer](api-reference-old/api-reference-6x/core-package/interfaces/querysynchronizer-interface)): `void`

#### Parameters:
- resolver: (context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)) => [QuerySynchronizer](api-reference-old/api-reference-6x/core-package/interfaces/querysynchronizer-interface)


**Returns** `void`


---
### registerValueListResolver
▸ registerValueListResolver(resolver: (context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)) => [EqValueListResolver](api-reference-old/api-reference-6x/core-package/interfaces/eqvaluelistresolver-interface)): `void`

#### Parameters:
- resolver: (context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)) => [EqValueListResolver](api-reference-old/api-reference-6x/core-package/interfaces/eqvaluelistresolver-interface)


**Returns** `void`


---
### reset
▸ reset(): `void`


**Returns** `void`


---
