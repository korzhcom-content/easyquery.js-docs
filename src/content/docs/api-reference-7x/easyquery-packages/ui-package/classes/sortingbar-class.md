---
title: SortingBar class
slug: api-reference-7x/easyquery-packages/ui-package/classes/sortingbar-class
sidebar:
  order: 100
---

## Extends
[Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class)

## Index
### [Constructors](api-reference-7x/easyquery-packages/ui-package/classes/sortingbar-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/ui-package/classes/sortingbar-class#constructor)

### [Public Properties](api-reference-7x/easyquery-packages/ui-package/classes/sortingbar-class#public-properties-1)
- [id](api-reference-7x/easyquery-packages/ui-package/classes/sortingbar-class#id)
- [sortMenu](api-reference-7x/easyquery-packages/ui-package/classes/sortingbar-class#sortmenu)

### [Protected Properties](api-reference-7x/easyquery-packages/ui-package/classes/sortingbar-class#protected-properties-1)
- [context](api-reference-7x/easyquery-packages/ui-package/classes/sortingbar-class#context)
- [group](api-reference-7x/easyquery-packages/ui-package/classes/sortingbar-class#group)
- [slot](api-reference-7x/easyquery-packages/ui-package/classes/sortingbar-class#slot)

### [Protected Accessors](api-reference-7x/easyquery-packages/ui-package/classes/sortingbar-class#protected-accessors-1)
- [cssPrefix](api-reference-7x/easyquery-packages/ui-package/classes/sortingbar-class#cssprefix)

### [Public Methods](api-reference-7x/easyquery-packages/ui-package/classes/sortingbar-class#public-methods-1)
- [addColumn](api-reference-7x/easyquery-packages/ui-package/classes/sortingbar-class#addcolumn)
- [addNewColumn](api-reference-7x/easyquery-packages/ui-package/classes/sortingbar-class#addnewcolumn)
- [belongsToGroup](api-reference-7x/easyquery-packages/ui-package/classes/sortingbar-class#belongstogroup)
- [destroy](api-reference-7x/easyquery-packages/ui-package/classes/sortingbar-class#destroy)
- [getContext](api-reference-7x/easyquery-packages/ui-package/classes/sortingbar-class#getcontext)
- [getWidgetType](api-reference-7x/easyquery-packages/ui-package/classes/sortingbar-class#getwidgettype)
- [init](api-reference-7x/easyquery-packages/ui-package/classes/sortingbar-class#init)
- [onProcessEnd](api-reference-7x/easyquery-packages/ui-package/classes/sortingbar-class#onprocessend)
- [onProcessStart](api-reference-7x/easyquery-packages/ui-package/classes/sortingbar-class#onprocessstart)
- [refresh](api-reference-7x/easyquery-packages/ui-package/classes/sortingbar-class#refresh)
- [showEntitiesMenu](api-reference-7x/easyquery-packages/ui-package/classes/sortingbar-class#showentitiesmenu)

### [Protected Methods](api-reference-7x/easyquery-packages/ui-package/classes/sortingbar-class#protected-methods-1)
- [destroyCore](api-reference-7x/easyquery-packages/ui-package/classes/sortingbar-class#destroycore)
- [getQuery](api-reference-7x/easyquery-packages/ui-package/classes/sortingbar-class#getquery)
- [onProcessEndCore](api-reference-7x/easyquery-packages/ui-package/classes/sortingbar-class#onprocessendcore)
- [onProcessStartCore](api-reference-7x/easyquery-packages/ui-package/classes/sortingbar-class#onprocessstartcore)
- [refreshCore](api-reference-7x/easyquery-packages/ui-package/classes/sortingbar-class#refreshcore)


## Constructors

---
#### constructor

⊕ new SortingBar(slot: `HTMLElement`): [SortingBar](api-reference-7x/easyquery-packages/ui-package/classes/sortingbar-class)

#### Parameters:
- slot: `HTMLElement`


---

## Public Properties

---
### id

● id: `string`

---
### sortMenu

● sortMenu: [PopupMenu](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class)

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

● slot: `HTMLElement`

---
## Protected Accessors

---
### cssPrefix
⇄ get cssPrefix(): `string`


**Returns** `string`


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
### destroy
▸ destroy(): `void`


**Returns** `void`


---
### getContext
Returns current context (the one this widget belongs to)

▸ getContext(): [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)


**Returns** [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)


---
### getWidgetType
▸ getWidgetType(): `string`


**Returns** `string`


---
### init
▸ init(context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class),options?: [SortingBarOptions](api-reference-7x/easyquery-packages/ui-package/interfaces/sortingbaroptions-interface)): `void`

#### Parameters:
- context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)
- options: [SortingBarOptions](api-reference-7x/easyquery-packages/ui-package/interfaces/sortingbaroptions-interface), *Optional* 


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
### showEntitiesMenu
▸ showEntitiesMenu(menuOptions: `any`): `void`

#### Parameters:
- menuOptions: `any`


**Returns** `void`


---
## Protected Methods

---
### destroyCore
▸ destroyCore(): `void`


**Returns** `void`


---
### getQuery
▸ getQuery(): [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)


**Returns** [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)


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
