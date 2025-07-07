---
title: QueryEx class
slug: api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class
sidebar:
  order: 100
---

## Extends
[Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)

## Index
### [Constructors](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#constructor)

### [Public Properties](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#public-properties-1)
- [attributeExprTag](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#attributeexprtag)
- [clientListRequestHandler](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#clientlistrequesthandler)
- [extraData](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#extradata)
- [innerData](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#innerdata)
- [isNewbie](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#isnewbie)
- [model](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#model)
- [serverListRequestHandler](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#serverlistrequesthandler)
- [timezoneOffset](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#timezoneoffset)

### [Protected Properties](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#protected-properties-1)
- [extraConditions](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#extraconditions)

### [Public Methods](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#public-methods-1)
- [addChangedCallback](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#addchangedcallback)
- [addColumn](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#addcolumn)
- [addColumnObj](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#addcolumnobj)
- [addConditionGroup](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#addconditiongroup)
- [addDrillDown](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#adddrilldown)
- [addExtraConditionGroup](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#addextraconditiongroup)
- [addProcessCallback](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#addprocesscallback)
- [addSimpleCondition](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#addsimplecondition)
- [addSimpleExtraCondition](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#addsimpleextracondition)
- [changeColumnType](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#changecolumntype)
- [clear](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#clear)
- [clearColumns](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#clearcolumns)
- [clearConditions](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#clearconditions)
- [clearDrillDowns](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#cleardrilldowns)
- [clearExtraConditions](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#clearextraconditions)
- [createColumn](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#createcolumn)
- [createCondition](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#createcondition)
- [findColumnById](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#findcolumnbyid)
- [fireChangedEvent](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#firechangedevent)
- [fireColumnsChangedEvent](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#firecolumnschangedevent)
- [fireConditionsChangedEvent](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#fireconditionschangedevent)
- [fireProcessEvent](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#fireprocessevent)
- [getAggregatedColumns](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#getaggregatedcolumns)
- [getColumnById](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#getcolumnbyid)
- [getColumnSortIndex](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#getcolumnsortindex)
- [getColumns](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#getcolumns)
- [getConditionsText](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#getconditionstext)
- [getConditionsTextAsHtml](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#getconditionstextashtml)
- [getDescription](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#getdescription)
- [getDrillDowns](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#getdrilldowns)
- [getId](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#getid)
- [getJustSortedColumns](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#getjustsortedcolumns)
- [getModel](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#getmodel)
- [getName](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#getname)
- [getOneValueForAttr](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#getonevalueforattr)
- [getParentQuery](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#getparentquery)
- [getRootCondition](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#getrootcondition)
- [getSortedColumns](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#getsortedcolumns)
- [getUsedInTotalsColumns](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#getusedintotalscolumns)
- [hasEnabledAggrColumns](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#hasenabledaggrcolumns)
- [isEmpty](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#isempty)
- [isEmptyColumns](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#isemptycolumns)
- [isEmptyConditions](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#isemptyconditions)
- [isEx](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#isex)
- [isModified](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#ismodified)
- [loadFromData](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#loadfromdata)
- [loadFromDataOrJson](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#loadfromdataorjson)
- [loadFromJson](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#loadfromjson)
- [loadModelData](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#loadmodeldata)
- [moveColumn](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#movecolumn)
- [regenerateId](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#regenerateid)
- [removeChangedCallback](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#removechangedcallback)
- [removeColumn](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#removecolumn)
- [removeColumns](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#removecolumns)
- [removeProcessCallback](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#removeprocesscallback)
- [reset](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#reset)
- [resetModified](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#resetmodified)
- [runThroughConditions](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#runthroughconditions)
- [setDefaultName](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#setdefaultname)
- [setDescription](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#setdescription)
- [setId](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#setid)
- [setModel](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#setmodel)
- [setName](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#setname)
- [toJSON](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#tojson)
- [toJSONData](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#tojsondata)
- [tryValidate](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#tryvalidate)
- [validate](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#validate)

### [Protected Methods](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#protected-methods-1)
- [createSimpleConditionObject](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class#createsimpleconditionobject)


## Constructors

---
#### constructor

⊕ new QueryEx(model: [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class)): [QueryEx](api-reference-7x/easyquery-packages/enterprise-package/classes/queryex-class)

#### Parameters:
- model: [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class)


---

## Public Properties

---
### attributeExprTag

The attributec class name (Tag).

● attributeExprTag: [ExprTag](api-reference-7x/easyquery-packages/core-package/enumerations/exprtag-enum)

---
### clientListRequestHandler

● clientListRequestHandler: `any`

---
### extraData

Contains user-defined extra data for current query.

● extraData: `any`

---
### innerData

● innerData: `any`

---
### isNewbie

● isNewbie: `boolean`

---
### model

The Data Model associated with this query.

● model: [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class)

---
### serverListRequestHandler

● serverListRequestHandler: `any`

---
### timezoneOffset

Current timezone offset (it's sent to the server for proper date/time values processing).

● timezoneOffset: `number`

---
## Protected Properties

---
### extraConditions

● extraConditions: [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class)

---
## Public Methods

---
### addChangedCallback
Add changed callback

▸ addChangedCallback(callback: (event: `EqEvent`) => `void`): `string`

#### Parameters:
- callback: (event: `EqEvent`) => `void` - The callback ID.



**Returns** `string`


---
### addColumn
Adds a new column with specified parameters

▸ addColumn(descriptor: [ColumnDescriptor](api-reference-7x/easyquery-packages/core-package/interfaces/columndescriptor-interface),author?: `string`): [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)

#### Parameters:
- descriptor: [ColumnDescriptor](api-reference-7x/easyquery-packages/core-package/interfaces/columndescriptor-interface)
- author: `string`, *Optional*  - The author of this operation. This parameter is used in EasyQuery widgets only to indicate which of the initiates the change.


**Returns** [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)

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

▸ addColumnObj(column: [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class) | [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)[],index: `any`,author: `any`): `void`

#### Parameters:
- column: [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class) | [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)[] - The column or array of columns
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

▸ addConditionGroup(descriptor: [ConditionGroupDescriptor](api-reference-7x/easyquery-packages/core-package/interfaces/conditiongroupdescriptor-interface),addChildCondition?: `boolean`): [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class)

#### Parameters:
- descriptor: [ConditionGroupDescriptor](api-reference-7x/easyquery-packages/core-package/interfaces/conditiongroupdescriptor-interface) - The descriptor of the new condition group.
- addChildCondition: `boolean`, *Default value* = `true`


**Returns** [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class) - The new search condition.



---
### addDrillDown
▸ addDrillDown(): [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)


**Returns** [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)


---
### addExtraConditionGroup
▸ addExtraConditionGroup(descriptor: [ConditionGroupDescriptor](api-reference-7x/easyquery-packages/core-package/interfaces/conditiongroupdescriptor-interface),addChildCondition?: `boolean`): [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class)

#### Parameters:
- descriptor: [ConditionGroupDescriptor](api-reference-7x/easyquery-packages/core-package/interfaces/conditiongroupdescriptor-interface)
- addChildCondition: `boolean`, *Default value* = `true`


**Returns** [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class)


---
### addProcessCallback
Add process callback

▸ addProcessCallback(callback: (event: `EqEvent`) => `void`): `string`

#### Parameters:
- callback: (event: `EqEvent`) => `void` - The callback.


**Returns** `string`


---
### addSimpleCondition
 Adds a new simple condition (a predicate)

▸ addSimpleCondition(descriptor: [SimpleConditionDescriptor](api-reference-7x/easyquery-packages/core-package/interfaces/simpleconditiondescriptor-interface)): [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class)

#### Parameters:
- descriptor: [SimpleConditionDescriptor](api-reference-7x/easyquery-packages/core-package/interfaces/simpleconditiondescriptor-interface) - The descriptor which defines different parameters of the new condition


**Returns** [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class) - The new condition.



---
### addSimpleExtraCondition
▸ addSimpleExtraCondition(descriptor: [SimpleConditionDescriptor](api-reference-7x/easyquery-packages/core-package/interfaces/simpleconditiondescriptor-interface)): [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class)

#### Parameters:
- descriptor: [SimpleConditionDescriptor](api-reference-7x/easyquery-packages/core-package/interfaces/simpleconditiondescriptor-interface)


**Returns** [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class)


---
### changeColumnType
Changes column to Aggregate function, custom expression or simple column.

▸ changeColumnType(column: [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class),tag: [ExprTag](api-reference-7x/easyquery-packages/core-package/enumerations/exprtag-enum),args?: `any`): `void`

#### Parameters:
- column: [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class) - The column to change.
- tag: [ExprTag](api-reference-7x/easyquery-packages/core-package/enumerations/exprtag-enum) - New column expression tag.
- args: `any`, *Optional*  - The arguments (Contains aggregate function id)



**Returns** `void`


---
### clear
Clears the query (all conditions, columns, extraData, etc).

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
### clearDrillDowns
Clears all drill downs

▸ clearDrillDowns(): `void`


**Returns** `void`


---
### clearExtraConditions
Clears all extra conditions in query

▸ clearExtraConditions(): `void`


**Returns** `void`


---
### createColumn
▸ createColumn(justsorted?: `boolean`): [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)

#### Parameters:
- justsorted: `boolean`, *Default value* = `false`


**Returns** [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)


---
### createCondition
▸ createCondition(tag?: [CondTag](api-reference-7x/easyquery-packages/core-package/enumerations/condtag-enum)): [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class)

#### Parameters:
- tag: [CondTag](api-reference-7x/easyquery-packages/core-package/enumerations/condtag-enum), *Default value* = ` CondTag.Simple`


**Returns** [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class)


---
### findColumnById
▸ findColumnById(colId: `string`): [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class) | `null`

#### Parameters:
- colId: `string`


**Returns** [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class) | `null`


---
### fireChangedEvent
Fires a QueryChanged event.

▸ fireChangedEvent(params?: [QueryChangeEventParams](api-reference-7x/easyquery-packages/core-package/interfaces/querychangeeventparams-interface)): `any`

#### Parameters:
- params: [QueryChangeEventParams](api-reference-7x/easyquery-packages/core-package/interfaces/querychangeeventparams-interface), *Optional*  - The event parameters.



**Returns** `any`

▸ fireChangedEvent(params?: [QueryChangeEventParams](api-reference-7x/easyquery-packages/core-package/interfaces/querychangeeventparams-interface),postpone?: `number`,wasModified?: `boolean`): `any`

#### Parameters:
- params: [QueryChangeEventParams](api-reference-7x/easyquery-packages/core-package/interfaces/querychangeeventparams-interface), *Optional* 
- postpone: `number`, *Optional* 
- wasModified: `boolean`, *Optional* 


**Returns** `any`


---
### fireColumnsChangedEvent
▸ fireColumnsChangedEvent(action?: [QueryChangeAction](api-reference-7x/easyquery-packages/core-package/enumerations/querychangeaction-enum),column?: [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class) | [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)[],justsorted?: `boolean`): `void`

#### Parameters:
- action: [QueryChangeAction](api-reference-7x/easyquery-packages/core-package/enumerations/querychangeaction-enum), *Optional* 
- column: [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class) | [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)[], *Optional* 
- justsorted: `boolean`, *Optional* 


**Returns** `void`


---
### fireConditionsChangedEvent
▸ fireConditionsChangedEvent(action?: [QueryChangeAction](api-reference-7x/easyquery-packages/core-package/enumerations/querychangeaction-enum),condition?: [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class) | [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class)[]): `void`

#### Parameters:
- action: [QueryChangeAction](api-reference-7x/easyquery-packages/core-package/enumerations/querychangeaction-enum), *Optional* 
- condition: [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class) | [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class)[], *Optional* 


**Returns** `void`


---
### fireProcessEvent
Fires process event.

▸ fireProcessEvent(data: `any`): `void`

#### Parameters:
- data: `any` - The data.



**Returns** `void`


---
### getAggregatedColumns
▸ getAggregatedColumns(): [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)[]


**Returns** [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)[]


---
### getColumnById
▸ getColumnById(id: `string`): [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)

#### Parameters:
- id: `string`


**Returns** [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)


---
### getColumnSortIndex
Gets Colummn sorting index.

▸ getColumnSortIndex(col: [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)): `number`

#### Parameters:
- col: [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class) - The column.


**Returns** `number`


---
### getColumns
Get array of columns.

▸ getColumns(): [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)[]


**Returns** [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)[]


---
### getConditionsText
Retruns conditions text

▸ getConditionsText(): `string`


**Returns** `string`


---
### getConditionsTextAsHtml
Retruns conditions text

▸ getConditionsTextAsHtml(): `string`


**Returns** `string`


---
### getDescription
Gets description of the query.

▸ getDescription(): `string`


**Returns** `string`


---
### getDrillDowns
▸ getDrillDowns(): `Array`&lt;[Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)&gt;


**Returns** `Array`&lt;[Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)&gt;


---
### getId
Gets query ID.

▸ getId(): `string`


**Returns** `string` - The ID>



---
### getJustSortedColumns
Get array of columns used only in sorting.

▸ getJustSortedColumns(): [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)[]


**Returns** [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)[]


---
### getModel
Gets DataModel object associated with this query.

▸ getModel(): [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class)


**Returns** [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class)


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
### getParentQuery
▸ getParentQuery(): [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class) | `null`


**Returns** [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class) | `null`


---
### getRootCondition
Gets root predicate

▸ getRootCondition(): [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class)


**Returns** [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class)


---
### getSortedColumns
Gets array of columns used in sorting

▸ getSortedColumns(): [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)[]


**Returns** [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)[]


---
### getUsedInTotalsColumns
Gets array of columns that are used as keys
for totals.

▸ getUsedInTotalsColumns(): [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)[]


**Returns** [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)[]


---
### hasEnabledAggrColumns
▸ hasEnabledAggrColumns(): `boolean`


**Returns** `boolean`


---
### isEmpty
Checks wether query does not contains any column and any condition.

▸ isEmpty(): `boolean`


**Returns** `boolean`


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
Loads query from data representation.

▸ loadFromData(data: [QueryData](api-reference-7x/easyquery-packages/core-package/interfaces/querydata-interface),changeStatus?: `boolean`): `void`

#### Parameters:
- data: [QueryData](api-reference-7x/easyquery-packages/core-package/interfaces/querydata-interface)
- changeStatus: `boolean`, *Optional* 


**Returns** `void`


---
### loadFromDataOrJson
Sets data to the query.

▸ loadFromDataOrJson(data: [QueryData](api-reference-7x/easyquery-packages/core-package/interfaces/querydata-interface) | `string`,changeStatus?: `boolean`): `void`

#### Parameters:
- data: [QueryData](api-reference-7x/easyquery-packages/core-package/interfaces/querydata-interface) | `string` - JSON representation object or JSON string
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

▸ loadModelData(model: [ModelPlainData](api-reference-7x/easyquery-packages/core-package/interfaces/modelplaindata-interface) | `string`): `void`

#### Parameters:
- model: [ModelPlainData](api-reference-7x/easyquery-packages/core-package/interfaces/modelplaindata-interface) | `string` - JSON representation object or JSON string.



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

▸ removeColumn(column: [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class),author: `any`): `void`

#### Parameters:
- column: [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class) - The column to be removed.
- author: `any` - The author



**Returns** `void`


---
### removeColumns
Removes several columns passed as array.

▸ removeColumns(columnsToRemove: [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)[],author: `any`): `void`

#### Parameters:
- columnsToRemove: [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)[] - The list of columns to be removed.
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
Resets the query: clears all its conditions and columns, regenerate the ID and sets the default name.

▸ reset(clearQuery?: `boolean`): `void`

#### Parameters:
- clearQuery: `boolean`, *Optional* 


**Returns** `void`


---
### resetModified
▸ resetModified(): `void`


**Returns** `void`


---
### runThroughConditions
Runs through condition with this callback.

▸ runThroughConditions(processCondition: (cond: [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class)) => `void`): `void`

#### Parameters:
- processCondition: (cond: [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class)) => `void` - The function to process condition.



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

▸ setModel(model: [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class)): `void`

#### Parameters:
- model: [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class) - The data model.



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

▸ toJSONData(): [QueryData](api-reference-7x/easyquery-packages/core-package/interfaces/querydata-interface)


**Returns** [QueryData](api-reference-7x/easyquery-packages/core-package/interfaces/querydata-interface)


---
### tryValidate
Validates wether the query corresponds to the model.

▸ tryValidate(options?: [ValidateQueryOptions](api-reference-7x/easyquery-packages/core-package/interfaces/validatequeryoptions-interface)): `boolean`

#### Parameters:
- options: [ValidateQueryOptions](api-reference-7x/easyquery-packages/core-package/interfaces/validatequeryoptions-interface), *Optional*  - Validate options.


**Returns** `boolean` - `true` if it is valid, otherwise `false`



---
### validate
Validates wether the query corresponds to the model.

▸ validate(options?: [ValidateQueryOptions](api-reference-7x/easyquery-packages/core-package/interfaces/validatequeryoptions-interface)): `void`

#### Parameters:
- options: [ValidateQueryOptions](api-reference-7x/easyquery-packages/core-package/interfaces/validatequeryoptions-interface), *Optional*  - Validate options.


**Returns** `void`


---
## Protected Methods

---
### createSimpleConditionObject
▸ createSimpleConditionObject(attr: [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class),operator: [Operator](api-reference-7x/easyquery-packages/core-package/classes/operator-class),inputValues: `string` | `Array`&lt;`string`&gt;): [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class)

#### Parameters:
- attr: [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class)
- operator: [Operator](api-reference-7x/easyquery-packages/core-package/classes/operator-class)
- inputValues: `string` | `Array`&lt;`string`&gt;


**Returns** [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class)


---
