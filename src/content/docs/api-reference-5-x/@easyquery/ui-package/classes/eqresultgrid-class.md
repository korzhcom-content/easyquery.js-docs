---
title: EqResultGrid class
slug: api-reference-5-x/@easyquery/ui-package/classes/eqresultgrid-class
sidebar:
  order: 100
---

The widget responsed for rendering GRID.

## Extends
[Grid](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/grid-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/eqresultgrid-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/eqresultgrid-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/eqresultgrid-class/#public-properties-1)
- [widgetType](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/eqresultgrid-class/#widgettype)

### [Protected Properties](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/eqresultgrid-class/#protected-properties-1)
- [beforeTableRendering](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/eqresultgrid-class/#beforetablerendering)
- [context](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/eqresultgrid-class/#context)
- [formatColumnHeader](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/eqresultgrid-class/#formatcolumnheader)
- [formatGridCell](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/eqresultgrid-class/#formatgridcell)
- [group](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/eqresultgrid-class/#group)
- [maxButtonCount](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/eqresultgrid-class/#maxbuttoncount)
- [pageItemCssClass](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/eqresultgrid-class/#pageitemcssclass)
- [slot](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/eqresultgrid-class/#slot)
- [tableClass](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/eqresultgrid-class/#tableclass)

### [Public Methods](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/eqresultgrid-class/#public-methods-1)
- [belongsToGroup](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/eqresultgrid-class/#belongstogroup)
- [getContext](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/eqresultgrid-class/#getcontext)
- [init](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/eqresultgrid-class/#init)
- [onProcessEnd](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/eqresultgrid-class/#onprocessend)
- [onProcessStart](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/eqresultgrid-class/#onprocessstart)
- [refresh](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/eqresultgrid-class/#refresh)

### [Protected Methods](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/eqresultgrid-class/#protected-methods-1)
- [clear](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/eqresultgrid-class/#clear)
- [onProcessEndCore](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/eqresultgrid-class/#onprocessendcore)
- [onProcessStartCore](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/eqresultgrid-class/#onprocessstartcore)
- [refreshCore](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/eqresultgrid-class/#refreshcore)
- [render](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/eqresultgrid-class/#render)
- [renderPageNavigator](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/eqresultgrid-class/#renderpagenavigator)


## Constructors

---
#### constructor

The default constructor.
⊕ new EqResultGrid(slot: `HTMLElement`): [EqResultGrid](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/eqresultgrid-class)

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

● beforeTableRendering: (dataTable: [EqDataTable](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqdatatable-class)) => `void`

---
### context

● context: [EqContext](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqcontext-class)

---
### formatColumnHeader

Function thart formats column header

● formatColumnHeader: (dataTable: [EqDataTable](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqdatatable-class), index: `number`, colLabel: `string`) => `string`

---
### formatGridCell

Function thart formats cell

● formatGridCell: (dataTable: [EqDataTable](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqdatatable-class), i: `number`, j: `number`, value: `string`) => `string`

---
### group

● group: [WidgetGroup](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/enumerations/widgetgroup-enum)

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

▸ belongsToGroup(groups?: [WidgetGroup](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/enumerations/widgetgroup-enum)): `boolean`

#### Parameters:
- groups: [WidgetGroup](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/enumerations/widgetgroup-enum), *Optional*  - 



**Returns** `boolean`

---
### getContext
Returns current context (the one this widget belongs to)

▸ getContext(): [EqContext](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqcontext-class)


**Returns** [EqContext](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqcontext-class)

---
### init
Initialize widget.

▸ init(context: [EqContext](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqcontext-class),options?: [GridOptions](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/gridoptions-interface)): `void`

#### Parameters:
- context: [EqContext](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqcontext-class) - The context.
- options: [GridOptions](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/gridoptions-interface), *Optional*  - The options.



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
