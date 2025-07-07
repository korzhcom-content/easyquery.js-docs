---
title: EntitiesPanel class
slug: api-reference-old/api-reference-5-x/ui-package/classes/entitiespanel-class
sidebar:
  order: 100
---

The entities panel wiget, implemented without JQuery.
NOT finished yet.

## Extends
[Widget](api-reference-old/api-reference-5-x/core-package/classes/widget-class)

## Index
### [Constructors](api-reference-old/api-reference-5-x/ui-package/classes/entitiespanel-class#constructors-1)
- [constructor](api-reference-old/api-reference-5-x/ui-package/classes/entitiespanel-class#constructor)

### [Public Properties](api-reference-old/api-reference-5-x/ui-package/classes/entitiespanel-class#public-properties-1)
- [widgetType](api-reference-old/api-reference-5-x/ui-package/classes/entitiespanel-class#widgettype)

### [Protected Properties](api-reference-old/api-reference-5-x/ui-package/classes/entitiespanel-class#protected-properties-1)
- [context](api-reference-old/api-reference-5-x/ui-package/classes/entitiespanel-class#context)
- [group](api-reference-old/api-reference-5-x/ui-package/classes/entitiespanel-class#group)

### [Public Methods](api-reference-old/api-reference-5-x/ui-package/classes/entitiespanel-class#public-methods-1)
- [belongsToGroup](api-reference-old/api-reference-5-x/ui-package/classes/entitiespanel-class#belongstogroup)
- [finishLoading](api-reference-old/api-reference-5-x/ui-package/classes/entitiespanel-class#finishloading)
- [getContext](api-reference-old/api-reference-5-x/ui-package/classes/entitiespanel-class#getcontext)
- [init](api-reference-old/api-reference-5-x/ui-package/classes/entitiespanel-class#init)
- [onProcessEnd](api-reference-old/api-reference-5-x/ui-package/classes/entitiespanel-class#onprocessend)
- [onProcessStart](api-reference-old/api-reference-5-x/ui-package/classes/entitiespanel-class#onprocessstart)
- [refresh](api-reference-old/api-reference-5-x/ui-package/classes/entitiespanel-class#refresh)
- [startLoading](api-reference-old/api-reference-5-x/ui-package/classes/entitiespanel-class#startloading)

### [Protected Methods](api-reference-old/api-reference-5-x/ui-package/classes/entitiespanel-class#protected-methods-1)
- [onProcessEndCore](api-reference-old/api-reference-5-x/ui-package/classes/entitiespanel-class#onprocessendcore)
- [onProcessStartCore](api-reference-old/api-reference-5-x/ui-package/classes/entitiespanel-class#onprocessstartcore)
- [refreshCore](api-reference-old/api-reference-5-x/ui-package/classes/entitiespanel-class#refreshcore)


## Constructors

---
#### constructor

The default constructor.
⊕ new EntitiesPanel(slot: `HTMLElement`): [EntitiesPanel](api-reference-old/api-reference-5-x/ui-package/classes/entitiespanel-class)

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

● context: [EqContext](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class)

---
### group

● group: [WidgetGroup](api-reference-old/api-reference-5-x/core-package/enumerations/widgetgroup-enum)

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
### finishLoading
▸ finishLoading(): `void`


**Returns** `void`

---
### getContext
Returns current context (the one this widget belongs to)

▸ getContext(): [EqContext](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class)


**Returns** [EqContext](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class)

---
### init
Initialize widget.

▸ init(context: [EqContext](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class),options?: [EntitiesPanelOptions](api-reference-old/api-reference-5-x/ui-package/interfaces/entitiespaneloptions-interface)): `void`

#### Parameters:
- context: [EqContext](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class) - The context.
- options: [EntitiesPanelOptions](api-reference-old/api-reference-5-x/ui-package/interfaces/entitiespaneloptions-interface), *Optional*  - The options.



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
### startLoading
▸ startLoading(): `void`


**Returns** `void`

---
## Protected Methods

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
