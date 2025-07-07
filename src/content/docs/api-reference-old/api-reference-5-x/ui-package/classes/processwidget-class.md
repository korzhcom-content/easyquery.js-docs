---
title: ProcessWidget class
slug: api-reference-old/api-reference-5-x/ui-package/classes/processwidget-class
sidebar:
  order: 100
---

The widget responsed for rendering process bar.

## Extends
[Widget](api-reference-old/api-reference-5-x/core-package/classes/widget-class)

## Index
### [Constructors](api-reference-old/api-reference-5-x/ui-package/classes/processwidget-class#constructors-1)
- [constructor](api-reference-old/api-reference-5-x/ui-package/classes/processwidget-class#constructor)

### [Public Properties](api-reference-old/api-reference-5-x/ui-package/classes/processwidget-class#public-properties-1)
- [widgetType](api-reference-old/api-reference-5-x/ui-package/classes/processwidget-class#widgettype)

### [Protected Properties](api-reference-old/api-reference-5-x/ui-package/classes/processwidget-class#protected-properties-1)
- [context](api-reference-old/api-reference-5-x/ui-package/classes/processwidget-class#context)
- [group](api-reference-old/api-reference-5-x/ui-package/classes/processwidget-class#group)

### [Public Methods](api-reference-old/api-reference-5-x/ui-package/classes/processwidget-class#public-methods-1)
- [belongsToGroup](api-reference-old/api-reference-5-x/ui-package/classes/processwidget-class#belongstogroup)
- [getContext](api-reference-old/api-reference-5-x/ui-package/classes/processwidget-class#getcontext)
- [init](api-reference-old/api-reference-5-x/ui-package/classes/processwidget-class#init)
- [onProcessEnd](api-reference-old/api-reference-5-x/ui-package/classes/processwidget-class#onprocessend)
- [onProcessStart](api-reference-old/api-reference-5-x/ui-package/classes/processwidget-class#onprocessstart)
- [refresh](api-reference-old/api-reference-5-x/ui-package/classes/processwidget-class#refresh)

### [Protected Methods](api-reference-old/api-reference-5-x/ui-package/classes/processwidget-class#protected-methods-1)
- [onProcessEndCore](api-reference-old/api-reference-5-x/ui-package/classes/processwidget-class#onprocessendcore)
- [onProcessStartCore](api-reference-old/api-reference-5-x/ui-package/classes/processwidget-class#onprocessstartcore)
- [refreshCore](api-reference-old/api-reference-5-x/ui-package/classes/processwidget-class#refreshcore)


## Constructors

---
#### constructor

The default constructor.
⊕ new ProcessWidget(slot: `HTMLElement`): [ProcessWidget](api-reference-old/api-reference-5-x/ui-package/classes/processwidget-class)

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
### getContext
Returns current context (the one this widget belongs to)

▸ getContext(): [EqContext](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class)


**Returns** [EqContext](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class)

---
### init
Initializes the widget and assign it to some context

▸ init(context: [EqContext](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class),options?: `any`): `void`

#### Parameters:
- context: [EqContext](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class)
- options: `any`, *Optional*  - 



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
### onProcessEndCore
On process end implementation

▸ onProcessEndCore(): `void`


**Returns** `void`

---
### onProcessStartCore
On process start implementation

▸ onProcessStartCore(): `void`


**Returns** `void`

---
### refreshCore
This function is called from `refresh` function.
It does nothing in the base `Widget` class
but can be overridden in derived classes
to implement the functionality specific for a particular widget

▸ refreshCore(): `void`


**Returns** `void`

---
