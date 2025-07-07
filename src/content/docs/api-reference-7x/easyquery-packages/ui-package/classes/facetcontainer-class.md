---
title: FacetContainer class
slug: api-reference-7x/easyquery-packages/ui-package/classes/facetcontainer-class
sidebar:
  order: 100
---

## Extends
[Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class)

## Index
### [Constructors](api-reference-7x/easyquery-packages/ui-package/classes/facetcontainer-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/ui-package/classes/facetcontainer-class#constructor)

### [Public Properties](api-reference-7x/easyquery-packages/ui-package/classes/facetcontainer-class#public-properties-1)
- [id](api-reference-7x/easyquery-packages/ui-package/classes/facetcontainer-class#id)
- [options](api-reference-7x/easyquery-packages/ui-package/classes/facetcontainer-class#options)

### [Protected Properties](api-reference-7x/easyquery-packages/ui-package/classes/facetcontainer-class#protected-properties-1)
- [context](api-reference-7x/easyquery-packages/ui-package/classes/facetcontainer-class#context)
- [facets](api-reference-7x/easyquery-packages/ui-package/classes/facetcontainer-class#facets)
- [group](api-reference-7x/easyquery-packages/ui-package/classes/facetcontainer-class#group)
- [slot](api-reference-7x/easyquery-packages/ui-package/classes/facetcontainer-class#slot)

### [Public Methods](api-reference-7x/easyquery-packages/ui-package/classes/facetcontainer-class#public-methods-1)
- [belongsToGroup](api-reference-7x/easyquery-packages/ui-package/classes/facetcontainer-class#belongstogroup)
- [clear](api-reference-7x/easyquery-packages/ui-package/classes/facetcontainer-class#clear)
- [destroy](api-reference-7x/easyquery-packages/ui-package/classes/facetcontainer-class#destroy)
- [getContext](api-reference-7x/easyquery-packages/ui-package/classes/facetcontainer-class#getcontext)
- [getQuery](api-reference-7x/easyquery-packages/ui-package/classes/facetcontainer-class#getquery)
- [getWidgetType](api-reference-7x/easyquery-packages/ui-package/classes/facetcontainer-class#getwidgettype)
- [init](api-reference-7x/easyquery-packages/ui-package/classes/facetcontainer-class#init)
- [onProcessEnd](api-reference-7x/easyquery-packages/ui-package/classes/facetcontainer-class#onprocessend)
- [onProcessStart](api-reference-7x/easyquery-packages/ui-package/classes/facetcontainer-class#onprocessstart)
- [refresh](api-reference-7x/easyquery-packages/ui-package/classes/facetcontainer-class#refresh)

### [Protected Methods](api-reference-7x/easyquery-packages/ui-package/classes/facetcontainer-class#protected-methods-1)
- [createFacetTab](api-reference-7x/easyquery-packages/ui-package/classes/facetcontainer-class#createfacettab)
- [destroyCore](api-reference-7x/easyquery-packages/ui-package/classes/facetcontainer-class#destroycore)
- [onProcessEndCore](api-reference-7x/easyquery-packages/ui-package/classes/facetcontainer-class#onprocessendcore)
- [onProcessStartCore](api-reference-7x/easyquery-packages/ui-package/classes/facetcontainer-class#onprocessstartcore)
- [refreshCore](api-reference-7x/easyquery-packages/ui-package/classes/facetcontainer-class#refreshcore)


## Constructors

---
#### constructor

⊕ new FacetContainer(slot: `HTMLElement`): [FacetContainer](api-reference-7x/easyquery-packages/ui-package/classes/facetcontainer-class)

#### Parameters:
- slot: `HTMLElement`


---

## Public Properties

---
### id

● id: `string`

---
### options

● options: `any`

---
## Protected Properties

---
### context

● context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)

---
### facets

● facets: [ResultFacet](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class)[] = ` []`

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
### clear
▸ clear(): `any`


**Returns** `any`


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
### getQuery
▸ getQuery(): [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)


**Returns** [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)


---
### getWidgetType
▸ getWidgetType(): `string`


**Returns** `string`


---
### init
Initializes the widget and assign it to some context

▸ init(context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class),options?: `any`): `void`

#### Parameters:
- context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)
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
### createFacetTab
▸ createFacetTab(type: [FacetType](api-reference-7x/easyquery-packages/ui-package/enumerations/facettype-enum)): [ResultFacet](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class)

#### Parameters:
- type: [FacetType](api-reference-7x/easyquery-packages/ui-package/enumerations/facettype-enum)


**Returns** [ResultFacet](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class)


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
This function is called from `refresh` function.
It does nothing in the base `Widget` class
but can be overridden in derived classes
to implement the functionality specific for a particular widget

▸ refreshCore(): `void`


**Returns** `void`


---
