---
title: EntityAttr class
slug: api-reference-7x/easyquery-packages/core-package/classes/entityattr-class
sidebar:
  order: 100
---

Represents entity attribute.

## Extends
`MetaEntityAttr`

## Index
### [Constructors](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class#constructor)

### [Public Properties](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class#public-properties-1)
- [caption](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class#caption)
- [captionPlural](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class#captionplural)
- [dataAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class#dataattr)
- [dataType](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class#datatype)
- [defaultEditor](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class#defaulteditor)
- [defaultOperator](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class#defaultoperator)
- [description](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class#description)
- [displayFormat](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class#displayformat)
- [entity](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class#entity)
- [expr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class#expr)
- [id](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class#id)
- [isEditable](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class#iseditable)
- [isForeignKey](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class#isforeignkey)
- [isNullable](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class#isnullable)
- [isPrimaryKey](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class#isprimarykey)
- [kind](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class#kind)
- [lookupAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class#lookupattr)
- [lookupDataAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class#lookupdataattr)
- [lookupEntity](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class#lookupentity)
- [operators](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class#operators)
- [params](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class#params)
- [showInLookup](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class#showinlookup)
- [showOnCreate](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class#showoncreate)
- [showOnEdit](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class#showonedit)
- [showOnView](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class#showonview)
- [size](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class#size)
- [useInConditions](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class#useinconditions)
- [useInResult](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class#useinresult)
- [useInSorting](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class#useinsorting)
- [userData](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class#userdata)

### [Public Methods](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class#public-methods-1)
- [loadFromData](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class#loadfromdata)


## Constructors

---
#### constructor

The default constructor.
⊕ new EntityAttr(entity: [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class)): [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class)

#### Parameters:
- entity: [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class)


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

● dataType: `DataType`

---
### defaultEditor

The default editor.

● defaultEditor: `ValueEditor`

---
### defaultOperator

The default operator.

● defaultOperator: `string`

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

● entity: [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class)

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

● kind: `EntityAttrKind`

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
### operators

The list of operators which can be applied for this attribute.

● operators: `string`[]

---
### params

The parameters associated with this entity attribute

● params: [QueryParam](api-reference-7x/easyquery-packages/core-package/interfaces/queryparam-interface)[] = ` []`

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
### useInConditions

The value indicating whether the attribute can be used in query conditions.

● useInConditions: `boolean`

---
### useInResult

The value indicating whether the attribute can be used in result columns (`SELECT` clause).

● useInResult: `boolean`

---
### useInSorting

The value indicating whether the attribute can be used in sorting.

● useInSorting: `boolean`

---
### userData

User data

● userData?: `string`

---
## Public Methods

---
### loadFromData
Loads entity attribute from JSON representation object.

▸ loadFromData(model: [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class),data: [EntityAttrData](api-reference-7x/easyquery-packages/core-package/interfaces/entityattrdata-interface)): `void`

#### Parameters:
- model: [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class) - The Data Model.
- data: [EntityAttrData](api-reference-7x/easyquery-packages/core-package/interfaces/entityattrdata-interface) - The JSON representation object.



**Returns** `void`


---
