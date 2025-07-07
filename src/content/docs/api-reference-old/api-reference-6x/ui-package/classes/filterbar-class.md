---
title: FilterBar class
slug: api-reference-old/api-reference-6x/ui-package/classes/filterbar-class
sidebar:
  order: 100
---

## Extends
[Widget](api-reference-old/api-reference-6x/core-package/classes/widget-class)

## Index
### [Constructors](api-reference-old/api-reference-6x/ui-package/classes/filterbar-class#constructors-1)
- [constructor](api-reference-old/api-reference-6x/ui-package/classes/filterbar-class#constructor)

### [Public Properties](api-reference-old/api-reference-6x/ui-package/classes/filterbar-class#public-properties-1)
- [widgetType](api-reference-old/api-reference-6x/ui-package/classes/filterbar-class#widgettype)

### [Protected Properties](api-reference-old/api-reference-6x/ui-package/classes/filterbar-class#protected-properties-1)
- [context](api-reference-old/api-reference-6x/ui-package/classes/filterbar-class#context)
- [group](api-reference-old/api-reference-6x/ui-package/classes/filterbar-class#group)
- [slot](api-reference-old/api-reference-6x/ui-package/classes/filterbar-class#slot)

### [Public Methods](api-reference-old/api-reference-6x/ui-package/classes/filterbar-class#public-methods-1)
- [applyFilter](api-reference-old/api-reference-6x/ui-package/classes/filterbar-class#applyfilter)
- [belongsToGroup](api-reference-old/api-reference-6x/ui-package/classes/filterbar-class#belongstogroup)
- [clearFilter](api-reference-old/api-reference-6x/ui-package/classes/filterbar-class#clearfilter)
- [destroy](api-reference-old/api-reference-6x/ui-package/classes/filterbar-class#destroy)
- [getContext](api-reference-old/api-reference-6x/ui-package/classes/filterbar-class#getcontext)
- [init](api-reference-old/api-reference-6x/ui-package/classes/filterbar-class#init)
- [onProcessEnd](api-reference-old/api-reference-6x/ui-package/classes/filterbar-class#onprocessend)
- [onProcessStart](api-reference-old/api-reference-6x/ui-package/classes/filterbar-class#onprocessstart)
- [refresh](api-reference-old/api-reference-6x/ui-package/classes/filterbar-class#refresh)
- [textResize](api-reference-old/api-reference-6x/ui-package/classes/filterbar-class#textresize)

### [Protected Methods](api-reference-old/api-reference-6x/ui-package/classes/filterbar-class#protected-methods-1)
- [destroyCore](api-reference-old/api-reference-6x/ui-package/classes/filterbar-class#destroycore)
- [onProcessEndCore](api-reference-old/api-reference-6x/ui-package/classes/filterbar-class#onprocessendcore)
- [onProcessStartCore](api-reference-old/api-reference-6x/ui-package/classes/filterbar-class#onprocessstartcore)
- [refreshCore](api-reference-old/api-reference-6x/ui-package/classes/filterbar-class#refreshcore)


## Constructors

---
#### constructor

⊕ new FilterBar(slot: `HTMLElement`): [FilterBar](api-reference-old/api-reference-6x/ui-package/classes/filterbar-class)

#### Parameters:
- slot: `HTMLElement`


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

● slot: `HTMLElement`

---
## Public Methods

---
### applyFilter
▸ applyFilter(): `void`


**Returns** `void`

---
### belongsToGroup
Returns `true` if the widget belongs to one of the groups specified in the parameter

▸ belongsToGroup(groups?: [WidgetGroup](api-reference-old/api-reference-6x/core-package/enumerations/widgetgroup-enum)): `boolean`

#### Parameters:
- groups: [WidgetGroup](api-reference-old/api-reference-6x/core-package/enumerations/widgetgroup-enum), *Optional*  - 



**Returns** `boolean`

---
### clearFilter
▸ clearFilter(): `void`


**Returns** `void`

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
▸ init(context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class),options?: [FilterBarOptions](api-reference-old/api-reference-6x/ui-package/interfaces/filterbaroptions-interface)): `void`

#### Parameters:
- context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)
- options: [FilterBarOptions](api-reference-old/api-reference-6x/ui-package/interfaces/filterbaroptions-interface), *Optional* 


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
### textResize
▸ textResize(): `void`


**Returns** `void`

---
## Protected Methods

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
▸ refreshCore(): `void`


**Returns** `void`

---
