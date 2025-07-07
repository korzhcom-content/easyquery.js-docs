---
title: ColumnsBar class
slug: api-reference-7x/easyquery-packages/ui-package/classes/columnsbar-class
sidebar:
  order: 100
---

## Extends
[Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class)

## Index
### [Constructors](api-reference-7x/easyquery-packages/ui-package/classes/columnsbar-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/ui-package/classes/columnsbar-class#constructor)

### [Public Properties](api-reference-7x/easyquery-packages/ui-package/classes/columnsbar-class#public-properties-1)
- [id](api-reference-7x/easyquery-packages/ui-package/classes/columnsbar-class#id)
- [moveMenu](api-reference-7x/easyquery-packages/ui-package/classes/columnsbar-class#movemenu)
- [sortMenu](api-reference-7x/easyquery-packages/ui-package/classes/columnsbar-class#sortmenu)

### [Protected Properties](api-reference-7x/easyquery-packages/ui-package/classes/columnsbar-class#protected-properties-1)
- [context](api-reference-7x/easyquery-packages/ui-package/classes/columnsbar-class#context)
- [group](api-reference-7x/easyquery-packages/ui-package/classes/columnsbar-class#group)
- [slot](api-reference-7x/easyquery-packages/ui-package/classes/columnsbar-class#slot)

### [Protected Accessors](api-reference-7x/easyquery-packages/ui-package/classes/columnsbar-class#protected-accessors-1)
- [cssPrefix](api-reference-7x/easyquery-packages/ui-package/classes/columnsbar-class#cssprefix)

### [Public Methods](api-reference-7x/easyquery-packages/ui-package/classes/columnsbar-class#public-methods-1)
- [addColumn](api-reference-7x/easyquery-packages/ui-package/classes/columnsbar-class#addcolumn)
- [addNewColumn](api-reference-7x/easyquery-packages/ui-package/classes/columnsbar-class#addnewcolumn)
- [areCustomExpressionsAllowed](api-reference-7x/easyquery-packages/ui-package/classes/columnsbar-class#arecustomexpressionsallowed)
- [belongsToGroup](api-reference-7x/easyquery-packages/ui-package/classes/columnsbar-class#belongstogroup)
- [destroy](api-reference-7x/easyquery-packages/ui-package/classes/columnsbar-class#destroy)
- [getColumnsBlock](api-reference-7x/easyquery-packages/ui-package/classes/columnsbar-class#getcolumnsblock)
- [getContext](api-reference-7x/easyquery-packages/ui-package/classes/columnsbar-class#getcontext)
- [getQuery](api-reference-7x/easyquery-packages/ui-package/classes/columnsbar-class#getquery)
- [getWidgetType](api-reference-7x/easyquery-packages/ui-package/classes/columnsbar-class#getwidgettype)
- [hideLandingSlot](api-reference-7x/easyquery-packages/ui-package/classes/columnsbar-class#hidelandingslot)
- [init](api-reference-7x/easyquery-packages/ui-package/classes/columnsbar-class#init)
- [moveColumn](api-reference-7x/easyquery-packages/ui-package/classes/columnsbar-class#movecolumn)
- [onProcessEnd](api-reference-7x/easyquery-packages/ui-package/classes/columnsbar-class#onprocessend)
- [onProcessStart](api-reference-7x/easyquery-packages/ui-package/classes/columnsbar-class#onprocessstart)
- [refresh](api-reference-7x/easyquery-packages/ui-package/classes/columnsbar-class#refresh)
- [showEntitiesMenu](api-reference-7x/easyquery-packages/ui-package/classes/columnsbar-class#showentitiesmenu)
- [showLandingSlot](api-reference-7x/easyquery-packages/ui-package/classes/columnsbar-class#showlandingslot)
- [toggleColumnPicked](api-reference-7x/easyquery-packages/ui-package/classes/columnsbar-class#togglecolumnpicked)

### [Protected Methods](api-reference-7x/easyquery-packages/ui-package/classes/columnsbar-class#protected-methods-1)
- [destroyCore](api-reference-7x/easyquery-packages/ui-package/classes/columnsbar-class#destroycore)
- [onProcessEndCore](api-reference-7x/easyquery-packages/ui-package/classes/columnsbar-class#onprocessendcore)
- [onProcessStartCore](api-reference-7x/easyquery-packages/ui-package/classes/columnsbar-class#onprocessstartcore)
- [refreshCore](api-reference-7x/easyquery-packages/ui-package/classes/columnsbar-class#refreshcore)


## Constructors

---
#### constructor

⊕ new ColumnsBar(slot: `HTMLElement`,customQuery?: [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)): [ColumnsBar](api-reference-7x/easyquery-packages/ui-package/classes/columnsbar-class)

#### Parameters:
- slot: `HTMLElement`
- customQuery: [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class), *Optional* 


---

## Public Properties

---
### id

● id: `string`

---
### moveMenu

● moveMenu: [PopupMenu](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class)

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
▸ addColumn(column: [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class) | [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)[],index?: `number`): `void`

#### Parameters:
- column: [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class) | [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)[]
- index: `number`, *Optional* 


**Returns** `void`


---
### addNewColumn
▸ addNewColumn(attrId: `string`,index?: `number`): [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)

#### Parameters:
- attrId: `string`
- index: `number`, *Optional* 


**Returns** [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)

▸ addNewColumn(attrId: `string`[],index?: `number`): [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)[]

#### Parameters:
- attrId: `string`[]
- index: `number`, *Optional* 


**Returns** [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)[]


---
### areCustomExpressionsAllowed
▸ areCustomExpressionsAllowed(): `boolean`


**Returns** `boolean`


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
### getColumnsBlock
▸ getColumnsBlock(): `HTMLElement`


**Returns** `HTMLElement`


---
### getContext
Returns current context (the one this widget belongs to)

▸ getContext(): [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)


**Returns** [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)


---
### getQuery
▸ getQuery(): [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)


**Returns** [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)


---
### getWidgetType
▸ getWidgetType(): `string`


**Returns** `string`


---
### hideLandingSlot
▸ hideLandingSlot(): `void`


**Returns** `void`


---
### init
▸ init(context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class),options?: [ColumnsBarOptions](api-reference-7x/easyquery-packages/ui-package/interfaces/columnsbaroptions-interface)): `void`

#### Parameters:
- context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)
- options: [ColumnsBarOptions](api-reference-7x/easyquery-packages/ui-package/interfaces/columnsbaroptions-interface), *Optional* 


**Returns** `void`


---
### moveColumn
▸ moveColumn(column: [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class),direction: `string`): `void`

#### Parameters:
- column: [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)
- direction: `string`


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
### showLandingSlot
▸ showLandingSlot(pageX: `number`,pageY: `number`): `void`

#### Parameters:
- pageX: `number`
- pageY: `number`


**Returns** `void`


---
### toggleColumnPicked
▸ toggleColumnPicked(column: [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)): `void`

#### Parameters:
- column: [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)


**Returns** `void`


---
## Protected Methods

---
### destroyCore
▸ destroyCore(): `void`


**Returns** `void`


---
### onProcessEndCore
▸ onProcessEndCore(): `void`


**Returns** `void`


---
### onProcessStartCore
▸ onProcessStartCore(): `void`


**Returns** `void`


---
### refreshCore
▸ refreshCore(): `void`


**Returns** `void`


---
