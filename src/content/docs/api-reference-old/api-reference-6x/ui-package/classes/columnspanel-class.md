---
title: ColumnsPanel class
slug: api-reference-old/api-reference-6x/ui-package/classes/columnspanel-class
sidebar:
  order: 100
---

## Extends
[Widget](api-reference-old/api-reference-6x/core-package/classes/widget-class)

## Index
### [Constructors](api-reference-old/api-reference-6x/ui-package/classes/columnspanel-class#constructors-1)
- [constructor](api-reference-old/api-reference-6x/ui-package/classes/columnspanel-class#constructor)

### [Public Properties](api-reference-old/api-reference-6x/ui-package/classes/columnspanel-class#public-properties-1)
- [moveMenu](api-reference-old/api-reference-6x/ui-package/classes/columnspanel-class#movemenu)
- [sortMenu](api-reference-old/api-reference-6x/ui-package/classes/columnspanel-class#sortmenu)
- [widgetType](api-reference-old/api-reference-6x/ui-package/classes/columnspanel-class#widgettype)

### [Protected Properties](api-reference-old/api-reference-6x/ui-package/classes/columnspanel-class#protected-properties-1)
- [context](api-reference-old/api-reference-6x/ui-package/classes/columnspanel-class#context)
- [group](api-reference-old/api-reference-6x/ui-package/classes/columnspanel-class#group)
- [slot](api-reference-old/api-reference-6x/ui-package/classes/columnspanel-class#slot)

### [Protected Accessors](api-reference-old/api-reference-6x/ui-package/classes/columnspanel-class#protected-accessors-1)
- [cssPrefix](api-reference-old/api-reference-6x/ui-package/classes/columnspanel-class#cssprefix)

### [Public Methods](api-reference-old/api-reference-6x/ui-package/classes/columnspanel-class#public-methods-1)
- [addColumn](api-reference-old/api-reference-6x/ui-package/classes/columnspanel-class#addcolumn)
- [addNewColumn](api-reference-old/api-reference-6x/ui-package/classes/columnspanel-class#addnewcolumn)
- [areCustomExpressionsAllowed](api-reference-old/api-reference-6x/ui-package/classes/columnspanel-class#arecustomexpressionsallowed)
- [belongsToGroup](api-reference-old/api-reference-6x/ui-package/classes/columnspanel-class#belongstogroup)
- [destroy](api-reference-old/api-reference-6x/ui-package/classes/columnspanel-class#destroy)
- [getColumnsBlock](api-reference-old/api-reference-6x/ui-package/classes/columnspanel-class#getcolumnsblock)
- [getContext](api-reference-old/api-reference-6x/ui-package/classes/columnspanel-class#getcontext)
- [init](api-reference-old/api-reference-6x/ui-package/classes/columnspanel-class#init)
- [moveColumn](api-reference-old/api-reference-6x/ui-package/classes/columnspanel-class#movecolumn)
- [onProcessEnd](api-reference-old/api-reference-6x/ui-package/classes/columnspanel-class#onprocessend)
- [onProcessStart](api-reference-old/api-reference-6x/ui-package/classes/columnspanel-class#onprocessstart)
- [refresh](api-reference-old/api-reference-6x/ui-package/classes/columnspanel-class#refresh)
- [showEntitiesMenu](api-reference-old/api-reference-6x/ui-package/classes/columnspanel-class#showentitiesmenu)
- [toggleColumnPicked](api-reference-old/api-reference-6x/ui-package/classes/columnspanel-class#togglecolumnpicked)

### [Protected Methods](api-reference-old/api-reference-6x/ui-package/classes/columnspanel-class#protected-methods-1)
- [destroyCore](api-reference-old/api-reference-6x/ui-package/classes/columnspanel-class#destroycore)
- [onProcessEndCore](api-reference-old/api-reference-6x/ui-package/classes/columnspanel-class#onprocessendcore)
- [onProcessStartCore](api-reference-old/api-reference-6x/ui-package/classes/columnspanel-class#onprocessstartcore)
- [refreshCore](api-reference-old/api-reference-6x/ui-package/classes/columnspanel-class#refreshcore)
- [renderBaseElements](api-reference-old/api-reference-6x/ui-package/classes/columnspanel-class#renderbaseelements)


## Constructors

---
#### constructor

⊕ new ColumnsPanel(slot: `HTMLElement`): [ColumnsPanel](api-reference-old/api-reference-6x/ui-package/classes/columnspanel-class)

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
### init
▸ init(context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class),options?: [ColumnsPanelOptions](api-reference-old/api-reference-6x/ui-package/interfaces/columnspaneloptions-interface)): `void`

#### Parameters:
- context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)
- options: [ColumnsPanelOptions](api-reference-old/api-reference-6x/ui-package/interfaces/columnspaneloptions-interface), *Optional* 


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
### renderBaseElements
▸ renderBaseElements(): `void`


**Returns** `void`


---
