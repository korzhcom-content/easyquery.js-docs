---
title: DataColumnList class
slug: api-reference-7x/easydata-packages/core-package/classes/datacolumnlist-class
sidebar:
  order: 100
---

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datacolumnlist-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datacolumnlist-class/#constructor)

### [Public Accessors](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datacolumnlist-class/#public-accessors-1)
- [count](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datacolumnlist-class/#count)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datacolumnlist-class/#public-methods-1)
- [add](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datacolumnlist-class/#add)
- [clear](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datacolumnlist-class/#clear)
- [get](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datacolumnlist-class/#get)
- [getDateColumnIndexes](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datacolumnlist-class/#getdatecolumnindexes)
- [getIndex](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datacolumnlist-class/#getindex)
- [getItems](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datacolumnlist-class/#getitems)
- [move](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datacolumnlist-class/#move)
- [put](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datacolumnlist-class/#put)
- [removeAt](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datacolumnlist-class/#removeat)


## Constructors

---
#### constructor

⊕ new DataColumnList(): [DataColumnList](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datacolumnlist-class)


---

## Public Accessors

---
### count
⇄ get count(): `number`


**Returns** `number`


---
## Public Methods

---
### add
▸ add(colOrDesc: [DataColumn](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datacolumn-class) | [DataColumnDescriptor](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/interfaces/datacolumndescriptor-interface)): `number`

#### Parameters:
- colOrDesc: [DataColumn](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datacolumn-class) | [DataColumnDescriptor](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/interfaces/datacolumndescriptor-interface)


**Returns** `number`


---
### clear
▸ clear(): `void`


**Returns** `void`


---
### get
▸ get(index: `number`): [DataColumn](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datacolumn-class)

#### Parameters:
- index: `number`


**Returns** [DataColumn](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datacolumn-class)


---
### getDateColumnIndexes
▸ getDateColumnIndexes(): `number`[]


**Returns** `number`[]


---
### getIndex
▸ getIndex(id: `string`): `number` | `undefined`

#### Parameters:
- id: `string`


**Returns** `number` | `undefined`


---
### getItems
▸ getItems(): [DataColumn](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datacolumn-class)[]


**Returns** [DataColumn](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datacolumn-class)[]


---
### move
▸ move(col: [DataColumn](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datacolumn-class),newIndex: `number`): `void`

#### Parameters:
- col: [DataColumn](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datacolumn-class)
- newIndex: `number`


**Returns** `void`


---
### put
▸ put(index: `number`,col: [DataColumn](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datacolumn-class)): `void`

#### Parameters:
- index: `number`
- col: [DataColumn](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datacolumn-class)


**Returns** `void`


---
### removeAt
▸ removeAt(index: `number`): `void`

#### Parameters:
- index: `number`


**Returns** `void`


---
