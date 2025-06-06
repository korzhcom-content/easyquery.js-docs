---
title: EqHtmlGrid class
slug: api-reference-7x/@easyquery/ui-package/classes/eqhtmlgrid-class
sidebar:
  order: 100
---

The widget responsed for rendering html grid.

## Extends
[HtmlContentWidget](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/htmlcontentwidget-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/eqhtmlgrid-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/eqhtmlgrid-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/eqhtmlgrid-class/#public-properties-1)
- [id](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/eqhtmlgrid-class/#id)

### [Protected Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/eqhtmlgrid-class/#protected-properties-1)
- [contentElement](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/eqhtmlgrid-class/#contentelement)
- [context](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/eqhtmlgrid-class/#context)
- [group](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/eqhtmlgrid-class/#group)
- [pageItemCssClass](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/eqhtmlgrid-class/#pageitemcssclass)
- [slot](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/eqhtmlgrid-class/#slot)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/eqhtmlgrid-class/#public-methods-1)
- [belongsToGroup](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/eqhtmlgrid-class/#belongstogroup)
- [destroy](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/eqhtmlgrid-class/#destroy)
- [getContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/eqhtmlgrid-class/#getcontext)
- [getWidgetType](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/eqhtmlgrid-class/#getwidgettype)
- [init](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/eqhtmlgrid-class/#init)
- [onProcessEnd](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/eqhtmlgrid-class/#onprocessend)
- [onProcessStart](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/eqhtmlgrid-class/#onprocessstart)
- [refresh](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/eqhtmlgrid-class/#refresh)

### [Protected Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/eqhtmlgrid-class/#protected-methods-1)
- [clear](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/eqhtmlgrid-class/#clear)
- [destroyCore](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/eqhtmlgrid-class/#destroycore)
- [onProcessEndCore](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/eqhtmlgrid-class/#onprocessendcore)
- [onProcessStartCore](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/eqhtmlgrid-class/#onprocessstartcore)
- [refreshCore](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/eqhtmlgrid-class/#refreshcore)
- [render](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/eqhtmlgrid-class/#render)
- [renderPageNavigator](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/eqhtmlgrid-class/#renderpagenavigator)


## Constructors

---
#### constructor

The default constructor.
⊕ new EqHtmlGrid(slot: `HTMLElement`): [EqHtmlGrid](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/eqhtmlgrid-class)

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

● context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)

---
### group

● group: [WidgetGroup](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/enumerations/widgetgroup-enum)

---
### pageItemCssClass

pageTtem css class

● pageItemCssClass: `string`

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
Initialize widget.

▸ init(context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class),options?: `any`): `void`

#### Parameters:
- context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class) - The context.
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
### renderPageNavigator
Renders page navigator.

▸ renderPageNavigator(): `void`


**Returns** `void`


---
