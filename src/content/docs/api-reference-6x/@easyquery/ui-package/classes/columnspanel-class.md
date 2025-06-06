---
title: ColumnsPanel class
slug: api-reference-6x/@easyquery/ui-package/classes/columnspanel-class
sidebar:
  order: 100
---

## Extends
[Widget](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/widget-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnspanel-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnspanel-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnspanel-class/#public-properties-1)
- [moveMenu](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnspanel-class/#movemenu)
- [sortMenu](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnspanel-class/#sortmenu)
- [widgetType](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnspanel-class/#widgettype)

### [Protected Properties](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnspanel-class/#protected-properties-1)
- [context](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnspanel-class/#context)
- [group](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnspanel-class/#group)
- [slot](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnspanel-class/#slot)

### [Protected Accessors](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnspanel-class/#protected-accessors-1)
- [cssPrefix](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnspanel-class/#cssprefix)

### [Public Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnspanel-class/#public-methods-1)
- [addColumn](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnspanel-class/#addcolumn)
- [addNewColumn](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnspanel-class/#addnewcolumn)
- [areCustomExpressionsAllowed](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnspanel-class/#arecustomexpressionsallowed)
- [belongsToGroup](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnspanel-class/#belongstogroup)
- [destroy](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnspanel-class/#destroy)
- [getColumnsBlock](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnspanel-class/#getcolumnsblock)
- [getContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnspanel-class/#getcontext)
- [init](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnspanel-class/#init)
- [moveColumn](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnspanel-class/#movecolumn)
- [onProcessEnd](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnspanel-class/#onprocessend)
- [onProcessStart](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnspanel-class/#onprocessstart)
- [refresh](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnspanel-class/#refresh)
- [showEntitiesMenu](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnspanel-class/#showentitiesmenu)
- [toggleColumnPicked](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnspanel-class/#togglecolumnpicked)

### [Protected Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnspanel-class/#protected-methods-1)
- [destroyCore](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnspanel-class/#destroycore)
- [onProcessEndCore](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnspanel-class/#onprocessendcore)
- [onProcessStartCore](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnspanel-class/#onprocessstartcore)
- [refreshCore](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnspanel-class/#refreshcore)
- [renderBaseElements](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnspanel-class/#renderbaseelements)


## Constructors

---
#### constructor

⊕ new ColumnsPanel(slot: `HTMLElement`): [ColumnsPanel](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnspanel-class)

#### Parameters:
- slot: `HTMLElement`


---

## Public Properties

---
### moveMenu

● moveMenu: [PopupMenu](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/popupmenu-class)

---
### sortMenu

● sortMenu: [PopupMenu](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/popupmenu-class)

---
### widgetType

● widgetType: `string`

---
## Protected Properties

---
### context

● context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)

---
### group

● group: [WidgetGroup](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/enumerations/widgetgroup-enum)

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
▸ addColumn(column: [Column](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/column-class) | [Column](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/column-class)[],index?: `number`): `void`

#### Parameters:
- column: [Column](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/column-class) | [Column](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/column-class)[]
- index: `number`, *Optional* 


**Returns** `void`


---
### addNewColumn
▸ addNewColumn(attrId: `string`,index?: `number`): [Column](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/column-class)

#### Parameters:
- attrId: `string`
- index: `number`, *Optional* 


**Returns** [Column](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/column-class)

▸ addNewColumn(attrId: `string`[],index?: `number`): [Column](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/column-class)[]

#### Parameters:
- attrId: `string`[]
- index: `number`, *Optional* 


**Returns** [Column](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/column-class)[]


---
### areCustomExpressionsAllowed
▸ areCustomExpressionsAllowed(): `boolean`


**Returns** `boolean`


---
### belongsToGroup
Returns `true` if the widget belongs to one of the groups specified in the parameter

▸ belongsToGroup(groups?: [WidgetGroup](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/enumerations/widgetgroup-enum)): `boolean`

#### Parameters:
- groups: [WidgetGroup](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/enumerations/widgetgroup-enum), *Optional*  - 



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

▸ getContext(): [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)


**Returns** [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)


---
### init
▸ init(context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class),options?: [ColumnsPanelOptions](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/columnspaneloptions-interface)): `void`

#### Parameters:
- context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)
- options: [ColumnsPanelOptions](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/columnspaneloptions-interface), *Optional* 


**Returns** `void`


---
### moveColumn
▸ moveColumn(column: [Column](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/column-class),direction: `string`): `void`

#### Parameters:
- column: [Column](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/column-class)
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
▸ toggleColumnPicked(column: [Column](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/column-class)): `void`

#### Parameters:
- column: [Column](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/column-class)


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
