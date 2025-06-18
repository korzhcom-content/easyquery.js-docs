---
title: GridOptions interface
slug: api-reference-old/api-reference-6x/ui-package/interfaces/gridoptions-interface
sidebar:
  order: 100
---

Grid options type.

## Extends
[DataDisplayFormatterOptions](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/datadisplayformatteroptions-interface)

## Index
### [Properties](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/gridoptions-interface/#properties-1)
- [allowDragDrop](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/gridoptions-interface/#allowdragdrop)
- [beforeTableRendering](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/gridoptions-interface/#beforetablerendering)
- [formatColumnHeader](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/gridoptions-interface/#formatcolumnheader)
- [formatGridCell](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/gridoptions-interface/#formatgridcell)
- [localeId](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/gridoptions-interface/#localeid)
- [localeSettings](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/gridoptions-interface/#localesettings)
- [maxButtonCount](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/gridoptions-interface/#maxbuttoncount)
- [pageItemCssClass](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/gridoptions-interface/#pageitemcssclass)
- [tableClass](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/gridoptions-interface/#tableclass)
- [useCustomLocaleSettings](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/gridoptions-interface/#usecustomlocalesettings)



## Properties

---
### allowDragDrop

● allowDragDrop?: `boolean`

---
### beforeTableRendering

Function called before rendering

● beforeTableRendering?: (dataTable: [EqDataTable](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqdatatable-class)) => `void`

---
### formatColumnHeader

Function thart formats column header

● formatColumnHeader?: (dataTable: [EqDataTable](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqdatatable-class), index: `number`, colLabel: `string`) => `string`

---
### formatGridCell

Function thart formats cell

● formatGridCell?: (dataTable: [EqDataTable](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqdatatable-class), i: `number`, j: `number`, value: `string`) => `string`

---
### localeId

● localeId?: `string`

---
### localeSettings

● localeSettings?: [LocaleSettings](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/i18n-namespace/interfaces/localesettings-interface)

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
