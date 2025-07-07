---
title: GridCellRendererStore class
slug: >-
  api-reference-7x/easydata-packages/ui-package/classes/gridcellrendererstore-class
sidebar:
  order: 100
---

## Index
### [Constructors](api-reference-7x/easydata-packages/ui-package/classes/gridcellrendererstore-class#constructors-1)
- [constructor](api-reference-7x/easydata-packages/ui-package/classes/gridcellrendererstore-class#constructor)

### [Public Methods](api-reference-7x/easydata-packages/ui-package/classes/gridcellrendererstore-class#public-methods-1)
- [getCellType](api-reference-7x/easydata-packages/ui-package/classes/gridcellrendererstore-class#getcelltype)
- [getDefaultRenderer](api-reference-7x/easydata-packages/ui-package/classes/gridcellrendererstore-class#getdefaultrenderer)
- [getDefaultRendererByType](api-reference-7x/easydata-packages/ui-package/classes/gridcellrendererstore-class#getdefaultrendererbytype)
- [getRenderer](api-reference-7x/easydata-packages/ui-package/classes/gridcellrendererstore-class#getrenderer)
- [registerRenderer](api-reference-7x/easydata-packages/ui-package/classes/gridcellrendererstore-class#registerrenderer)
- [setDefaultRenderer](api-reference-7x/easydata-packages/ui-package/classes/gridcellrendererstore-class#setdefaultrenderer)


## Constructors

---
#### constructor

⊕ new GridCellRendererStore(options: [EasyGridOptions](api-reference-7x/easydata-packages/ui-package/interfaces/easygridoptions-interface)): [GridCellRendererStore](api-reference-7x/easydata-packages/ui-package/classes/gridcellrendererstore-class)

#### Parameters:
- options: [EasyGridOptions](api-reference-7x/easydata-packages/ui-package/interfaces/easygridoptions-interface)


---

## Public Methods

---
### getCellType
▸ getCellType(dataType: [DataType](api-reference-7x/easydata-packages/core-package/enumerations/datatype-enum)): [CellRendererType](api-reference-7x/easydata-packages/ui-package/enumerations/cellrenderertype-enum)

#### Parameters:
- dataType: [DataType](api-reference-7x/easydata-packages/core-package/enumerations/datatype-enum)


**Returns** [CellRendererType](api-reference-7x/easydata-packages/ui-package/enumerations/cellrenderertype-enum)


---
### getDefaultRenderer
▸ getDefaultRenderer(columnType: [DataType](api-reference-7x/easydata-packages/core-package/enumerations/datatype-enum)): `GridCellRenderer`

#### Parameters:
- columnType: [DataType](api-reference-7x/easydata-packages/core-package/enumerations/datatype-enum)


**Returns** `GridCellRenderer`


---
### getDefaultRendererByType
▸ getDefaultRendererByType(rendererType: [CellRendererType](api-reference-7x/easydata-packages/ui-package/enumerations/cellrenderertype-enum)): `GridCellRenderer`

#### Parameters:
- rendererType: [CellRendererType](api-reference-7x/easydata-packages/ui-package/enumerations/cellrenderertype-enum)


**Returns** `GridCellRenderer`


---
### getRenderer
▸ getRenderer(name: `string`): (value: `any`, column: [GridColumn](api-reference-7x/easydata-packages/ui-package/classes/gridcolumn-class), cellElement: `HTMLElement`, rowElement: `HTMLElement`) => `void`

#### Parameters:
- name: `string`


**Returns** (value: `any`, column: [GridColumn](api-reference-7x/easydata-packages/ui-package/classes/gridcolumn-class), cellElement: `HTMLElement`, rowElement: `HTMLElement`) => `void`


---
### registerRenderer
▸ registerRenderer(name: `string`,renderer: `GridCellRenderer`): `void`

#### Parameters:
- name: `string`
- renderer: `GridCellRenderer`


**Returns** `void`


---
### setDefaultRenderer
▸ setDefaultRenderer(cellType: [CellRendererType](api-reference-7x/easydata-packages/ui-package/enumerations/cellrenderertype-enum),renderer: `GridCellRenderer`): `void`

#### Parameters:
- cellType: [CellRendererType](api-reference-7x/easydata-packages/ui-package/enumerations/cellrenderertype-enum)
- renderer: `GridCellRenderer`


**Returns** `void`


---
