---
title: Query class
slug: api-reference-5-x/@easyquery/core-package/classes/query-class
sidebar:
  order: 100
---

Represents Query.

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#public-properties-1)
- [attrClassName](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#attrclassname)
- [clientListRequestHandler](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#clientlistrequesthandler)
- [model](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#model)
- [serverListRequestHandler](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#serverlistrequesthandler)

### [Public Methods](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#public-methods-1)
- [addChangedCallback](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#addchangedcallback)
- [addColumn](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#addcolumn)
- [addPredicate](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#addpredicate)
- [addProcessCallback](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#addprocesscallback)
- [addSimpleCondition](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#addsimplecondition)
- [beginUpdate](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#beginupdate)
- [clear](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#clear)
- [clearColumns](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#clearcolumns)
- [clearConditions](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#clearconditions)
- [endUpdate](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#endupdate)
- [fireChangedEvent](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#firechangedevent)
- [fireProcessEvent](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#fireprocessevent)
- [getColumnSortIndex](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#getcolumnsortindex)
- [getColumns](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#getcolumns)
- [getConditionsText](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#getconditionstext)
- [getDescription](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#getdescription)
- [getId](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#getid)
- [getModel](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#getmodel)
- [getName](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#getname)
- [getOneValueForAttr](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#getonevalueforattr)
- [getRootPredicate](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#getrootpredicate)
- [getSortedColumns](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#getsortedcolumns)
- [isEmptyColumns](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#isemptycolumns)
- [isEmptyConditions](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#isemptyconditions)
- [loadFromJson](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#loadfromjson)
- [loadModelData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#loadmodeldata)
- [moveColumn](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#movecolumn)
- [removeChangedCallback](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#removechangedcallback)
- [removeColumn](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#removecolumn)
- [removeColumns](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#removecolumns)
- [removeProcessCallback](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#removeprocesscallback)
- [runThroughConditions](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#runthroughconditions)
- [setData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#setdata)
- [setDescription](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#setdescription)
- [setId](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#setid)
- [setModel](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#setmodel)
- [setName](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#setname)
- [toJSON](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#tojson)
- [toJSONData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class/#tojsondata)


## Constructors

---
#### constructor

The default constructor.
⊕ new Query(model?: [DataModel](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class),data?: [QueryData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/querydata-interface),options?: [QueryOptions](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/queryoptions-interface)): [Query](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class)

#### Parameters:
- model: [DataModel](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class), *Optional*  - The data model.
- data: [QueryData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/querydata-interface), *Optional*  - JSON representation object.
- options: [QueryOptions](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/queryoptions-interface), *Optional*  - The options.



---

## Public Properties

---
### attrClassName

The attributec class name (Tag).

● attrClassName: [ExprTag](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/enumerations/exprtag-enum)

---
### clientListRequestHandler

● clientListRequestHandler: `any`

---
### model

The Data Model associated with this query.

● model: [DataModel](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class)

---
### serverListRequestHandler

● serverListRequestHandler: `any`

---
## Public Methods

---
### addChangedCallback
Add changed callback

▸ addChangedCallback(callback: (event: [EqEvent](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqevent-interface)) => `void`): `string`

#### Parameters:
- callback: (event: [EqEvent](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqevent-interface)) => `void` - The callback ID.



**Returns** `string`

---
### addColumn
Adds a new column with specified index.

▸ addColumn(column: [Column](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/column-class) | [Column](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/column-class)[],index: `any`,author: `any`): `void`

#### Parameters:
- column: [Column](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/column-class) | [Column](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/column-class)[] - The column or array of columns
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
### addPredicate
Adds a new predicate.

▸ addPredicate(params: `any`): [Condition](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/condition-class)

#### Parameters:
- params: `any` - The options.


**Returns** [Condition](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/condition-class)

---
### addProcessCallback
Add process callback

▸ addProcessCallback(callback: (event: [EqEvent](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqevent-interface)) => `void`): `string`

#### Parameters:
- callback: (event: [EqEvent](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqevent-interface)) => `void` - The callback.


**Returns** `string`

---
### addSimpleCondition
 Adds a new simple condition.

▸ addSimpleCondition(params: `any`): [Condition](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/condition-class)

#### Parameters:
- params: `any` - The options.


**Returns** [Condition](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/condition-class)

---
### beginUpdate
Begin update. Set event emitter to silent mode.

▸ beginUpdate(): `void`


**Returns** `void`

---
### clear
Clears query (all conditions and columns).

▸ clear(silent?: `boolean`): `void`

#### Parameters:
- silent: `boolean`, *Default value* = `false` - Indicate wether clear query without firing event.



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
### endUpdate
Begin update. Remove silent mode.

▸ endUpdate(raiseChangeEvent?: `boolean`): `void`

#### Parameters:
- raiseChangeEvent: `boolean`, *Default value* = `false`


**Returns** `void`

---
### fireChangedEvent
Fires change event.

▸ fireChangedEvent(data: `any`,postpone?: `number`): `void`

#### Parameters:
- data: `any` - The data.
- postpone: `number`, *Default value* = `100` - The postpone.



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

▸ getColumnSortIndex(col: [Column](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/column-class)): `number`

#### Parameters:
- col: [Column](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/column-class) - The column.


**Returns** `number`

---
### getColumns
Get array of columns.

▸ getColumns(): [Column](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/column-class)[]


**Returns** [Column](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/column-class)[]

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

▸ getModel(): [DataModel](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class)


**Returns** [DataModel](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class)

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
### getRootPredicate
Gets root predicate

▸ getRootPredicate(): [Condition](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/condition-class)


**Returns** [Condition](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/condition-class)

---
### getSortedColumns
Gets array of columns used in sorting

▸ getSortedColumns(): [Column](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/column-class)[]


**Returns** [Column](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/column-class)[]

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
### loadFromJson
Loads query from JSON.

▸ loadFromJson(json: `string`): `void`

#### Parameters:
- json: `string` - The JSON string.



**Returns** `void`

---
### loadModelData
Loads data model.

▸ loadModelData(model: [DataModelData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/datamodeldata-interface) | `string`): `void`

#### Parameters:
- model: [DataModelData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/datamodeldata-interface) | `string` - JSON representation object or JSON string.



**Returns** `void`

---
### moveColumn
Moves the column with specified index to another position.

▸ moveColumn(index1: `number`,index2: `number`,author: `any`): `void`

#### Parameters:
- index1: `number` - The index of the column that should be moved.
- index2: `number` - The index of the position the column should be moved to
- author: `any` - The author



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

▸ removeColumn(column: [Column](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/column-class),author: `any`): `void`

#### Parameters:
- column: [Column](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/column-class) - The column to be removed.
- author: `any` - The author



**Returns** `void`

---
### removeColumns
Removes several columns passed as array.

▸ removeColumns(columnsToRemove: [Column](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/column-class)[],author: `any`): `void`

#### Parameters:
- columnsToRemove: [Column](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/column-class)[] - The list of columns to be removed.
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
### runThroughConditions
Runs through condition with this callback.

▸ runThroughConditions(processCondition: (cond: [Condition](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/condition-class)) => `void`): `void`

#### Parameters:
- processCondition: (cond: [Condition](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/condition-class)) => `void` - The function to process condition.



**Returns** `void`

---
### setData
Sets data to the query.

▸ setData(data: [QueryData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/querydata-interface) | `string`,silent?: `boolean`): `void`

#### Parameters:
- data: [QueryData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/querydata-interface) | `string` - JSON representation object or JSON string
- silent: `boolean`, *Default value* = `false` - Indicate wether to set data silent (without firing event)



**Returns** `void`

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

▸ setModel(model: [DataModel](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class)): `void`

#### Parameters:
- model: [DataModel](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class) - The data model.



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

▸ toJSONData(): [QueryData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/querydata-interface)


**Returns** [QueryData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/querydata-interface)

---
