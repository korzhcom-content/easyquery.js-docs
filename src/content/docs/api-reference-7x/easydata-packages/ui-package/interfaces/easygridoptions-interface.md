---
title: EasyGridOptions interface
slug: >-
  api-reference-7x/easydata-packages/ui-package/interfaces/easygridoptions-interface
sidebar:
  order: 100
---

## Index
### [Properties](api-reference-7x/easydata-packages/ui-package/interfaces/easygridoptions-interface#properties-1)
- [addColumns](api-reference-7x/easydata-packages/ui-package/interfaces/easygridoptions-interface#addcolumns)
- [addColumnsTitle](api-reference-7x/easydata-packages/ui-package/interfaces/easygridoptions-interface#addcolumnstitle)
- [allowDragDrop](api-reference-7x/easydata-packages/ui-package/interfaces/easygridoptions-interface#allowdragdrop)
- [dataTable](api-reference-7x/easydata-packages/ui-package/interfaces/easygridoptions-interface#datatable)
- [fixHeightOnFirstRender](api-reference-7x/easydata-packages/ui-package/interfaces/easygridoptions-interface#fixheightonfirstrender)
- [header](api-reference-7x/easydata-packages/ui-package/interfaces/easygridoptions-interface#header)
- [onActiveRowChanged](api-reference-7x/easydata-packages/ui-package/interfaces/easygridoptions-interface#onactiverowchanged)
- [onAddColumnClick](api-reference-7x/easydata-packages/ui-package/interfaces/easygridoptions-interface#onaddcolumnclick)
- [onColumnChanged](api-reference-7x/easydata-packages/ui-package/interfaces/easygridoptions-interface#oncolumnchanged)
- [onColumnDeleted](api-reference-7x/easydata-packages/ui-package/interfaces/easygridoptions-interface#oncolumndeleted)
- [onColumnMoved](api-reference-7x/easydata-packages/ui-package/interfaces/easygridoptions-interface#oncolumnmoved)
- [onGetCellRenderer](api-reference-7x/easydata-packages/ui-package/interfaces/easygridoptions-interface#ongetcellrenderer)
- [onInit](api-reference-7x/easydata-packages/ui-package/interfaces/easygridoptions-interface#oninit)
- [onPageChanged](api-reference-7x/easydata-packages/ui-package/interfaces/easygridoptions-interface#onpagechanged)
- [onRowClick](api-reference-7x/easydata-packages/ui-package/interfaces/easygridoptions-interface#onrowclick)
- [onRowDbClick](api-reference-7x/easydata-packages/ui-package/interfaces/easygridoptions-interface#onrowdbclick)
- [onSyncGridColumn](api-reference-7x/easydata-packages/ui-package/interfaces/easygridoptions-interface#onsyncgridcolumn)
- [pagination](api-reference-7x/easydata-packages/ui-package/interfaces/easygridoptions-interface#pagination)
- [paging](api-reference-7x/easydata-packages/ui-package/interfaces/easygridoptions-interface#paging)
- [showActiveRow](api-reference-7x/easydata-packages/ui-package/interfaces/easygridoptions-interface#showactiverow)
- [slot](api-reference-7x/easydata-packages/ui-package/interfaces/easygridoptions-interface#slot)
- [syncGridColumns](api-reference-7x/easydata-packages/ui-package/interfaces/easygridoptions-interface#syncgridcolumns)
- [totals](api-reference-7x/easydata-packages/ui-package/interfaces/easygridoptions-interface#totals)
- [useRowNumeration](api-reference-7x/easydata-packages/ui-package/interfaces/easygridoptions-interface#userownumeration)
- [viewportRowsCount](api-reference-7x/easydata-packages/ui-package/interfaces/easygridoptions-interface#viewportrowscount)



## Properties

---
### addColumns

● addColumns?: `boolean`

---
### addColumnsTitle

● addColumnsTitle?: `string`

---
### allowDragDrop

● allowDragDrop?: `boolean`

---
### dataTable

● dataTable: [EasyDataTable](api-reference-7x/easydata-packages/core-package/classes/easydatatable-class)

---
### fixHeightOnFirstRender

● fixHeightOnFirstRender?: `boolean`

---
### header

● header?: `any`

---
### onActiveRowChanged

● onActiveRowChanged?: (ev: [ActiveRowChangedEvent](api-reference-7x/easydata-packages/ui-package/interfaces/activerowchangedevent-interface)) => `void`

---
### onAddColumnClick

● onAddColumnClick?: (ev: [AddColumnClickEvent](api-reference-7x/easydata-packages/ui-package/interfaces/addcolumnclickevent-interface)) => `void`

---
### onColumnChanged

● onColumnChanged?: (ev: [ColumnChangedEvent](api-reference-7x/easydata-packages/ui-package/interfaces/columnchangedevent-interface)) => `void`

---
### onColumnDeleted

● onColumnDeleted?: (ev: [ColumnDeletedEvent](api-reference-7x/easydata-packages/ui-package/interfaces/columndeletedevent-interface)) => `void`

---
### onColumnMoved

● onColumnMoved?: (ev: [ColumnMovedEvent](api-reference-7x/easydata-packages/ui-package/interfaces/columnmovedevent-interface)) => `void`

---
### onGetCellRenderer

● onGetCellRenderer?: (column: [GridColumn](api-reference-7x/easydata-packages/ui-package/classes/gridcolumn-class), defaultRenderer: `GridCellRenderer`) => `GridCellRenderer`

---
### onInit

● onInit?: () => `void`

---
### onPageChanged

● onPageChanged?: (ev: [PageChangedEvent](api-reference-7x/easydata-packages/ui-package/interfaces/pagechangedevent-interface)) => `void`

---
### onRowClick

● onRowClick?: (ev: [RowClickEvent](api-reference-7x/easydata-packages/ui-package/interfaces/rowclickevent-interface)) => `void`

---
### onRowDbClick

● onRowDbClick?: (ev: [RowClickEvent](api-reference-7x/easydata-packages/ui-package/interfaces/rowclickevent-interface)) => `void`

---
### onSyncGridColumn

● onSyncGridColumn?: (column: [GridColumn](api-reference-7x/easydata-packages/ui-package/classes/gridcolumn-class)) => `void`

---
### pagination

● pagination?: `any`

---
### paging

● paging?: `any`

---
### showActiveRow

● showActiveRow?: `boolean`

---
### slot

● slot: `HTMLElement` | `string`

---
### syncGridColumns

● syncGridColumns?: `boolean`

---
### totals

● totals?: `any`

---
### useRowNumeration

● useRowNumeration?: `boolean`

---
### viewportRowsCount

● viewportRowsCount?: `number`

---
