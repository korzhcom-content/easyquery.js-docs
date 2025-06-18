---
title: GridCellRendererStore class
slug: >-
  api-reference-7x/easydata-packages/ui-package/classes/gridcellrendererstore-class
sidebar:
  order: 100
---

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcellrendererstore-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcellrendererstore-class/#constructor)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcellrendererstore-class/#public-methods-1)
- [getCellType](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcellrendererstore-class/#getcelltype)
- [getDefaultRenderer](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcellrendererstore-class/#getdefaultrenderer)
- [getDefaultRendererByType](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcellrendererstore-class/#getdefaultrendererbytype)
- [getRenderer](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcellrendererstore-class/#getrenderer)
- [registerRenderer](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcellrendererstore-class/#registerrenderer)
- [setDefaultRenderer](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcellrendererstore-class/#setdefaultrenderer)


## Constructors

---
#### constructor

⊕ new GridCellRendererStore(options: [EasyGridOptions](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/easygridoptions-interface)): [GridCellRendererStore](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcellrendererstore-class)

#### Parameters:
- options: [EasyGridOptions](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/easygridoptions-interface)


---

## Public Methods

---
### getCellType
▸ getCellType(dataType: [DataType](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/enumerations/datatype-enum)): [CellRendererType](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/enumerations/cellrenderertype-enum)

#### Parameters:
- dataType: [DataType](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/enumerations/datatype-enum)


**Returns** [CellRendererType](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/enumerations/cellrenderertype-enum)


---
### getDefaultRenderer
▸ getDefaultRenderer(columnType: [DataType](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/enumerations/datatype-enum)): `GridCellRenderer`

#### Parameters:
- columnType: [DataType](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/enumerations/datatype-enum)


**Returns** `GridCellRenderer`


---
### getDefaultRendererByType
▸ getDefaultRendererByType(rendererType: [CellRendererType](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/enumerations/cellrenderertype-enum)): `GridCellRenderer`

#### Parameters:
- rendererType: [CellRendererType](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/enumerations/cellrenderertype-enum)


**Returns** `GridCellRenderer`


---
### getRenderer
▸ getRenderer(name: `string`): (value: `any`, column: [GridColumn](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcolumn-class), cellElement: `HTMLElement`, rowElement: `HTMLElement`) => `void`

#### Parameters:
- name: `string`


**Returns** (value: `any`, column: [GridColumn](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcolumn-class), cellElement: `HTMLElement`, rowElement: `HTMLElement`) => `void`


---
### registerRenderer
▸ registerRenderer(name: `string`,renderer: `GridCellRenderer`): `void`

#### Parameters:
- name: `string`
- renderer: `GridCellRenderer`


**Returns** `void`


---
### setDefaultRenderer
▸ setDefaultRenderer(cellType: [CellRendererType](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/enumerations/cellrenderertype-enum),renderer: `GridCellRenderer`): `void`

#### Parameters:
- cellType: [CellRendererType](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/enumerations/cellrenderertype-enum)
- renderer: `GridCellRenderer`


**Returns** `void`


---
