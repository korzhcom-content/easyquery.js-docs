---
title: ResultFacetsPanel class
slug: api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class
sidebar:
  order: 100
---

## Extends
[FacetContainer](api-reference-7x/easyquery-packages/ui-package/classes/facetcontainer-class)

## Index
### [Constructors](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#constructor)

### [Public Properties](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#public-properties-1)
- [id](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#id)

### [Protected Properties](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#protected-properties-1)
- [activeFacetIndex](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#activefacetindex)
- [addMenu](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#addmenu)
- [context](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#context)
- [facets](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#facets)
- [group](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#group)
- [slot](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#slot)

### [Protected Accessors](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#protected-accessors-1)
- [cssPrefix](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#cssprefix)

### [Public Methods](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#public-methods-1)
- [belongsToGroup](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#belongstogroup)
- [clear](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#clear)
- [destroy](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#destroy)
- [getContext](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#getcontext)
- [getQuery](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#getquery)
- [getWidgetType](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#getwidgettype)
- [init](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#init)
- [onProcessEnd](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#onprocessend)
- [onProcessStart](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#onprocessstart)
- [refresh](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#refresh)

### [Protected Methods](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#protected-methods-1)
- [attachQueryObserver](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#attachqueryobserver)
- [createAddMenu](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#createaddmenu)
- [createDefaultFacetIfNotExist](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#createdefaultfacetifnotexist)
- [createFacetTab](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#createfacettab)
- [destroyCore](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#destroycore)
- [exportHandler](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#exporthandler)
- [getDialogService](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#getdialogservice)
- [loadFacets](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#loadfacets)
- [maximizeHandler](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#maximizehandler)
- [onProcessEndCore](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#onprocessendcore)
- [onProcessStartCore](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#onprocessstartcore)
- [refreshCore](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#refreshcore)
- [refreshHandler](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#refreshhandler)
- [removeFacet](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#removefacet)
- [render](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#render)
- [renderActiveFacet](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#renderactivefacet)
- [renderFacet](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#renderfacet)
- [renderFacetBody](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#renderfacetbody)
- [renderFacetTab](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#renderfacettab)
- [saveFacets](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#savefacets)
- [setActiveFacet](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#setactivefacet)
- [setOptions](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#setoptions)
- [updateTotalRecords](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#updatetotalrecords)
- [validateAddFacetButton](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class#validateaddfacetbutton)


## Constructors

---
#### constructor

⊕ new ResultFacetsPanel(slot: `HTMLElement`): [ResultFacetsPanel](api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class)

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
### activeFacetIndex

● activeFacetIndex: `number` = ` -1`

---
### addMenu

● addMenu: [PopupMenu](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class)

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
## Protected Accessors

---
### cssPrefix
⇄ get cssPrefix(): `string`


**Returns** `string`


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
▸ clear(): `void`


**Returns** `void`


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
Initialize widget.

▸ init(context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class),options?: [ResultFacetsPanelOptions](api-reference-7x/easyquery-packages/ui-package/interfaces/resultfacetspaneloptions-interface)): `void`

#### Parameters:
- context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class) - The context.
- options: [ResultFacetsPanelOptions](api-reference-7x/easyquery-packages/ui-package/interfaces/resultfacetspaneloptions-interface), *Optional*  - The options.



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
### attachQueryObserver
▸ attachQueryObserver(): `void`


**Returns** `void`


---
### createAddMenu
▸ createAddMenu(): `void`


**Returns** `void`


---
### createDefaultFacetIfNotExist
▸ createDefaultFacetIfNotExist(): `void`


**Returns** `void`


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
### exportHandler
▸ exportHandler(): `void`


**Returns** `void`


---
### getDialogService
▸ getDialogService(): `DialogService`


**Returns** `DialogService`


---
### loadFacets
▸ loadFacets(): `void`


**Returns** `void`


---
### maximizeHandler
▸ maximizeHandler(): `void`


**Returns** `void`


---
### onProcessEndCore
▸ onProcessEndCore(): `void`


**Returns** `void`


---
### onProcessStartCore
▸ onProcessStartCore(): `void`


**Returns** `void`


---
### refreshCore
▸ refreshCore(force?: `boolean`): `void`

#### Parameters:
- force: `boolean`, *Default value* = `false`


**Returns** `void`


---
### refreshHandler
▸ refreshHandler(): `void`


**Returns** `void`


---
### removeFacet
▸ removeFacet(facet: [ResultFacet](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class)): `void`

#### Parameters:
- facet: [ResultFacet](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class)


**Returns** `void`


---
### render
▸ render(): `void`


**Returns** `void`


---
### renderActiveFacet
▸ renderActiveFacet(refresh?: `boolean`): `void`

#### Parameters:
- refresh: `boolean`, *Default value* = `true`


**Returns** `void`


---
### renderFacet
▸ renderFacet(facet: [ResultFacet](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class)): `void`

#### Parameters:
- facet: [ResultFacet](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class)


**Returns** `void`


---
### renderFacetBody
▸ renderFacetBody(facet: `any`): `HTMLElement`

#### Parameters:
- facet: `any`


**Returns** `HTMLElement`


---
### renderFacetTab
▸ renderFacetTab(facet: [ResultFacet](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class)): `HTMLElement`

#### Parameters:
- facet: [ResultFacet](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class)


**Returns** `HTMLElement`


---
### saveFacets
▸ saveFacets(isActivate?: `boolean`): `void`

#### Parameters:
- isActivate: `boolean`, *Default value* = `false`


**Returns** `void`


---
### setActiveFacet
▸ setActiveFacet(index: `number`): `void`

#### Parameters:
- index: `number`


**Returns** `void`


---
### setOptions
▸ setOptions(options?: [ResultFacetsPanelOptions](api-reference-7x/easyquery-packages/ui-package/interfaces/resultfacetspaneloptions-interface)): `void`

#### Parameters:
- options: [ResultFacetsPanelOptions](api-reference-7x/easyquery-packages/ui-package/interfaces/resultfacetspaneloptions-interface), *Optional* 


**Returns** `void`


---
### updateTotalRecords
▸ updateTotalRecords(): `void`


**Returns** `void`


---
### validateAddFacetButton
▸ validateAddFacetButton(): `void`


**Returns** `void`


---
