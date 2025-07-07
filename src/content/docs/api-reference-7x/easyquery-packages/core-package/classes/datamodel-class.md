---
title: DataModel class
slug: api-reference-7x/easyquery-packages/core-package/classes/datamodel-class
sidebar:
  order: 100
---

Represents a data model

## Extends
`MetaData`

## Index
### [Constructors](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#constructor)

### [Public Properties](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#public-properties-1)
- [aggrFunctions](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#aggrfunctions)
- [editors](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#editors)
- [id](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#id)
- [links](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#links)
- [name](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#name)
- [operators](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#operators)
- [rootEntity](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#rootentity)
- [version](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#version)

### [Protected Properties](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#protected-properties-1)
- [mainEntity](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#mainentity)

### [Public Methods](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#public-methods-1)
- [addDefaultValueEditors](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#adddefaultvalueeditors)
- [addOrUpdateOperator](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#addorupdateoperator)
- [addOrUpdateValueEditor](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#addorupdatevalueeditor)
- [buildQueryPath](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#buildquerypath)
- [checkAttrProperty](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#checkattrproperty)
- [clear](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#clear)
- [createEntity](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#createentity)
- [createEntityAttr](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#createentityattr)
- [createQuery](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#createquery)
- [createValueEditor](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#createvalueeditor)
- [findAggrFunctionById](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#findaggrfunctionbyid)
- [findLink](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#findlink)
- [findOperatorById](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#findoperatorbyid)
- [getAggrFunctionCaption](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#getaggrfunctioncaption)
- [getAggrFunctionFormat](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#getaggrfunctionformat)
- [getAggrFunctions](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#getaggrfunctions)
- [getAllDateMacros](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#getalldatemacros)
- [getAllTimeMacros](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#getalltimemacros)
- [getAttributeById](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#getattributebyid)
- [getAttributeText](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#getattributetext)
- [getDateMacroValue](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#getdatemacrovalue)
- [getDateOrMacroValue](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#getdateormacrovalue)
- [getDefaultOperatorForAttr](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#getdefaultoperatorforattr)
- [getDefaultOperatorIdForAttr](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#getdefaultoperatoridforattr)
- [getEditorById](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#geteditorbyid)
- [getEntitiesInQuery](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#getentitiesinquery)
- [getEntitiesTree](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#getentitiestree)
- [getEntitiesTreeWithFilter](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#getentitiestreewithfilter)
- [getEntityAttrById](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#getentityattrbyid)
- [getEntityPathByAttr](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#getentitypathbyattr)
- [getFirstAttributeByFilter](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#getfirstattributebyfilter)
- [getFirstUICAttr](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#getfirstuicattr)
- [getFullEntityPathByAttr](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#getfullentitypathbyattr)
- [getId](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#getid)
- [getLinksByEntity](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#getlinksbyentity)
- [getMainEntity](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#getmainentity)
- [getName](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#getname)
- [getObject](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#getobject)
- [getOperand](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#getoperand)
- [getOperatorById](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#getoperatorbyid)
- [getOperatorIdsByDataType](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#getoperatoridsbydatatype)
- [getRootEntity](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#getrootentity)
- [getTimeMacroValue](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#gettimemacrovalue)
- [getTimeOrMacroValue](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#gettimeormacrovalue)
- [isDateMacro](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#isdatemacro)
- [isEmpty](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#isempty)
- [isTimeMacro](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#istimemacro)
- [loadFromData](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#loadfromdata)
- [loadFromJSON](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#loadfromjson)
- [removeOperator](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#removeoperator)
- [runThroughEntities](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#runthroughentities)
- [setData](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class#setdata)


## Constructors

---
#### constructor

The default constructor.
⊕ new DataModel(): [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class)


---

## Public Properties

---
### aggrFunctions

The list of aggregate functions.

● aggrFunctions: [AggrFunction](api-reference-7x/easyquery-packages/core-package/classes/aggrfunction-class)[]

---
### editors

The list of value editors.

● editors: [EqValueEditor](api-reference-7x/easyquery-packages/core-package/classes/eqvalueeditor-class)[]

---
### id

The ID of the data mode.

● id: `string`

---
### links

The list of links. It is used in odata broker.

● links: [Link](api-reference-7x/easyquery-packages/core-package/interfaces/link-interface)[]

---
### name

The name of the data model.

● name: `string`

---
### operators

The list of operators.

● operators: [Operator](api-reference-7x/easyquery-packages/core-package/classes/operator-class)[]

---
### rootEntity

The root entity.

● rootEntity: [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class)

---
### version

The version of the data model.

● version: `string`

---
## Protected Properties

---
### mainEntity

● mainEntity: [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class) | `null` = ` null`

---
## Public Methods

---
### addDefaultValueEditors
Add default value editors.

▸ addDefaultValueEditors(): `void`


**Returns** `void`


---
### addOrUpdateOperator
Add or update an operator.

▸ addOrUpdateOperator(desc: [OperatorDescriptor](api-reference-7x/easyquery-packages/core-package/interfaces/operatordescriptor-interface)): [Operator](api-reference-7x/easyquery-packages/core-package/classes/operator-class)

#### Parameters:
- desc: [OperatorDescriptor](api-reference-7x/easyquery-packages/core-package/interfaces/operatordescriptor-interface) - The operator descriptor.


**Returns** [Operator](api-reference-7x/easyquery-packages/core-package/classes/operator-class) - The operator.



---
### addOrUpdateValueEditor
Add or update a value editor.

▸ addOrUpdateValueEditor(id: `string`,tag: `EditorTag`,resType: `DataType`): `ValueEditor`

#### Parameters:
- id: `string` - The id.
- tag: `EditorTag` - The tag.
- resType: `DataType` - The result type.


**Returns** `ValueEditor` - The value editor.



---
### buildQueryPath
Builds entities tree used in query.

▸ buildQueryPath(query: [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)): [Tree](api-reference-7x/easyquery-packages/core-package/classes/tree-class)&lt;[Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class)&gt;

#### Parameters:
- query: [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class) - The query.



**Returns** [Tree](api-reference-7x/easyquery-packages/core-package/classes/tree-class)&lt;[Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class)&gt;


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
Creates entity.

▸ createEntity(parent?: [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class)): [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class)

#### Parameters:
- parent: [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class), *Optional*  - The parent entity.


**Returns** [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class) - The Entity.



---
### createEntityAttr
Creates entity attribute.

▸ createEntityAttr(parent?: [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class)): [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class)

#### Parameters:
- parent: [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class), *Optional*  - The parent entity.


**Returns** [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class) - The entity attribute.



---
### createQuery
Creates query.

▸ createQuery(): [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)


**Returns** [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class) - The Query.



---
### createValueEditor
▸ createValueEditor(): `ValueEditor`


**Returns** `ValueEditor`


---
### findAggrFunctionById
▸ findAggrFunctionById(funcId: `string`): [AggrFunction](api-reference-7x/easyquery-packages/core-package/classes/aggrfunction-class) | `null`

#### Parameters:
- funcId: `string`


**Returns** [AggrFunction](api-reference-7x/easyquery-packages/core-package/classes/aggrfunction-class) | `null`


---
### findLink
Finds link between two entities.

▸ findLink(entityFrom: [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class),entityTo: [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class)): [Link](api-reference-7x/easyquery-packages/core-package/interfaces/link-interface) | `null`

#### Parameters:
- entityFrom: [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class) - The entity `from`.
- entityTo: [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class) - The entity `to`.


**Returns** [Link](api-reference-7x/easyquery-packages/core-package/interfaces/link-interface) | `null` - The link.



---
### findOperatorById
Finds operator in model by its ID.
This function runs through all operators inside specified model and returns the one with specified ID.

▸ findOperatorById(operatorId: `string`): [Operator](api-reference-7x/easyquery-packages/core-package/classes/operator-class) | `null`

#### Parameters:
- operatorId: `string` - An operator ID.


**Returns** [Operator](api-reference-7x/easyquery-packages/core-package/classes/operator-class) | `null` - The operator or `null`.



---
### getAggrFunctionCaption
Gets caption of the aggregate function.

▸ getAggrFunctionCaption(funcId: `string`): `string`

#### Parameters:
- funcId: `string` - The function id.


**Returns** `string` - The caption.



---
### getAggrFunctionFormat
Gets format of the aggregate function.

▸ getAggrFunctionFormat(funcId: `string`): `string`

#### Parameters:
- funcId: `string` - The function id.


**Returns** `string` - The caption.



---
### getAggrFunctions
Gets the list of aggegate functions.

▸ getAggrFunctions(): [AggrFunction](api-reference-7x/easyquery-packages/core-package/classes/aggrfunction-class)[]


**Returns** [AggrFunction](api-reference-7x/easyquery-packages/core-package/classes/aggrfunction-class)[] - AN array of aggregate functions.



---
### getAllDateMacros
Gets all date marcos.

▸ getAllDateMacros(): `string`[]


**Returns** `string`[] - The array of marcos



---
### getAllTimeMacros
Gets all time marcos.

▸ getAllTimeMacros(): `string`[]


**Returns** `string`[] - The array of marcos



---
### getAttributeById
Gets entity attribute by its ID.
This function runs through all attributes inside specified model (it's root entity and all its sub-entities).

▸ getAttributeById(attrId: `string`): [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class) | `null`

#### Parameters:
- attrId: `string` - The attribute ID.


**Returns** [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class) | `null` - The attribute or `null`.



---
### getAttributeText
Gets the attribute text.

▸ getAttributeText(attr: [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class),format: `string`): `string`

#### Parameters:
- attr: [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class) - The attribute.
- format: `string` - The format.


**Returns** `string` - Formatted text.



---
### getDateMacroValue
Gets date by its macro value.

▸ getDateMacroValue(macro: `string`): `Date` | `null`

#### Parameters:
- macro: `string` - The macro value.


**Returns** `Date` | `null` - The date or `null`



---
### getDateOrMacroValue
Gets date  or macro by macro value.

▸ getDateOrMacroValue(macroValue: `string`): `string` | `Date`

#### Parameters:
- macroValue: `string` - The macro value.


**Returns** `string` | `Date` - The date or macro valu.



---
### getDefaultOperatorForAttr
Gets default operator for an attribute.

▸ getDefaultOperatorForAttr(attr: [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class)): [Operator](api-reference-7x/easyquery-packages/core-package/classes/operator-class)

#### Parameters:
- attr: [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class) - The attribute.


**Returns** [Operator](api-reference-7x/easyquery-packages/core-package/classes/operator-class) - The operator.



---
### getDefaultOperatorIdForAttr
▸ getDefaultOperatorIdForAttr(attr: [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class)): `string`

#### Parameters:
- attr: [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class)


**Returns** `string`


---
### getEditorById
Finds editor by its ID.

▸ getEditorById(editorId: `string`): [EqValueEditor](api-reference-7x/easyquery-packages/core-package/classes/eqvalueeditor-class) | `null`

#### Parameters:
- editorId: `string` - The editor ID.


**Returns** [EqValueEditor](api-reference-7x/easyquery-packages/core-package/classes/eqvalueeditor-class) | `null` - The value editor or `null`.



---
### getEntitiesInQuery
Get Entities used in query.

▸ getEntitiesInQuery(query: [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)): [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class)[]

#### Parameters:
- query: [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class) - The query.



**Returns** [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class)[]


---
### getEntitiesTree
Gets entities tree.

▸ getEntitiesTree(opts: `any`,filterFunc?: (ent: [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class), attr: [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class)) => `boolean`): `any`

#### Parameters:
- opts: `any` - The options.
- filterFunc: (ent: [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class), attr: [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class)) => `boolean`, *Optional*  - The filter function.
Takes two parameters, Entity and EntityAttr (second parameter will be null for entities), and returns boolean (true if the corresponding entity or attribute).


**Returns** `any` - The tree of the entities and their attributes according to options and the filter function



---
### getEntitiesTreeWithFilter
Gets entities tree due to filter.

▸ getEntitiesTreeWithFilter(filterFunc: `any`): [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class)[]

#### Parameters:
- filterFunc: `any` - The filter function.
Takes two parameters, Entity and EntityAttr (second parameter will be null for entities), and returns boolean (true if the corresponding entity or attribute).


**Returns** [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class)[] - The tree of the entities and their attributes according to the filter function



---
### getEntityAttrById
Gets entity attribute by its ID.
This function runs through all attributes inside specified entity and all its sub-entities.

▸ getEntityAttrById(entity: [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class),attrId: `string`): [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class) | `null`

#### Parameters:
- entity: [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class)
- attrId: `string`


**Returns** [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class) | `null` - The attribute or `null`.



---
### getEntityPathByAttr
Finds entity path by attribute

▸ getEntityPathByAttr(entity: [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class),attrId: `string`,sep: `string`,root: `boolean`): `string`

#### Parameters:
- entity: [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class) - The entity.
- attrId: `string` - The attribute id.
- sep: `string` - The separator.
- root: `boolean` - The root option.


**Returns** `string` - The path.



---
### getFirstAttributeByFilter
Finds first attribute by filter.

▸ getFirstAttributeByFilter(filterFunc: (attr: [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class)) => `boolean`): [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class)

#### Parameters:
- filterFunc: (attr: [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class)) => `boolean` - The filter function. Takes EntityAttr object in parameter and returns boolean



**Returns** [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class)


---
### getFirstUICAttr
▸ getFirstUICAttr(): [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class)


**Returns** [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class)


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
### getLinksByEntity
Get links with the entity.

▸ getLinksByEntity(entity: [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class)): [Link](api-reference-7x/easyquery-packages/core-package/interfaces/link-interface)[]

#### Parameters:
- entity: [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class) - The entity.


**Returns** [Link](api-reference-7x/easyquery-packages/core-package/interfaces/link-interface)[] - The link.



---
### getMainEntity
Gets the main entity of model

▸ getMainEntity(): [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class)


**Returns** [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class) - The main entity.



---
### getName
Gets name of the data model.

▸ getName(): `string`


**Returns** `string` - The name.



---
### getObject
Gets the data model object.

▸ getObject(): [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class)


**Returns** [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class) - Tha data model.



---
### getOperand
Gets operand.

▸ getOperand(attr: [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class),operator: [Operator](api-reference-7x/easyquery-packages/core-package/classes/operator-class),index: `number`): [Operand](api-reference-7x/easyquery-packages/core-package/classes/operand-class)

#### Parameters:
- attr: [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class) - The attribute.
- operator: [Operator](api-reference-7x/easyquery-packages/core-package/classes/operator-class) - The operator.
- index: `number` - The index.


**Returns** [Operand](api-reference-7x/easyquery-packages/core-package/classes/operand-class) - The operand.



---
### getOperatorById
Finds operator in model by its ID.
his function runs through all operators inside specified model and returns the one with specified ID.

▸ getOperatorById(operatorId: `string`): [Operator](api-reference-7x/easyquery-packages/core-package/classes/operator-class)

#### Parameters:
- operatorId: `string` - Operator ID.


**Returns** [Operator](api-reference-7x/easyquery-packages/core-package/classes/operator-class) - The operator or special `NullOperator` object if operator is not found.



---
### getOperatorIdsByDataType
Get operators for data type.

▸ getOperatorIdsByDataType(type: `DataType`): `string`[]

#### Parameters:
- type: `DataType` - The data type


**Returns** `string`[] - The array of operator ids.



---
### getRootEntity
Gets root entity of the data model.

▸ getRootEntity(): [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class)


**Returns** [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class) - The root entity.



---
### getTimeMacroValue
Gets time by its macro value.

▸ getTimeMacroValue(macro: `string`): `Date` | `null`

#### Parameters:
- macro: `string` - The macro value.


**Returns** `Date` | `null` - The date or `null`.



---
### getTimeOrMacroValue
Gets time or macro by macro value.

▸ getTimeOrMacroValue(time: `string`): `string` | `Date`

#### Parameters:
- time: `string`


**Returns** `string` | `Date` - The time or macro valu.



---
### isDateMacro
Checks wether macro value is date.

▸ isDateMacro(macro: `string`): `boolean`

#### Parameters:
- macro: `string` - The macro value.


**Returns** `boolean`


---
### isEmpty
Checks wether the data model is empty.

▸ isEmpty(): `boolean`


**Returns** `boolean` - `true` if the data model is empty, otherwise `false`.



---
### isTimeMacro
Checks wether macro value is time.

▸ isTimeMacro(macro: `string`): `boolean`

#### Parameters:
- macro: `string` - The macro value.


**Returns** `boolean`


---
### loadFromData
Loads data model from its JSON representation object.

▸ loadFromData(data: [ModelPlainData](api-reference-7x/easyquery-packages/core-package/interfaces/modelplaindata-interface)): `void`

#### Parameters:
- data: [ModelPlainData](api-reference-7x/easyquery-packages/core-package/interfaces/modelplaindata-interface) - The JSON representation object.



**Returns** `void`


---
### loadFromJSON
Loads data model from JSON.

▸ loadFromJSON(stringJson: `string`): `void`

#### Parameters:
- stringJson: `string` - The JSON string.



**Returns** `void`


---
### removeOperator
Removes an operator.

▸ removeOperator(id: `string`,soft?: `boolean`): `void`

#### Parameters:
- id: `string` - The id.
- soft: `boolean`, *Default value* = `false` - If `false` - removes operators from model and attributes. Otherwise only
from attributes.



**Returns** `void`


---
### runThroughEntities
Scans model's entity tree and calls the callback functions for each attribute and entity.

▸ runThroughEntities(processAttribute?: (attr: [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class), opts: `any`) => `void`,processEntity?: (entity: [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class), opts: `any`) => `void`): `void`

#### Parameters:
- processAttribute: (attr: [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class), opts: `any`) => `void`, *Optional*  - The callback function which is called for each attribute in model's entity tree.
The processed attribute is passed in the first function parameter.
- processEntity: (entity: [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class), opts: `any`) => `void`, *Optional*  - The callback function which is called for each entity in tree.
The processed entity is passed in the first function parameter.



**Returns** `void`


---
### setData
Sets data to data model.

▸ setData(model: [ModelPlainData](api-reference-7x/easyquery-packages/core-package/interfaces/modelplaindata-interface) | `string`): `void`

#### Parameters:
- model: [ModelPlainData](api-reference-7x/easyquery-packages/core-package/interfaces/modelplaindata-interface) | `string` - Its JSON representation object or JSON string.



**Returns** `void`


---
