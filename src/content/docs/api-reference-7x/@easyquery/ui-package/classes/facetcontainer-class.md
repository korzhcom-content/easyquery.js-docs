---
title: FacetContainer class
slug: api-reference-7x/@easyquery/ui-package/classes/facetcontainer-class
sidebar:
  order: 100
---

## Extends
[Widget](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/widget-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/facetcontainer-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/facetcontainer-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/facetcontainer-class/#public-properties-1)
- [id](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/facetcontainer-class/#id)
- [options](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/facetcontainer-class/#options)

### [Protected Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/facetcontainer-class/#protected-properties-1)
- [context](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/facetcontainer-class/#context)
- [facets](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/facetcontainer-class/#facets)
- [group](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/facetcontainer-class/#group)
- [slot](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/facetcontainer-class/#slot)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/facetcontainer-class/#public-methods-1)
- [belongsToGroup](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/facetcontainer-class/#belongstogroup)
- [clear](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/facetcontainer-class/#clear)
- [destroy](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/facetcontainer-class/#destroy)
- [getContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/facetcontainer-class/#getcontext)
- [getQuery](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/facetcontainer-class/#getquery)
- [getWidgetType](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/facetcontainer-class/#getwidgettype)
- [init](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/facetcontainer-class/#init)
- [onProcessEnd](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/facetcontainer-class/#onprocessend)
- [onProcessStart](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/facetcontainer-class/#onprocessstart)
- [refresh](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/facetcontainer-class/#refresh)

### [Protected Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/facetcontainer-class/#protected-methods-1)
- [createFacetTab](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/facetcontainer-class/#createfacettab)
- [destroyCore](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/facetcontainer-class/#destroycore)
- [onProcessEndCore](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/facetcontainer-class/#onprocessendcore)
- [onProcessStartCore](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/facetcontainer-class/#onprocessstartcore)
- [refreshCore](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/facetcontainer-class/#refreshcore)


## Constructors

---
#### constructor

⊕ new FacetContainer(slot: `HTMLElement`): [FacetContainer](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/facetcontainer-class)

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

● context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)

---
### facets

● facets: [ResultFacet](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class)[] = ` []`

---
### group

● group: [WidgetGroup](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/enumerations/widgetgroup-enum)

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

▸ getContext(): [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)


**Returns** [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)


---
### getQuery
▸ getQuery(): [Query](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/query-class)


**Returns** [Query](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/query-class)


---
### getWidgetType
▸ getWidgetType(): `string`


**Returns** `string`


---
### init
Initializes the widget and assign it to some context

▸ init(context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class),options?: `any`): `void`

#### Parameters:
- context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)
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
▸ createFacetTab(type: [FacetType](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/enumerations/facettype-enum)): [ResultFacet](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class)

#### Parameters:
- type: [FacetType](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/enumerations/facettype-enum)


**Returns** [ResultFacet](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class)


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
