---
title: Grid class
slug: api-reference-old/api-reference-5-x/ui-package/classes/grid-class
sidebar:
  order: 100
---

Base class for GRID.

## Extends
[Widget](api-reference-old/api-reference-5-x/core-package/classes/widget-class)

## Index
### [Constructors](api-reference-old/api-reference-5-x/ui-package/classes/grid-class#constructors-1)
- [constructor](api-reference-old/api-reference-5-x/ui-package/classes/grid-class#constructor)

### [Public Properties](api-reference-old/api-reference-5-x/ui-package/classes/grid-class#public-properties-1)
- [widgetType](api-reference-old/api-reference-5-x/ui-package/classes/grid-class#widgettype)

### [Protected Properties](api-reference-old/api-reference-5-x/ui-package/classes/grid-class#protected-properties-1)
- [beforeTableRendering](api-reference-old/api-reference-5-x/ui-package/classes/grid-class#beforetablerendering)
- [context](api-reference-old/api-reference-5-x/ui-package/classes/grid-class#context)
- [formatColumnHeader](api-reference-old/api-reference-5-x/ui-package/classes/grid-class#formatcolumnheader)
- [formatGridCell](api-reference-old/api-reference-5-x/ui-package/classes/grid-class#formatgridcell)
- [group](api-reference-old/api-reference-5-x/ui-package/classes/grid-class#group)
- [maxButtonCount](api-reference-old/api-reference-5-x/ui-package/classes/grid-class#maxbuttoncount)
- [pageItemCssClass](api-reference-old/api-reference-5-x/ui-package/classes/grid-class#pageitemcssclass)
- [slot](api-reference-old/api-reference-5-x/ui-package/classes/grid-class#slot)
- [tableClass](api-reference-old/api-reference-5-x/ui-package/classes/grid-class#tableclass)

### [Public Methods](api-reference-old/api-reference-5-x/ui-package/classes/grid-class#public-methods-1)
- [belongsToGroup](api-reference-old/api-reference-5-x/ui-package/classes/grid-class#belongstogroup)
- [getContext](api-reference-old/api-reference-5-x/ui-package/classes/grid-class#getcontext)
- [init](api-reference-old/api-reference-5-x/ui-package/classes/grid-class#init)
- [onProcessEnd](api-reference-old/api-reference-5-x/ui-package/classes/grid-class#onprocessend)
- [onProcessStart](api-reference-old/api-reference-5-x/ui-package/classes/grid-class#onprocessstart)
- [refresh](api-reference-old/api-reference-5-x/ui-package/classes/grid-class#refresh)

### [Protected Methods](api-reference-old/api-reference-5-x/ui-package/classes/grid-class#protected-methods-1)
- [clear](api-reference-old/api-reference-5-x/ui-package/classes/grid-class#clear)
- [onProcessEndCore](api-reference-old/api-reference-5-x/ui-package/classes/grid-class#onprocessendcore)
- [onProcessStartCore](api-reference-old/api-reference-5-x/ui-package/classes/grid-class#onprocessstartcore)
- [refreshCore](api-reference-old/api-reference-5-x/ui-package/classes/grid-class#refreshcore)
- [render](api-reference-old/api-reference-5-x/ui-package/classes/grid-class#render)
- [renderPageNavigator](api-reference-old/api-reference-5-x/ui-package/classes/grid-class#renderpagenavigator)


## Constructors

---
#### constructor

The default constructor.
⊕ new Grid(slot: `HTMLElement`): [Grid](api-reference-old/api-reference-5-x/ui-package/classes/grid-class)

#### Parameters:
- slot: `HTMLElement` - The html element.



---

## Public Properties

---
### widgetType

● widgetType: `string`

---
## Protected Properties

---
### beforeTableRendering

Function called before rendering

● beforeTableRendering: (dataTable: [EqDataTable](api-reference-old/api-reference-5-x/core-package/classes/eqdatatable-class)) => `void`

---
### context

● context: [EqContext](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class)

---
### formatColumnHeader

Function thart formats column header

● formatColumnHeader: (dataTable: [EqDataTable](api-reference-old/api-reference-5-x/core-package/classes/eqdatatable-class), index: `number`, colLabel: `string`) => `string`

---
### formatGridCell

Function thart formats cell

● formatGridCell: (dataTable: [EqDataTable](api-reference-old/api-reference-5-x/core-package/classes/eqdatatable-class), i: `number`, j: `number`, value: `string`) => `string`

---
### group

● group: [WidgetGroup](api-reference-old/api-reference-5-x/core-package/enumerations/widgetgroup-enum)

---
### maxButtonCount

Max count of buttons

● maxButtonCount?: `number`

---
### pageItemCssClass

pageItem css class

● pageItemCssClass: `string`

---
### slot

The html element.

● slot: `HTMLElement`

---
### tableClass

table class

● tableClass?: `string`

---
## Public Methods

---
### belongsToGroup
Returns `true` if the widget belongs to one of the groups specified in the parameter

▸ belongsToGroup(groups?: [WidgetGroup](api-reference-old/api-reference-5-x/core-package/enumerations/widgetgroup-enum)): `boolean`

#### Parameters:
- groups: [WidgetGroup](api-reference-old/api-reference-5-x/core-package/enumerations/widgetgroup-enum), *Optional*  - 



**Returns** `boolean`

---
### getContext
Returns current context (the one this widget belongs to)

▸ getContext(): [EqContext](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class)


**Returns** [EqContext](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class)

---
### init
Initialize widget.

▸ init(context: [EqContext](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class),options?: [GridOptions](api-reference-old/api-reference-5-x/ui-package/interfaces/gridoptions-interface)): `void`

#### Parameters:
- context: [EqContext](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class) - The context.
- options: [GridOptions](api-reference-old/api-reference-5-x/ui-package/interfaces/gridoptions-interface), *Optional*  - The options.



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
### clear
Clears GRID.

▸ clear(): `void`


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
Refresh widget implementation

▸ refreshCore(): `void`


**Returns** `void`

---
### render
Renders widget

▸ render(): `void`


**Returns** `void`

---
### renderPageNavigator
Renders page navidator

▸ renderPageNavigator(): `void`


**Returns** `void`

---
