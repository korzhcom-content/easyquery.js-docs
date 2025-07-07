---
title: EqPagingOptions interface
slug: >-
  api-reference-old/api-reference-6x/core-package/interfaces/eqpagingoptions-interface
sidebar:
  order: 100
---

Defines the structure of paging options

## Index
### [Properties](api-reference-old/api-reference-6x/core-package/interfaces/eqpagingoptions-interface#properties-1)
- [cssClass](api-reference-old/api-reference-6x/core-package/interfaces/eqpagingoptions-interface#cssclass)
- [enabled](api-reference-old/api-reference-6x/core-package/interfaces/eqpagingoptions-interface#enabled)
- [maxButtonCount](api-reference-old/api-reference-6x/core-package/interfaces/eqpagingoptions-interface#maxbuttoncount)
- [pageCount](api-reference-old/api-reference-6x/core-package/interfaces/eqpagingoptions-interface#pagecount)
- [pageIndex](api-reference-old/api-reference-6x/core-package/interfaces/eqpagingoptions-interface#pageindex)
- [pageItemCssClass](api-reference-old/api-reference-6x/core-package/interfaces/eqpagingoptions-interface#pageitemcssclass)
- [pageSelectedCallback](api-reference-old/api-reference-6x/core-package/interfaces/eqpagingoptions-interface#pageselectedcallback)
- [pageSize](api-reference-old/api-reference-6x/core-package/interfaces/eqpagingoptions-interface#pagesize)
- [totalRecords](api-reference-old/api-reference-6x/core-package/interfaces/eqpagingoptions-interface#totalrecords)
- [useBootstrap](api-reference-old/api-reference-6x/core-package/interfaces/eqpagingoptions-interface#usebootstrap)



## Properties

---
### cssClass

The CSS class for the "page navigor" element

● cssClass?: `string`

---
### enabled

True - if the paging is enabled

● enabled?: `boolean`

---
### maxButtonCount

Defines how many buttons we need to show in the page navigator

● maxButtonCount?: `number`

---
### pageCount

Total number of pages

● pageCount?: `number`

---
### pageIndex

The number of the current page

● pageIndex?: `number`

---
### pageItemCssClass

The CSS class for the element which contains page number buttons

● pageItemCssClass?: `string`

---
### pageSelectedCallback

A function that is called on page selection

● pageSelectedCallback?: (pageNum: `number`, callback?: () => `void`, refresh?: `boolean`) => `void`

---
### pageSize

● pageSize?: `number`

---
### totalRecords

● totalRecords?: `number`

---
### useBootstrap

If true - PageNavigator widget will use some Bootstrap classes during the rendering.

● useBootstrap?: `boolean`

---
