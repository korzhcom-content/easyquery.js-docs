---
title: EqValueEditor class
slug: api-reference-7x/easyquery-packages/core-package/classes/eqvalueeditor-class
sidebar:
  order: 100
---

Represents a value editor.

## Extends
`ValueEditor`

## Index
### [Constructors](api-reference-7x/easyquery-packages/core-package/classes/eqvalueeditor-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/core-package/classes/eqvalueeditor-class#constructor)

### [Public Properties](api-reference-7x/easyquery-packages/core-package/classes/eqvalueeditor-class#public-properties-1)
- [defValue](api-reference-7x/easyquery-packages/core-package/classes/eqvalueeditor-class#defvalue)
- [extraParams](api-reference-7x/easyquery-packages/core-package/classes/eqvalueeditor-class#extraparams)
- [id](api-reference-7x/easyquery-packages/core-package/classes/eqvalueeditor-class#id)
- [name](api-reference-7x/easyquery-packages/core-package/classes/eqvalueeditor-class#name)
- [processValues](api-reference-7x/easyquery-packages/core-package/classes/eqvalueeditor-class#processvalues)
- [resType](api-reference-7x/easyquery-packages/core-package/classes/eqvalueeditor-class#restype)
- [statement](api-reference-7x/easyquery-packages/core-package/classes/eqvalueeditor-class#statement)
- [tag](api-reference-7x/easyquery-packages/core-package/classes/eqvalueeditor-class#tag)
- [values](api-reference-7x/easyquery-packages/core-package/classes/eqvalueeditor-class#values)

### [Public Methods](api-reference-7x/easyquery-packages/core-package/classes/eqvalueeditor-class#public-methods-1)
- [getValueText](api-reference-7x/easyquery-packages/core-package/classes/eqvalueeditor-class#getvaluetext)
- [loadFromData](api-reference-7x/easyquery-packages/core-package/classes/eqvalueeditor-class#loadfromdata)


## Constructors

---
#### constructor

The default constructor.
⊕ new EqValueEditor(): [EqValueEditor](api-reference-7x/easyquery-packages/core-package/classes/eqvalueeditor-class)


---

## Public Properties

---
### defValue

The default value of the editor.

● defValue: `string`

---
### extraParams

Extra parameters

● extraParams?: `any`

---
### id

The ID.

● id: `string`

---
### name

The name of the value editor.

● name?: `string`

---
### processValues

● processValues?: (values: `any`[]) => `any`

---
### resType

The type of the result.

● resType: `DataType`

---
### statement

The statement.

● statement?: `string`

---
### tag

● tag: `EqEditorTag`

---
### values

The values.

● values?: `any`[]

---
## Public Methods

---
### getValueText
▸ getValueText(value: `string` | `string`[]): `string`

#### Parameters:
- value: `string` | `string`[]


**Returns** `string`


---
### loadFromData
Loads value editor from its JSON representation object.

▸ loadFromData(data: [ValueEditorData](api-reference-7x/easyquery-packages/core-package/interfaces/valueeditordata-interface)): `void`

#### Parameters:
- data: [ValueEditorData](api-reference-7x/easyquery-packages/core-package/interfaces/valueeditordata-interface) - The JSON representation object.



**Returns** `void`


---
