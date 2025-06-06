---
title: DataModel class
slug: api-reference-5-x/@easyquery/core-package/classes/datamodel-class
sidebar:
  order: 100
---

Represents a data model

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#public-properties-1)
- [aggrFunctions](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#aggrfunctions)
- [editors](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#editors)
- [eqlcns](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#eqlcns)
- [id](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#id)
- [name](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#name)
- [operators](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#operators)
- [rootEntity](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#rootentity)
- [version](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#version)

### [Public Methods](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#public-methods-1)
- [checkAttrProperty](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#checkattrproperty)
- [createQuery](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#createquery)
- [findOperatorById](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#findoperatorbyid)
- [getAggrFunctionCaption](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#getaggrfunctioncaption)
- [getAggrFunctionFormat](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#getaggrfunctionformat)
- [getAggrFunctions](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#getaggrfunctions)
- [getAttributeById](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#getattributebyid)
- [getAttributeText](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#getattributetext)
- [getDateMacroValue](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#getdatemacrovalue)
- [getDateOrMacroValue](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#getdateormacrovalue)
- [getDefaultOperatorForAttr](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#getdefaultoperatorforattr)
- [getDefaultOperatorIdForAttr](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#getdefaultoperatoridforattr)
- [getEditorById](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#geteditorbyid)
- [getEntitiesTree](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#getentitiestree)
- [getEntitiesTreeWithFilter](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#getentitiestreewithfilter)
- [getEntityAttrById](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#getentityattrbyid)
- [getEntityPathByAttr](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#getentitypathbyattr)
- [getFirstAttributeByFilter](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#getfirstattributebyfilter)
- [getFirstUICAttr](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#getfirstuicattr)
- [getFullEntityPathByAttr](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#getfullentitypathbyattr)
- [getId](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#getid)
- [getName](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#getname)
- [getObject](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#getobject)
- [getOperand](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#getoperand)
- [getOperatorById](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#getoperatorbyid)
- [getRootEntity](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#getrootentity)
- [getTimeMacroValue](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#gettimemacrovalue)
- [getTimeOrMacroValue](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#gettimeormacrovalue)
- [isDateMacro](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#isdatemacro)
- [isEmpty](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#isempty)
- [isTimeMacro](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#istimemacro)
- [loadFromData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#loadfromdata)
- [loadFromJSON](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#loadfromjson)
- [rgdlce](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#rgdlce)
- [runThroughEntities](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#runthroughentities)
- [setData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class/#setdata)


## Constructors

---
#### constructor

The default constructor.
⊕ new DataModel(): [DataModel](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class)


---

## Public Properties

---
### aggrFunctions

The list of aggregate functions.

● aggrFunctions: [AggrFunction](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/aggrfunction-class)[]

---
### editors

The list of value editors.

● editors: [ValueEditor](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/valueeditor-class)[]

---
### eqlcns

The License.

● eqlcns: `EqLcns`

---
### id

The ID of the data mode.

● id: `string`

---
### name

The name of the data model.

● name: `string`

---
### operators

The list of operators.

● operators: [Operator](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/operator-class)[]

---
### rootEntity

The root entity.

● rootEntity: [Entity](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entity-class)

---
### version

The version of the data model.

● version: `string`

---
## Public Methods

---
### checkAttrProperty
Checks wether attribute contains such property.

▸ checkAttrProperty(attrId: `string`,propName: `string`): `boolean`

#### Parameters:
- attrId: `string` - The attribute ID.
- propName: `string` - The property name.


**Returns** `boolean` - `true` if the attribute contains the property, otherwise `false`.


---
### createQuery
Creates query.

▸ createQuery(): [Query](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class)


**Returns** [Query](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class) - The Query.


---
### findOperatorById
Finds operator in model by its ID.
This function runs through all operators inside specified model and returns the one with specified ID.

▸ findOperatorById(operatorId: `string`): [Operator](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/operator-class) | `null`

#### Parameters:
- operatorId: `string` - An operator ID.


**Returns** [Operator](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/operator-class) | `null` - The operator or `null`.


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

▸ getAggrFunctions(): [AggrFunction](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/aggrfunction-class)[]


**Returns** [AggrFunction](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/aggrfunction-class)[] - AN array of aggregate functions.


---
### getAttributeById
Gets entity attribute by its ID.
This function runs through all attributes inside specified model (it's root entity and all its sub-entities).

▸ getAttributeById(attrId: `string`): [EntityAttr](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entityattr-class)

#### Parameters:
- attrId: `string` - The attribute ID.


**Returns** [EntityAttr](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entityattr-class) - The attribute or `null`.


---
### getAttributeText
Gets the attribute text.

▸ getAttributeText(attr: [EntityAttr](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entityattr-class),format: `string`): `string`

#### Parameters:
- attr: [EntityAttr](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entityattr-class) - The attribute.
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

▸ getDefaultOperatorForAttr(attr: [EntityAttr](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entityattr-class)): [Operator](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/operator-class)

#### Parameters:
- attr: [EntityAttr](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entityattr-class) - The attribute.


**Returns** [Operator](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/operator-class) - The operator.


---
### getDefaultOperatorIdForAttr
▸ getDefaultOperatorIdForAttr(attr: [EntityAttr](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entityattr-class)): `string`

#### Parameters:
- attr: [EntityAttr](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entityattr-class)


**Returns** `string`

---
### getEditorById
Finds editor by its ID.

▸ getEditorById(editorId: `string`): [ValueEditor](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/valueeditor-class) | `null`

#### Parameters:
- editorId: `string` - The editor ID.


**Returns** [ValueEditor](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/valueeditor-class) | `null` - The value editor or `null`.


---
### getEntitiesTree
Gets entities tree.

▸ getEntitiesTree(opts: `any`): `any`

#### Parameters:
- opts: `any` - The options.


**Returns** `any` - The tree.


---
### getEntitiesTreeWithFilter
Gets entities tree due to filter.

▸ getEntitiesTreeWithFilter(filterCallback: `any`): [Entity](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entity-class)[]

#### Parameters:
- filterCallback: `any` - The filter.


**Returns** [Entity](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entity-class)[] - The tree.


---
### getEntityAttrById
Gets entity attribute by its ID.
This function runs through all attributes inside specified entity and all its sub-entities.

▸ getEntityAttrById(entity: [Entity](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entity-class),attrId: `string`): [EntityAttr](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entityattr-class) | `null`

#### Parameters:
- entity: [Entity](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entity-class)
- attrId: `string`


**Returns** [EntityAttr](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entityattr-class) | `null` - The attribute or `null`.


---
### getEntityPathByAttr
Finds entity path by attribute

▸ getEntityPathByAttr(entity: [Entity](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entity-class),attrId: `string`,sep: `string`,root: `boolean`): `string`

#### Parameters:
- entity: [Entity](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entity-class) - The entity.
- attrId: `string` - The attribute id.
- sep: `string` - The separator.
- root: `boolean` - The root option.


**Returns** `string` - The path.


---
### getFirstAttributeByFilter
Finds first attribute by filter.

▸ getFirstAttributeByFilter(filterCallback: (attr: [EntityAttr](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entityattr-class)) => `boolean`): [EntityAttr](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entityattr-class)

#### Parameters:
- filterCallback: (attr: [EntityAttr](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entityattr-class)) => `boolean` - The filter.



**Returns** [EntityAttr](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entityattr-class)

---
### getFirstUICAttr
▸ getFirstUICAttr(): [EntityAttr](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entityattr-class)


**Returns** [EntityAttr](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entityattr-class)

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
### getName
Gets name of the data model.

▸ getName(): `string`


**Returns** `string` - The name.


---
### getObject
Gets the data model object.

▸ getObject(): [DataModel](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class)


**Returns** [DataModel](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class) - Tha data model.


---
### getOperand
Gets operand.

▸ getOperand(attr: [EntityAttr](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entityattr-class),operator: [Operator](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/operator-class),index: `number`): [Operand](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/operand-class)

#### Parameters:
- attr: [EntityAttr](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entityattr-class) - The attribute.
- operator: [Operator](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/operator-class) - The operator.
- index: `number` - The index.


**Returns** [Operand](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/operand-class) - The operand.


---
### getOperatorById
Finds operator in model by its ID.
his function runs through all operators inside specified model and returns the one with specified ID.

▸ getOperatorById(operatorId: `string`): [Operator](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/operator-class)

#### Parameters:
- operatorId: `string` - Operator ID.


**Returns** [Operator](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/operator-class) - The operator or special `NullOperator` object if operator is not found.


---
### getRootEntity
Gets root entity of the data model.

▸ getRootEntity(): [Entity](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entity-class)


**Returns** [Entity](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entity-class) - The root entity.


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

▸ loadFromData(data: [DataModelData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/datamodeldata-interface)): `void`

#### Parameters:
- data: [DataModelData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/datamodeldata-interface) - The JSON representation object.



**Returns** `void`

---
### loadFromJSON
Loads data model from JSON.

▸ loadFromJSON(stringJson: `string`): `void`

#### Parameters:
- stringJson: `string` - The JSON string.



**Returns** `void`

---
### rgdlce
Gets license.

▸ rgdlce(): `boolean`


**Returns** `boolean` - The license.


---
### runThroughEntities
Scans model's entity tree and calls the callback functions for each attribute and entity.

▸ runThroughEntities(processAttribute: (attr: [EntityAttr](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entityattr-class), opts: `any`) => `void`,processEntity: (entity: [Entity](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entity-class), opts: `any`) => `void`): `void`

#### Parameters:
- processAttribute: (attr: [EntityAttr](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entityattr-class), opts: `any`) => `void` - The callback function which is called for each attribute in model's entity tree.
The processed attribute is passed in the first function parameter.
- processEntity: (entity: [Entity](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/entity-class), opts: `any`) => `void` - The callback function which is called for each entity in tree.
The processed entity is passed in the first function parameter.



**Returns** `void`

---
### setData
Sets data to data model.

▸ setData(model: [DataModelData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/datamodeldata-interface) | `string`): `void`

#### Parameters:
- model: [DataModelData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/datamodeldata-interface) | `string` - Its JSON representation object or JSON string.



**Returns** `void`

---
