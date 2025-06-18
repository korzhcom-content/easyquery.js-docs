---
title: JQueryQueryPanelWidget class
slug: >-
  api-reference-old/api-reference-5-x/ui-jquery-package/classes/jqueryquerypanelwidget-class
sidebar:
  order: 100
---

## Extends
[Widget](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/widget-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/jqueryquerypanelwidget-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/jqueryquerypanelwidget-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/jqueryquerypanelwidget-class/#public-properties-1)
- [widgetType](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/jqueryquerypanelwidget-class/#widgettype)

### [Protected Properties](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/jqueryquerypanelwidget-class/#protected-properties-1)
- [context](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/jqueryquerypanelwidget-class/#context)
- [group](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/jqueryquerypanelwidget-class/#group)

### [Public Methods](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/jqueryquerypanelwidget-class/#public-methods-1)
- [belongsToGroup](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/jqueryquerypanelwidget-class/#belongstogroup)
- [getContext](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/jqueryquerypanelwidget-class/#getcontext)
- [init](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/jqueryquerypanelwidget-class/#init)
- [onProcessEnd](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/jqueryquerypanelwidget-class/#onprocessend)
- [onProcessStart](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/jqueryquerypanelwidget-class/#onprocessstart)
- [refresh](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/jqueryquerypanelwidget-class/#refresh)

### [Protected Methods](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/jqueryquerypanelwidget-class/#protected-methods-1)
- [onProcessEndCore](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/jqueryquerypanelwidget-class/#onprocessendcore)
- [onProcessStartCore](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/jqueryquerypanelwidget-class/#onprocessstartcore)
- [refreshCore](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/jqueryquerypanelwidget-class/#refreshcore)


## Constructors

---
#### constructor

⊕ new JQueryQueryPanelWidget(slot: `HTMLElement`): [JQueryQueryPanelWidget](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/jqueryquerypanelwidget-class)

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

● context: [EqContext](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqcontext-class)

---
### group

● group: [WidgetGroup](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/enumerations/widgetgroup-enum)

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
▸ init(context: [EqContext](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqcontext-class),options?: [QueryPanelOptions](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/querypaneloptions-interface)): `void`

#### Parameters:
- context: [EqContext](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqcontext-class)
- options: [QueryPanelOptions](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/querypaneloptions-interface), *Optional* 


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
