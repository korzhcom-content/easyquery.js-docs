---
title: ColumnsBar class
slug: api-reference-old/api-reference-6x/ui-package/classes/columnsbar-class
sidebar:
  order: 100
---

## Extends
[Widget](api-reference-old/api-reference-6x/core-package/classes/widget-class)

## Index
### [Constructors](api-reference-old/api-reference-6x/ui-package/classes/columnsbar-class#constructors-1)
- [constructor](api-reference-old/api-reference-6x/ui-package/classes/columnsbar-class#constructor)

### [Public Properties](api-reference-old/api-reference-6x/ui-package/classes/columnsbar-class#public-properties-1)
- [moveMenu](api-reference-old/api-reference-6x/ui-package/classes/columnsbar-class#movemenu)
- [sortMenu](api-reference-old/api-reference-6x/ui-package/classes/columnsbar-class#sortmenu)
- [widgetType](api-reference-old/api-reference-6x/ui-package/classes/columnsbar-class#widgettype)

### [Protected Properties](api-reference-old/api-reference-6x/ui-package/classes/columnsbar-class#protected-properties-1)
- [context](api-reference-old/api-reference-6x/ui-package/classes/columnsbar-class#context)
- [group](api-reference-old/api-reference-6x/ui-package/classes/columnsbar-class#group)
- [slot](api-reference-old/api-reference-6x/ui-package/classes/columnsbar-class#slot)

### [Protected Accessors](api-reference-old/api-reference-6x/ui-package/classes/columnsbar-class#protected-accessors-1)
- [cssPrefix](api-reference-old/api-reference-6x/ui-package/classes/columnsbar-class#cssprefix)

### [Public Methods](api-reference-old/api-reference-6x/ui-package/classes/columnsbar-class#public-methods-1)
- [addColumn](api-reference-old/api-reference-6x/ui-package/classes/columnsbar-class#addcolumn)
- [addNewColumn](api-reference-old/api-reference-6x/ui-package/classes/columnsbar-class#addnewcolumn)
- [areCustomExpressionsAllowed](api-reference-old/api-reference-6x/ui-package/classes/columnsbar-class#arecustomexpressionsallowed)
- [belongsToGroup](api-reference-old/api-reference-6x/ui-package/classes/columnsbar-class#belongstogroup)
- [destroy](api-reference-old/api-reference-6x/ui-package/classes/columnsbar-class#destroy)
- [getColumnsBlock](api-reference-old/api-reference-6x/ui-package/classes/columnsbar-class#getcolumnsblock)
- [getContext](api-reference-old/api-reference-6x/ui-package/classes/columnsbar-class#getcontext)
- [hideLandingSlot](api-reference-old/api-reference-6x/ui-package/classes/columnsbar-class#hidelandingslot)
- [init](api-reference-old/api-reference-6x/ui-package/classes/columnsbar-class#init)
- [moveColumn](api-reference-old/api-reference-6x/ui-package/classes/columnsbar-class#movecolumn)
- [onProcessEnd](api-reference-old/api-reference-6x/ui-package/classes/columnsbar-class#onprocessend)
- [onProcessStart](api-reference-old/api-reference-6x/ui-package/classes/columnsbar-class#onprocessstart)
- [refresh](api-reference-old/api-reference-6x/ui-package/classes/columnsbar-class#refresh)
- [showEntitiesMenu](api-reference-old/api-reference-6x/ui-package/classes/columnsbar-class#showentitiesmenu)
- [showLandingSlot](api-reference-old/api-reference-6x/ui-package/classes/columnsbar-class#showlandingslot)
- [toggleColumnPicked](api-reference-old/api-reference-6x/ui-package/classes/columnsbar-class#togglecolumnpicked)

### [Protected Methods](api-reference-old/api-reference-6x/ui-package/classes/columnsbar-class#protected-methods-1)
- [destroyCore](api-reference-old/api-reference-6x/ui-package/classes/columnsbar-class#destroycore)
- [getQuery](api-reference-old/api-reference-6x/ui-package/classes/columnsbar-class#getquery)
- [onProcessEndCore](api-reference-old/api-reference-6x/ui-package/classes/columnsbar-class#onprocessendcore)
- [onProcessStartCore](api-reference-old/api-reference-6x/ui-package/classes/columnsbar-class#onprocessstartcore)
- [refreshCore](api-reference-old/api-reference-6x/ui-package/classes/columnsbar-class#refreshcore)


## Constructors

---
#### constructor

⊕ new ColumnsBar(slot: `HTMLElement`): [ColumnsBar](api-reference-old/api-reference-6x/ui-package/classes/columnsbar-class)

#### Parameters:
- slot: `HTMLElement`


---

## Public Properties

---
### moveMenu

● moveMenu: [PopupMenu](api-reference-old/api-reference-6x/ui-package/classes/popupmenu-class)

---
### sortMenu

● sortMenu: [PopupMenu](api-reference-old/api-reference-6x/ui-package/classes/popupmenu-class)

---
### widgetType

● widgetType: `string`

---
## Protected Properties

---
### context

● context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)

---
### group

● group: [WidgetGroup](api-reference-old/api-reference-6x/core-package/enumerations/widgetgroup-enum)

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
▸ addColumn(column: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class) | [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)[],index?: `number`): `void`

#### Parameters:
- column: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class) | [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)[]
- index: `number`, *Optional* 


**Returns** `void`


---
### addNewColumn
▸ addNewColumn(attrId: `string`,index?: `number`): [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)

#### Parameters:
- attrId: `string`
- index: `number`, *Optional* 


**Returns** [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)

▸ addNewColumn(attrId: `string`[],index?: `number`): [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)[]

#### Parameters:
- attrId: `string`[]
- index: `number`, *Optional* 


**Returns** [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)[]


---
### areCustomExpressionsAllowed
▸ areCustomExpressionsAllowed(): `boolean`


**Returns** `boolean`


---
### belongsToGroup
Returns `true` if the widget belongs to one of the groups specified in the parameter

▸ belongsToGroup(groups?: [WidgetGroup](api-reference-old/api-reference-6x/core-package/enumerations/widgetgroup-enum)): `boolean`

#### Parameters:
- groups: [WidgetGroup](api-reference-old/api-reference-6x/core-package/enumerations/widgetgroup-enum), *Optional*  - 



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

▸ getContext(): [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)


**Returns** [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)


---
### hideLandingSlot
▸ hideLandingSlot(): `void`


**Returns** `void`


---
### init
▸ init(context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class),options?: [ColumnsBarOptions](api-reference-old/api-reference-6x/ui-package/interfaces/columnsbaroptions-interface)): `void`

#### Parameters:
- context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)
- options: [ColumnsBarOptions](api-reference-old/api-reference-6x/ui-package/interfaces/columnsbaroptions-interface), *Optional* 


**Returns** `void`


---
### moveColumn
▸ moveColumn(column: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class),direction: `string`): `void`

#### Parameters:
- column: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)
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
▸ toggleColumnPicked(column: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)): `void`

#### Parameters:
- column: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)


**Returns** `void`


---
## Protected Methods

---
### destroyCore
▸ destroyCore(): `void`


**Returns** `void`


---
### getQuery
▸ getQuery(): [Query](api-reference-old/api-reference-6x/core-package/classes/query-class)


**Returns** [Query](api-reference-old/api-reference-6x/core-package/classes/query-class)


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
