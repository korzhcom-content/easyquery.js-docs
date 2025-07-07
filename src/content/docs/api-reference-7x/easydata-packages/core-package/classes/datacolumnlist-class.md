---
title: DataColumnList class
slug: api-reference-7x/easydata-packages/core-package/classes/datacolumnlist-class
sidebar:
  order: 100
---

## Index
### [Constructors](api-reference-7x/easydata-packages/core-package/classes/datacolumnlist-class#constructors-1)
- [constructor](api-reference-7x/easydata-packages/core-package/classes/datacolumnlist-class#constructor)

### [Public Accessors](api-reference-7x/easydata-packages/core-package/classes/datacolumnlist-class#public-accessors-1)
- [count](api-reference-7x/easydata-packages/core-package/classes/datacolumnlist-class#count)

### [Public Methods](api-reference-7x/easydata-packages/core-package/classes/datacolumnlist-class#public-methods-1)
- [add](api-reference-7x/easydata-packages/core-package/classes/datacolumnlist-class#add)
- [clear](api-reference-7x/easydata-packages/core-package/classes/datacolumnlist-class#clear)
- [get](api-reference-7x/easydata-packages/core-package/classes/datacolumnlist-class#get)
- [getDateColumnIndexes](api-reference-7x/easydata-packages/core-package/classes/datacolumnlist-class#getdatecolumnindexes)
- [getIndex](api-reference-7x/easydata-packages/core-package/classes/datacolumnlist-class#getindex)
- [getItems](api-reference-7x/easydata-packages/core-package/classes/datacolumnlist-class#getitems)
- [move](api-reference-7x/easydata-packages/core-package/classes/datacolumnlist-class#move)
- [put](api-reference-7x/easydata-packages/core-package/classes/datacolumnlist-class#put)
- [removeAt](api-reference-7x/easydata-packages/core-package/classes/datacolumnlist-class#removeat)


## Constructors

---
#### constructor

⊕ new DataColumnList(): [DataColumnList](api-reference-7x/easydata-packages/core-package/classes/datacolumnlist-class)


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
▸ add(colOrDesc: [DataColumn](api-reference-7x/easydata-packages/core-package/classes/datacolumn-class) | [DataColumnDescriptor](api-reference-7x/easydata-packages/core-package/interfaces/datacolumndescriptor-interface)): `number`

#### Parameters:
- colOrDesc: [DataColumn](api-reference-7x/easydata-packages/core-package/classes/datacolumn-class) | [DataColumnDescriptor](api-reference-7x/easydata-packages/core-package/interfaces/datacolumndescriptor-interface)


**Returns** `number`


---
### clear
▸ clear(): `void`


**Returns** `void`


---
### get
▸ get(index: `number`): [DataColumn](api-reference-7x/easydata-packages/core-package/classes/datacolumn-class)

#### Parameters:
- index: `number`


**Returns** [DataColumn](api-reference-7x/easydata-packages/core-package/classes/datacolumn-class)


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
▸ getItems(): [DataColumn](api-reference-7x/easydata-packages/core-package/classes/datacolumn-class)[]


**Returns** [DataColumn](api-reference-7x/easydata-packages/core-package/classes/datacolumn-class)[]


---
### move
▸ move(col: [DataColumn](api-reference-7x/easydata-packages/core-package/classes/datacolumn-class),newIndex: `number`): `void`

#### Parameters:
- col: [DataColumn](api-reference-7x/easydata-packages/core-package/classes/datacolumn-class)
- newIndex: `number`


**Returns** `void`


---
### put
▸ put(index: `number`,col: [DataColumn](api-reference-7x/easydata-packages/core-package/classes/datacolumn-class)): `void`

#### Parameters:
- index: `number`
- col: [DataColumn](api-reference-7x/easydata-packages/core-package/classes/datacolumn-class)


**Returns** `void`


---
### removeAt
▸ removeAt(index: `number`): `void`

#### Parameters:
- index: `number`


**Returns** `void`


---
