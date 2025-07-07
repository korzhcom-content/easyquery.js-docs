---
title: ValueEditor class
slug: api-reference-7x/easydata-packages/core-package/classes/valueeditor-class
sidebar:
  order: 100
---

Represents a value editor.

## Index
### [Constructors](api-reference-7x/easydata-packages/core-package/classes/valueeditor-class#constructors-1)
- [constructor](api-reference-7x/easydata-packages/core-package/classes/valueeditor-class#constructor)

### [Public Properties](api-reference-7x/easydata-packages/core-package/classes/valueeditor-class#public-properties-1)
- [defValue](api-reference-7x/easydata-packages/core-package/classes/valueeditor-class#defvalue)
- [extraParams](api-reference-7x/easydata-packages/core-package/classes/valueeditor-class#extraparams)
- [id](api-reference-7x/easydata-packages/core-package/classes/valueeditor-class#id)
- [name](api-reference-7x/easydata-packages/core-package/classes/valueeditor-class#name)
- [processValues](api-reference-7x/easydata-packages/core-package/classes/valueeditor-class#processvalues)
- [resType](api-reference-7x/easydata-packages/core-package/classes/valueeditor-class#restype)
- [statement](api-reference-7x/easydata-packages/core-package/classes/valueeditor-class#statement)
- [tag](api-reference-7x/easydata-packages/core-package/classes/valueeditor-class#tag)
- [values](api-reference-7x/easydata-packages/core-package/classes/valueeditor-class#values)

### [Public Methods](api-reference-7x/easydata-packages/core-package/classes/valueeditor-class#public-methods-1)
- [getValueText](api-reference-7x/easydata-packages/core-package/classes/valueeditor-class#getvaluetext)
- [loadFromData](api-reference-7x/easydata-packages/core-package/classes/valueeditor-class#loadfromdata)


## Constructors

---
#### constructor

The default constructor.
⊕ new ValueEditor(): [ValueEditor](api-reference-7x/easydata-packages/core-package/classes/valueeditor-class)


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

● resType: [DataType](api-reference-7x/easydata-packages/core-package/enumerations/datatype-enum)

---
### statement

The statement.

● statement?: `string`

---
### tag

The tag.

● tag: `EditorTag`

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

▸ loadFromData(data: [ValueEditorDTO](api-reference-7x/easydata-packages/core-package/interfaces/valueeditordto-interface)): `void`

#### Parameters:
- data: [ValueEditorDTO](api-reference-7x/easydata-packages/core-package/interfaces/valueeditordto-interface) - The JSON representation object.



**Returns** `void`


---
