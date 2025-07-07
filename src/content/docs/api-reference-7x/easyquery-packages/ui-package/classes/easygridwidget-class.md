---
title: EasyGridWidget class
slug: api-reference-7x/easyquery-packages/ui-package/classes/easygridwidget-class
sidebar:
  order: 100
---

## Extends
[Grid](api-reference-7x/easyquery-packages/ui-package/classes/grid-class)

## Index
### [Constructors](api-reference-7x/easyquery-packages/ui-package/classes/easygridwidget-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/ui-package/classes/easygridwidget-class#constructor)

### [Public Properties](api-reference-7x/easyquery-packages/ui-package/classes/easygridwidget-class#public-properties-1)
- [id](api-reference-7x/easyquery-packages/ui-package/classes/easygridwidget-class#id)

### [Protected Properties](api-reference-7x/easyquery-packages/ui-package/classes/easygridwidget-class#protected-properties-1)
- [context](api-reference-7x/easyquery-packages/ui-package/classes/easygridwidget-class#context)
- [group](api-reference-7x/easyquery-packages/ui-package/classes/easygridwidget-class#group)
- [slot](api-reference-7x/easyquery-packages/ui-package/classes/easygridwidget-class#slot)

### [Public Methods](api-reference-7x/easyquery-packages/ui-package/classes/easygridwidget-class#public-methods-1)
- [addColumn](api-reference-7x/easyquery-packages/ui-package/classes/easygridwidget-class#addcolumn)
- [addNewColumn](api-reference-7x/easyquery-packages/ui-package/classes/easygridwidget-class#addnewcolumn)
- [belongsToGroup](api-reference-7x/easyquery-packages/ui-package/classes/easygridwidget-class#belongstogroup)
- [clear](api-reference-7x/easyquery-packages/ui-package/classes/easygridwidget-class#clear)
- [destroy](api-reference-7x/easyquery-packages/ui-package/classes/easygridwidget-class#destroy)
- [getContext](api-reference-7x/easyquery-packages/ui-package/classes/easygridwidget-class#getcontext)
- [getModel](api-reference-7x/easyquery-packages/ui-package/classes/easygridwidget-class#getmodel)
- [getQuery](api-reference-7x/easyquery-packages/ui-package/classes/easygridwidget-class#getquery)
- [getWidgetType](api-reference-7x/easyquery-packages/ui-package/classes/easygridwidget-class#getwidgettype)
- [init](api-reference-7x/easyquery-packages/ui-package/classes/easygridwidget-class#init)
- [onProcessEnd](api-reference-7x/easyquery-packages/ui-package/classes/easygridwidget-class#onprocessend)
- [onProcessStart](api-reference-7x/easyquery-packages/ui-package/classes/easygridwidget-class#onprocessstart)
- [refresh](api-reference-7x/easyquery-packages/ui-package/classes/easygridwidget-class#refresh)

### [Protected Methods](api-reference-7x/easyquery-packages/ui-package/classes/easygridwidget-class#protected-methods-1)
- [addColumnClickHandler](api-reference-7x/easyquery-packages/ui-package/classes/easygridwidget-class#addcolumnclickhandler)
- [applyDisplayFormats](api-reference-7x/easyquery-packages/ui-package/classes/easygridwidget-class#applydisplayformats)
- [attachQueryObserver](api-reference-7x/easyquery-packages/ui-package/classes/easygridwidget-class#attachqueryobserver)
- [columnMovedHandler](api-reference-7x/easyquery-packages/ui-package/classes/easygridwidget-class#columnmovedhandler)
- [createEntitiesMenu](api-reference-7x/easyquery-packages/ui-package/classes/easygridwidget-class#createentitiesmenu)
- [destroyCore](api-reference-7x/easyquery-packages/ui-package/classes/easygridwidget-class#destroycore)
- [onProcessEndCore](api-reference-7x/easyquery-packages/ui-package/classes/easygridwidget-class#onprocessendcore)
- [onProcessStartCore](api-reference-7x/easyquery-packages/ui-package/classes/easygridwidget-class#onprocessstartcore)
- [refreshCore](api-reference-7x/easyquery-packages/ui-package/classes/easygridwidget-class#refreshcore)
- [render](api-reference-7x/easyquery-packages/ui-package/classes/easygridwidget-class#render)
- [updateTotalsSettings](api-reference-7x/easyquery-packages/ui-package/classes/easygridwidget-class#updatetotalssettings)


## Constructors

---
#### constructor

The default constructor.
⊕ new EasyGridWidget(slot: `HTMLElement`): [EasyGridWidget](api-reference-7x/easyquery-packages/ui-package/classes/easygridwidget-class)

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

● context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)

---
### group

● group: [WidgetGroup](api-reference-7x/easyquery-packages/core-package/enumerations/widgetgroup-enum)

---
### slot

The html element.

● slot: `HTMLElement`

---
## Public Methods

---
### addColumn
▸ addColumn(column: [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)): [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)

#### Parameters:
- column: [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)


**Returns** [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)


---
### addNewColumn
▸ addNewColumn(attrId: `string`): [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)

#### Parameters:
- attrId: `string`


**Returns** [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)


---
### belongsToGroup
Returns `true` if the widget belongs to one of the groups specified in the parameter

▸ belongsToGroup(groups?: [WidgetGroup](api-reference-7x/easyquery-packages/core-package/enumerations/widgetgroup-enum)): `boolean`

#### Parameters:
- groups: [WidgetGroup](api-reference-7x/easyquery-packages/core-package/enumerations/widgetgroup-enum), *Optional*  - 



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

▸ getContext(): [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)


**Returns** [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)


---
### getModel
▸ getModel(): [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class)


**Returns** [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class)


---
### getQuery
▸ getQuery(): [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)


**Returns** [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)


---
### getWidgetType
▸ getWidgetType(): `string`


**Returns** `string`


---
### init
Initialize widget.

▸ init(context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class),options?: `any`): `void`

#### Parameters:
- context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class) - The context.
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
