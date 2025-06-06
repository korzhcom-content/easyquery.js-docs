---
title: MetaData class
slug: api-reference-7x/@easydata/core-package/classes/metadata-class
sidebar:
  order: 100
---

Represents a data model

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metadata-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metadata-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metadata-class/#public-properties-1)
- [editors](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metadata-class/#editors)
- [id](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metadata-class/#id)
- [name](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metadata-class/#name)
- [rootEntity](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metadata-class/#rootentity)
- [version](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metadata-class/#version)

### [Protected Properties](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metadata-class/#protected-properties-1)
- [mainEntity](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metadata-class/#mainentity)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metadata-class/#public-methods-1)
- [addDefaultValueEditors](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metadata-class/#adddefaultvalueeditors)
- [addOrUpdateValueEditor](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metadata-class/#addorupdatevalueeditor)
- [checkAttrProperty](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metadata-class/#checkattrproperty)
- [clear](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metadata-class/#clear)
- [createEntity](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metadata-class/#createentity)
- [createEntityAttr](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metadata-class/#createentityattr)
- [createValueEditor](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metadata-class/#createvalueeditor)
- [getAttributeById](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metadata-class/#getattributebyid)
- [getAttributeText](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metadata-class/#getattributetext)
- [getEditorById](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metadata-class/#geteditorbyid)
- [getEntitiesTree](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metadata-class/#getentitiestree)
- [getEntitiesTreeWithFilter](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metadata-class/#getentitiestreewithfilter)
- [getEntityAttrById](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metadata-class/#getentityattrbyid)
- [getEntityPathByAttr](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metadata-class/#getentitypathbyattr)
- [getFirstAttributeByFilter](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metadata-class/#getfirstattributebyfilter)
- [getFullEntityPathByAttr](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metadata-class/#getfullentitypathbyattr)
- [getId](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metadata-class/#getid)
- [getMainEntity](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metadata-class/#getmainentity)
- [getName](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metadata-class/#getname)
- [getRootEntity](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metadata-class/#getrootentity)
- [isEmpty](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metadata-class/#isempty)
- [loadFromData](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metadata-class/#loadfromdata)
- [loadFromJSON](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metadata-class/#loadfromjson)
- [runThroughEntities](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metadata-class/#runthroughentities)
- [setData](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metadata-class/#setdata)


## Constructors

---
#### constructor

The default constructor.
⊕ new MetaData(): [MetaData](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metadata-class)


---

## Public Properties

---
### editors

The list of value editors.

● editors: [ValueEditor](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/valueeditor-class)[]

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

● rootEntity: [MetaEntity](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class)

---
### version

The version of the data model.

● version: `string`

---
## Protected Properties

---
### mainEntity

● mainEntity: [MetaEntity](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class) | `null` = ` null`

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

▸ addOrUpdateValueEditor(id: `string`,tag: `EditorTag`,resType: [DataType](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/enumerations/datatype-enum)): [ValueEditor](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/valueeditor-class)

#### Parameters:
- id: `string` - The id.
- tag: `EditorTag` - The tag.
- resType: [DataType](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/enumerations/datatype-enum) - The result type.


**Returns** [ValueEditor](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/valueeditor-class) - The value editor.



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
▸ createEntity(parent?: [MetaEntity](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class)): [MetaEntity](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class)

#### Parameters:
- parent: [MetaEntity](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class), *Optional* 


**Returns** [MetaEntity](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class)


---
### createEntityAttr
▸ createEntityAttr(parent?: [MetaEntity](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class)): [MetaEntityAttr](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class)

#### Parameters:
- parent: [MetaEntity](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class), *Optional* 


**Returns** [MetaEntityAttr](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class)


---
### createValueEditor
▸ createValueEditor(): [ValueEditor](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/valueeditor-class)


**Returns** [ValueEditor](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/valueeditor-class)


---
### getAttributeById
Gets entity attribute by its ID.
This function runs through all attributes inside specified model (it's root entity and all its sub-entities).

▸ getAttributeById(attrId: `string`): [MetaEntityAttr](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class) | `null`

#### Parameters:
- attrId: `string` - The attribute ID.


**Returns** [MetaEntityAttr](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class) | `null` - The attribute or `null`.



---
### getAttributeText
Gets the attribute text.

▸ getAttributeText(attr: [MetaEntityAttr](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class),format: `string`): `string`

#### Parameters:
- attr: [MetaEntityAttr](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class) - The attribute.
- format: `string` - The format.


**Returns** `string` - Formatted text.



---
### getEditorById
Finds editor by its ID.

▸ getEditorById(editorId: `string`): [ValueEditor](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/valueeditor-class) | `null`

#### Parameters:
- editorId: `string` - The editor ID.


**Returns** [ValueEditor](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/valueeditor-class) | `null` - The value editor or `null`.



---
### getEntitiesTree
Gets entities tree.

▸ getEntitiesTree(opts: `any`,filterFunc?: (ent: [MetaEntity](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class), attr: [MetaEntityAttr](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class)) => `boolean`): `any`

#### Parameters:
- opts: `any` - The options.
- filterFunc: (ent: [MetaEntity](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class), attr: [MetaEntityAttr](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class)) => `boolean`, *Optional*  - The filter function.
Takes two parameters, Entity and EntityAttr (second parameter will be null for entities), and returns boolean (true if the corresponding entity or attribute).


**Returns** `any` - The tree of the entities and their attributes according to options and the filter function



---
### getEntitiesTreeWithFilter
Gets entities tree due to filter.

▸ getEntitiesTreeWithFilter(filterFunc: (ent: [MetaEntity](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class), attr: [MetaEntityAttr](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class)) => `boolean`): [MetaEntity](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class)[]

#### Parameters:
- filterFunc: (ent: [MetaEntity](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class), attr: [MetaEntityAttr](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class)) => `boolean` - The filter function.
Takes two parameters, Entity and EntityAttr (second parameter will be null for entities), and returns boolean (true if the corresponding entity or attribute).


**Returns** [MetaEntity](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class)[] - The tree of the entities and their attributes according to the filter function



---
### getEntityAttrById
Gets entity attribute by its ID.
This function runs through all attributes inside specified entity and all its sub-entities.

▸ getEntityAttrById(entity: [MetaEntity](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class),attrId: `string`): [MetaEntityAttr](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class) | `null`

#### Parameters:
- entity: [MetaEntity](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class)
- attrId: `string`


**Returns** [MetaEntityAttr](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class) | `null` - The attribute or `null`.



---
### getEntityPathByAttr
Finds entity path by attribute

▸ getEntityPathByAttr(entity: [MetaEntity](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class),attrId: `string`,sep: `string`,root: `boolean`): `string`

#### Parameters:
- entity: [MetaEntity](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class) - The entity.
- attrId: `string` - The attribute id.
- sep: `string` - The separator.
- root: `boolean` - The root option.


**Returns** `string` - The path.



---
### getFirstAttributeByFilter
Finds first attribute by filter.

▸ getFirstAttributeByFilter(filterFunc: (attr: [MetaEntityAttr](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class)) => `boolean`): [MetaEntityAttr](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class)

#### Parameters:
- filterFunc: (attr: [MetaEntityAttr](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class)) => `boolean` - The filter function. Takes EntityAttr object in parameter and returns boolean



**Returns** [MetaEntityAttr](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class)


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

▸ getMainEntity(): [MetaEntity](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class)


**Returns** [MetaEntity](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class) - The main entity.



---
### getName
Gets name of the data model.

▸ getName(): `string`


**Returns** `string` - The name.



---
### getRootEntity
Gets root entity of the data model.

▸ getRootEntity(): [MetaEntity](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class)


**Returns** [MetaEntity](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class) - The root entity.



---
### isEmpty
Checks wether the data model is empty.

▸ isEmpty(): `boolean`


**Returns** `boolean` - `true` if the data model is empty, otherwise `false`.



---
### loadFromData
Loads data model from its JSON representation object.

▸ loadFromData(data: [MetaDataDTO](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/interfaces/metadatadto-interface)): `void`

#### Parameters:
- data: [MetaDataDTO](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/interfaces/metadatadto-interface) - The JSON representation object.



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

▸ runThroughEntities(processAttribute?: (attr: [MetaEntityAttr](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class), opts: `any`) => `void`,processEntity?: (entity: [MetaEntity](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class), opts: `any`) => `void`): `void`

#### Parameters:
- processAttribute: (attr: [MetaEntityAttr](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentityattr-class), opts: `any`) => `void`, *Optional*  - The callback function which is called for each attribute in model's entity tree.
The processed attribute is passed in the first function parameter.
- processEntity: (entity: [MetaEntity](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/classes/metaentity-class), opts: `any`) => `void`, *Optional*  - The callback function which is called for each entity in tree.
The processed entity is passed in the first function parameter.



**Returns** `void`


---
### setData
Sets data to data model.

▸ setData(model: [MetaDataDTO](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/interfaces/metadatadto-interface) | `string`): `void`

#### Parameters:
- model: [MetaDataDTO](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/interfaces/metadatadto-interface) | `string` - Its JSON representation object or JSON string.



**Returns** `void`


---
