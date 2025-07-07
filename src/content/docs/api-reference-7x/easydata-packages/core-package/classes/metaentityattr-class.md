---
title: MetaEntityAttr class
slug: api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class
sidebar:
  order: 100
---

## Index
### [Constructors](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class#constructors-1)
- [constructor](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class#constructor)

### [Public Properties](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class#public-properties-1)
- [caption](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class#caption)
- [captionPlural](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class#captionplural)
- [dataAttr](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class#dataattr)
- [dataType](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class#datatype)
- [defaultEditor](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class#defaulteditor)
- [description](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class#description)
- [displayFormat](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class#displayformat)
- [entity](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class#entity)
- [expr](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class#expr)
- [id](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class#id)
- [isEditable](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class#iseditable)
- [isForeignKey](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class#isforeignkey)
- [isNullable](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class#isnullable)
- [isPrimaryKey](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class#isprimarykey)
- [kind](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class#kind)
- [lookupAttr](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class#lookupattr)
- [lookupDataAttr](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class#lookupdataattr)
- [lookupEntity](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class#lookupentity)
- [showInLookup](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class#showinlookup)
- [showOnCreate](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class#showoncreate)
- [showOnEdit](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class#showonedit)
- [showOnView](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class#showonview)
- [size](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class#size)
- [userData](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class#userdata)

### [Public Methods](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class#public-methods-1)
- [loadFromData](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class#loadfromdata)


## Constructors

---
#### constructor

The default constructor.
⊕ new MetaEntityAttr(entity: [MetaEntity](api-reference-7x/easydata-packages/core-package/classes/metaentity-class)): [MetaEntityAttr](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class)

#### Parameters:
- entity: [MetaEntity](api-reference-7x/easydata-packages/core-package/classes/metaentity-class)


---

## Public Properties

---
### caption

The caption.

● caption: `string`

---
### captionPlural

The caption in plural form.

● captionPlural: `string`

---
### dataAttr

● dataAttr: `string`

---
### dataType

● dataType: [DataType](api-reference-7x/easydata-packages/core-package/enumerations/datatype-enum)

---
### defaultEditor

The default editor.

● defaultEditor: [ValueEditor](api-reference-7x/easydata-packages/core-package/classes/valueeditor-class)

---
### description

The description.

● description: `string`

---
### displayFormat

The display format for the attribute

● displayFormat?: `string`

---
### entity

The parent

● entity: [MetaEntity](api-reference-7x/easydata-packages/core-package/classes/metaentity-class)

---
### expr

The attribute expression.

● expr: `string`

---
### id

The id.

● id: `string`

---
### isEditable

The value indicating wether the attribute is editable.

● isEditable: `boolean`

---
### isForeignKey

The value indicating wether the attribute is a primary key.

● isForeignKey: `boolean`

---
### isNullable

The value indicating wether the attribute can be null key.

● isNullable: `boolean`

---
### isPrimaryKey

The value indicating wether the attribute is a primary key.

● isPrimaryKey: `boolean`

---
### kind

The kind.

● kind: [EntityAttrKind](api-reference-7x/easydata-packages/core-package/enumerations/entityattrkind-enum)

---
### lookupAttr

The lookupAttr.

● lookupAttr: `string`

---
### lookupDataAttr

● lookupDataAttr: `string`

---
### lookupEntity

● lookupEntity: `string`

---
### showInLookup

The value indicating wether the attribute is shown in Lookup Editor.

● showInLookup: `boolean`

---
### showOnCreate

The value indicating wether the attribute is shown create page.

● showOnCreate: `boolean`

---
### showOnEdit

The value indicating wether the attribute is shown edit page.

● showOnEdit: `boolean`

---
### showOnView

The value indicating wether the attribute is shown on view page.

● showOnView: `boolean`

---
### size

● size: `number`

---
### userData

User data

● userData?: `string`

---
## Public Methods

---
### loadFromData
Loads entity attribute from JSON representation object.

▸ loadFromData(model: [MetaData](api-reference-7x/easydata-packages/core-package/classes/metadata-class),dto: [MetaEntityAttrDTO](api-reference-7x/easydata-packages/core-package/interfaces/metaentityattrdto-interface)): `void`

#### Parameters:
- model: [MetaData](api-reference-7x/easydata-packages/core-package/classes/metadata-class) - The Data Model.
- dto: [MetaEntityAttrDTO](api-reference-7x/easydata-packages/core-package/interfaces/metaentityattrdto-interface) - The JSON representation object.



**Returns** `void`


---
