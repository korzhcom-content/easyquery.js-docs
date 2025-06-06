---
title: QueryData interface
slug: api-reference-7x/@easyquery/core-package/interfaces/querydata-interface
sidebar:
  order: 100
---

Query JSON representation object.

## Index
### [Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/querydata-interface/#properties-1)
- [cols](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/querydata-interface/#cols)
- [dds](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/querydata-interface/#dds)
- [desc](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/querydata-interface/#desc)
- [extraData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/querydata-interface/#extradata)
- [id](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/querydata-interface/#id)
- [innerData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/querydata-interface/#innerdata)
- [justsortcols](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/querydata-interface/#justsortcols)
- [locale](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/querydata-interface/#locale)
- [name](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/querydata-interface/#name)
- [root](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/querydata-interface/#root)
- [timezoneOffset](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/querydata-interface/#timezoneoffset)



## Properties

---
### cols

The columns.

● cols?: [QueryColumnData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/querycolumndata-interface)[]

---
### dds

Drill down queries

● dds?: `Array`&lt;[QueryData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/querydata-interface)&gt;

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

● justsortcols: [QueryColumnData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/querycolumndata-interface)[]

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

● root: [ConditionData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/conditiondata-interface)

---
### timezoneOffset

Gets the current time zone

● timezoneOffset?: `number`

---
