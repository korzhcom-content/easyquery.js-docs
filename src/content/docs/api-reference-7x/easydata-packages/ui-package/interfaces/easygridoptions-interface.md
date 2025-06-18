---
title: EasyGridOptions interface
slug: >-
  api-reference-7x/easydata-packages/ui-package/interfaces/easygridoptions-interface
sidebar:
  order: 100
---

## Index
### [Properties](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/easygridoptions-interface/#properties-1)
- [addColumns](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/easygridoptions-interface/#addcolumns)
- [addColumnsTitle](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/easygridoptions-interface/#addcolumnstitle)
- [allowDragDrop](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/easygridoptions-interface/#allowdragdrop)
- [dataTable](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/easygridoptions-interface/#datatable)
- [fixHeightOnFirstRender](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/easygridoptions-interface/#fixheightonfirstrender)
- [header](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/easygridoptions-interface/#header)
- [onActiveRowChanged](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/easygridoptions-interface/#onactiverowchanged)
- [onAddColumnClick](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/easygridoptions-interface/#onaddcolumnclick)
- [onColumnChanged](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/easygridoptions-interface/#oncolumnchanged)
- [onColumnDeleted](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/easygridoptions-interface/#oncolumndeleted)
- [onColumnMoved](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/easygridoptions-interface/#oncolumnmoved)
- [onGetCellRenderer](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/easygridoptions-interface/#ongetcellrenderer)
- [onInit](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/easygridoptions-interface/#oninit)
- [onPageChanged](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/easygridoptions-interface/#onpagechanged)
- [onRowClick](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/easygridoptions-interface/#onrowclick)
- [onRowDbClick](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/easygridoptions-interface/#onrowdbclick)
- [onSyncGridColumn](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/easygridoptions-interface/#onsyncgridcolumn)
- [pagination](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/easygridoptions-interface/#pagination)
- [paging](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/easygridoptions-interface/#paging)
- [showActiveRow](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/easygridoptions-interface/#showactiverow)
- [slot](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/easygridoptions-interface/#slot)
- [syncGridColumns](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/easygridoptions-interface/#syncgridcolumns)
- [totals](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/easygridoptions-interface/#totals)
- [useRowNumeration](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/easygridoptions-interface/#userownumeration)
- [viewportRowsCount](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/easygridoptions-interface/#viewportrowscount)



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

● dataTable: [EasyDataTable](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/easydatatable-class)

---
### fixHeightOnFirstRender

● fixHeightOnFirstRender?: `boolean`

---
### header

● header?: `any`

---
### onActiveRowChanged

● onActiveRowChanged?: (ev: [ActiveRowChangedEvent](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/activerowchangedevent-interface)) => `void`

---
### onAddColumnClick

● onAddColumnClick?: (ev: [AddColumnClickEvent](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/addcolumnclickevent-interface)) => `void`

---
### onColumnChanged

● onColumnChanged?: (ev: [ColumnChangedEvent](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/columnchangedevent-interface)) => `void`

---
### onColumnDeleted

● onColumnDeleted?: (ev: [ColumnDeletedEvent](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/columndeletedevent-interface)) => `void`

---
### onColumnMoved

● onColumnMoved?: (ev: [ColumnMovedEvent](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/columnmovedevent-interface)) => `void`

---
### onGetCellRenderer

● onGetCellRenderer?: (column: [GridColumn](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcolumn-class), defaultRenderer: `GridCellRenderer`) => `GridCellRenderer`

---
### onInit

● onInit?: () => `void`

---
### onPageChanged

● onPageChanged?: (ev: [PageChangedEvent](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/pagechangedevent-interface)) => `void`

---
### onRowClick

● onRowClick?: (ev: [RowClickEvent](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/rowclickevent-interface)) => `void`

---
### onRowDbClick

● onRowDbClick?: (ev: [RowClickEvent](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/rowclickevent-interface)) => `void`

---
### onSyncGridColumn

● onSyncGridColumn?: (column: [GridColumn](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/gridcolumn-class)) => `void`

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
