---
title: MetaEntityAttr class
slug: api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class
sidebar:
  order: 100
---

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class/#public-properties-1)
- [caption](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class/#caption)
- [captionPlural](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class/#captionplural)
- [dataAttr](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class/#dataattr)
- [dataType](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class/#datatype)
- [defaultEditor](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class/#defaulteditor)
- [description](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class/#description)
- [displayFormat](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class/#displayformat)
- [entity](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class/#entity)
- [expr](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class/#expr)
- [id](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class/#id)
- [isEditable](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class/#iseditable)
- [isForeignKey](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class/#isforeignkey)
- [isNullable](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class/#isnullable)
- [isPrimaryKey](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class/#isprimarykey)
- [kind](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class/#kind)
- [lookupAttr](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class/#lookupattr)
- [lookupDataAttr](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class/#lookupdataattr)
- [lookupEntity](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class/#lookupentity)
- [showInLookup](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class/#showinlookup)
- [showOnCreate](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class/#showoncreate)
- [showOnEdit](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class/#showonedit)
- [showOnView](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class/#showonview)
- [size](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class/#size)
- [userData](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class/#userdata)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class/#public-methods-1)
- [loadFromData](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class/#loadfromdata)


## Constructors

---
#### constructor

The default constructor.
⊕ new MetaEntityAttr(entity: [MetaEntity](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class)): [MetaEntityAttr](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class)

#### Parameters:
- entity: [MetaEntity](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class)


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

● dataType: [DataType](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/enumerations/datatype-enum)

---
### defaultEditor

The default editor.

● defaultEditor: [ValueEditor](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/valueeditor-class)

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

● entity: [MetaEntity](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class)

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

● kind: [EntityAttrKind](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/enumerations/entityattrkind-enum)

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

▸ loadFromData(model: [MetaData](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metadata-class),dto: [MetaEntityAttrDTO](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/interfaces/metaentityattrdto-interface)): `void`

#### Parameters:
- model: [MetaData](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metadata-class) - The Data Model.
- dto: [MetaEntityAttrDTO](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/interfaces/metaentityattrdto-interface) - The JSON representation object.



**Returns** `void`


---
