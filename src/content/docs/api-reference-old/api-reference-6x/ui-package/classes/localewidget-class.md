---
title: LocaleWidget class
slug: api-reference-old/api-reference-6x/ui-package/classes/localewidget-class
sidebar:
  order: 100
---

## Extends
[Widget](api-reference-old/api-reference-6x/core-package/classes/widget-class)

## Index
### [Constructors](api-reference-old/api-reference-6x/ui-package/classes/localewidget-class#constructors-1)
- [constructor](api-reference-old/api-reference-6x/ui-package/classes/localewidget-class#constructor)

### [Public Properties](api-reference-old/api-reference-6x/ui-package/classes/localewidget-class#public-properties-1)
- [widgetType](api-reference-old/api-reference-6x/ui-package/classes/localewidget-class#widgettype)

### [Protected Properties](api-reference-old/api-reference-6x/ui-package/classes/localewidget-class#protected-properties-1)
- [context](api-reference-old/api-reference-6x/ui-package/classes/localewidget-class#context)
- [group](api-reference-old/api-reference-6x/ui-package/classes/localewidget-class#group)
- [slot](api-reference-old/api-reference-6x/ui-package/classes/localewidget-class#slot)

### [Public Methods](api-reference-old/api-reference-6x/ui-package/classes/localewidget-class#public-methods-1)
- [belongsToGroup](api-reference-old/api-reference-6x/ui-package/classes/localewidget-class#belongstogroup)
- [destroy](api-reference-old/api-reference-6x/ui-package/classes/localewidget-class#destroy)
- [getContext](api-reference-old/api-reference-6x/ui-package/classes/localewidget-class#getcontext)
- [init](api-reference-old/api-reference-6x/ui-package/classes/localewidget-class#init)
- [onProcessEnd](api-reference-old/api-reference-6x/ui-package/classes/localewidget-class#onprocessend)
- [onProcessStart](api-reference-old/api-reference-6x/ui-package/classes/localewidget-class#onprocessstart)
- [refresh](api-reference-old/api-reference-6x/ui-package/classes/localewidget-class#refresh)

### [Protected Methods](api-reference-old/api-reference-6x/ui-package/classes/localewidget-class#protected-methods-1)
- [destroyCore](api-reference-old/api-reference-6x/ui-package/classes/localewidget-class#destroycore)
- [onProcessEndCore](api-reference-old/api-reference-6x/ui-package/classes/localewidget-class#onprocessendcore)
- [onProcessStartCore](api-reference-old/api-reference-6x/ui-package/classes/localewidget-class#onprocessstartcore)
- [refreshCore](api-reference-old/api-reference-6x/ui-package/classes/localewidget-class#refreshcore)


## Constructors

---
#### constructor

The default constructor.
⊕ new LocaleWidget(slot: `HTMLElement`): [LocaleWidget](api-reference-old/api-reference-6x/ui-package/classes/localewidget-class)

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
Initializes the widget and assign it to some context

▸ init(context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class),options?: `any`): `void`

#### Parameters:
- context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)
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
