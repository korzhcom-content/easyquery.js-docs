---
title: ValueEditor class
slug: api-reference-5-x/@easyquery/core-package/classes/valueeditor-class
sidebar:
  order: 100
---

Represents a value editor.

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/valueeditor-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/valueeditor-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/valueeditor-class/#public-properties-1)
- [defValue](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/valueeditor-class/#defvalue)
- [id](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/valueeditor-class/#id)
- [name](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/valueeditor-class/#name)
- [resType](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/valueeditor-class/#restype)
- [sql](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/valueeditor-class/#sql)
- [tag](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/valueeditor-class/#tag)

### [Public Methods](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/valueeditor-class/#public-methods-1)
- [loadFromData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/valueeditor-class/#loadfromdata)


## Constructors

---
#### constructor

The default constructor.
⊕ new ValueEditor(): [ValueEditor](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/valueeditor-class)


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
### resType

The type of the result.

● resType: [DataType](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/enumerations/datatype-enum)

---
### sql

The sql expression.

● sql?: `string`

---
### tag

The tag.

● tag: [EditorTag](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/enumerations/editortag-enum)

---
## Public Methods

---
### loadFromData
Loads value editor from its JSON representation object.

▸ loadFromData(data: [ValueEditorData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/valueeditordata-interface)): `void`

#### Parameters:
- data: [ValueEditorData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/valueeditordata-interface) - The JSON representation object.



**Returns** `void`

---
