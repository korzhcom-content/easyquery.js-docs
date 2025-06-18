---
title: ResultFacetsPanel class
slug: api-reference-7x/easyquery-packages/ui-package/classes/resultfacetspanel-class
sidebar:
  order: 100
---

## Extends
[FacetContainer](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/facetcontainer-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#public-properties-1)
- [id](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#id)

### [Protected Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#protected-properties-1)
- [activeFacetIndex](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#activefacetindex)
- [addMenu](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#addmenu)
- [context](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#context)
- [facets](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#facets)
- [group](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#group)
- [slot](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#slot)

### [Protected Accessors](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#protected-accessors-1)
- [cssPrefix](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#cssprefix)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#public-methods-1)
- [belongsToGroup](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#belongstogroup)
- [clear](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#clear)
- [destroy](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#destroy)
- [getContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#getcontext)
- [getQuery](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#getquery)
- [getWidgetType](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#getwidgettype)
- [init](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#init)
- [onProcessEnd](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#onprocessend)
- [onProcessStart](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#onprocessstart)
- [refresh](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#refresh)

### [Protected Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#protected-methods-1)
- [attachQueryObserver](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#attachqueryobserver)
- [createAddMenu](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#createaddmenu)
- [createDefaultFacetIfNotExist](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#createdefaultfacetifnotexist)
- [createFacetTab](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#createfacettab)
- [destroyCore](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#destroycore)
- [exportHandler](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#exporthandler)
- [getDialogService](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#getdialogservice)
- [loadFacets](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#loadfacets)
- [maximizeHandler](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#maximizehandler)
- [onProcessEndCore](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#onprocessendcore)
- [onProcessStartCore](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#onprocessstartcore)
- [refreshCore](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#refreshcore)
- [refreshHandler](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#refreshhandler)
- [removeFacet](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#removefacet)
- [render](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#render)
- [renderActiveFacet](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#renderactivefacet)
- [renderFacet](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#renderfacet)
- [renderFacetBody](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#renderfacetbody)
- [renderFacetTab](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#renderfacettab)
- [saveFacets](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#savefacets)
- [setActiveFacet](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#setactivefacet)
- [setOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#setoptions)
- [updateTotalRecords](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#updatetotalrecords)
- [validateAddFacetButton](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class/#validateaddfacetbutton)


## Constructors

---
#### constructor

⊕ new ResultFacetsPanel(slot: `HTMLElement`): [ResultFacetsPanel](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacetspanel-class)

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

● addMenu: [PopupMenu](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/popupmenu-class)

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

▸ belongsToGroup(groups?: [WidgetGroup](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/enumerations/widgetgroup-enum)): `boolean`

#### Parameters:
- groups: [WidgetGroup](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/enumerations/widgetgroup-enum), *Optional*  - 



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
Initialize widget.

▸ init(context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class),options?: [ResultFacetsPanelOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/resultfacetspaneloptions-interface)): `void`

#### Parameters:
- context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class) - The context.
- options: [ResultFacetsPanelOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/resultfacetspaneloptions-interface), *Optional*  - The options.



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
▸ createFacetTab(type: [FacetType](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/enumerations/facettype-enum)): [ResultFacet](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class)

#### Parameters:
- type: [FacetType](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/enumerations/facettype-enum)


**Returns** [ResultFacet](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class)


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
▸ removeFacet(facet: [ResultFacet](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class)): `void`

#### Parameters:
- facet: [ResultFacet](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class)


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
▸ renderFacet(facet: [ResultFacet](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class)): `void`

#### Parameters:
- facet: [ResultFacet](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class)


**Returns** `void`


---
### renderFacetBody
▸ renderFacetBody(facet: `any`): `HTMLElement`

#### Parameters:
- facet: `any`


**Returns** `HTMLElement`


---
### renderFacetTab
▸ renderFacetTab(facet: [ResultFacet](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class)): `HTMLElement`

#### Parameters:
- facet: [ResultFacet](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class)


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
▸ setOptions(options?: [ResultFacetsPanelOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/resultfacetspaneloptions-interface)): `void`

#### Parameters:
- options: [ResultFacetsPanelOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/resultfacetspaneloptions-interface), *Optional* 


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
