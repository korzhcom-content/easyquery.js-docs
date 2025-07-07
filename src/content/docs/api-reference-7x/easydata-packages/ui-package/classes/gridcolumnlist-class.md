---
title: GridColumnList class
slug: api-reference-7x/easydata-packages/ui-package/classes/gridcolumnlist-class
sidebar:
  order: 100
---

## Index
### [Constructors](api-reference-7x/easydata-packages/ui-package/classes/gridcolumnlist-class#constructors-1)
- [constructor](api-reference-7x/easydata-packages/ui-package/classes/gridcolumnlist-class#constructor)

### [Public Accessors](api-reference-7x/easydata-packages/ui-package/classes/gridcolumnlist-class#public-accessors-1)
- [count](api-reference-7x/easydata-packages/ui-package/classes/gridcolumnlist-class#count)

### [Public Methods](api-reference-7x/easydata-packages/ui-package/classes/gridcolumnlist-class#public-methods-1)
- [add](api-reference-7x/easydata-packages/ui-package/classes/gridcolumnlist-class#add)
- [clear](api-reference-7x/easydata-packages/ui-package/classes/gridcolumnlist-class#clear)
- [get](api-reference-7x/easydata-packages/ui-package/classes/gridcolumnlist-class#get)
- [getItems](api-reference-7x/easydata-packages/ui-package/classes/gridcolumnlist-class#getitems)
- [move](api-reference-7x/easydata-packages/ui-package/classes/gridcolumnlist-class#move)
- [put](api-reference-7x/easydata-packages/ui-package/classes/gridcolumnlist-class#put)
- [removeAt](api-reference-7x/easydata-packages/ui-package/classes/gridcolumnlist-class#removeat)
- [sync](api-reference-7x/easydata-packages/ui-package/classes/gridcolumnlist-class#sync)


## Constructors

---
#### constructor

⊕ new GridColumnList(columnList: [DataColumnList](api-reference-7x/easydata-packages/core-package/classes/datacolumnlist-class),grid: [EasyGrid](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class)): [GridColumnList](api-reference-7x/easydata-packages/ui-package/classes/gridcolumnlist-class)

#### Parameters:
- columnList: [DataColumnList](api-reference-7x/easydata-packages/core-package/classes/datacolumnlist-class)
- grid: [EasyGrid](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class)


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
▸ add(col: [GridColumn](api-reference-7x/easydata-packages/ui-package/classes/gridcolumn-class)): `number`

#### Parameters:
- col: [GridColumn](api-reference-7x/easydata-packages/ui-package/classes/gridcolumn-class)


**Returns** `number`


---
### clear
▸ clear(): `void`


**Returns** `void`


---
### get
▸ get(index: `number`): [GridColumn](api-reference-7x/easydata-packages/ui-package/classes/gridcolumn-class)

#### Parameters:
- index: `number`


**Returns** [GridColumn](api-reference-7x/easydata-packages/ui-package/classes/gridcolumn-class)


---
### getItems
▸ getItems(): [GridColumn](api-reference-7x/easydata-packages/ui-package/classes/gridcolumn-class)[]


**Returns** [GridColumn](api-reference-7x/easydata-packages/ui-package/classes/gridcolumn-class)[]


---
### move
▸ move(col: [GridColumn](api-reference-7x/easydata-packages/ui-package/classes/gridcolumn-class),newIndex: `number`): `void`

#### Parameters:
- col: [GridColumn](api-reference-7x/easydata-packages/ui-package/classes/gridcolumn-class)
- newIndex: `number`


**Returns** `void`


---
### put
▸ put(index: `number`,col: [GridColumn](api-reference-7x/easydata-packages/ui-package/classes/gridcolumn-class)): `void`

#### Parameters:
- index: `number`
- col: [GridColumn](api-reference-7x/easydata-packages/ui-package/classes/gridcolumn-class)


**Returns** `void`


---
### removeAt
▸ removeAt(index: `number`): `void`

#### Parameters:
- index: `number`


**Returns** `void`


---
### sync
▸ sync(columnList: [DataColumnList](api-reference-7x/easydata-packages/core-package/classes/datacolumnlist-class),hasRowNumCol?: `boolean`): `void`

#### Parameters:
- columnList: [DataColumnList](api-reference-7x/easydata-packages/core-package/classes/datacolumnlist-class)
- hasRowNumCol: `boolean`, *Default value* = `true`


**Returns** `void`


---
