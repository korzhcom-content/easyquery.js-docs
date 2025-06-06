---
title: ValueEditor class
slug: api-reference-7x/@easydata/core-package/classes/valueeditor-class
sidebar:
  order: 100
---

Represents a value editor.

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/valueeditor-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/valueeditor-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/valueeditor-class/#public-properties-1)
- [defValue](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/valueeditor-class/#defvalue)
- [extraParams](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/valueeditor-class/#extraparams)
- [id](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/valueeditor-class/#id)
- [name](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/valueeditor-class/#name)
- [processValues](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/valueeditor-class/#processvalues)
- [resType](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/valueeditor-class/#restype)
- [statement](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/valueeditor-class/#statement)
- [tag](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/valueeditor-class/#tag)
- [values](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/valueeditor-class/#values)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/valueeditor-class/#public-methods-1)
- [getValueText](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/valueeditor-class/#getvaluetext)
- [loadFromData](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/valueeditor-class/#loadfromdata)


## Constructors

---
#### constructor

The default constructor.
⊕ new ValueEditor(): [ValueEditor](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/valueeditor-class)


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

● resType: [DataType](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/enumerations/datatype-enum)

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

▸ loadFromData(data: [ValueEditorDTO](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/interfaces/valueeditordto-interface)): `void`

#### Parameters:
- data: [ValueEditorDTO](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/interfaces/valueeditordto-interface) - The JSON representation object.



**Returns** `void`


---
