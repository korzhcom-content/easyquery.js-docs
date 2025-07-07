---
title: MetaData class
slug: api-reference-7x/easydata-packages/core-package/classes/metadata-class
sidebar:
  order: 100
---

Represents a data model

## Index
### [Constructors](api-reference-7x/easydata-packages/core-package/classes/metadata-class#constructors-1)
- [constructor](api-reference-7x/easydata-packages/core-package/classes/metadata-class#constructor)

### [Public Properties](api-reference-7x/easydata-packages/core-package/classes/metadata-class#public-properties-1)
- [editors](api-reference-7x/easydata-packages/core-package/classes/metadata-class#editors)
- [id](api-reference-7x/easydata-packages/core-package/classes/metadata-class#id)
- [name](api-reference-7x/easydata-packages/core-package/classes/metadata-class#name)
- [rootEntity](api-reference-7x/easydata-packages/core-package/classes/metadata-class#rootentity)
- [version](api-reference-7x/easydata-packages/core-package/classes/metadata-class#version)

### [Protected Properties](api-reference-7x/easydata-packages/core-package/classes/metadata-class#protected-properties-1)
- [mainEntity](api-reference-7x/easydata-packages/core-package/classes/metadata-class#mainentity)

### [Public Methods](api-reference-7x/easydata-packages/core-package/classes/metadata-class#public-methods-1)
- [addDefaultValueEditors](api-reference-7x/easydata-packages/core-package/classes/metadata-class#adddefaultvalueeditors)
- [addOrUpdateValueEditor](api-reference-7x/easydata-packages/core-package/classes/metadata-class#addorupdatevalueeditor)
- [checkAttrProperty](api-reference-7x/easydata-packages/core-package/classes/metadata-class#checkattrproperty)
- [clear](api-reference-7x/easydata-packages/core-package/classes/metadata-class#clear)
- [createEntity](api-reference-7x/easydata-packages/core-package/classes/metadata-class#createentity)
- [createEntityAttr](api-reference-7x/easydata-packages/core-package/classes/metadata-class#createentityattr)
- [createValueEditor](api-reference-7x/easydata-packages/core-package/classes/metadata-class#createvalueeditor)
- [getAttributeById](api-reference-7x/easydata-packages/core-package/classes/metadata-class#getattributebyid)
- [getAttributeText](api-reference-7x/easydata-packages/core-package/classes/metadata-class#getattributetext)
- [getEditorById](api-reference-7x/easydata-packages/core-package/classes/metadata-class#geteditorbyid)
- [getEntitiesTree](api-reference-7x/easydata-packages/core-package/classes/metadata-class#getentitiestree)
- [getEntitiesTreeWithFilter](api-reference-7x/easydata-packages/core-package/classes/metadata-class#getentitiestreewithfilter)
- [getEntityAttrById](api-reference-7x/easydata-packages/core-package/classes/metadata-class#getentityattrbyid)
- [getEntityPathByAttr](api-reference-7x/easydata-packages/core-package/classes/metadata-class#getentitypathbyattr)
- [getFirstAttributeByFilter](api-reference-7x/easydata-packages/core-package/classes/metadata-class#getfirstattributebyfilter)
- [getFullEntityPathByAttr](api-reference-7x/easydata-packages/core-package/classes/metadata-class#getfullentitypathbyattr)
- [getId](api-reference-7x/easydata-packages/core-package/classes/metadata-class#getid)
- [getMainEntity](api-reference-7x/easydata-packages/core-package/classes/metadata-class#getmainentity)
- [getName](api-reference-7x/easydata-packages/core-package/classes/metadata-class#getname)
- [getRootEntity](api-reference-7x/easydata-packages/core-package/classes/metadata-class#getrootentity)
- [isEmpty](api-reference-7x/easydata-packages/core-package/classes/metadata-class#isempty)
- [loadFromData](api-reference-7x/easydata-packages/core-package/classes/metadata-class#loadfromdata)
- [loadFromJSON](api-reference-7x/easydata-packages/core-package/classes/metadata-class#loadfromjson)
- [runThroughEntities](api-reference-7x/easydata-packages/core-package/classes/metadata-class#runthroughentities)
- [setData](api-reference-7x/easydata-packages/core-package/classes/metadata-class#setdata)


## Constructors

---
#### constructor

The default constructor.
⊕ new MetaData(): [MetaData](api-reference-7x/easydata-packages/core-package/classes/metadata-class)


---

## Public Properties

---
### editors

The list of value editors.

● editors: [ValueEditor](api-reference-7x/easydata-packages/core-package/classes/valueeditor-class)[]

---
### id

The ID of the data mode.

● id: `string`

---
### name

The name of the data model.

● name: `string`

---
### rootEntity

The root entity.

● rootEntity: [MetaEntity](api-reference-7x/easydata-packages/core-package/classes/metaentity-class)

---
### version

The version of the data model.

● version: `string`

---
## Protected Properties

---
### mainEntity

● mainEntity: [MetaEntity](api-reference-7x/easydata-packages/core-package/classes/metaentity-class) | `null` = ` null`

---
## Public Methods

---
### addDefaultValueEditors
Add default value editors.

▸ addDefaultValueEditors(): `void`


**Returns** `void`


---
### addOrUpdateValueEditor
Add or update a value editor.

▸ addOrUpdateValueEditor(id: `string`,tag: `EditorTag`,resType: [DataType](api-reference-7x/easydata-packages/core-package/enumerations/datatype-enum)): [ValueEditor](api-reference-7x/easydata-packages/core-package/classes/valueeditor-class)

#### Parameters:
- id: `string` - The id.
- tag: `EditorTag` - The tag.
- resType: [DataType](api-reference-7x/easydata-packages/core-package/enumerations/datatype-enum) - The result type.


**Returns** [ValueEditor](api-reference-7x/easydata-packages/core-package/classes/valueeditor-class) - The value editor.



---
### checkAttrProperty
Checks wether attribute contains such property.

▸ checkAttrProperty(attrId: `string`,propName: `string`): `boolean`

#### Parameters:
- attrId: `string` - The attribute ID.
- propName: `string` - The property name.


**Returns** `boolean` - `true` if the attribute contains the property, otherwise `false`.



---
### clear
Clears data model.

▸ clear(): `void`


**Returns** `void`


---
### createEntity
▸ createEntity(parent?: [MetaEntity](api-reference-7x/easydata-packages/core-package/classes/metaentity-class)): [MetaEntity](api-reference-7x/easydata-packages/core-package/classes/metaentity-class)

#### Parameters:
- parent: [MetaEntity](api-reference-7x/easydata-packages/core-package/classes/metaentity-class), *Optional* 


**Returns** [MetaEntity](api-reference-7x/easydata-packages/core-package/classes/metaentity-class)


---
### createEntityAttr
▸ createEntityAttr(parent?: [MetaEntity](api-reference-7x/easydata-packages/core-package/classes/metaentity-class)): [MetaEntityAttr](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class)

#### Parameters:
- parent: [MetaEntity](api-reference-7x/easydata-packages/core-package/classes/metaentity-class), *Optional* 


**Returns** [MetaEntityAttr](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class)


---
### createValueEditor
▸ createValueEditor(): [ValueEditor](api-reference-7x/easydata-packages/core-package/classes/valueeditor-class)


**Returns** [ValueEditor](api-reference-7x/easydata-packages/core-package/classes/valueeditor-class)


---
### getAttributeById
Gets entity attribute by its ID.
This function runs through all attributes inside specified model (it's root entity and all its sub-entities).

▸ getAttributeById(attrId: `string`): [MetaEntityAttr](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class) | `null`

#### Parameters:
- attrId: `string` - The attribute ID.


**Returns** [MetaEntityAttr](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class) | `null` - The attribute or `null`.



---
### getAttributeText
Gets the attribute text.

▸ getAttributeText(attr: [MetaEntityAttr](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class),format: `string`): `string`

#### Parameters:
- attr: [MetaEntityAttr](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class) - The attribute.
- format: `string` - The format.


**Returns** `string` - Formatted text.



---
### getEditorById
Finds editor by its ID.

▸ getEditorById(editorId: `string`): [ValueEditor](api-reference-7x/easydata-packages/core-package/classes/valueeditor-class) | `null`

#### Parameters:
- editorId: `string` - The editor ID.


**Returns** [ValueEditor](api-reference-7x/easydata-packages/core-package/classes/valueeditor-class) | `null` - The value editor or `null`.



---
### getEntitiesTree
Gets entities tree.

▸ getEntitiesTree(opts: `any`,filterFunc?: (ent: [MetaEntity](api-reference-7x/easydata-packages/core-package/classes/metaentity-class), attr: [MetaEntityAttr](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class)) => `boolean`): `any`

#### Parameters:
- opts: `any` - The options.
- filterFunc: (ent: [MetaEntity](api-reference-7x/easydata-packages/core-package/classes/metaentity-class), attr: [MetaEntityAttr](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class)) => `boolean`, *Optional*  - The filter function.
Takes two parameters, Entity and EntityAttr (second parameter will be null for entities), and returns boolean (true if the corresponding entity or attribute).


**Returns** `any` - The tree of the entities and their attributes according to options and the filter function



---
### getEntitiesTreeWithFilter
Gets entities tree due to filter.

▸ getEntitiesTreeWithFilter(filterFunc: (ent: [MetaEntity](api-reference-7x/easydata-packages/core-package/classes/metaentity-class), attr: [MetaEntityAttr](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class)) => `boolean`): [MetaEntity](api-reference-7x/easydata-packages/core-package/classes/metaentity-class)[]

#### Parameters:
- filterFunc: (ent: [MetaEntity](api-reference-7x/easydata-packages/core-package/classes/metaentity-class), attr: [MetaEntityAttr](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class)) => `boolean` - The filter function.
Takes two parameters, Entity and EntityAttr (second parameter will be null for entities), and returns boolean (true if the corresponding entity or attribute).


**Returns** [MetaEntity](api-reference-7x/easydata-packages/core-package/classes/metaentity-class)[] - The tree of the entities and their attributes according to the filter function



---
### getEntityAttrById
Gets entity attribute by its ID.
This function runs through all attributes inside specified entity and all its sub-entities.

▸ getEntityAttrById(entity: [MetaEntity](api-reference-7x/easydata-packages/core-package/classes/metaentity-class),attrId: `string`): [MetaEntityAttr](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class) | `null`

#### Parameters:
- entity: [MetaEntity](api-reference-7x/easydata-packages/core-package/classes/metaentity-class)
- attrId: `string`


**Returns** [MetaEntityAttr](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class) | `null` - The attribute or `null`.



---
### getEntityPathByAttr
Finds entity path by attribute

▸ getEntityPathByAttr(entity: [MetaEntity](api-reference-7x/easydata-packages/core-package/classes/metaentity-class),attrId: `string`,sep: `string`,root: `boolean`): `string`

#### Parameters:
- entity: [MetaEntity](api-reference-7x/easydata-packages/core-package/classes/metaentity-class) - The entity.
- attrId: `string` - The attribute id.
- sep: `string` - The separator.
- root: `boolean` - The root option.


**Returns** `string` - The path.



---
### getFirstAttributeByFilter
Finds first attribute by filter.

▸ getFirstAttributeByFilter(filterFunc: (attr: [MetaEntityAttr](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class)) => `boolean`): [MetaEntityAttr](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class)

#### Parameters:
- filterFunc: (attr: [MetaEntityAttr](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class)) => `boolean` - The filter function. Takes EntityAttr object in parameter and returns boolean



**Returns** [MetaEntityAttr](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class)


---
### getFullEntityPathByAttr
Finds full entity path by attribute

▸ getFullEntityPathByAttr(attrId: `string`,sep: `string`): `string`

#### Parameters:
- attrId: `string` - The attribute id.
- sep: `string` - The separator.


**Returns** `string` - The path.



---
### getId
Gets ID of the data model.

▸ getId(): `string`


**Returns** `string` - The ID.



---
### getMainEntity
Gets the main entity of model

▸ getMainEntity(): [MetaEntity](api-reference-7x/easydata-packages/core-package/classes/metaentity-class)


**Returns** [MetaEntity](api-reference-7x/easydata-packages/core-package/classes/metaentity-class) - The main entity.



---
### getName
Gets name of the data model.

▸ getName(): `string`


**Returns** `string` - The name.



---
### getRootEntity
Gets root entity of the data model.

▸ getRootEntity(): [MetaEntity](api-reference-7x/easydata-packages/core-package/classes/metaentity-class)


**Returns** [MetaEntity](api-reference-7x/easydata-packages/core-package/classes/metaentity-class) - The root entity.



---
### isEmpty
Checks wether the data model is empty.

▸ isEmpty(): `boolean`


**Returns** `boolean` - `true` if the data model is empty, otherwise `false`.



---
### loadFromData
Loads data model from its JSON representation object.

▸ loadFromData(data: [MetaDataDTO](api-reference-7x/easydata-packages/core-package/interfaces/metadatadto-interface)): `void`

#### Parameters:
- data: [MetaDataDTO](api-reference-7x/easydata-packages/core-package/interfaces/metadatadto-interface) - The JSON representation object.



**Returns** `void`


---
### loadFromJSON
Loads data model from JSON.

▸ loadFromJSON(stringJson: `string`): `void`

#### Parameters:
- stringJson: `string` - The JSON string.



**Returns** `void`


---
### runThroughEntities
Scans model's entity tree and calls the callback functions for each attribute and entity.

▸ runThroughEntities(processAttribute?: (attr: [MetaEntityAttr](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class), opts: `any`) => `void`,processEntity?: (entity: [MetaEntity](api-reference-7x/easydata-packages/core-package/classes/metaentity-class), opts: `any`) => `void`): `void`

#### Parameters:
- processAttribute: (attr: [MetaEntityAttr](api-reference-7x/easydata-packages/core-package/classes/metaentityattr-class), opts: `any`) => `void`, *Optional*  - The callback function which is called for each attribute in model's entity tree.
The processed attribute is passed in the first function parameter.
- processEntity: (entity: [MetaEntity](api-reference-7x/easydata-packages/core-package/classes/metaentity-class), opts: `any`) => `void`, *Optional*  - The callback function which is called for each entity in tree.
The processed entity is passed in the first function parameter.



**Returns** `void`


---
### setData
Sets data to data model.

▸ setData(model: [MetaDataDTO](api-reference-7x/easydata-packages/core-package/interfaces/metadatadto-interface) | `string`): `void`

#### Parameters:
- model: [MetaDataDTO](api-reference-7x/easydata-packages/core-package/interfaces/metadatadto-interface) | `string` - Its JSON representation object or JSON string.



**Returns** `void`


---
