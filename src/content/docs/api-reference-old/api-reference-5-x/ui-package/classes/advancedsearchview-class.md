---
title: AdvancedSearchView class
slug: >-
  api-reference-old/api-reference-5-x/ui-package/classes/advancedsearchview-class
sidebar:
  order: 100
---

The EasyQuery client-side view that represents the UI for advanced search page

## Index
### [Public Properties](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/advancedsearchview-class/#public-properties-1)
- [context](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/advancedsearchview-class/#context)

### [Protected Properties](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/advancedsearchview-class/#protected-properties-1)
- [disabledClass](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/advancedsearchview-class/#disabledclass)

### [Public Methods](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/advancedsearchview-class/#public-methods-1)
- [buildAndExecute](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/advancedsearchview-class/#buildandexecute)
- [getContext](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/advancedsearchview-class/#getcontext)
- [init](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/advancedsearchview-class/#init)
- [syncQuery](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/advancedsearchview-class/#syncquery)

### [Protected Methods](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/advancedsearchview-class/#protected-methods-1)
- [createColumnsPanelWidget](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/advancedsearchview-class/#createcolumnspanelwidget)
- [createDefaultBroker](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/advancedsearchview-class/#createdefaultbroker)
- [createDefaultChartProvider](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/advancedsearchview-class/#createdefaultchartprovider)
- [createEntitiesPanelWidget](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/advancedsearchview-class/#createentitiespanelwidget)
- [createQueryPanelWidget](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/advancedsearchview-class/#createquerypanelwidget)
- [disableExportButtons](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/advancedsearchview-class/#disableexportbuttons)
- [displayRecordsCount](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/advancedsearchview-class/#displayrecordscount)
- [enableExportButtons](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/advancedsearchview-class/#enableexportbuttons)
- [hideExportButtons](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/advancedsearchview-class/#hideexportbuttons)



## Public Properties

---
### context

● context: [EqContext](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqcontext-class) = ` new EqContext()`

---
## Protected Properties

---
### disabledClass

Name of the class to add to disabled elements.

● disabledClass: `string` = `"eqjs-disabled"`

---
## Public Methods

---
### buildAndExecute
Builds and executes current query.

▸ buildAndExecute(options?: `any`): `void`

#### Parameters:
- options: `any`, *Optional*  - The options. In particular, `options.page` defines what page of data to query.



**Returns** `void`

---
### getContext
Returns the context.

▸ getContext(): [EqContext](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqcontext-class)


**Returns** [EqContext](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqcontext-class) - [[EqContext]] object.


---
### init
Initializes the view.

▸ init(options?: [EqViewOptions](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/eqviewoptions-interface)): `void`

#### Parameters:
- options: [EqViewOptions](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/eqviewoptions-interface), *Optional*  - The [[EqViewOptions]] object.



**Returns** `void`

---
### syncQuery
Sends current query to back-end.

▸ syncQuery(): `void`


**Returns** `void`

---
## Protected Methods

---
### createColumnsPanelWidget
Creates the widget that represents Columns Panel.

▸ createColumnsPanelWidget(placeholderElement: `HTMLElement`): [Widget](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/widget-class)

#### Parameters:
- placeholderElement: `HTMLElement` - The [[HTMLElement]] to place the created widget in.


**Returns** [Widget](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/widget-class) - the created [[Widget]] object.


---
### createDefaultBroker
Creates the default broker for the view.

▸ createDefaultBroker(context: [EqContext](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqcontext-class)): [EqBroker](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqbroker-interface)

#### Parameters:
- context: [EqContext](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqcontext-class) - The [[EqContext]] object.


**Returns** [EqBroker](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqbroker-interface) - the created [[EqBroker]] object.


---
### createDefaultChartProvider
Creates the default chart provider for the view.

▸ createDefaultChartProvider(): [ChartProvider](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/chartprovider-interface)


**Returns** [ChartProvider](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/chartprovider-interface) - the created [[ChartProvider]] object.


---
### createEntitiesPanelWidget
Creates the widget that represents Entity Panel.

▸ createEntitiesPanelWidget(placeholderElement: `HTMLElement`): [Widget](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/widget-class)

#### Parameters:
- placeholderElement: `HTMLElement` - The [[HTMLElement]] to place the created widget in.


**Returns** [Widget](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/widget-class) - the created [[Widget]] object.


---
### createQueryPanelWidget
Creates the widget that represents Query Panel.

▸ createQueryPanelWidget(placeholderElement: `HTMLElement`): [Widget](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/widget-class)

#### Parameters:
- placeholderElement: `HTMLElement` - The [[HTMLElement]] to place the created widget in.


**Returns** [Widget](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/widget-class) - the created [[Widget]] object.


---
### disableExportButtons
Disables export buttons.

▸ disableExportButtons(): `void`


**Returns** `void`

---
### displayRecordsCount
Shows records count.

▸ displayRecordsCount(count: `number`): `void`

#### Parameters:
- count: `number` - The value to show.



**Returns** `void`

---
### enableExportButtons
Enables export buttons.

▸ enableExportButtons(): `void`


**Returns** `void`

---
### hideExportButtons
Hides export buttons.

▸ hideExportButtons(): `void`


**Returns** `void`

---
