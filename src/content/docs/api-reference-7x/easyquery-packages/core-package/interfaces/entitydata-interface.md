---
title: EntityData interface
slug: >-
  api-reference-7x/easyquery-packages/core-package/interfaces/entitydata-interface
sidebar:
  order: 100
---

Entity JSON representation object.

## Extends
`MetaEntityDTO`

## Index
### [Properties](api-reference-7x/easyquery-packages/core-package/interfaces/entitydata-interface#properties-1)
- [attrs](api-reference-7x/easyquery-packages/core-package/interfaces/entitydata-interface#attrs)
- [desc](api-reference-7x/easyquery-packages/core-package/interfaces/entitydata-interface#desc)
- [ents](api-reference-7x/easyquery-packages/core-package/interfaces/entitydata-interface#ents)
- [id](api-reference-7x/easyquery-packages/core-package/interfaces/entitydata-interface#id)
- [name](api-reference-7x/easyquery-packages/core-package/interfaces/entitydata-interface#name)
- [namePlur](api-reference-7x/easyquery-packages/core-package/interfaces/entitydata-interface#nameplur)
- [uic](api-reference-7x/easyquery-packages/core-package/interfaces/entitydata-interface#uic)
- [uir](api-reference-7x/easyquery-packages/core-package/interfaces/entitydata-interface#uir)
- [uis](api-reference-7x/easyquery-packages/core-package/interfaces/entitydata-interface#uis)



## Properties

---
### attrs

List of attributes.

● attrs?: [EntityAttrData](api-reference-7x/easyquery-packages/core-package/interfaces/entityattrdata-interface)[]

---
### desc

The description.

● desc?: `string`

---
### ents

List of sub-entities.

● ents?: [EntityData](api-reference-7x/easyquery-packages/core-package/interfaces/entitydata-interface)[]

---
### id

The id.

● id: `string`

---
### name

The name.

● name: `string`

---
### namePlur

The name in plural form

● namePlur?: `string`

---
### uic

Use in conditions.

● uic: `boolean`

---
### uir

Use in result.

● uir: `boolean`

---
### uis

Use in sorting.

● uis: `boolean`

---
