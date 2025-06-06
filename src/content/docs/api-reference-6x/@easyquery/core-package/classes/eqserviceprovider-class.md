---
title: EqServiceProvider class
slug: api-reference-6x/@easyquery/core-package/classes/eqserviceprovider-class
sidebar:
  order: 100
---

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqserviceprovider-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqserviceprovider-class/#constructor)

### [Public Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqserviceprovider-class/#public-methods-1)
- [createDataModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqserviceprovider-class/#createdatamodel)
- [createQuery](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqserviceprovider-class/#createquery)
- [getHttpClient](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqserviceprovider-class/#gethttpclient)
- [getModelLoader](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqserviceprovider-class/#getmodelloader)
- [getQueryExecutor](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqserviceprovider-class/#getqueryexecutor)
- [getQueryStorage](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqserviceprovider-class/#getquerystorage)
- [getQuerySynchronizer](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqserviceprovider-class/#getquerysynchronizer)
- [getValueListResolver](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqserviceprovider-class/#getvaluelistresolver)
- [registerDataModelResolver](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqserviceprovider-class/#registerdatamodelresolver)
- [registerModelLoaderResolver](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqserviceprovider-class/#registermodelloaderresolver)
- [registerQueryExecutorResolver](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqserviceprovider-class/#registerqueryexecutorresolver)
- [registerQueryResolver](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqserviceprovider-class/#registerqueryresolver)
- [registerQueryStorageResolver](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqserviceprovider-class/#registerquerystorageresolver)
- [registerQuerySyncronizerResolver](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqserviceprovider-class/#registerquerysyncronizerresolver)
- [registerValueListResolver](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqserviceprovider-class/#registervaluelistresolver)
- [reset](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqserviceprovider-class/#reset)


## Constructors

---
#### constructor

⊕ new EqServiceProvider(): [EqServiceProvider](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqserviceprovider-class)


---

## Public Methods

---
### createDataModel
▸ createDataModel(context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)): [DataModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/datamodel-class)

#### Parameters:
- context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)


**Returns** [DataModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/datamodel-class)


---
### createQuery
▸ createQuery(context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)): [Query](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/query-class)

#### Parameters:
- context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)


**Returns** [Query](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/query-class)


---
### getHttpClient
▸ getHttpClient(): [HttpClient](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classeshttpclient-class)


**Returns** [HttpClient](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classeshttpclient-class)


---
### getModelLoader
▸ getModelLoader(context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)): [EqModelLoader](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqmodelloader-class)

#### Parameters:
- context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)


**Returns** [EqModelLoader](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqmodelloader-class)


---
### getQueryExecutor
▸ getQueryExecutor(context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)): [QueryExecutor](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/queryexecutor-interface)

#### Parameters:
- context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)


**Returns** [QueryExecutor](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/queryexecutor-interface)


---
### getQueryStorage
▸ getQueryStorage(context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)): [QueryStorage](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/querystorage-interface)

#### Parameters:
- context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)


**Returns** [QueryStorage](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/querystorage-interface)


---
### getQuerySynchronizer
▸ getQuerySynchronizer(context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)): [QuerySynchronizer](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/querysynchronizer-interface)

#### Parameters:
- context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)


**Returns** [QuerySynchronizer](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/querysynchronizer-interface)


---
### getValueListResolver
▸ getValueListResolver(context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)): [EqValueListResolver](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/eqvaluelistresolver-interface)

#### Parameters:
- context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)


**Returns** [EqValueListResolver](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/eqvaluelistresolver-interface)


---
### registerDataModelResolver
▸ registerDataModelResolver(resolver: (context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)) => [DataModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/datamodel-class)): `void`

#### Parameters:
- resolver: (context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)) => [DataModel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/datamodel-class)


**Returns** `void`


---
### registerModelLoaderResolver
▸ registerModelLoaderResolver(resolver: (context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)) => [EqModelLoader](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqmodelloader-class)): `void`

#### Parameters:
- resolver: (context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)) => [EqModelLoader](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqmodelloader-class)


**Returns** `void`


---
### registerQueryExecutorResolver
▸ registerQueryExecutorResolver(resolver: (context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)) => [QueryExecutor](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/queryexecutor-interface)): `void`

#### Parameters:
- resolver: (context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)) => [QueryExecutor](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/queryexecutor-interface)


**Returns** `void`


---
### registerQueryResolver
▸ registerQueryResolver(resolver: (context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)) => [Query](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/query-class)): `void`

#### Parameters:
- resolver: (context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)) => [Query](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/query-class)


**Returns** `void`


---
### registerQueryStorageResolver
▸ registerQueryStorageResolver(resolver: (context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)) => [QueryStorage](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/querystorage-interface)): `void`

#### Parameters:
- resolver: (context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)) => [QueryStorage](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/querystorage-interface)


**Returns** `void`


---
### registerQuerySyncronizerResolver
▸ registerQuerySyncronizerResolver(resolver: (context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)) => [QuerySynchronizer](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/querysynchronizer-interface)): `void`

#### Parameters:
- resolver: (context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)) => [QuerySynchronizer](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/querysynchronizer-interface)


**Returns** `void`


---
### registerValueListResolver
▸ registerValueListResolver(resolver: (context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)) => [EqValueListResolver](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/eqvaluelistresolver-interface)): `void`

#### Parameters:
- resolver: (context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)) => [EqValueListResolver](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/eqvaluelistresolver-interface)


**Returns** `void`


---
### reset
▸ reset(): `void`


**Returns** `void`


---
