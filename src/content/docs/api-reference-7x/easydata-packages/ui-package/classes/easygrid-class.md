---
title: EasyGrid class
slug: api-reference-7x/easydata-packages/ui-package/classes/easygrid-class
sidebar:
  order: 100
---

## Index
### [Constructors](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#constructors-1)
- [constructor](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#constructor)

### [Public Properties](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#public-properties-1)
- [cellRendererStore](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#cellrendererstore)
- [options](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#options)

### [Protected Properties](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#protected-properties-1)
- [bodyCellContainerDiv](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#bodycellcontainerdiv)
- [bodyDiv](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#bodydiv)
- [bodyViewportDiv](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#bodyviewportdiv)
- [columns](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#columns)
- [cssPrefix](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#cssprefix)
- [dataTable](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#datatable)
- [eventEmitter](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#eventemitter)
- [footerDiv](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#footerdiv)
- [footerPaginateDiv](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#footerpaginatediv)
- [headerCellContainerDiv](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#headercellcontainerdiv)
- [headerDiv](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#headerdiv)
- [headerRowDiv](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#headerrowdiv)
- [headerViewportDiv](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#headerviewportdiv)
- [rootDiv](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#rootdiv)
- [slot](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#slot)
- [tableCss](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#tablecss)

### [Public Accessors](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#public-accessors-1)
- [activeRowIndex](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#activerowindex)

### [Public Methods](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#public-methods-1)
- [addEventListener](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#addeventlistener)
- [clear](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#clear)
- [destroy](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#destroy)
- [ensureRowVisibility](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#ensurerowvisibility)
- [fireEvent](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#fireevent)
- [focus](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#focus)
- [getColumns](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#getcolumns)
- [getData](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#getdata)
- [refresh](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#refresh)
- [removeEventListener](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#removeeventlistener)
- [setData](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#setdata)

### [Protected Methods](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#protected-methods-1)
- [clearDOM](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#cleardom)
- [getGlobalIndexByLocal](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#getglobalindexbylocal)
- [getLocalIndexByGlobal](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#getlocalindexbyglobal)
- [hasData](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#hasdata)
- [hideProgress](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#hideprogress)
- [init](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#init)
- [render](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#render)
- [renderAddColumnButton](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#renderaddcolumnbutton)
- [renderBody](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#renderbody)
- [renderCell](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#rendercell)
- [renderColumnHeader](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#rendercolumnheader)
- [renderFooter](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#renderfooter)
- [renderHeader](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#renderheader)
- [renderPageInfoBlock](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#renderpageinfoblock)
- [renderPageNavigator](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#renderpagenavigator)
- [renderRow](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#renderrow)
- [showProgress](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#showprogress)
- [updateHeight](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class#updateheight)


## Constructors

---
#### constructor

⊕ new EasyGrid(options: [EasyGridOptions](api-reference-7x/easydata-packages/ui-package/interfaces/easygridoptions-interface)): [EasyGrid](api-reference-7x/easydata-packages/ui-package/classes/easygrid-class)

#### Parameters:
- options: [EasyGridOptions](api-reference-7x/easydata-packages/ui-package/interfaces/easygridoptions-interface)


---

## Public Properties

---
### cellRendererStore

● cellRendererStore: [GridCellRendererStore](api-reference-7x/easydata-packages/ui-package/classes/gridcellrendererstore-class)

---
### options

● options: [EasyGridOptions](api-reference-7x/easydata-packages/ui-package/interfaces/easygridoptions-interface)

---
## Protected Properties

---
### bodyCellContainerDiv

● bodyCellContainerDiv: `HTMLDivElement`

---
### bodyDiv

● bodyDiv: `HTMLDivElement`

---
### bodyViewportDiv

● bodyViewportDiv: `HTMLDivElement`

---
### columns

● columns: [GridColumnList](api-reference-7x/easydata-packages/ui-package/classes/gridcolumnlist-class)

---
### cssPrefix

● cssPrefix: `string` = `"keg"`

---
### dataTable

● dataTable: [EasyDataTable](api-reference-7x/easydata-packages/core-package/classes/easydatatable-class)

---
### eventEmitter

● eventEmitter: [EventEmitter](api-reference-7x/easydata-packages/core-package/classes/eventemitter-class)

---
### footerDiv

● footerDiv: `HTMLDivElement`

---
### footerPaginateDiv

● footerPaginateDiv: `HTMLDivElement`

---
### headerCellContainerDiv

● headerCellContainerDiv: `HTMLDivElement`

---
### headerDiv

● headerDiv: `HTMLDivElement`

---
### headerRowDiv

● headerRowDiv: `HTMLDivElement`

---
### headerViewportDiv

● headerViewportDiv: `HTMLDivElement`

---
### rootDiv

● rootDiv: `HTMLDivElement`

---
### slot

● slot: `HTMLElement`

---
### tableCss

● tableCss?: `string`

---
## Public Accessors

---
### activeRowIndex
⇄ get activeRowIndex(): `number`


**Returns** `number`


---
⇄ set activeRowIndex(value: `number`): `void`

#### Parameters:
- value: `number`


**Returns** `void`


---
## Public Methods

---
### addEventListener
▸ addEventListener(eventType: `"init"`,handler: () => `void`): `string`

#### Parameters:
- eventType: `"init"`
- handler: () => `void`


**Returns** `string`

▸ addEventListener(eventType: `"rowClick"`,handler: (ev: [RowClickEvent](api-reference-7x/easydata-packages/ui-package/interfaces/rowclickevent-interface)) => `void`): `string`

#### Parameters:
- eventType: `"rowClick"`
- handler: (ev: [RowClickEvent](api-reference-7x/easydata-packages/ui-package/interfaces/rowclickevent-interface)) => `void`


**Returns** `string`

▸ addEventListener(eventType: `"rowDbClick"`,handler: (ev: [RowClickEvent](api-reference-7x/easydata-packages/ui-package/interfaces/rowclickevent-interface)) => `void`): `string`

#### Parameters:
- eventType: `"rowDbClick"`
- handler: (ev: [RowClickEvent](api-reference-7x/easydata-packages/ui-package/interfaces/rowclickevent-interface)) => `void`


**Returns** `string`

▸ addEventListener(eventType: `"pageChanged"`,handler: (ev: [PageChangedEvent](api-reference-7x/easydata-packages/ui-package/interfaces/pagechangedevent-interface)) => `void`): `string`

#### Parameters:
- eventType: `"pageChanged"`
- handler: (ev: [PageChangedEvent](api-reference-7x/easydata-packages/ui-package/interfaces/pagechangedevent-interface)) => `void`


**Returns** `string`

▸ addEventListener(eventType: `"addColumnClick"`,handler: (ev: [AddColumnClickEvent](api-reference-7x/easydata-packages/ui-package/interfaces/addcolumnclickevent-interface)) => `void`): `string`

#### Parameters:
- eventType: `"addColumnClick"`
- handler: (ev: [AddColumnClickEvent](api-reference-7x/easydata-packages/ui-package/interfaces/addcolumnclickevent-interface)) => `void`


**Returns** `string`

▸ addEventListener(eventType: `"columnChanged"`,handler: (ev: [ColumnChangedEvent](api-reference-7x/easydata-packages/ui-package/interfaces/columnchangedevent-interface)) => `void`): `string`

#### Parameters:
- eventType: `"columnChanged"`
- handler: (ev: [ColumnChangedEvent](api-reference-7x/easydata-packages/ui-package/interfaces/columnchangedevent-interface)) => `void`


**Returns** `string`

▸ addEventListener(eventType: `"columnMoved"`,handler: (ev: [ColumnMovedEvent](api-reference-7x/easydata-packages/ui-package/interfaces/columnmovedevent-interface)) => `void`): `string`

#### Parameters:
- eventType: `"columnMoved"`
- handler: (ev: [ColumnMovedEvent](api-reference-7x/easydata-packages/ui-package/interfaces/columnmovedevent-interface)) => `void`


**Returns** `string`

▸ addEventListener(eventType: `"columnDeleted"`,handler: (ev: [ColumnDeletedEvent](api-reference-7x/easydata-packages/ui-package/interfaces/columndeletedevent-interface)) => `void`): `string`

#### Parameters:
- eventType: `"columnDeleted"`
- handler: (ev: [ColumnDeletedEvent](api-reference-7x/easydata-packages/ui-package/interfaces/columndeletedevent-interface)) => `void`


**Returns** `string`

▸ addEventListener(eventType: `"activeRowChanged"`,handler: (ev: [ActiveRowChangedEvent](api-reference-7x/easydata-packages/ui-package/interfaces/activerowchangedevent-interface)) => `void`): `string`

#### Parameters:
- eventType: `"activeRowChanged"`
- handler: (ev: [ActiveRowChangedEvent](api-reference-7x/easydata-packages/ui-package/interfaces/activerowchangedevent-interface)) => `void`


**Returns** `string`


---
### clear
▸ clear(): `void`


**Returns** `void`


---
### destroy
▸ destroy(): `void`


**Returns** `void`


---
### ensureRowVisibility
▸ ensureRowVisibility(rowOrIndex: `HTMLElement` | `number`): `void`

#### Parameters:
- rowOrIndex: `HTMLElement` | `number`


**Returns** `void`


---
### fireEvent
▸ fireEvent(event: [GridEvent](api-reference-7x/easydata-packages/ui-package/interfaces/gridevent-interface) | `GridEventType`): `void`

#### Parameters:
- event: [GridEvent](api-reference-7x/easydata-packages/ui-package/interfaces/gridevent-interface) | `GridEventType`


**Returns** `void`


---
### focus
▸ focus(): `void`


**Returns** `void`


---
### getColumns
▸ getColumns(): [GridColumnList](api-reference-7x/easydata-packages/ui-package/classes/gridcolumnlist-class)


**Returns** [GridColumnList](api-reference-7x/easydata-packages/ui-package/classes/gridcolumnlist-class)


---
### getData
▸ getData(): [EasyDataTable](api-reference-7x/easydata-packages/core-package/classes/easydatatable-class)


**Returns** [EasyDataTable](api-reference-7x/easydata-packages/core-package/classes/easydatatable-class)


---
### refresh
▸ refresh(): `void`


**Returns** `void`


---
### removeEventListener
▸ removeEventListener(eventType: `string`,handlerId: `string`): `void`

#### Parameters:
- eventType: `string`
- handlerId: `string`


**Returns** `void`


---
### setData
▸ setData(data: [EasyDataTable](api-reference-7x/easydata-packages/core-package/classes/easydatatable-class)): `void`

#### Parameters:
- data: [EasyDataTable](api-reference-7x/easydata-packages/core-package/classes/easydatatable-class)


**Returns** `void`


---
## Protected Methods

---
### clearDOM
▸ clearDOM(): `void`


**Returns** `void`


---
### getGlobalIndexByLocal
▸ getGlobalIndexByLocal(index: `number`): `number`

#### Parameters:
- index: `number`


**Returns** `number`


---
### getLocalIndexByGlobal
▸ getLocalIndexByGlobal(index: `number`): `number`

#### Parameters:
- index: `number`


**Returns** `number`


---
### hasData
▸ hasData(): `boolean`


**Returns** `boolean`


---
### hideProgress
▸ hideProgress(): `void`


**Returns** `void`


---
### init
▸ init(options: [EasyGridOptions](api-reference-7x/easydata-packages/ui-package/interfaces/easygridoptions-interface)): `void`

#### Parameters:
- options: [EasyGridOptions](api-reference-7x/easydata-packages/ui-package/interfaces/easygridoptions-interface)


**Returns** `void`


---
### render
▸ render(): `void`


**Returns** `void`


---
### renderAddColumnButton
▸ renderAddColumnButton(): `HTMLElement`


**Returns** `HTMLElement`


---
### renderBody
▸ renderBody(): `void`


**Returns** `void`


---
### renderCell
▸ renderCell(column: [GridColumn](api-reference-7x/easydata-packages/ui-package/classes/gridcolumn-class),colIndex: `number`,value: `any`,rowElement: `HTMLElement`): `HTMLDivElement`

#### Parameters:
- column: [GridColumn](api-reference-7x/easydata-packages/ui-package/classes/gridcolumn-class)
- colIndex: `number`
- value: `any`
- rowElement: `HTMLElement`


**Returns** `HTMLDivElement`


---
### renderColumnHeader
▸ renderColumnHeader(column: [GridColumn](api-reference-7x/easydata-packages/ui-package/classes/gridcolumn-class),index: `number`): `HTMLElement`

#### Parameters:
- column: [GridColumn](api-reference-7x/easydata-packages/ui-package/classes/gridcolumn-class)
- index: `number`


**Returns** `HTMLElement`


---
### renderFooter
▸ renderFooter(): `void`


**Returns** `void`


---
### renderHeader
▸ renderHeader(): `void`


**Returns** `void`


---
### renderPageInfoBlock
▸ renderPageInfoBlock(): `HTMLDivElement`


**Returns** `HTMLDivElement`


---
### renderPageNavigator
▸ renderPageNavigator(): `HTMLDivElement`


**Returns** `HTMLDivElement`


---
### renderRow
▸ renderRow(row: [DataRow](api-reference-7x/easydata-packages/core-package/classes/datarow-class),index: `number`): `HTMLDivElement`

#### Parameters:
- row: [DataRow](api-reference-7x/easydata-packages/core-package/classes/datarow-class)
- index: `number`


**Returns** `HTMLDivElement`


---
### showProgress
▸ showProgress(): `void`


**Returns** `void`


---
### updateHeight
▸ updateHeight(): `Promise`&lt;`void`&gt;


**Returns** `Promise`&lt;`void`&gt;


---
