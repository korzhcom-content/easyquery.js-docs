---
title: Grid class
slug: api-reference-old/api-reference-6x/ui-package/classes/grid-class
sidebar:
  order: 100
---

Base class for GRID.

## Extends
[Widget](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/widget-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/grid-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/grid-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/grid-class/#public-properties-1)
- [widgetType](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/grid-class/#widgettype)

### [Protected Properties](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/grid-class/#protected-properties-1)
- [context](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/grid-class/#context)
- [group](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/grid-class/#group)
- [slot](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/grid-class/#slot)

### [Public Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/grid-class/#public-methods-1)
- [belongsToGroup](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/grid-class/#belongstogroup)
- [destroy](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/grid-class/#destroy)
- [getContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/grid-class/#getcontext)
- [init](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/grid-class/#init)
- [onProcessEnd](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/grid-class/#onprocessend)
- [onProcessStart](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/grid-class/#onprocessstart)
- [refresh](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/grid-class/#refresh)

### [Protected Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/grid-class/#protected-methods-1)
- [applyDisplayFormats](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/grid-class/#applydisplayformats)
- [clear](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/grid-class/#clear)
- [destroyCore](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/grid-class/#destroycore)
- [onProcessEndCore](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/grid-class/#onprocessendcore)
- [onProcessStartCore](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/grid-class/#onprocessstartcore)
- [refreshCore](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/grid-class/#refreshcore)
- [render](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/grid-class/#render)
- [renderPageNavigator](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/grid-class/#renderpagenavigator)


## Constructors

---
#### constructor

The default constructor.
⊕ new Grid(slot: `HTMLElement`): [Grid](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/grid-class)

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

● context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)

---
### group

● group: [WidgetGroup](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/enumerations/widgetgroup-enum)

---
### slot

The html element.

● slot: `HTMLElement`

---
## Public Methods

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
### getContext
Returns current context (the one this widget belongs to)

▸ getContext(): [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)


**Returns** [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)

---
### init
Initialize widget.

▸ init(context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class),options?: [GridOptions](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/gridoptions-interface)): `void`

#### Parameters:
- context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class) - The context.
- options: [GridOptions](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/gridoptions-interface), *Optional*  - The options.



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
