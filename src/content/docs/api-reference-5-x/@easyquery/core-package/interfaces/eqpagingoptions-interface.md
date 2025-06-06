---
title: EqPagingOptions interface
slug: api-reference-5-x/@easyquery/core-package/interfaces/eqpagingoptions-interface
sidebar:
  order: 100
---

Defines the structure of paging options

## Index
### [Properties](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqpagingoptions-interface/#properties-1)
- [cssClass](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqpagingoptions-interface/#cssclass)
- [enabled](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqpagingoptions-interface/#enabled)
- [maxButtonCount](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqpagingoptions-interface/#maxbuttoncount)
- [pageCount](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqpagingoptions-interface/#pagecount)
- [pageIndex](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqpagingoptions-interface/#pageindex)
- [pageItemCssClass](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqpagingoptions-interface/#pageitemcssclass)
- [pageSelectedCallback](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqpagingoptions-interface/#pageselectedcallback)
- [useBootstrap](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqpagingoptions-interface/#usebootstrap)



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

● pageSelectedCallback?: (pageNum: `number`) => `void`

---
### useBootstrap

If true - PageNavigator widget will use some Bootstrap classes during the rendering.

● useBootstrap?: `boolean`

---
