---
title: FilterBar class
slug: api-reference-7x/@easyquery/ui-package/classes/filterbar-class
sidebar:
  order: 100
---

## Extends
[Widget](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/widget-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/filterbar-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/filterbar-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/filterbar-class/#public-properties-1)
- [id](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/filterbar-class/#id)

### [Protected Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/filterbar-class/#protected-properties-1)
- [context](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/filterbar-class/#context)
- [group](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/filterbar-class/#group)
- [slot](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/filterbar-class/#slot)

### [Protected Accessors](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/filterbar-class/#protected-accessors-1)
- [cssPrefix](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/filterbar-class/#cssprefix)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/filterbar-class/#public-methods-1)
- [applyFilter](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/filterbar-class/#applyfilter)
- [belongsToGroup](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/filterbar-class/#belongstogroup)
- [clearFilter](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/filterbar-class/#clearfilter)
- [destroy](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/filterbar-class/#destroy)
- [getContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/filterbar-class/#getcontext)
- [getWidgetType](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/filterbar-class/#getwidgettype)
- [init](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/filterbar-class/#init)
- [onProcessEnd](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/filterbar-class/#onprocessend)
- [onProcessStart](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/filterbar-class/#onprocessstart)
- [refresh](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/filterbar-class/#refresh)
- [textResize](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/filterbar-class/#textresize)

### [Protected Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/filterbar-class/#protected-methods-1)
- [destroyCore](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/filterbar-class/#destroycore)
- [onProcessEndCore](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/filterbar-class/#onprocessendcore)
- [onProcessStartCore](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/filterbar-class/#onprocessstartcore)
- [refreshCore](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/filterbar-class/#refreshcore)


## Constructors

---
#### constructor

⊕ new FilterBar(slot: `HTMLElement`): [FilterBar](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/filterbar-class)

#### Parameters:
- slot: `HTMLElement`


---

## Public Properties

---
### id

● id: `string`

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
### applyFilter
▸ applyFilter(): `void`


**Returns** `void`


---
### belongsToGroup
Returns `true` if the widget belongs to one of the groups specified in the parameter

▸ belongsToGroup(groups?: [WidgetGroup](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/enumerations/widgetgroup-enum)): `boolean`

#### Parameters:
- groups: [WidgetGroup](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/enumerations/widgetgroup-enum), *Optional*  - 



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

▸ getContext(): [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)


**Returns** [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)


---
### getWidgetType
▸ getWidgetType(): `string`


**Returns** `string`


---
### init
▸ init(context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class),options?: [FilterBarOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/filterbaroptions-interface)): `void`

#### Parameters:
- context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)
- options: [FilterBarOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/filterbaroptions-interface), *Optional* 


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
