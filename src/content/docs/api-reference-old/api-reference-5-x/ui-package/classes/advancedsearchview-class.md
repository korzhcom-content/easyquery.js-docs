---
title: AdvancedSearchView class
slug: >-
  api-reference-old/api-reference-5-x/ui-package/classes/advancedsearchview-class
sidebar:
  order: 100
---

The EasyQuery client-side view that represents the UI for advanced search page

## Index
### [Public Properties](api-reference-old/api-reference-5-x/ui-package/classes/advancedsearchview-class#public-properties-1)
- [context](api-reference-old/api-reference-5-x/ui-package/classes/advancedsearchview-class#context)

### [Protected Properties](api-reference-old/api-reference-5-x/ui-package/classes/advancedsearchview-class#protected-properties-1)
- [disabledClass](api-reference-old/api-reference-5-x/ui-package/classes/advancedsearchview-class#disabledclass)

### [Public Methods](api-reference-old/api-reference-5-x/ui-package/classes/advancedsearchview-class#public-methods-1)
- [buildAndExecute](api-reference-old/api-reference-5-x/ui-package/classes/advancedsearchview-class#buildandexecute)
- [getContext](api-reference-old/api-reference-5-x/ui-package/classes/advancedsearchview-class#getcontext)
- [init](api-reference-old/api-reference-5-x/ui-package/classes/advancedsearchview-class#init)
- [syncQuery](api-reference-old/api-reference-5-x/ui-package/classes/advancedsearchview-class#syncquery)

### [Protected Methods](api-reference-old/api-reference-5-x/ui-package/classes/advancedsearchview-class#protected-methods-1)
- [createColumnsPanelWidget](api-reference-old/api-reference-5-x/ui-package/classes/advancedsearchview-class#createcolumnspanelwidget)
- [createDefaultBroker](api-reference-old/api-reference-5-x/ui-package/classes/advancedsearchview-class#createdefaultbroker)
- [createDefaultChartProvider](api-reference-old/api-reference-5-x/ui-package/classes/advancedsearchview-class#createdefaultchartprovider)
- [createEntitiesPanelWidget](api-reference-old/api-reference-5-x/ui-package/classes/advancedsearchview-class#createentitiespanelwidget)
- [createQueryPanelWidget](api-reference-old/api-reference-5-x/ui-package/classes/advancedsearchview-class#createquerypanelwidget)
- [disableExportButtons](api-reference-old/api-reference-5-x/ui-package/classes/advancedsearchview-class#disableexportbuttons)
- [displayRecordsCount](api-reference-old/api-reference-5-x/ui-package/classes/advancedsearchview-class#displayrecordscount)
- [enableExportButtons](api-reference-old/api-reference-5-x/ui-package/classes/advancedsearchview-class#enableexportbuttons)
- [hideExportButtons](api-reference-old/api-reference-5-x/ui-package/classes/advancedsearchview-class#hideexportbuttons)



## Public Properties

---
### context

● context: [EqContext](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class) = ` new EqContext()`

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

▸ getContext(): [EqContext](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class)


**Returns** [EqContext](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class) - [[EqContext]] object.


---
### init
Initializes the view.

▸ init(options?: [EqViewOptions](api-reference-old/api-reference-5-x/ui-package/interfaces/eqviewoptions-interface)): `void`

#### Parameters:
- options: [EqViewOptions](api-reference-old/api-reference-5-x/ui-package/interfaces/eqviewoptions-interface), *Optional*  - The [[EqViewOptions]] object.



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

▸ createColumnsPanelWidget(placeholderElement: `HTMLElement`): [Widget](api-reference-old/api-reference-5-x/core-package/classes/widget-class)

#### Parameters:
- placeholderElement: `HTMLElement` - The [[HTMLElement]] to place the created widget in.


**Returns** [Widget](api-reference-old/api-reference-5-x/core-package/classes/widget-class) - the created [[Widget]] object.


---
### createDefaultBroker
Creates the default broker for the view.

▸ createDefaultBroker(context: [EqContext](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class)): [EqBroker](api-reference-old/api-reference-5-x/core-package/interfaces/eqbroker-interface)

#### Parameters:
- context: [EqContext](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class) - The [[EqContext]] object.


**Returns** [EqBroker](api-reference-old/api-reference-5-x/core-package/interfaces/eqbroker-interface) - the created [[EqBroker]] object.


---
### createDefaultChartProvider
Creates the default chart provider for the view.

▸ createDefaultChartProvider(): [ChartProvider](api-reference-old/api-reference-5-x/ui-package/interfaces/chartprovider-interface)


**Returns** [ChartProvider](api-reference-old/api-reference-5-x/ui-package/interfaces/chartprovider-interface) - the created [[ChartProvider]] object.


---
### createEntitiesPanelWidget
Creates the widget that represents Entity Panel.

▸ createEntitiesPanelWidget(placeholderElement: `HTMLElement`): [Widget](api-reference-old/api-reference-5-x/core-package/classes/widget-class)

#### Parameters:
- placeholderElement: `HTMLElement` - The [[HTMLElement]] to place the created widget in.


**Returns** [Widget](api-reference-old/api-reference-5-x/core-package/classes/widget-class) - the created [[Widget]] object.


---
### createQueryPanelWidget
Creates the widget that represents Query Panel.

▸ createQueryPanelWidget(placeholderElement: `HTMLElement`): [Widget](api-reference-old/api-reference-5-x/core-package/classes/widget-class)

#### Parameters:
- placeholderElement: `HTMLElement` - The [[HTMLElement]] to place the created widget in.


**Returns** [Widget](api-reference-old/api-reference-5-x/core-package/classes/widget-class) - the created [[Widget]] object.


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
