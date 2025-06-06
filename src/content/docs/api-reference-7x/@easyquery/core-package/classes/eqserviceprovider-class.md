---
title: EqServiceProvider class
slug: api-reference-7x/@easyquery/core-package/classes/eqserviceprovider-class
sidebar:
  order: 100
---

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqserviceprovider-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqserviceprovider-class/#constructor)

### [Protected Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqserviceprovider-class/#protected-properties-1)
- [context](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqserviceprovider-class/#context)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqserviceprovider-class/#public-methods-1)
- [createDataModel](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqserviceprovider-class/#createdatamodel)
- [createQuery](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqserviceprovider-class/#createquery)
- [getDataFetcher](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqserviceprovider-class/#getdatafetcher)
- [getHttpClient](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqserviceprovider-class/#gethttpclient)
- [getModelLoader](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqserviceprovider-class/#getmodelloader)
- [getQueryFileLoader](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqserviceprovider-class/#getqueryfileloader)
- [getQueryStorage](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqserviceprovider-class/#getquerystorage)
- [getQuerySynchronizer](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqserviceprovider-class/#getquerysynchronizer)
- [getTotalCalculator](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqserviceprovider-class/#gettotalcalculator)
- [getValueListResolver](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqserviceprovider-class/#getvaluelistresolver)
- [registerDataFetcherResolver](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqserviceprovider-class/#registerdatafetcherresolver)
- [registerDataModelResolver](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqserviceprovider-class/#registerdatamodelresolver)
- [registerModelLoaderResolver](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqserviceprovider-class/#registermodelloaderresolver)
- [registerQueryFileLoaderResolver](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqserviceprovider-class/#registerqueryfileloaderresolver)
- [registerQueryResolver](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqserviceprovider-class/#registerqueryresolver)
- [registerQueryStorageResolver](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqserviceprovider-class/#registerquerystorageresolver)
- [registerQuerySyncronizerResolver](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqserviceprovider-class/#registerquerysyncronizerresolver)
- [registerTotalCalculator](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqserviceprovider-class/#registertotalcalculator)
- [registerValueListResolver](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqserviceprovider-class/#registervaluelistresolver)
- [reset](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqserviceprovider-class/#reset)


## Constructors

---
#### constructor

⊕ new EqServiceProvider(context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)): [EqServiceProvider](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqserviceprovider-class)

#### Parameters:
- context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)


---

## Protected Properties

---
### context

● context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)

---
## Public Methods

---
### createDataModel
▸ createDataModel(): [DataModel](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/datamodel-class)


**Returns** [DataModel](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/datamodel-class)


---
### createQuery
▸ createQuery(): [Query](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/query-class)


**Returns** [Query](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/query-class)


---
### getDataFetcher
▸ getDataFetcher(): [DataFetcher](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/datafetcher-interface)


**Returns** [DataFetcher](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/datafetcher-interface)


---
### getHttpClient
▸ getHttpClient(): `HttpClient`


**Returns** `HttpClient`


---
### getModelLoader
▸ getModelLoader(): [EqModelLoader](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqmodelloader-class)


**Returns** [EqModelLoader](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqmodelloader-class)


---
### getQueryFileLoader
▸ getQueryFileLoader(): [QueryFileLoader](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/queryfileloader-interface)


**Returns** [QueryFileLoader](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/queryfileloader-interface)


---
### getQueryStorage
▸ getQueryStorage(): [QueryStorage](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/querystorage-interface)


**Returns** [QueryStorage](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/querystorage-interface)


---
### getQuerySynchronizer
▸ getQuerySynchronizer(): [QuerySynchronizer](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/querysynchronizer-interface)


**Returns** [QuerySynchronizer](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/querysynchronizer-interface)


---
### getTotalCalculator
▸ getTotalCalculator(): `TotalsCalculator`


**Returns** `TotalsCalculator`


---
### getValueListResolver
▸ getValueListResolver(): [EqValueListResolver](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/eqvaluelistresolver-interface)


**Returns** [EqValueListResolver](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/eqvaluelistresolver-interface)


---
### registerDataFetcherResolver
▸ registerDataFetcherResolver(resolver: (context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)) => [DataFetcher](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/datafetcher-interface)): `void`

#### Parameters:
- resolver: (context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)) => [DataFetcher](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/datafetcher-interface)


**Returns** `void`


---
### registerDataModelResolver
▸ registerDataModelResolver(resolver: (context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)) => [DataModel](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/datamodel-class)): `void`

#### Parameters:
- resolver: (context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)) => [DataModel](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/datamodel-class)


**Returns** `void`


---
### registerModelLoaderResolver
▸ registerModelLoaderResolver(resolver: (context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)) => [EqModelLoader](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqmodelloader-class)): `void`

#### Parameters:
- resolver: (context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)) => [EqModelLoader](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqmodelloader-class)


**Returns** `void`


---
### registerQueryFileLoaderResolver
▸ registerQueryFileLoaderResolver(resolver: (context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)) => [QueryFileLoader](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/queryfileloader-interface)): `void`

#### Parameters:
- resolver: (context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)) => [QueryFileLoader](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/queryfileloader-interface)


**Returns** `void`


---
### registerQueryResolver
▸ registerQueryResolver(resolver: (context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)) => [Query](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/query-class)): `void`

#### Parameters:
- resolver: (context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)) => [Query](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/query-class)


**Returns** `void`


---
### registerQueryStorageResolver
▸ registerQueryStorageResolver(resolver: (context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)) => [QueryStorage](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/querystorage-interface)): `void`

#### Parameters:
- resolver: (context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)) => [QueryStorage](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/querystorage-interface)


**Returns** `void`


---
### registerQuerySyncronizerResolver
▸ registerQuerySyncronizerResolver(resolver: (context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)) => [QuerySynchronizer](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/querysynchronizer-interface)): `void`

#### Parameters:
- resolver: (context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)) => [QuerySynchronizer](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/querysynchronizer-interface)


**Returns** `void`


---
### registerTotalCalculator
▸ registerTotalCalculator(resolver: (context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)) => `TotalsCalculator`): `void`

#### Parameters:
- resolver: (context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)) => `TotalsCalculator`


**Returns** `void`


---
### registerValueListResolver
▸ registerValueListResolver(resolver: (context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)) => [EqValueListResolver](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/eqvaluelistresolver-interface)): `void`

#### Parameters:
- resolver: (context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)) => [EqValueListResolver](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/eqvaluelistresolver-interface)


**Returns** `void`


---
### reset
▸ reset(): `void`


**Returns** `void`


---
