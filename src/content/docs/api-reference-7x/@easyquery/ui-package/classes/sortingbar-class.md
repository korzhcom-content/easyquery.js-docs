---
title: SortingBar class
slug: api-reference-7x/@easyquery/ui-package/classes/sortingbar-class
sidebar:
  order: 100
---

## Extends
[Widget](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/widget-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/sortingbar-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/sortingbar-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/sortingbar-class/#public-properties-1)
- [id](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/sortingbar-class/#id)
- [sortMenu](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/sortingbar-class/#sortmenu)

### [Protected Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/sortingbar-class/#protected-properties-1)
- [context](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/sortingbar-class/#context)
- [group](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/sortingbar-class/#group)
- [slot](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/sortingbar-class/#slot)

### [Protected Accessors](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/sortingbar-class/#protected-accessors-1)
- [cssPrefix](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/sortingbar-class/#cssprefix)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/sortingbar-class/#public-methods-1)
- [addColumn](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/sortingbar-class/#addcolumn)
- [addNewColumn](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/sortingbar-class/#addnewcolumn)
- [belongsToGroup](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/sortingbar-class/#belongstogroup)
- [destroy](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/sortingbar-class/#destroy)
- [getContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/sortingbar-class/#getcontext)
- [getWidgetType](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/sortingbar-class/#getwidgettype)
- [init](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/sortingbar-class/#init)
- [onProcessEnd](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/sortingbar-class/#onprocessend)
- [onProcessStart](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/sortingbar-class/#onprocessstart)
- [refresh](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/sortingbar-class/#refresh)
- [showEntitiesMenu](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/sortingbar-class/#showentitiesmenu)

### [Protected Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/sortingbar-class/#protected-methods-1)
- [destroyCore](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/sortingbar-class/#destroycore)
- [getQuery](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/sortingbar-class/#getquery)
- [onProcessEndCore](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/sortingbar-class/#onprocessendcore)
- [onProcessStartCore](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/sortingbar-class/#onprocessstartcore)
- [refreshCore](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/sortingbar-class/#refreshcore)


## Constructors

---
#### constructor

⊕ new SortingBar(slot: `HTMLElement`): [SortingBar](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/sortingbar-class)

#### Parameters:
- slot: `HTMLElement`


---

## Public Properties

---
### id

● id: `string`

---
### sortMenu

● sortMenu: [PopupMenu](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/popupmenu-class)

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
### destroy
▸ destroy(): `void`


**Returns** `void`


---
### getContext
Returns current context (the one this widget belongs to)

▸ getContext(): [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)


**Returns** [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)


---
### getWidgetType
▸ getWidgetType(): `string`


**Returns** `string`


---
### init
▸ init(context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class),options?: [SortingBarOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/sortingbaroptions-interface)): `void`

#### Parameters:
- context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)
- options: [SortingBarOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/sortingbaroptions-interface), *Optional* 


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
▸ getQuery(): [Query](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/query-class)


**Returns** [Query](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/query-class)


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
