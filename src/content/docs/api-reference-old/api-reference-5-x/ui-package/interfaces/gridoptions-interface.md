---
title: GridOptions interface
slug: >-
  api-reference-old/api-reference-5-x/ui-package/interfaces/gridoptions-interface
sidebar:
  order: 100
---

Grid options type.

## Index
### [Properties](api-reference-old/api-reference-5-x/ui-package/interfaces/gridoptions-interface#properties-1)
- [beforeTableRendering](api-reference-old/api-reference-5-x/ui-package/interfaces/gridoptions-interface#beforetablerendering)
- [formatColumnHeader](api-reference-old/api-reference-5-x/ui-package/interfaces/gridoptions-interface#formatcolumnheader)
- [formatGridCell](api-reference-old/api-reference-5-x/ui-package/interfaces/gridoptions-interface#formatgridcell)
- [maxButtonCount](api-reference-old/api-reference-5-x/ui-package/interfaces/gridoptions-interface#maxbuttoncount)
- [pageItemCssClass](api-reference-old/api-reference-5-x/ui-package/interfaces/gridoptions-interface#pageitemcssclass)
- [tableClass](api-reference-old/api-reference-5-x/ui-package/interfaces/gridoptions-interface#tableclass)



## Properties

---
### beforeTableRendering

Function called before rendering

● beforeTableRendering?: (dataTable: [EqDataTable](api-reference-old/api-reference-5-x/core-package/classes/eqdatatable-class)) => `void`

---
### formatColumnHeader

Function thart formats column header

● formatColumnHeader?: (dataTable: [EqDataTable](api-reference-old/api-reference-5-x/core-package/classes/eqdatatable-class), index: `number`, colLabel: `string`) => `string`

---
### formatGridCell

Function thart formats cell

● formatGridCell?: (dataTable: [EqDataTable](api-reference-old/api-reference-5-x/core-package/classes/eqdatatable-class), i: `number`, j: `number`, value: `string`) => `string`

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
