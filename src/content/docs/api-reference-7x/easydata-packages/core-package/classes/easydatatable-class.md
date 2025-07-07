---
title: EasyDataTable class
slug: api-reference-7x/easydata-packages/core-package/classes/easydatatable-class
sidebar:
  order: 100
---

## Index
### [Constructors](api-reference-7x/easydata-packages/core-package/classes/easydatatable-class#constructors-1)
- [constructor](api-reference-7x/easydata-packages/core-package/classes/easydatatable-class#constructor)

### [Public Properties](api-reference-7x/easydata-packages/core-package/classes/easydatatable-class#public-properties-1)
- [id](api-reference-7x/easydata-packages/core-package/classes/easydatatable-class#id)

### [Public Accessors](api-reference-7x/easydata-packages/core-package/classes/easydatatable-class#public-accessors-1)
- [chunkSize](api-reference-7x/easydata-packages/core-package/classes/easydatatable-class#chunksize)
- [columns](api-reference-7x/easydata-packages/core-package/classes/easydatatable-class#columns)

### [Public Methods](api-reference-7x/easydata-packages/core-package/classes/easydatatable-class#public-methods-1)
- [addRow](api-reference-7x/easydata-packages/core-package/classes/easydatatable-class#addrow)
- [clear](api-reference-7x/easydata-packages/core-package/classes/easydatatable-class#clear)
- [getCachedChunks](api-reference-7x/easydata-packages/core-package/classes/easydatatable-class#getcachedchunks)
- [getCachedCount](api-reference-7x/easydata-packages/core-package/classes/easydatatable-class#getcachedcount)
- [getCachedRows](api-reference-7x/easydata-packages/core-package/classes/easydatatable-class#getcachedrows)
- [getRow](api-reference-7x/easydata-packages/core-package/classes/easydatatable-class#getrow)
- [getRows](api-reference-7x/easydata-packages/core-package/classes/easydatatable-class#getrows)
- [getTotal](api-reference-7x/easydata-packages/core-package/classes/easydatatable-class#gettotal)
- [setTotal](api-reference-7x/easydata-packages/core-package/classes/easydatatable-class#settotal)

### [Protected Methods](api-reference-7x/easydata-packages/core-package/classes/easydatatable-class#protected-methods-1)
- [createChunk](api-reference-7x/easydata-packages/core-package/classes/easydatatable-class#createchunk)
- [createRow](api-reference-7x/easydata-packages/core-package/classes/easydatatable-class#createrow)


## Constructors

---
#### constructor

⊕ new EasyDataTable(options?: [EasyDataTableOptions](api-reference-7x/easydata-packages/core-package/interfaces/easydatatableoptions-interface)): [EasyDataTable](api-reference-7x/easydata-packages/core-package/classes/easydatatable-class)

#### Parameters:
- options: [EasyDataTableOptions](api-reference-7x/easydata-packages/core-package/interfaces/easydatatableoptions-interface), *Optional* 


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
⇄ get columns(): [DataColumnList](api-reference-7x/easydata-packages/core-package/classes/datacolumnlist-class)


**Returns** [DataColumnList](api-reference-7x/easydata-packages/core-package/classes/datacolumnlist-class)


---
## Public Methods

---
### addRow
▸ addRow(rowOrValue: `any`[] | [DataRow](api-reference-7x/easydata-packages/core-package/classes/datarow-class)): [DataRow](api-reference-7x/easydata-packages/core-package/classes/datarow-class)

#### Parameters:
- rowOrValue: `any`[] | [DataRow](api-reference-7x/easydata-packages/core-package/classes/datarow-class)


**Returns** [DataRow](api-reference-7x/easydata-packages/core-package/classes/datarow-class)


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
▸ getCachedRows(): [DataRow](api-reference-7x/easydata-packages/core-package/classes/datarow-class)[]


**Returns** [DataRow](api-reference-7x/easydata-packages/core-package/classes/datarow-class)[]


---
### getRow
▸ getRow(index: `number`): `Promise`&lt;[DataRow](api-reference-7x/easydata-packages/core-package/classes/datarow-class) | `null`&gt;

#### Parameters:
- index: `number`


**Returns** `Promise`&lt;[DataRow](api-reference-7x/easydata-packages/core-package/classes/datarow-class) | `null`&gt;


---
### getRows
▸ getRows(params?: `GetRowsParams`): `Promise`&lt;`Array`&lt;[DataRow](api-reference-7x/easydata-packages/core-package/classes/datarow-class)&gt;&gt;

#### Parameters:
- params: `GetRowsParams`, *Optional* 


**Returns** `Promise`&lt;`Array`&lt;[DataRow](api-reference-7x/easydata-packages/core-package/classes/datarow-class)&gt;&gt;


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
▸ createRow(dataOrRow?: [DataRow](api-reference-7x/easydata-packages/core-package/classes/datarow-class) | `any`): [DataRow](api-reference-7x/easydata-packages/core-package/classes/datarow-class)

#### Parameters:
- dataOrRow: [DataRow](api-reference-7x/easydata-packages/core-package/classes/datarow-class) | `any`, *Optional* 


**Returns** [DataRow](api-reference-7x/easydata-packages/core-package/classes/datarow-class)


---
