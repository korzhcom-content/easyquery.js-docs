---
title: ColumnsPanel class
slug: api-reference-7x/easyquery-packages/ui-package/classes/columnspanel-class
sidebar:
  order: 100
---

## Extends
[Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class)

## Index
### [Constructors](api-reference-7x/easyquery-packages/ui-package/classes/columnspanel-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/ui-package/classes/columnspanel-class#constructor)

### [Public Properties](api-reference-7x/easyquery-packages/ui-package/classes/columnspanel-class#public-properties-1)
- [id](api-reference-7x/easyquery-packages/ui-package/classes/columnspanel-class#id)
- [moveMenu](api-reference-7x/easyquery-packages/ui-package/classes/columnspanel-class#movemenu)
- [sortMenu](api-reference-7x/easyquery-packages/ui-package/classes/columnspanel-class#sortmenu)

### [Protected Properties](api-reference-7x/easyquery-packages/ui-package/classes/columnspanel-class#protected-properties-1)
- [context](api-reference-7x/easyquery-packages/ui-package/classes/columnspanel-class#context)
- [group](api-reference-7x/easyquery-packages/ui-package/classes/columnspanel-class#group)
- [slot](api-reference-7x/easyquery-packages/ui-package/classes/columnspanel-class#slot)

### [Protected Accessors](api-reference-7x/easyquery-packages/ui-package/classes/columnspanel-class#protected-accessors-1)
- [cssPrefix](api-reference-7x/easyquery-packages/ui-package/classes/columnspanel-class#cssprefix)

### [Public Methods](api-reference-7x/easyquery-packages/ui-package/classes/columnspanel-class#public-methods-1)
- [addColumn](api-reference-7x/easyquery-packages/ui-package/classes/columnspanel-class#addcolumn)
- [addNewColumn](api-reference-7x/easyquery-packages/ui-package/classes/columnspanel-class#addnewcolumn)
- [areCustomExpressionsAllowed](api-reference-7x/easyquery-packages/ui-package/classes/columnspanel-class#arecustomexpressionsallowed)
- [belongsToGroup](api-reference-7x/easyquery-packages/ui-package/classes/columnspanel-class#belongstogroup)
- [destroy](api-reference-7x/easyquery-packages/ui-package/classes/columnspanel-class#destroy)
- [getColumnsBlock](api-reference-7x/easyquery-packages/ui-package/classes/columnspanel-class#getcolumnsblock)
- [getContext](api-reference-7x/easyquery-packages/ui-package/classes/columnspanel-class#getcontext)
- [getMoveMenuList](api-reference-7x/easyquery-packages/ui-package/classes/columnspanel-class#getmovemenulist)
- [getSortMenuList](api-reference-7x/easyquery-packages/ui-package/classes/columnspanel-class#getsortmenulist)
- [getWidgetType](api-reference-7x/easyquery-packages/ui-package/classes/columnspanel-class#getwidgettype)
- [init](api-reference-7x/easyquery-packages/ui-package/classes/columnspanel-class#init)
- [moveColumn](api-reference-7x/easyquery-packages/ui-package/classes/columnspanel-class#movecolumn)
- [onProcessEnd](api-reference-7x/easyquery-packages/ui-package/classes/columnspanel-class#onprocessend)
- [onProcessStart](api-reference-7x/easyquery-packages/ui-package/classes/columnspanel-class#onprocessstart)
- [refresh](api-reference-7x/easyquery-packages/ui-package/classes/columnspanel-class#refresh)
- [showEntitiesMenu](api-reference-7x/easyquery-packages/ui-package/classes/columnspanel-class#showentitiesmenu)
- [toggleColumnPicked](api-reference-7x/easyquery-packages/ui-package/classes/columnspanel-class#togglecolumnpicked)

### [Protected Methods](api-reference-7x/easyquery-packages/ui-package/classes/columnspanel-class#protected-methods-1)
- [destroyCore](api-reference-7x/easyquery-packages/ui-package/classes/columnspanel-class#destroycore)
- [onProcessEndCore](api-reference-7x/easyquery-packages/ui-package/classes/columnspanel-class#onprocessendcore)
- [onProcessStartCore](api-reference-7x/easyquery-packages/ui-package/classes/columnspanel-class#onprocessstartcore)
- [refreshCore](api-reference-7x/easyquery-packages/ui-package/classes/columnspanel-class#refreshcore)
- [renderBaseElements](api-reference-7x/easyquery-packages/ui-package/classes/columnspanel-class#renderbaseelements)


## Constructors

---
#### constructor

⊕ new ColumnsPanel(slot: `HTMLElement`): [ColumnsPanel](api-reference-7x/easyquery-packages/ui-package/classes/columnspanel-class)

#### Parameters:
- slot: `HTMLElement`


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
### getMoveMenuList
▸ getMoveMenuList(): `any`[]


**Returns** `any`[]


---
### getSortMenuList
▸ getSortMenuList(): `any`[]


**Returns** `any`[]


---
### getWidgetType
▸ getWidgetType(): `string`


**Returns** `string`


---
### init
▸ init(context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class),options?: [ColumnsPanelOptions](api-reference-7x/easyquery-packages/ui-package/interfaces/columnspaneloptions-interface)): `void`

#### Parameters:
- context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)
- options: [ColumnsPanelOptions](api-reference-7x/easyquery-packages/ui-package/interfaces/columnspaneloptions-interface), *Optional* 


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
### renderBaseElements
▸ renderBaseElements(): `void`


**Returns** `void`


---
