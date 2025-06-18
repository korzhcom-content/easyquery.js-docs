---
title: EasyDataTable class
slug: api-reference-7x/easydata-packages/core-package/classes/easydatatable-class
sidebar:
  order: 100
---

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/easydatatable-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/easydatatable-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/easydatatable-class/#public-properties-1)
- [id](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/easydatatable-class/#id)

### [Public Accessors](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/easydatatable-class/#public-accessors-1)
- [chunkSize](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/easydatatable-class/#chunksize)
- [columns](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/easydatatable-class/#columns)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/easydatatable-class/#public-methods-1)
- [addRow](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/easydatatable-class/#addrow)
- [clear](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/easydatatable-class/#clear)
- [getCachedChunks](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/easydatatable-class/#getcachedchunks)
- [getCachedCount](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/easydatatable-class/#getcachedcount)
- [getCachedRows](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/easydatatable-class/#getcachedrows)
- [getRow](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/easydatatable-class/#getrow)
- [getRows](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/easydatatable-class/#getrows)
- [getTotal](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/easydatatable-class/#gettotal)
- [setTotal](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/easydatatable-class/#settotal)

### [Protected Methods](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/easydatatable-class/#protected-methods-1)
- [createChunk](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/easydatatable-class/#createchunk)
- [createRow](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/easydatatable-class/#createrow)


## Constructors

---
#### constructor

⊕ new EasyDataTable(options?: [EasyDataTableOptions](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/interfaces/easydatatableoptions-interface)): [EasyDataTable](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/easydatatable-class)

#### Parameters:
- options: [EasyDataTableOptions](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/interfaces/easydatatableoptions-interface), *Optional* 


---

## Public Properties

---
### id

● id: `string`

---
## Public Accessors

---
### chunkSize
⇄ get chunkSize(): `number`


**Returns** `number`


---
⇄ set chunkSize(value: `number`): `void`

#### Parameters:
- value: `number`


**Returns** `void`


---
### columns
⇄ get columns(): [DataColumnList](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datacolumnlist-class)


**Returns** [DataColumnList](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datacolumnlist-class)


---
## Public Methods

---
### addRow
▸ addRow(rowOrValue: `any`[] | [DataRow](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datarow-class)): [DataRow](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datarow-class)

#### Parameters:
- rowOrValue: `any`[] | [DataRow](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datarow-class)


**Returns** [DataRow](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datarow-class)


---
### clear
▸ clear(): `void`


**Returns** `void`


---
### getCachedChunks
▸ getCachedChunks(): `CachedChunk`[]


**Returns** `CachedChunk`[]


---
### getCachedCount
▸ getCachedCount(): `number`


**Returns** `number`


---
### getCachedRows
▸ getCachedRows(): [DataRow](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datarow-class)[]


**Returns** [DataRow](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datarow-class)[]


---
### getRow
▸ getRow(index: `number`): `Promise`&lt;[DataRow](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datarow-class) | `null`&gt;

#### Parameters:
- index: `number`


**Returns** `Promise`&lt;[DataRow](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datarow-class) | `null`&gt;


---
### getRows
▸ getRows(params?: `GetRowsParams`): `Promise`&lt;`Array`&lt;[DataRow](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datarow-class)&gt;&gt;

#### Parameters:
- params: `GetRowsParams`, *Optional* 


**Returns** `Promise`&lt;`Array`&lt;[DataRow](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datarow-class)&gt;&gt;


---
### getTotal
▸ getTotal(): `number`


**Returns** `number`


---
### setTotal
▸ setTotal(total: `number`): `void`

#### Parameters:
- total: `number`


**Returns** `void`


---
## Protected Methods

---
### createChunk
▸ createChunk(index?: `number`): `CachedChunk`

#### Parameters:
- index: `number`, *Optional* 


**Returns** `CachedChunk`


---
### createRow
▸ createRow(dataOrRow?: [DataRow](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datarow-class) | `any`): [DataRow](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datarow-class)

#### Parameters:
- dataOrRow: [DataRow](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datarow-class) | `any`, *Optional* 


**Returns** [DataRow](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datarow-class)


---
