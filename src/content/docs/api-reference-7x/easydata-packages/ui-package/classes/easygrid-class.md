---
title: EasyGrid class
slug: api-reference-7x/easydata-packages/ui-package/classes/easygrid-class
sidebar:
  order: 100
---

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#public-properties-1)
- [cellRendererStore](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#cellrendererstore)
- [options](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#options)

### [Protected Properties](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#protected-properties-1)
- [bodyCellContainerDiv](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#bodycellcontainerdiv)
- [bodyDiv](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#bodydiv)
- [bodyViewportDiv](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#bodyviewportdiv)
- [columns](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#columns)
- [cssPrefix](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#cssprefix)
- [dataTable](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#datatable)
- [eventEmitter](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#eventemitter)
- [footerDiv](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#footerdiv)
- [footerPaginateDiv](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#footerpaginatediv)
- [headerCellContainerDiv](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#headercellcontainerdiv)
- [headerDiv](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#headerdiv)
- [headerRowDiv](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#headerrowdiv)
- [headerViewportDiv](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#headerviewportdiv)
- [rootDiv](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#rootdiv)
- [slot](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#slot)
- [tableCss](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#tablecss)

### [Public Accessors](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#public-accessors-1)
- [activeRowIndex](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#activerowindex)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#public-methods-1)
- [addEventListener](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#addeventlistener)
- [clear](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#clear)
- [destroy](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#destroy)
- [ensureRowVisibility](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#ensurerowvisibility)
- [fireEvent](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#fireevent)
- [focus](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#focus)
- [getColumns](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#getcolumns)
- [getData](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#getdata)
- [refresh](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#refresh)
- [removeEventListener](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#removeeventlistener)
- [setData](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#setdata)

### [Protected Methods](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#protected-methods-1)
- [clearDOM](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#cleardom)
- [getGlobalIndexByLocal](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#getglobalindexbylocal)
- [getLocalIndexByGlobal](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#getlocalindexbyglobal)
- [hasData](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#hasdata)
- [hideProgress](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#hideprogress)
- [init](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#init)
- [render](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#render)
- [renderAddColumnButton](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#renderaddcolumnbutton)
- [renderBody](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#renderbody)
- [renderCell](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#rendercell)
- [renderColumnHeader](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#rendercolumnheader)
- [renderFooter](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#renderfooter)
- [renderHeader](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#renderheader)
- [renderPageInfoBlock](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#renderpageinfoblock)
- [renderPageNavigator](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#renderpagenavigator)
- [renderRow](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#renderrow)
- [showProgress](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#showprogress)
- [updateHeight](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class/#updateheight)


## Constructors

---
#### constructor

⊕ new EasyGrid(options: [EasyGridOptions](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/easygridoptions-interface)): [EasyGrid](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/easygrid-class)

#### Parameters:
- options: [EasyGridOptions](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/easygridoptions-interface)


---

## Public Properties

---
### cellRendererStore

● cellRendererStore: [GridCellRendererStore](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcellrendererstore-class)

---
### options

● options: [EasyGridOptions](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/easygridoptions-interface)

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

● columns: [GridColumnList](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcolumnlist-class)

---
### cssPrefix

● cssPrefix: `string` = `"keg"`

---
### dataTable

● dataTable: [EasyDataTable](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/easydatatable-class)

---
### eventEmitter

● eventEmitter: [EventEmitter](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/eventemitter-class)

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

▸ addEventListener(eventType: `"rowClick"`,handler: (ev: [RowClickEvent](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/rowclickevent-interface)) => `void`): `string`

#### Parameters:
- eventType: `"rowClick"`
- handler: (ev: [RowClickEvent](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/rowclickevent-interface)) => `void`


**Returns** `string`

▸ addEventListener(eventType: `"rowDbClick"`,handler: (ev: [RowClickEvent](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/rowclickevent-interface)) => `void`): `string`

#### Parameters:
- eventType: `"rowDbClick"`
- handler: (ev: [RowClickEvent](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/rowclickevent-interface)) => `void`


**Returns** `string`

▸ addEventListener(eventType: `"pageChanged"`,handler: (ev: [PageChangedEvent](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/pagechangedevent-interface)) => `void`): `string`

#### Parameters:
- eventType: `"pageChanged"`
- handler: (ev: [PageChangedEvent](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/pagechangedevent-interface)) => `void`


**Returns** `string`

▸ addEventListener(eventType: `"addColumnClick"`,handler: (ev: [AddColumnClickEvent](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/addcolumnclickevent-interface)) => `void`): `string`

#### Parameters:
- eventType: `"addColumnClick"`
- handler: (ev: [AddColumnClickEvent](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/addcolumnclickevent-interface)) => `void`


**Returns** `string`

▸ addEventListener(eventType: `"columnChanged"`,handler: (ev: [ColumnChangedEvent](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/columnchangedevent-interface)) => `void`): `string`

#### Parameters:
- eventType: `"columnChanged"`
- handler: (ev: [ColumnChangedEvent](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/columnchangedevent-interface)) => `void`


**Returns** `string`

▸ addEventListener(eventType: `"columnMoved"`,handler: (ev: [ColumnMovedEvent](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/columnmovedevent-interface)) => `void`): `string`

#### Parameters:
- eventType: `"columnMoved"`
- handler: (ev: [ColumnMovedEvent](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/columnmovedevent-interface)) => `void`


**Returns** `string`

▸ addEventListener(eventType: `"columnDeleted"`,handler: (ev: [ColumnDeletedEvent](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/columndeletedevent-interface)) => `void`): `string`

#### Parameters:
- eventType: `"columnDeleted"`
- handler: (ev: [ColumnDeletedEvent](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/columndeletedevent-interface)) => `void`


**Returns** `string`

▸ addEventListener(eventType: `"activeRowChanged"`,handler: (ev: [ActiveRowChangedEvent](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/activerowchangedevent-interface)) => `void`): `string`

#### Parameters:
- eventType: `"activeRowChanged"`
- handler: (ev: [ActiveRowChangedEvent](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/activerowchangedevent-interface)) => `void`


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
▸ fireEvent(event: [GridEvent](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/gridevent-interface) | `GridEventType`): `void`

#### Parameters:
- event: [GridEvent](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/gridevent-interface) | `GridEventType`


**Returns** `void`


---
### focus
▸ focus(): `void`


**Returns** `void`


---
### getColumns
▸ getColumns(): [GridColumnList](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcolumnlist-class)


**Returns** [GridColumnList](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcolumnlist-class)


---
### getData
▸ getData(): [EasyDataTable](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/easydatatable-class)


**Returns** [EasyDataTable](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/easydatatable-class)


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
▸ setData(data: [EasyDataTable](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/easydatatable-class)): `void`

#### Parameters:
- data: [EasyDataTable](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/easydatatable-class)


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
▸ init(options: [EasyGridOptions](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/easygridoptions-interface)): `void`

#### Parameters:
- options: [EasyGridOptions](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/easygridoptions-interface)


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
▸ renderCell(column: [GridColumn](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcolumn-class),colIndex: `number`,value: `any`,rowElement: `HTMLElement`): `HTMLDivElement`

#### Parameters:
- column: [GridColumn](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcolumn-class)
- colIndex: `number`
- value: `any`
- rowElement: `HTMLElement`


**Returns** `HTMLDivElement`


---
### renderColumnHeader
▸ renderColumnHeader(column: [GridColumn](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcolumn-class),index: `number`): `HTMLElement`

#### Parameters:
- column: [GridColumn](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcolumn-class)
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
▸ renderRow(row: [DataRow](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datarow-class),index: `number`): `HTMLDivElement`

#### Parameters:
- row: [DataRow](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/datarow-class)
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
