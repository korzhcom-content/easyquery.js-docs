---
title: ManageDrillDownWidget class
slug: api-reference-7x/@easyquery/ui-package/classes/managedrilldownwidget-class
sidebar:
  order: 100
---

## Extends
[Widget](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/widget-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/managedrilldownwidget-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/managedrilldownwidget-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/managedrilldownwidget-class/#public-properties-1)
- [id](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/managedrilldownwidget-class/#id)

### [Protected Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/managedrilldownwidget-class/#protected-properties-1)
- [context](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/managedrilldownwidget-class/#context)
- [cssPrefix](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/managedrilldownwidget-class/#cssprefix)
- [group](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/managedrilldownwidget-class/#group)
- [options](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/managedrilldownwidget-class/#options)
- [slot](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/managedrilldownwidget-class/#slot)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/managedrilldownwidget-class/#public-methods-1)
- [belongsToGroup](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/managedrilldownwidget-class/#belongstogroup)
- [destroy](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/managedrilldownwidget-class/#destroy)
- [getContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/managedrilldownwidget-class/#getcontext)
- [getWidgetType](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/managedrilldownwidget-class/#getwidgettype)
- [init](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/managedrilldownwidget-class/#init)
- [onProcessEnd](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/managedrilldownwidget-class/#onprocessend)
- [onProcessStart](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/managedrilldownwidget-class/#onprocessstart)
- [refresh](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/managedrilldownwidget-class/#refresh)

### [Protected Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/managedrilldownwidget-class/#protected-methods-1)
- [destroyCore](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/managedrilldownwidget-class/#destroycore)
- [destroyDialog](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/managedrilldownwidget-class/#destroydialog)
- [onProcessEndCore](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/managedrilldownwidget-class/#onprocessendcore)
- [onProcessStartCore](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/managedrilldownwidget-class/#onprocessstartcore)
- [openDialog](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/managedrilldownwidget-class/#opendialog)
- [refreshCore](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/managedrilldownwidget-class/#refreshcore)
- [renderColumnsBarBlock](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/managedrilldownwidget-class/#rendercolumnsbarblock)
- [renderQueryPanelBlock](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/managedrilldownwidget-class/#renderquerypanelblock)
- [submitDialog](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/managedrilldownwidget-class/#submitdialog)


## Constructors

---
#### constructor

⊕ new ManageDrillDownWidget(slot: `HTMLElement`): [ManageDrillDownWidget](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/managedrilldownwidget-class)

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
### cssPrefix

● cssPrefix: `string` = ` eqCssPrefix`

---
### group

● group: [WidgetGroup](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/enumerations/widgetgroup-enum)

---
### options

● options: `any`

---
### slot

● slot: `HTMLElement`

---
## Public Methods

---
### belongsToGroup
Returns `true` if the widget belongs to one of the groups specified in the parameter

▸ belongsToGroup(groups?: [WidgetGroup](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/enumerations/widgetgroup-enum)): `boolean`

#### Parameters:
- groups: [WidgetGroup](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/enumerations/widgetgroup-enum), *Optional*  - 



**Returns** `boolean`


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
▸ init(context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class),options: `any`): `void`

#### Parameters:
- context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)
- options: `any`


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
### destroyDialog
▸ destroyDialog(): `void`


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
### openDialog
▸ openDialog(): `void`


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
### renderColumnsBarBlock
▸ renderColumnsBarBlock(): `HTMLElement`


**Returns** `HTMLElement`


---
### renderQueryPanelBlock
▸ renderQueryPanelBlock(): `HTMLElement`


**Returns** `HTMLElement`


---
### submitDialog
▸ submitDialog(): `boolean`


**Returns** `boolean`


---
