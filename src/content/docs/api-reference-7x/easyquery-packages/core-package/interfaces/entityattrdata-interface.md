---
title: EntityAttrData interface
slug: >-
  api-reference-7x/easyquery-packages/core-package/interfaces/entityattrdata-interface
sidebar:
  order: 100
---

Entity attribute JSON representation object.

## Extends
`MetaEntityAttrDTO`

## Index
### [Properties](api-reference-7x/easyquery-packages/core-package/interfaces/entityattrdata-interface#properties-1)
- [cptn](api-reference-7x/easyquery-packages/core-package/interfaces/entityattrdata-interface#cptn)
- [dattr](api-reference-7x/easyquery-packages/core-package/interfaces/entityattrdata-interface#dattr)
- [defOperator](api-reference-7x/easyquery-packages/core-package/interfaces/entityattrdata-interface#defoperator)
- [desc](api-reference-7x/easyquery-packages/core-package/interfaces/entityattrdata-interface#desc)
- [dfmt](api-reference-7x/easyquery-packages/core-package/interfaces/entityattrdata-interface#dfmt)
- [dtype](api-reference-7x/easyquery-packages/core-package/interfaces/entityattrdata-interface#dtype)
- [edtr](api-reference-7x/easyquery-packages/core-package/interfaces/entityattrdata-interface#edtr)
- [id](api-reference-7x/easyquery-packages/core-package/interfaces/entityattrdata-interface#id)
- [ied](api-reference-7x/easyquery-packages/core-package/interfaces/entityattrdata-interface#ied)
- [ifk](api-reference-7x/easyquery-packages/core-package/interfaces/entityattrdata-interface#ifk)
- [ipk](api-reference-7x/easyquery-packages/core-package/interfaces/entityattrdata-interface#ipk)
- [ivis](api-reference-7x/easyquery-packages/core-package/interfaces/entityattrdata-interface#ivis)
- [kind](api-reference-7x/easyquery-packages/core-package/interfaces/entityattrdata-interface#kind)
- [lattr](api-reference-7x/easyquery-packages/core-package/interfaces/entityattrdata-interface#lattr)
- [ldattr](api-reference-7x/easyquery-packages/core-package/interfaces/entityattrdata-interface#ldattr)
- [lent](api-reference-7x/easyquery-packages/core-package/interfaces/entityattrdata-interface#lent)
- [nul](api-reference-7x/easyquery-packages/core-package/interfaces/entityattrdata-interface#nul)
- [ops](api-reference-7x/easyquery-packages/core-package/interfaces/entityattrdata-interface#ops)
- [sil](api-reference-7x/easyquery-packages/core-package/interfaces/entityattrdata-interface#sil)
- [size](api-reference-7x/easyquery-packages/core-package/interfaces/entityattrdata-interface#size)
- [soc](api-reference-7x/easyquery-packages/core-package/interfaces/entityattrdata-interface#soc)
- [soe](api-reference-7x/easyquery-packages/core-package/interfaces/entityattrdata-interface#soe)
- [sov](api-reference-7x/easyquery-packages/core-package/interfaces/entityattrdata-interface#sov)
- [sql](api-reference-7x/easyquery-packages/core-package/interfaces/entityattrdata-interface#sql)
- [udata](api-reference-7x/easyquery-packages/core-package/interfaces/entityattrdata-interface#udata)
- [uic](api-reference-7x/easyquery-packages/core-package/interfaces/entityattrdata-interface#uic)
- [uir](api-reference-7x/easyquery-packages/core-package/interfaces/entityattrdata-interface#uir)
- [uis](api-reference-7x/easyquery-packages/core-package/interfaces/entityattrdata-interface#uis)



## Properties

---
### cptn

The caption.

● cptn: `string`

---
### dattr

● dattr?: `string`

---
### defOperator

The default operator.

● defOperator: `string`

---
### desc

The description.

● desc?: `string`

---
### dfmt

Display format

● dfmt?: `string`

---
### dtype

The data type.

● dtype: `DataType`

---
### edtr

Value editor id

● edtr?: `string`

---
### id

The id.

● id: `string`

---
### ied

Is editable

● ied?: `boolean`

---
### ifk

Is primary key

● ifk: `boolean`

---
### ipk

Is primary key

● ipk: `boolean`

---
### ivis

Is visible

● ivis?: `boolean`

---
### kind

● kind: `EntityAttrKind`

---
### lattr

Look Up attribute

● lattr: `string`

---
### ldattr

● ldattr?: `string`

---
### lent

● lent?: `string`

---
### nul

Is nullabel

● nul?: `boolean`

---
### ops

List of operators.

● ops: `string`[]

---
### sil

Show in lookup

● sil?: `boolean`

---
### size

The size of data.

● size: `number`

---
### soc

Show On Create

● soc?: `boolean`

---
### soe

Show On Edit

● soe?: `boolean`

---
### sov

Show On View

● sov?: `boolean`

---
### sql

The sql expression

● sql: `string`

---
### udata

User data

● udata?: `string`

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
