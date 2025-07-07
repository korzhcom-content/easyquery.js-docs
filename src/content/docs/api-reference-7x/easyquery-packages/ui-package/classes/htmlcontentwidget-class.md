---
title: HtmlContentWidget class
slug: api-reference-7x/easyquery-packages/ui-package/classes/htmlcontentwidget-class
sidebar:
  order: 100
---

The widget responsed for rendering html content

## Extends
[Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class)

## Index
### [Constructors](api-reference-7x/easyquery-packages/ui-package/classes/htmlcontentwidget-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/ui-package/classes/htmlcontentwidget-class#constructor)

### [Public Properties](api-reference-7x/easyquery-packages/ui-package/classes/htmlcontentwidget-class#public-properties-1)
- [id](api-reference-7x/easyquery-packages/ui-package/classes/htmlcontentwidget-class#id)

### [Protected Properties](api-reference-7x/easyquery-packages/ui-package/classes/htmlcontentwidget-class#protected-properties-1)
- [contentElement](api-reference-7x/easyquery-packages/ui-package/classes/htmlcontentwidget-class#contentelement)
- [context](api-reference-7x/easyquery-packages/ui-package/classes/htmlcontentwidget-class#context)
- [group](api-reference-7x/easyquery-packages/ui-package/classes/htmlcontentwidget-class#group)
- [slot](api-reference-7x/easyquery-packages/ui-package/classes/htmlcontentwidget-class#slot)

### [Public Methods](api-reference-7x/easyquery-packages/ui-package/classes/htmlcontentwidget-class#public-methods-1)
- [belongsToGroup](api-reference-7x/easyquery-packages/ui-package/classes/htmlcontentwidget-class#belongstogroup)
- [destroy](api-reference-7x/easyquery-packages/ui-package/classes/htmlcontentwidget-class#destroy)
- [getContext](api-reference-7x/easyquery-packages/ui-package/classes/htmlcontentwidget-class#getcontext)
- [getWidgetType](api-reference-7x/easyquery-packages/ui-package/classes/htmlcontentwidget-class#getwidgettype)
- [init](api-reference-7x/easyquery-packages/ui-package/classes/htmlcontentwidget-class#init)
- [onProcessEnd](api-reference-7x/easyquery-packages/ui-package/classes/htmlcontentwidget-class#onprocessend)
- [onProcessStart](api-reference-7x/easyquery-packages/ui-package/classes/htmlcontentwidget-class#onprocessstart)
- [refresh](api-reference-7x/easyquery-packages/ui-package/classes/htmlcontentwidget-class#refresh)

### [Protected Methods](api-reference-7x/easyquery-packages/ui-package/classes/htmlcontentwidget-class#protected-methods-1)
- [clear](api-reference-7x/easyquery-packages/ui-package/classes/htmlcontentwidget-class#clear)
- [destroyCore](api-reference-7x/easyquery-packages/ui-package/classes/htmlcontentwidget-class#destroycore)
- [onProcessEndCore](api-reference-7x/easyquery-packages/ui-package/classes/htmlcontentwidget-class#onprocessendcore)
- [onProcessStartCore](api-reference-7x/easyquery-packages/ui-package/classes/htmlcontentwidget-class#onprocessstartcore)
- [refreshCore](api-reference-7x/easyquery-packages/ui-package/classes/htmlcontentwidget-class#refreshcore)
- [render](api-reference-7x/easyquery-packages/ui-package/classes/htmlcontentwidget-class#render)


## Constructors

---
#### constructor

The default constructor.
⊕ new HtmlContentWidget(slot: `HTMLElement`): [HtmlContentWidget](api-reference-7x/easyquery-packages/ui-package/classes/htmlcontentwidget-class)

#### Parameters:
- slot: `HTMLElement` - The html element.



---

## Public Properties

---
### id

● id: `string`

---
## Protected Properties

---
### contentElement

The html element

● contentElement: `HTMLElement`

---
### context

● context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)

---
### group

● group: [WidgetGroup](api-reference-7x/easyquery-packages/core-package/enumerations/widgetgroup-enum)

---
### slot

● slot: `HTMLElement`

---
## Public Methods

---
### belongsToGroup
Returns `true` if the widget belongs to one of the groups specified in the parameter

▸ belongsToGroup(groups?: [WidgetGroup](api-reference-7x/easyquery-packages/core-package/enumerations/widgetgroup-enum)): `boolean`

#### Parameters:
- groups: [WidgetGroup](api-reference-7x/easyquery-packages/core-package/enumerations/widgetgroup-enum), *Optional*  - 



**Returns** `boolean`


---
### destroy
▸ destroy(): `void`


**Returns** `void`


---
### getContext
Returns current context (the one this widget belongs to)

▸ getContext(): [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)


**Returns** [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)


---
### getWidgetType
▸ getWidgetType(): `string`


**Returns** `string`


---
### init
Initialize widget.

▸ init(context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class),options?: `any`): `void`

#### Parameters:
- context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class) - The context.
- options: `any`, *Optional*  - The options.



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
Clears content.

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
