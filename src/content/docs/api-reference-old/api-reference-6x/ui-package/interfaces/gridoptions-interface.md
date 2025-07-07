---
title: GridOptions interface
slug: api-reference-old/api-reference-6x/ui-package/interfaces/gridoptions-interface
sidebar:
  order: 100
---

Grid options type.

## Extends
[DataDisplayFormatterOptions](api-reference-old/api-reference-6x/core-package/interfaces/datadisplayformatteroptions-interface)

## Index
### [Properties](api-reference-old/api-reference-6x/ui-package/interfaces/gridoptions-interface#properties-1)
- [allowDragDrop](api-reference-old/api-reference-6x/ui-package/interfaces/gridoptions-interface#allowdragdrop)
- [beforeTableRendering](api-reference-old/api-reference-6x/ui-package/interfaces/gridoptions-interface#beforetablerendering)
- [formatColumnHeader](api-reference-old/api-reference-6x/ui-package/interfaces/gridoptions-interface#formatcolumnheader)
- [formatGridCell](api-reference-old/api-reference-6x/ui-package/interfaces/gridoptions-interface#formatgridcell)
- [localeId](api-reference-old/api-reference-6x/ui-package/interfaces/gridoptions-interface#localeid)
- [localeSettings](api-reference-old/api-reference-6x/ui-package/interfaces/gridoptions-interface#localesettings)
- [maxButtonCount](api-reference-old/api-reference-6x/ui-package/interfaces/gridoptions-interface#maxbuttoncount)
- [pageItemCssClass](api-reference-old/api-reference-6x/ui-package/interfaces/gridoptions-interface#pageitemcssclass)
- [tableClass](api-reference-old/api-reference-6x/ui-package/interfaces/gridoptions-interface#tableclass)
- [useCustomLocaleSettings](api-reference-old/api-reference-6x/ui-package/interfaces/gridoptions-interface#usecustomlocalesettings)



## Properties

---
### allowDragDrop

● allowDragDrop?: `boolean`

---
### beforeTableRendering

Function called before rendering

● beforeTableRendering?: (dataTable: [EqDataTable](api-reference-old/api-reference-6x/core-package/classes/eqdatatable-class)) => `void`

---
### formatColumnHeader

Function thart formats column header

● formatColumnHeader?: (dataTable: [EqDataTable](api-reference-old/api-reference-6x/core-package/classes/eqdatatable-class), index: `number`, colLabel: `string`) => `string`

---
### formatGridCell

Function thart formats cell

● formatGridCell?: (dataTable: [EqDataTable](api-reference-old/api-reference-6x/core-package/classes/eqdatatable-class), i: `number`, j: `number`, value: `string`) => `string`

---
### localeId

● localeId?: `string`

---
### localeSettings

● localeSettings?: [LocaleSettings](api-reference-old/api-reference-6x/core-package/i18n-namespace/interfaces/localesettings-interface)

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
### useCustomLocaleSettings

● useCustomLocaleSettings?: `boolean`

---
