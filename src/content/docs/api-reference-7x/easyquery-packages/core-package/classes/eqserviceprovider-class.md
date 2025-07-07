---
title: EqServiceProvider class
slug: >-
  api-reference-7x/easyquery-packages/core-package/classes/eqserviceprovider-class
sidebar:
  order: 100
---

## Index
### [Constructors](api-reference-7x/easyquery-packages/core-package/classes/eqserviceprovider-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/core-package/classes/eqserviceprovider-class#constructor)

### [Protected Properties](api-reference-7x/easyquery-packages/core-package/classes/eqserviceprovider-class#protected-properties-1)
- [context](api-reference-7x/easyquery-packages/core-package/classes/eqserviceprovider-class#context)

### [Public Methods](api-reference-7x/easyquery-packages/core-package/classes/eqserviceprovider-class#public-methods-1)
- [createDataModel](api-reference-7x/easyquery-packages/core-package/classes/eqserviceprovider-class#createdatamodel)
- [createQuery](api-reference-7x/easyquery-packages/core-package/classes/eqserviceprovider-class#createquery)
- [getDataFetcher](api-reference-7x/easyquery-packages/core-package/classes/eqserviceprovider-class#getdatafetcher)
- [getHttpClient](api-reference-7x/easyquery-packages/core-package/classes/eqserviceprovider-class#gethttpclient)
- [getModelLoader](api-reference-7x/easyquery-packages/core-package/classes/eqserviceprovider-class#getmodelloader)
- [getQueryFileLoader](api-reference-7x/easyquery-packages/core-package/classes/eqserviceprovider-class#getqueryfileloader)
- [getQueryStorage](api-reference-7x/easyquery-packages/core-package/classes/eqserviceprovider-class#getquerystorage)
- [getQuerySynchronizer](api-reference-7x/easyquery-packages/core-package/classes/eqserviceprovider-class#getquerysynchronizer)
- [getTotalCalculator](api-reference-7x/easyquery-packages/core-package/classes/eqserviceprovider-class#gettotalcalculator)
- [getValueListResolver](api-reference-7x/easyquery-packages/core-package/classes/eqserviceprovider-class#getvaluelistresolver)
- [registerDataFetcherResolver](api-reference-7x/easyquery-packages/core-package/classes/eqserviceprovider-class#registerdatafetcherresolver)
- [registerDataModelResolver](api-reference-7x/easyquery-packages/core-package/classes/eqserviceprovider-class#registerdatamodelresolver)
- [registerModelLoaderResolver](api-reference-7x/easyquery-packages/core-package/classes/eqserviceprovider-class#registermodelloaderresolver)
- [registerQueryFileLoaderResolver](api-reference-7x/easyquery-packages/core-package/classes/eqserviceprovider-class#registerqueryfileloaderresolver)
- [registerQueryResolver](api-reference-7x/easyquery-packages/core-package/classes/eqserviceprovider-class#registerqueryresolver)
- [registerQueryStorageResolver](api-reference-7x/easyquery-packages/core-package/classes/eqserviceprovider-class#registerquerystorageresolver)
- [registerQuerySyncronizerResolver](api-reference-7x/easyquery-packages/core-package/classes/eqserviceprovider-class#registerquerysyncronizerresolver)
- [registerTotalCalculator](api-reference-7x/easyquery-packages/core-package/classes/eqserviceprovider-class#registertotalcalculator)
- [registerValueListResolver](api-reference-7x/easyquery-packages/core-package/classes/eqserviceprovider-class#registervaluelistresolver)
- [reset](api-reference-7x/easyquery-packages/core-package/classes/eqserviceprovider-class#reset)


## Constructors

---
#### constructor

⊕ new EqServiceProvider(context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)): [EqServiceProvider](api-reference-7x/easyquery-packages/core-package/classes/eqserviceprovider-class)

#### Parameters:
- context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)


---

## Protected Properties

---
### context

● context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)

---
## Public Methods

---
### createDataModel
▸ createDataModel(): [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class)


**Returns** [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class)


---
### createQuery
▸ createQuery(): [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)


**Returns** [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)


---
### getDataFetcher
▸ getDataFetcher(): [DataFetcher](api-reference-7x/easyquery-packages/core-package/interfaces/datafetcher-interface)


**Returns** [DataFetcher](api-reference-7x/easyquery-packages/core-package/interfaces/datafetcher-interface)


---
### getHttpClient
▸ getHttpClient(): `HttpClient`


**Returns** `HttpClient`


---
### getModelLoader
▸ getModelLoader(): [EqModelLoader](api-reference-7x/easyquery-packages/core-package/classes/eqmodelloader-class)


**Returns** [EqModelLoader](api-reference-7x/easyquery-packages/core-package/classes/eqmodelloader-class)


---
### getQueryFileLoader
▸ getQueryFileLoader(): [QueryFileLoader](api-reference-7x/easyquery-packages/core-package/interfaces/queryfileloader-interface)


**Returns** [QueryFileLoader](api-reference-7x/easyquery-packages/core-package/interfaces/queryfileloader-interface)


---
### getQueryStorage
▸ getQueryStorage(): [QueryStorage](api-reference-7x/easyquery-packages/core-package/interfaces/querystorage-interface)


**Returns** [QueryStorage](api-reference-7x/easyquery-packages/core-package/interfaces/querystorage-interface)


---
### getQuerySynchronizer
▸ getQuerySynchronizer(): [QuerySynchronizer](api-reference-7x/easyquery-packages/core-package/interfaces/querysynchronizer-interface)


**Returns** [QuerySynchronizer](api-reference-7x/easyquery-packages/core-package/interfaces/querysynchronizer-interface)


---
### getTotalCalculator
▸ getTotalCalculator(): `TotalsCalculator`


**Returns** `TotalsCalculator`


---
### getValueListResolver
▸ getValueListResolver(): [EqValueListResolver](api-reference-7x/easyquery-packages/core-package/interfaces/eqvaluelistresolver-interface)


**Returns** [EqValueListResolver](api-reference-7x/easyquery-packages/core-package/interfaces/eqvaluelistresolver-interface)


---
### registerDataFetcherResolver
▸ registerDataFetcherResolver(resolver: (context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)) => [DataFetcher](api-reference-7x/easyquery-packages/core-package/interfaces/datafetcher-interface)): `void`

#### Parameters:
- resolver: (context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)) => [DataFetcher](api-reference-7x/easyquery-packages/core-package/interfaces/datafetcher-interface)


**Returns** `void`


---
### registerDataModelResolver
▸ registerDataModelResolver(resolver: (context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)) => [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class)): `void`

#### Parameters:
- resolver: (context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)) => [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class)


**Returns** `void`


---
### registerModelLoaderResolver
▸ registerModelLoaderResolver(resolver: (context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)) => [EqModelLoader](api-reference-7x/easyquery-packages/core-package/classes/eqmodelloader-class)): `void`

#### Parameters:
- resolver: (context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)) => [EqModelLoader](api-reference-7x/easyquery-packages/core-package/classes/eqmodelloader-class)


**Returns** `void`


---
### registerQueryFileLoaderResolver
▸ registerQueryFileLoaderResolver(resolver: (context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)) => [QueryFileLoader](api-reference-7x/easyquery-packages/core-package/interfaces/queryfileloader-interface)): `void`

#### Parameters:
- resolver: (context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)) => [QueryFileLoader](api-reference-7x/easyquery-packages/core-package/interfaces/queryfileloader-interface)


**Returns** `void`


---
### registerQueryResolver
▸ registerQueryResolver(resolver: (context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)) => [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)): `void`

#### Parameters:
- resolver: (context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)) => [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)


**Returns** `void`


---
### registerQueryStorageResolver
▸ registerQueryStorageResolver(resolver: (context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)) => [QueryStorage](api-reference-7x/easyquery-packages/core-package/interfaces/querystorage-interface)): `void`

#### Parameters:
- resolver: (context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)) => [QueryStorage](api-reference-7x/easyquery-packages/core-package/interfaces/querystorage-interface)


**Returns** `void`


---
### registerQuerySyncronizerResolver
▸ registerQuerySyncronizerResolver(resolver: (context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)) => [QuerySynchronizer](api-reference-7x/easyquery-packages/core-package/interfaces/querysynchronizer-interface)): `void`

#### Parameters:
- resolver: (context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)) => [QuerySynchronizer](api-reference-7x/easyquery-packages/core-package/interfaces/querysynchronizer-interface)


**Returns** `void`


---
### registerTotalCalculator
▸ registerTotalCalculator(resolver: (context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)) => `TotalsCalculator`): `void`

#### Parameters:
- resolver: (context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)) => `TotalsCalculator`


**Returns** `void`


---
### registerValueListResolver
▸ registerValueListResolver(resolver: (context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)) => [EqValueListResolver](api-reference-7x/easyquery-packages/core-package/interfaces/eqvaluelistresolver-interface)): `void`

#### Parameters:
- resolver: (context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)) => [EqValueListResolver](api-reference-7x/easyquery-packages/core-package/interfaces/eqvaluelistresolver-interface)


**Returns** `void`


---
### reset
▸ reset(): `void`


**Returns** `void`


---
