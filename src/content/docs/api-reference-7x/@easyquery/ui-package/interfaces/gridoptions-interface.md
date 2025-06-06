---
title: GridOptions interface
slug: api-reference-7x/@easyquery/ui-package/interfaces/gridoptions-interface
sidebar:
  order: 100
---

Grid options type.

## Index
### [Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/gridoptions-interface/#properties-1)
- [allowDragDrop](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/gridoptions-interface/#allowdragdrop)
- [beforeTableRendering](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/gridoptions-interface/#beforetablerendering)
- [formatColumnHeader](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/gridoptions-interface/#formatcolumnheader)
- [formatGridCell](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/gridoptions-interface/#formatgridcell)
- [maxButtonCount](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/gridoptions-interface/#maxbuttoncount)
- [pageItemCssClass](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/gridoptions-interface/#pageitemcssclass)
- [tableClass](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/gridoptions-interface/#tableclass)



## Properties

---
### allowDragDrop

● allowDragDrop?: `boolean`

---
### beforeTableRendering

Function called before rendering

● beforeTableRendering?: (dataTable: `EasyDataTable`) => `void`

---
### formatColumnHeader

Function thart formats column header

● formatColumnHeader?: (dataTable: `EasyDataTable`, index: `number`, colLabel: `string`) => `string`

---
### formatGridCell

A callback function that allows users to format value in a particular cell

● formatGridCell?: (dataTable: `EasyDataTable`, rowIndex: `number`, colIndex: `number`, text: `string`) => `string`

---
### maxButtonCount

Max count of buttons

● maxButtonCount?: `number`

---
### pageItemCssClass

pageItem css class

● pageItemCssClass?: `string`

---
### tableClass

table class

● tableClass?: `string`

---
