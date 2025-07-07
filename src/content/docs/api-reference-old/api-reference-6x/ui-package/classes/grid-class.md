---
title: Grid class
slug: api-reference-old/api-reference-6x/ui-package/classes/grid-class
sidebar:
  order: 100
---

Base class for GRID.

## Extends
[Widget](api-reference-old/api-reference-6x/core-package/classes/widget-class)

## Index
### [Constructors](api-reference-old/api-reference-6x/ui-package/classes/grid-class#constructors-1)
- [constructor](api-reference-old/api-reference-6x/ui-package/classes/grid-class#constructor)

### [Public Properties](api-reference-old/api-reference-6x/ui-package/classes/grid-class#public-properties-1)
- [widgetType](api-reference-old/api-reference-6x/ui-package/classes/grid-class#widgettype)

### [Protected Properties](api-reference-old/api-reference-6x/ui-package/classes/grid-class#protected-properties-1)
- [context](api-reference-old/api-reference-6x/ui-package/classes/grid-class#context)
- [group](api-reference-old/api-reference-6x/ui-package/classes/grid-class#group)
- [slot](api-reference-old/api-reference-6x/ui-package/classes/grid-class#slot)

### [Public Methods](api-reference-old/api-reference-6x/ui-package/classes/grid-class#public-methods-1)
- [belongsToGroup](api-reference-old/api-reference-6x/ui-package/classes/grid-class#belongstogroup)
- [destroy](api-reference-old/api-reference-6x/ui-package/classes/grid-class#destroy)
- [getContext](api-reference-old/api-reference-6x/ui-package/classes/grid-class#getcontext)
- [init](api-reference-old/api-reference-6x/ui-package/classes/grid-class#init)
- [onProcessEnd](api-reference-old/api-reference-6x/ui-package/classes/grid-class#onprocessend)
- [onProcessStart](api-reference-old/api-reference-6x/ui-package/classes/grid-class#onprocessstart)
- [refresh](api-reference-old/api-reference-6x/ui-package/classes/grid-class#refresh)

### [Protected Methods](api-reference-old/api-reference-6x/ui-package/classes/grid-class#protected-methods-1)
- [applyDisplayFormats](api-reference-old/api-reference-6x/ui-package/classes/grid-class#applydisplayformats)
- [clear](api-reference-old/api-reference-6x/ui-package/classes/grid-class#clear)
- [destroyCore](api-reference-old/api-reference-6x/ui-package/classes/grid-class#destroycore)
- [onProcessEndCore](api-reference-old/api-reference-6x/ui-package/classes/grid-class#onprocessendcore)
- [onProcessStartCore](api-reference-old/api-reference-6x/ui-package/classes/grid-class#onprocessstartcore)
- [refreshCore](api-reference-old/api-reference-6x/ui-package/classes/grid-class#refreshcore)
- [render](api-reference-old/api-reference-6x/ui-package/classes/grid-class#render)
- [renderPageNavigator](api-reference-old/api-reference-6x/ui-package/classes/grid-class#renderpagenavigator)


## Constructors

---
#### constructor

The default constructor.
⊕ new Grid(slot: `HTMLElement`): [Grid](api-reference-old/api-reference-6x/ui-package/classes/grid-class)

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
### context

● context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)

---
### group

● group: [WidgetGroup](api-reference-old/api-reference-6x/core-package/enumerations/widgetgroup-enum)

---
### slot

The html element.

● slot: `HTMLElement`

---
## Public Methods

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
### getContext
Returns current context (the one this widget belongs to)

▸ getContext(): [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)


**Returns** [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)

---
### init
Initialize widget.

▸ init(context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class),options?: [GridOptions](api-reference-old/api-reference-6x/ui-package/interfaces/gridoptions-interface)): `void`

#### Parameters:
- context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class) - The context.
- options: [GridOptions](api-reference-old/api-reference-6x/ui-package/interfaces/gridoptions-interface), *Optional*  - The options.



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
### applyDisplayFormats
▸ applyDisplayFormats(): `void`


**Returns** `void`

---
### clear
Clears GRID.

▸ clear(): `void`


**Returns** `void`

---
### destroyCore
▸ destroyCore(): `void`


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
