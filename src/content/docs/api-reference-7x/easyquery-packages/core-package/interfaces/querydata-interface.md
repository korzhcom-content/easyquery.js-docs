---
title: QueryData interface
slug: >-
  api-reference-7x/easyquery-packages/core-package/interfaces/querydata-interface
sidebar:
  order: 100
---

Query JSON representation object.

## Index
### [Properties](api-reference-7x/easyquery-packages/core-package/interfaces/querydata-interface#properties-1)
- [cols](api-reference-7x/easyquery-packages/core-package/interfaces/querydata-interface#cols)
- [dds](api-reference-7x/easyquery-packages/core-package/interfaces/querydata-interface#dds)
- [desc](api-reference-7x/easyquery-packages/core-package/interfaces/querydata-interface#desc)
- [extraData](api-reference-7x/easyquery-packages/core-package/interfaces/querydata-interface#extradata)
- [id](api-reference-7x/easyquery-packages/core-package/interfaces/querydata-interface#id)
- [innerData](api-reference-7x/easyquery-packages/core-package/interfaces/querydata-interface#innerdata)
- [justsortcols](api-reference-7x/easyquery-packages/core-package/interfaces/querydata-interface#justsortcols)
- [locale](api-reference-7x/easyquery-packages/core-package/interfaces/querydata-interface#locale)
- [name](api-reference-7x/easyquery-packages/core-package/interfaces/querydata-interface#name)
- [root](api-reference-7x/easyquery-packages/core-package/interfaces/querydata-interface#root)
- [timezoneOffset](api-reference-7x/easyquery-packages/core-package/interfaces/querydata-interface#timezoneoffset)



## Properties

---
### cols

The columns.

● cols?: [QueryColumnData](api-reference-7x/easyquery-packages/core-package/interfaces/querycolumndata-interface)[]

---
### dds

Drill down queries

● dds?: `Array`&lt;[QueryData](api-reference-7x/easyquery-packages/core-package/interfaces/querydata-interface)&gt;

---
### desc

The description

● desc?: `string`

---
### extraData

Conatins user-defined extra data for current query.

● extraData?: `any`

---
### id

The id.

● id: `string`

---
### innerData

● innerData?: `any`

---
### justsortcols

The just sorted columns.

● justsortcols: [QueryColumnData](api-reference-7x/easyquery-packages/core-package/interfaces/querycolumndata-interface)[]

---
### locale

● locale?: `string`

---
### name

The name

● name: `string`

---
### root

The root.

● root: [ConditionData](api-reference-7x/easyquery-packages/core-package/interfaces/conditiondata-interface)

---
### timezoneOffset

Gets the current time zone

● timezoneOffset?: `number`

---
