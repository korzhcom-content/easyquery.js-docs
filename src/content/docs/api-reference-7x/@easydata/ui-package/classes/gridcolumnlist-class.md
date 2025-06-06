---
title: GridColumnList class
slug: api-reference-7x/@easydata/ui-package/classes/gridcolumnlist-class
sidebar:
  order: 100
---

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcolumnlist-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcolumnlist-class/#constructor)

### [Public Accessors](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcolumnlist-class/#public-accessors-1)
- [count](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcolumnlist-class/#count)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcolumnlist-class/#public-methods-1)
- [add](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcolumnlist-class/#add)
- [clear](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcolumnlist-class/#clear)
- [get](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcolumnlist-class/#get)
- [getItems](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcolumnlist-class/#getitems)
- [move](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcolumnlist-class/#move)
- [put](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcolumnlist-class/#put)
- [removeAt](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcolumnlist-class/#removeat)
- [sync](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcolumnlist-class/#sync)


## Constructors

---
#### constructor

⊕ new GridColumnList(columnList: [DataColumnList](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datacolumnlist-class),grid: [EasyGrid](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class)): [GridColumnList](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcolumnlist-class)

#### Parameters:
- columnList: [DataColumnList](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datacolumnlist-class)
- grid: [EasyGrid](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class)


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
▸ add(col: [GridColumn](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcolumn-class)): `number`

#### Parameters:
- col: [GridColumn](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcolumn-class)


**Returns** `number`


---
### clear
▸ clear(): `void`


**Returns** `void`


---
### get
▸ get(index: `number`): [GridColumn](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcolumn-class)

#### Parameters:
- index: `number`


**Returns** [GridColumn](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcolumn-class)


---
### getItems
▸ getItems(): [GridColumn](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcolumn-class)[]


**Returns** [GridColumn](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcolumn-class)[]


---
### move
▸ move(col: [GridColumn](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcolumn-class),newIndex: `number`): `void`

#### Parameters:
- col: [GridColumn](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcolumn-class)
- newIndex: `number`


**Returns** `void`


---
### put
▸ put(index: `number`,col: [GridColumn](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcolumn-class)): `void`

#### Parameters:
- index: `number`
- col: [GridColumn](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcolumn-class)


**Returns** `void`


---
### removeAt
▸ removeAt(index: `number`): `void`

#### Parameters:
- index: `number`


**Returns** `void`


---
### sync
▸ sync(columnList: [DataColumnList](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datacolumnlist-class),hasRowNumCol?: `boolean`): `void`

#### Parameters:
- columnList: [DataColumnList](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datacolumnlist-class)
- hasRowNumCol: `boolean`, *Default value* = `true`


**Returns** `void`


---
