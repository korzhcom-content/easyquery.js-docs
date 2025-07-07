---
title: ValueEditor class
slug: api-reference-old/api-reference-6x/core-package/classes/valueeditor-class
sidebar:
  order: 100
---

Represents a value editor.

## Index
### [Constructors](api-reference-old/api-reference-6x/core-package/classes/valueeditor-class#constructors-1)
- [constructor](api-reference-old/api-reference-6x/core-package/classes/valueeditor-class#constructor)

### [Public Properties](api-reference-old/api-reference-6x/core-package/classes/valueeditor-class#public-properties-1)
- [defValue](api-reference-old/api-reference-6x/core-package/classes/valueeditor-class#defvalue)
- [id](api-reference-old/api-reference-6x/core-package/classes/valueeditor-class#id)
- [name](api-reference-old/api-reference-6x/core-package/classes/valueeditor-class#name)
- [processValues](api-reference-old/api-reference-6x/core-package/classes/valueeditor-class#processvalues)
- [resType](api-reference-old/api-reference-6x/core-package/classes/valueeditor-class#restype)
- [statement](api-reference-old/api-reference-6x/core-package/classes/valueeditor-class#statement)
- [tag](api-reference-old/api-reference-6x/core-package/classes/valueeditor-class#tag)
- [values](api-reference-old/api-reference-6x/core-package/classes/valueeditor-class#values)

### [Public Methods](api-reference-old/api-reference-6x/core-package/classes/valueeditor-class#public-methods-1)
- [loadFromData](api-reference-old/api-reference-6x/core-package/classes/valueeditor-class#loadfromdata)


## Constructors

---
#### constructor

The default constructor.
⊕ new ValueEditor(): [ValueEditor](api-reference-old/api-reference-6x/core-package/classes/valueeditor-class)


---

## Public Properties

---
### defValue

The default value of the editor.

● defValue: `string`

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

● resType: [DataType](api-reference-old/api-reference-6x/core-package/enumerations/datatype-enum)

---
### statement

The statement.

● statement?: `string`

---
### tag

The tag.

● tag: [EditorTag](api-reference-old/api-reference-6x/core-package/enumerations/editortag-enum)

---
### values

The values.

● values?: `any`[]

---
## Public Methods

---
### loadFromData
Loads value editor from its JSON representation object.

▸ loadFromData(data: [ValueEditorData](api-reference-old/api-reference-6x/core-package/interfaces/valueeditordata-interface)): `void`

#### Parameters:
- data: [ValueEditorData](api-reference-old/api-reference-6x/core-package/interfaces/valueeditordata-interface) - The JSON representation object.



**Returns** `void`


---
