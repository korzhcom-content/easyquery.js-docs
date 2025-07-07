---
title: QueryEx class
slug: api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class
sidebar:
  order: 100
---

## Extends
[Query](api-reference-old/api-reference-6x/core-package/classes/query-class)

## Index
### [Constructors](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#constructors-1)
- [constructor](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#constructor)

### [Public Properties](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#public-properties-1)
- [attributeExprTag](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#attributeexprtag)
- [clientListRequestHandler](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#clientlistrequesthandler)
- [extraData](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#extradata)
- [isNewbie](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#isnewbie)
- [model](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#model)
- [serverListRequestHandler](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#serverlistrequesthandler)
- [timezoneOffset](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#timezoneoffset)

### [Public Methods](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#public-methods-1)
- [addChangedCallback](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#addchangedcallback)
- [addColumn](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#addcolumn)
- [addColumnObj](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#addcolumnobj)
- [addConditionGroup](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#addconditiongroup)
- [addProcessCallback](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#addprocesscallback)
- [addSimpleCondition](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#addsimplecondition)
- [changeColumnType](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#changecolumntype)
- [clear](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#clear)
- [clearColumns](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#clearcolumns)
- [clearConditions](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#clearconditions)
- [createColumn](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#createcolumn)
- [createCondition](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#createcondition)
- [fireChangedEvent](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#firechangedevent)
- [fireColumnsChangedEvent](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#firecolumnschangedevent)
- [fireConditionsChangedEvent](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#fireconditionschangedevent)
- [fireProcessEvent](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#fireprocessevent)
- [getColumnSortIndex](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#getcolumnsortindex)
- [getColumns](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#getcolumns)
- [getConditionsText](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#getconditionstext)
- [getDescription](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#getdescription)
- [getId](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#getid)
- [getModel](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#getmodel)
- [getName](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#getname)
- [getOneValueForAttr](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#getonevalueforattr)
- [getRootCondition](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#getrootcondition)
- [getSortedColumns](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#getsortedcolumns)
- [isEmptyColumns](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#isemptycolumns)
- [isEmptyConditions](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#isemptyconditions)
- [isEx](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#isex)
- [isModified](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#ismodified)
- [loadFromData](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#loadfromdata)
- [loadFromDataOrJson](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#loadfromdataorjson)
- [loadFromJson](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#loadfromjson)
- [loadModelData](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#loadmodeldata)
- [moveColumn](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#movecolumn)
- [regenerateId](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#regenerateid)
- [removeChangedCallback](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#removechangedcallback)
- [removeColumn](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#removecolumn)
- [removeColumns](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#removecolumns)
- [removeProcessCallback](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#removeprocesscallback)
- [reset](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#reset)
- [resetModified](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#resetmodified)
- [runThroughConditions](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#runthroughconditions)
- [setDefaultName](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#setdefaultname)
- [setDescription](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#setdescription)
- [setId](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#setid)
- [setModel](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#setmodel)
- [setName](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#setname)
- [toJSON](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#tojson)
- [toJSONData](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#tojsondata)

### [Protected Methods](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#protected-methods-1)
- [createSimpleConditionObject](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class#createsimpleconditionobject)


## Constructors

---
#### constructor

⊕ new QueryEx(model: [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class)): [QueryEx](api-reference-old/api-reference-6x/enterprise-package/classes/queryex-class)

#### Parameters:
- model: [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class)


---

## Public Properties

---
### attributeExprTag

The attributec class name (Tag).

● attributeExprTag: [ExprTag](api-reference-old/api-reference-6x/core-package/enumerations/exprtag-enum)

---
### clientListRequestHandler

● clientListRequestHandler: `any`

---
### extraData

Contains user-defined extra data for current query.

● extraData: `any`

---
### isNewbie

● isNewbie: `boolean`

---
### model

The Data Model associated with this query.

● model: [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class)

---
### serverListRequestHandler

● serverListRequestHandler: `any`

---
### timezoneOffset

Current timezone offset (it's sent to the server for proper date/time values processing).

● timezoneOffset: `number`

---
## Public Methods

---
### addChangedCallback
Add changed callback

▸ addChangedCallback(callback: (event: [EqEvent](api-reference-old/api-reference-6x/core-package/interfaces/eqevent-interface)) => `void`): `string`

#### Parameters:
- callback: (event: [EqEvent](api-reference-old/api-reference-6x/core-package/interfaces/eqevent-interface)) => `void` - The callback ID.



**Returns** `string`


---
### addColumn
Adds a new column with specified parameters

▸ addColumn(descriptor: [ColumnDescriptor](api-reference-old/api-reference-6x/core-package/interfaces/columndescriptor-interface),author?: `string`): [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)

#### Parameters:
- descriptor: [ColumnDescriptor](api-reference-old/api-reference-6x/core-package/interfaces/columndescriptor-interface)
- author: `string`, *Optional*  - The author of this operation. This parameter is used in EasyQuery widgets only to indicate which of the initiates the change.


**Returns** [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)

#### Example: 
```typescript

query.addColumn({
    attributeId: 'Customers.CompanyName',
    sortIndex: SortDirection.Ascending
}});

```

---
### addColumnObj
Adds a new column with specified index.

▸ addColumnObj(column: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class) | [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)[],index: `any`,author: `any`): `void`

#### Parameters:
- column: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class) | [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)[] - The column or array of columns
- index: `any` - The index of new column
- author: `any` - The author.


**Returns** `void`

#### Example: 
```typescript

const column = new Column();
column.caption = "Company name";

query.addColumn(column, 1)

```

---
### addConditionGroup
Adds a condition group - a group of simple conditions (predicates) linked by AND or OR

▸ addConditionGroup(descriptor: [ConditionGroupDescriptor](api-reference-old/api-reference-6x/core-package/interfaces/conditiongroupdescriptor-interface),addChildCondition?: `boolean`): [Condition](api-reference-old/api-reference-6x/core-package/classes/condition-class)

#### Parameters:
- descriptor: [ConditionGroupDescriptor](api-reference-old/api-reference-6x/core-package/interfaces/conditiongroupdescriptor-interface) - The descriptor of the new condition group.
- addChildCondition: `boolean`, *Default value* = `true`


**Returns** [Condition](api-reference-old/api-reference-6x/core-package/classes/condition-class) - The new search condition.



---
### addProcessCallback
Add process callback

▸ addProcessCallback(callback: (event: [EqEvent](api-reference-old/api-reference-6x/core-package/interfaces/eqevent-interface)) => `void`): `string`

#### Parameters:
- callback: (event: [EqEvent](api-reference-old/api-reference-6x/core-package/interfaces/eqevent-interface)) => `void` - The callback.


**Returns** `string`


---
### addSimpleCondition
 Adds a new simple condition (a predicate)

▸ addSimpleCondition(descriptor: [SimpleConditionDescriptor](api-reference-old/api-reference-6x/core-package/interfaces/simpleconditiondescriptor-interface)): [Condition](api-reference-old/api-reference-6x/core-package/classes/condition-class)

#### Parameters:
- descriptor: [SimpleConditionDescriptor](api-reference-old/api-reference-6x/core-package/interfaces/simpleconditiondescriptor-interface) - The descriptor which defines different parameters of the new condition


**Returns** [Condition](api-reference-old/api-reference-6x/core-package/classes/condition-class) - The new condition.



---
### changeColumnType
Changes column to Aggregate function, custom expression or simple column.

▸ changeColumnType(column: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class),tag: [ExprTag](api-reference-old/api-reference-6x/core-package/enumerations/exprtag-enum),args?: `any`): `void`

#### Parameters:
- column: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class) - The column to change.
- tag: [ExprTag](api-reference-old/api-reference-6x/core-package/enumerations/exprtag-enum) - New column expression tag.
- args: `any`, *Optional*  - The arguments (Contains aggregate function id)



**Returns** `void`


---
### clear
Clears query (all conditions and columns).

▸ clear(): `void`


**Returns** `void`


---
### clearColumns
Clears all columns in query

▸ clearColumns(): `void`


**Returns** `void`


---
### clearConditions
Clears all conditions in query.

▸ clearConditions(): `void`


**Returns** `void`


---
### createColumn
▸ createColumn(): [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)


**Returns** [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)


---
### createCondition
▸ createCondition(tag?: [CondTag](api-reference-old/api-reference-6x/core-package/enumerations/condtag-enum)): [Condition](api-reference-old/api-reference-6x/core-package/classes/condition-class)

#### Parameters:
- tag: [CondTag](api-reference-old/api-reference-6x/core-package/enumerations/condtag-enum), *Default value* = ` CondTag.Simple`


**Returns** [Condition](api-reference-old/api-reference-6x/core-package/classes/condition-class)


---
### fireChangedEvent
Fires change event.

▸ fireChangedEvent(data?: [QueryChangeEventData](api-reference-old/api-reference-6x/core-package/interfaces/querychangeeventdata-interface),postpone?: `number`,wasModified?: `boolean`): `void`

#### Parameters:
- data: [QueryChangeEventData](api-reference-old/api-reference-6x/core-package/interfaces/querychangeeventdata-interface), *Optional*  - The data.
- postpone: `number`, *Optional*  - The postpone.

- wasModified: `boolean`, *Optional* 


**Returns** `void`


---
### fireColumnsChangedEvent
▸ fireColumnsChangedEvent(action?: [QueryChangeAction](api-reference-old/api-reference-6x/core-package/enumerations/querychangeaction-enum),column?: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class) | [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)[]): `void`

#### Parameters:
- action: [QueryChangeAction](api-reference-old/api-reference-6x/core-package/enumerations/querychangeaction-enum), *Optional* 
- column: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class) | [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)[], *Optional* 


**Returns** `void`


---
### fireConditionsChangedEvent
▸ fireConditionsChangedEvent(action?: [QueryChangeAction](api-reference-old/api-reference-6x/core-package/enumerations/querychangeaction-enum),condition?: [Condition](api-reference-old/api-reference-6x/core-package/classes/condition-class) | [Condition](api-reference-old/api-reference-6x/core-package/classes/condition-class)[]): `void`

#### Parameters:
- action: [QueryChangeAction](api-reference-old/api-reference-6x/core-package/enumerations/querychangeaction-enum), *Optional* 
- condition: [Condition](api-reference-old/api-reference-6x/core-package/classes/condition-class) | [Condition](api-reference-old/api-reference-6x/core-package/classes/condition-class)[], *Optional* 


**Returns** `void`


---
### fireProcessEvent
Fires process event.

▸ fireProcessEvent(data: `any`): `void`

#### Parameters:
- data: `any` - The data.



**Returns** `void`


---
### getColumnSortIndex
Gets Colummn sorting index.

▸ getColumnSortIndex(col: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)): `number`

#### Parameters:
- col: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class) - The column.


**Returns** `number`


---
### getColumns
Get array of columns.

▸ getColumns(): [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)[]


**Returns** [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)[]


---
### getConditionsText
Retruns conditions text

▸ getConditionsText(): `string`


**Returns** `string`


---
### getDescription
Gets description of the query.

▸ getDescription(): `string`


**Returns** `string`


---
### getId
Gets query ID.

▸ getId(): `string`


**Returns** `string` - The ID>



---
### getModel
Gets DataModel object associated with this query.

▸ getModel(): [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class)


**Returns** [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class)


---
### getName
Gets name of the query.

▸ getName(): `string`


**Returns** `string`


---
### getOneValueForAttr
Gets one value for the attribute

▸ getOneValueForAttr(attrId: `string`): `string`

#### Parameters:
- attrId: `string` - The attribute ID.


**Returns** `string`


---
### getRootCondition
Gets root predicate

▸ getRootCondition(): [Condition](api-reference-old/api-reference-6x/core-package/classes/condition-class)


**Returns** [Condition](api-reference-old/api-reference-6x/core-package/classes/condition-class)


---
### getSortedColumns
Gets array of columns used in sorting

▸ getSortedColumns(): [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)[]


**Returns** [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)[]


---
### isEmptyColumns
Checks wether query does not contains any column.

▸ isEmptyColumns(): `boolean`


**Returns** `boolean`


---
### isEmptyConditions
Checks wether query does not contains any condtion.

▸ isEmptyConditions(): `boolean`


**Returns** `boolean`


---
### isEx
▸ isEx(): `boolean`


**Returns** `boolean`


---
### isModified
▸ isModified(): `boolean`


**Returns** `boolean`


---
### loadFromData
▸ loadFromData(data: [QueryData](api-reference-old/api-reference-6x/core-package/interfaces/querydata-interface),changeStatus?: `boolean`): `void`

#### Parameters:
- data: [QueryData](api-reference-old/api-reference-6x/core-package/interfaces/querydata-interface)
- changeStatus: `boolean`, *Optional* 


**Returns** `void`


---
### loadFromDataOrJson
Sets data to the query.

▸ loadFromDataOrJson(data: [QueryData](api-reference-old/api-reference-6x/core-package/interfaces/querydata-interface) | `string`,changeStatus?: `boolean`): `void`

#### Parameters:
- data: [QueryData](api-reference-old/api-reference-6x/core-package/interfaces/querydata-interface) | `string` - JSON representation object or JSON string
- changeStatus: `boolean`, *Optional*  - Indicate whether we should change the "isModified" status (by default == `true`)



**Returns** `void`


---
### loadFromJson
Loads query from JSON.

▸ loadFromJson(json: `string`,changeStatus?: `boolean`): `void`

#### Parameters:
- json: `string` - The JSON string.

- changeStatus: `boolean`, *Optional* 


**Returns** `void`


---
### loadModelData
Loads data model.

▸ loadModelData(model: [ModelPlainData](api-reference-old/api-reference-6x/core-package/interfaces/modelplaindata-interface) | `string`): `void`

#### Parameters:
- model: [ModelPlainData](api-reference-old/api-reference-6x/core-package/interfaces/modelplaindata-interface) | `string` - JSON representation object or JSON string.



**Returns** `void`


---
### moveColumn
Moves the column with specified index to another position.

▸ moveColumn(index1: `number`,index2: `number`): `void`

#### Parameters:
- index1: `number` - The index of the column that should be moved.
- index2: `number` - The index of the position the column should be moved to


**Returns** `void`


---
### regenerateId
Regenerates current query ID.

▸ regenerateId(): `void`


**Returns** `void`


---
### removeChangedCallback
Remove changed callback

▸ removeChangedCallback(callbackId: `string`): `void`

#### Parameters:
- callbackId: `string` - The callback ID.



**Returns** `void`


---
### removeColumn
Removes the column.

▸ removeColumn(column: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class),author: `any`): `void`

#### Parameters:
- column: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class) - The column to be removed.
- author: `any` - The author



**Returns** `void`


---
### removeColumns
Removes several columns passed as array.

▸ removeColumns(columnsToRemove: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)[],author: `any`): `void`

#### Parameters:
- columnsToRemove: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)[] - The list of columns to be removed.
- author: `any` - The author.



**Returns** `void`


---
### removeProcessCallback
Remove process callback

▸ removeProcessCallback(callbackId: `string`): `void`

#### Parameters:
- callbackId: `string` - The callback ID.



**Returns** `void`


---
### reset
▸ reset(silent?: `boolean`): `void`

#### Parameters:
- silent: `boolean`, *Optional* 


**Returns** `void`


---
### resetModified
▸ resetModified(): `void`


**Returns** `void`


---
### runThroughConditions
Runs through condition with this callback.

▸ runThroughConditions(processCondition: (cond: [Condition](api-reference-old/api-reference-6x/core-package/classes/condition-class)) => `void`): `void`

#### Parameters:
- processCondition: (cond: [Condition](api-reference-old/api-reference-6x/core-package/classes/condition-class)) => `void` - The function to process condition.



**Returns** `void`


---
### setDefaultName
▸ setDefaultName(): `string`


**Returns** `string`


---
### setDescription
Sets description of the query

▸ setDescription(description: `string`): `void`

#### Parameters:
- description: `string` - New description.



**Returns** `void`


---
### setId
Sets query ID.

▸ setId(id: `string`): `void`

#### Parameters:
- id: `string` - New Query ID.



**Returns** `void`


---
### setModel
Sets DataModel object associated with this query.

▸ setModel(model: [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class)): `void`

#### Parameters:
- model: [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class) - The data model.



**Returns** `void`


---
### setName
Sets name of the query

▸ setName(name: `string`): `void`

#### Parameters:
- name: `string` - New name.



**Returns** `void`


---
### toJSON
Returns JSON representation of this query.

▸ toJSON(): `string`


**Returns** `string`


---
### toJSONData
Returns JSON representation of this query.

▸ toJSONData(): [QueryData](api-reference-old/api-reference-6x/core-package/interfaces/querydata-interface)


**Returns** [QueryData](api-reference-old/api-reference-6x/core-package/interfaces/querydata-interface)


---
## Protected Methods

---
### createSimpleConditionObject
▸ createSimpleConditionObject(attr: [EntityAttr](api-reference-old/api-reference-6x/core-package/classes/entityattr-class),operator: [Operator](api-reference-old/api-reference-6x/core-package/classes/operator-class),inputValues: `string` | `Array`&lt;`string`&gt;): [Condition](api-reference-old/api-reference-6x/core-package/classes/condition-class)

#### Parameters:
- attr: [EntityAttr](api-reference-old/api-reference-6x/core-package/classes/entityattr-class)
- operator: [Operator](api-reference-old/api-reference-6x/core-package/classes/operator-class)
- inputValues: `string` | `Array`&lt;`string`&gt;


**Returns** [Condition](api-reference-old/api-reference-6x/core-package/classes/condition-class)


---
