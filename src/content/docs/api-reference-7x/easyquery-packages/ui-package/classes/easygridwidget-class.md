---
title: EasyGridWidget class
slug: api-reference-7x/easyquery-packages/ui-package/classes/easygridwidget-class
sidebar:
  order: 100
---

## Extends
[Grid](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/grid-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/easygridwidget-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/easygridwidget-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/easygridwidget-class/#public-properties-1)
- [id](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/easygridwidget-class/#id)

### [Protected Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/easygridwidget-class/#protected-properties-1)
- [context](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/easygridwidget-class/#context)
- [group](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/easygridwidget-class/#group)
- [slot](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/easygridwidget-class/#slot)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/easygridwidget-class/#public-methods-1)
- [addColumn](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/easygridwidget-class/#addcolumn)
- [addNewColumn](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/easygridwidget-class/#addnewcolumn)
- [belongsToGroup](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/easygridwidget-class/#belongstogroup)
- [clear](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/easygridwidget-class/#clear)
- [destroy](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/easygridwidget-class/#destroy)
- [getContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/easygridwidget-class/#getcontext)
- [getModel](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/easygridwidget-class/#getmodel)
- [getQuery](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/easygridwidget-class/#getquery)
- [getWidgetType](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/easygridwidget-class/#getwidgettype)
- [init](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/easygridwidget-class/#init)
- [onProcessEnd](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/easygridwidget-class/#onprocessend)
- [onProcessStart](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/easygridwidget-class/#onprocessstart)
- [refresh](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/easygridwidget-class/#refresh)

### [Protected Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/easygridwidget-class/#protected-methods-1)
- [addColumnClickHandler](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/easygridwidget-class/#addcolumnclickhandler)
- [applyDisplayFormats](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/easygridwidget-class/#applydisplayformats)
- [attachQueryObserver](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/easygridwidget-class/#attachqueryobserver)
- [columnMovedHandler](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/easygridwidget-class/#columnmovedhandler)
- [createEntitiesMenu](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/easygridwidget-class/#createentitiesmenu)
- [destroyCore](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/easygridwidget-class/#destroycore)
- [onProcessEndCore](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/easygridwidget-class/#onprocessendcore)
- [onProcessStartCore](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/easygridwidget-class/#onprocessstartcore)
- [refreshCore](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/easygridwidget-class/#refreshcore)
- [render](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/easygridwidget-class/#render)
- [updateTotalsSettings](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/easygridwidget-class/#updatetotalssettings)


## Constructors

---
#### constructor

The default constructor.
⊕ new EasyGridWidget(slot: `HTMLElement`): [EasyGridWidget](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/easygridwidget-class)

#### Parameters:
- slot: `HTMLElement` - The html element.



---

## Public Properties

---
### id

● id: `string`

---
## Protected Properties

---
### context

● context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)

---
### group

● group: [WidgetGroup](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/enumerations/widgetgroup-enum)

---
### slot

The html element.

● slot: `HTMLElement`

---
## Public Methods

---
### addColumn
▸ addColumn(column: [QueryColumn](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class)): [QueryColumn](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class)

#### Parameters:
- column: [QueryColumn](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class)


**Returns** [QueryColumn](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class)


---
### addNewColumn
▸ addNewColumn(attrId: `string`): [QueryColumn](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class)

#### Parameters:
- attrId: `string`


**Returns** [QueryColumn](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class)


---
### belongsToGroup
Returns `true` if the widget belongs to one of the groups specified in the parameter

▸ belongsToGroup(groups?: [WidgetGroup](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/enumerations/widgetgroup-enum)): `boolean`

#### Parameters:
- groups: [WidgetGroup](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/enumerations/widgetgroup-enum), *Optional*  - 



**Returns** `boolean`


---
### clear
▸ clear(): `void`


**Returns** `void`


---
### destroy
▸ destroy(): `void`


**Returns** `void`


---
### getContext
Returns current context (the one this widget belongs to)

▸ getContext(): [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)


**Returns** [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)


---
### getModel
▸ getModel(): [DataModel](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/datamodel-class)


**Returns** [DataModel](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/datamodel-class)


---
### getQuery
▸ getQuery(): [Query](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/query-class)


**Returns** [Query](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/query-class)


---
### getWidgetType
▸ getWidgetType(): `string`


**Returns** `string`


---
### init
Initialize widget.

▸ init(context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class),options?: `any`): `void`

#### Parameters:
- context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class) - The context.
- options: `any`, *Optional*  - The options.



**Returns** `void`


---
### onProcessEnd
This function is called on the end of some process this widget participates in.
For example, some widgets should be updated on model loading
or after the execution of the current query

▸ onProcessEnd(): `void`


**Returns** `void`


---
### onProcessStart
This function is called on the start of some process this widget participates in.
For example, some widgets can show a spinner or a progress bar
at the beginning of some long process (e.g. model loading).

▸ onProcessStart(): `void`


**Returns** `void`


---
### refresh
Refreshes the widget's content

▸ refresh(): `void`


**Returns** `void`


---
## Protected Methods

---
### addColumnClickHandler
▸ addColumnClickHandler(ev: `AddColumnClickEvent`): `void`

#### Parameters:
- ev: `AddColumnClickEvent`


**Returns** `void`


---
### applyDisplayFormats
▸ applyDisplayFormats(): `void`


**Returns** `void`


---
### attachQueryObserver
▸ attachQueryObserver(): `void`


**Returns** `void`


---
### columnMovedHandler
▸ columnMovedHandler(ev: `ColumnMovedEvent`): `void`

#### Parameters:
- ev: `ColumnMovedEvent`


**Returns** `void`


---
### createEntitiesMenu
▸ createEntitiesMenu(): `void`


**Returns** `void`


---
### destroyCore
▸ destroyCore(): `void`


**Returns** `void`


---
### onProcessEndCore
This function is called from `onProcessEnd` function.
It does nothing in the base `Widget` class
but can be overridden in derived classes
to implement the functionality specific for a particular widget.

▸ onProcessEndCore(): `void`


**Returns** `void`


---
### onProcessStartCore
This function is called from `onProcessStart` function.
It does nothing in the base `Widget` class
but can be overridden in derived classes
to implement the functionality specific for a particular widget.

▸ onProcessStartCore(): `void`


**Returns** `void`


---
### refreshCore
▸ refreshCore(): `void`


**Returns** `void`


---
### render
▸ render(): `void`


**Returns** `void`


---
### updateTotalsSettings
▸ updateTotalsSettings(): `void`


**Returns** `void`


---
