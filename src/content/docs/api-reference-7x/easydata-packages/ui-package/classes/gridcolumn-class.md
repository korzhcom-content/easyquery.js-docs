---
title: GridColumn class
slug: api-reference-7x/easydata-packages/ui-package/classes/gridcolumn-class
sidebar:
  order: 100
---

## Index
### [Constructors](api-reference-7x/easydata-packages/ui-package/classes/gridcolumn-class#constructors-1)
- [constructor](api-reference-7x/easydata-packages/ui-package/classes/gridcolumn-class#constructor)

### [Public Properties](api-reference-7x/easydata-packages/ui-package/classes/gridcolumn-class#public-properties-1)
- [align](api-reference-7x/easydata-packages/ui-package/classes/gridcolumn-class#align)
- [cellRenderer](api-reference-7x/easydata-packages/ui-package/classes/gridcolumn-class#cellrenderer)
- [dataColumn](api-reference-7x/easydata-packages/ui-package/classes/gridcolumn-class#datacolumn)
- [isRowNum](api-reference-7x/easydata-packages/ui-package/classes/gridcolumn-class#isrownum)
- [isVisible](api-reference-7x/easydata-packages/ui-package/classes/gridcolumn-class#isvisible)
- [width](api-reference-7x/easydata-packages/ui-package/classes/gridcolumn-class#width)

### [Public Accessors](api-reference-7x/easydata-packages/ui-package/classes/gridcolumn-class#public-accessors-1)
- [label](api-reference-7x/easydata-packages/ui-package/classes/gridcolumn-class#label)
- [type](api-reference-7x/easydata-packages/ui-package/classes/gridcolumn-class#type)


## Constructors

---
#### constructor

⊕ new GridColumn(column: [DataColumn](api-reference-7x/easydata-packages/core-package/classes/datacolumn-class),grid: [EasyGrid](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class),isRowNum?: `boolean`): [GridColumn](api-reference-7x/easydata-packages/ui-package/classes/gridcolumn-class)

#### Parameters:
- column: [DataColumn](api-reference-7x/easydata-packages/core-package/classes/datacolumn-class)
- grid: [EasyGrid](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class)
- isRowNum: `boolean`, *Default value* = `false`


---

## Public Properties

---
### align

● align: [GridColumnAlign](api-reference-7x/easydata-packages/ui-package/enumerations/gridcolumnalign-enum) = ` GridColumnAlign.NONE`

---
### cellRenderer

● cellRenderer: `GridCellRenderer`

---
### dataColumn

● dataColumn: [DataColumn](api-reference-7x/easydata-packages/core-package/classes/datacolumn-class)

---
### isRowNum

● isRowNum: `boolean` = `false`

---
### isVisible

● isVisible: `boolean` = `true`

---
### width

● width: `number`

---
## Public Accessors

---
### label
⇄ get label(): `string`


**Returns** `string`


---
⇄ set label(value: `string`): `void`

#### Parameters:
- value: `string`


**Returns** `void`


---
### type
⇄ get type(): [DataType](api-reference-7x/easydata-packages/core-package/enumerations/datatype-enum)


**Returns** [DataType](api-reference-7x/easydata-packages/core-package/enumerations/datatype-enum)


---
