---
title: ColumnsBar class
slug: api-reference-7x/easyquery-packages/ui-package/classes/columnsbar-class
sidebar:
  order: 100
---

## Extends
[Widget](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/widget-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnsbar-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnsbar-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnsbar-class/#public-properties-1)
- [id](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnsbar-class/#id)
- [moveMenu](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnsbar-class/#movemenu)
- [sortMenu](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnsbar-class/#sortmenu)

### [Protected Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnsbar-class/#protected-properties-1)
- [context](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnsbar-class/#context)
- [group](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnsbar-class/#group)
- [slot](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnsbar-class/#slot)

### [Protected Accessors](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnsbar-class/#protected-accessors-1)
- [cssPrefix](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnsbar-class/#cssprefix)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnsbar-class/#public-methods-1)
- [addColumn](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnsbar-class/#addcolumn)
- [addNewColumn](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnsbar-class/#addnewcolumn)
- [areCustomExpressionsAllowed](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnsbar-class/#arecustomexpressionsallowed)
- [belongsToGroup](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnsbar-class/#belongstogroup)
- [destroy](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnsbar-class/#destroy)
- [getColumnsBlock](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnsbar-class/#getcolumnsblock)
- [getContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnsbar-class/#getcontext)
- [getQuery](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnsbar-class/#getquery)
- [getWidgetType](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnsbar-class/#getwidgettype)
- [hideLandingSlot](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnsbar-class/#hidelandingslot)
- [init](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnsbar-class/#init)
- [moveColumn](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnsbar-class/#movecolumn)
- [onProcessEnd](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnsbar-class/#onprocessend)
- [onProcessStart](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnsbar-class/#onprocessstart)
- [refresh](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnsbar-class/#refresh)
- [showEntitiesMenu](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnsbar-class/#showentitiesmenu)
- [showLandingSlot](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnsbar-class/#showlandingslot)
- [toggleColumnPicked](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnsbar-class/#togglecolumnpicked)

### [Protected Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnsbar-class/#protected-methods-1)
- [destroyCore](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnsbar-class/#destroycore)
- [onProcessEndCore](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnsbar-class/#onprocessendcore)
- [onProcessStartCore](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnsbar-class/#onprocessstartcore)
- [refreshCore](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnsbar-class/#refreshcore)


## Constructors

---
#### constructor

⊕ new ColumnsBar(slot: `HTMLElement`,customQuery?: [Query](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/query-class)): [ColumnsBar](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnsbar-class)

#### Parameters:
- slot: `HTMLElement`
- customQuery: [Query](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/query-class), *Optional* 


---

## Public Properties

---
### id

● id: `string`

---
### moveMenu

● moveMenu: [PopupMenu](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/popupmenu-class)

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
▸ addColumn(column: [QueryColumn](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class) | [QueryColumn](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class)[],index?: `number`): `void`

#### Parameters:
- column: [QueryColumn](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class) | [QueryColumn](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class)[]
- index: `number`, *Optional* 


**Returns** `void`


---
### addNewColumn
▸ addNewColumn(attrId: `string`,index?: `number`): [QueryColumn](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class)

#### Parameters:
- attrId: `string`
- index: `number`, *Optional* 


**Returns** [QueryColumn](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class)

▸ addNewColumn(attrId: `string`[],index?: `number`): [QueryColumn](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class)[]

#### Parameters:
- attrId: `string`[]
- index: `number`, *Optional* 


**Returns** [QueryColumn](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class)[]


---
### areCustomExpressionsAllowed
▸ areCustomExpressionsAllowed(): `boolean`


**Returns** `boolean`


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
### getColumnsBlock
▸ getColumnsBlock(): `HTMLElement`


**Returns** `HTMLElement`


---
### getContext
Returns current context (the one this widget belongs to)

▸ getContext(): [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)


**Returns** [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)


---
### getQuery
▸ getQuery(): [Query](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/query-class)


**Returns** [Query](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/query-class)


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
▸ init(context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class),options?: [ColumnsBarOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/columnsbaroptions-interface)): `void`

#### Parameters:
- context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)
- options: [ColumnsBarOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/columnsbaroptions-interface), *Optional* 


**Returns** `void`


---
### moveColumn
▸ moveColumn(column: [QueryColumn](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class),direction: `string`): `void`

#### Parameters:
- column: [QueryColumn](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class)
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
▸ toggleColumnPicked(column: [QueryColumn](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class)): `void`

#### Parameters:
- column: [QueryColumn](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class)


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
