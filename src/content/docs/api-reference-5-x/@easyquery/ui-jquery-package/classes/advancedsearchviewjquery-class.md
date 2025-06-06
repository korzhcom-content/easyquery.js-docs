---
title: AdvancedSearchViewJQuery class
slug: >-
  api-reference-5-x/@easyquery/ui-jquery-package/classes/advancedsearchviewjquery-class
sidebar:
  order: 100
---

## Extends
[AdvancedSearchView](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/advancedsearchview-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/advancedsearchviewjquery-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/advancedsearchviewjquery-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/advancedsearchviewjquery-class/#public-properties-1)
- [context](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/advancedsearchviewjquery-class/#context)

### [Protected Properties](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/advancedsearchviewjquery-class/#protected-properties-1)
- [disabledClass](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/advancedsearchviewjquery-class/#disabledclass)

### [Public Methods](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/advancedsearchviewjquery-class/#public-methods-1)
- [buildAndExecute](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/advancedsearchviewjquery-class/#buildandexecute)
- [getContext](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/advancedsearchviewjquery-class/#getcontext)
- [init](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/advancedsearchviewjquery-class/#init)
- [syncQuery](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/advancedsearchviewjquery-class/#syncquery)

### [Protected Methods](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/advancedsearchviewjquery-class/#protected-methods-1)
- [createColumnsPanelWidget](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/advancedsearchviewjquery-class/#createcolumnspanelwidget)
- [createDefaultBroker](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/advancedsearchviewjquery-class/#createdefaultbroker)
- [createDefaultChartProvider](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/advancedsearchviewjquery-class/#createdefaultchartprovider)
- [createEntitiesPanelWidget](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/advancedsearchviewjquery-class/#createentitiespanelwidget)
- [createQueryPanelWidget](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/advancedsearchviewjquery-class/#createquerypanelwidget)
- [disableExportButtons](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/advancedsearchviewjquery-class/#disableexportbuttons)
- [displayRecordsCount](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/advancedsearchviewjquery-class/#displayrecordscount)
- [enableExportButtons](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/advancedsearchviewjquery-class/#enableexportbuttons)
- [hideExportButtons](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/advancedsearchviewjquery-class/#hideexportbuttons)


## Constructors

---
#### constructor

⊕ new AdvancedSearchViewJQuery(): [AdvancedSearchViewJQuery](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/advancedsearchviewjquery-class)


---

## Public Properties

---
### context

● context: [EqContext](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqcontext-class)

---
## Protected Properties

---
### disabledClass

Name of the class to add to disabled elements.

● disabledClass: `string`

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
▸ createColumnsPanelWidget(placeholderElement: `HTMLElement`): [Widget](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/widget-class)

#### Parameters:
- placeholderElement: `HTMLElement`


**Returns** [Widget](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/widget-class)

---
### createDefaultBroker
▸ createDefaultBroker(context: [EqContext](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqcontext-class)): [EqBroker](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqbroker-interface)

#### Parameters:
- context: [EqContext](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqcontext-class)


**Returns** [EqBroker](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqbroker-interface)

---
### createDefaultChartProvider
Creates the default chart provider for the view.

▸ createDefaultChartProvider(): [ChartProvider](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/chartprovider-interface)


**Returns** [ChartProvider](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/chartprovider-interface) - the created [[ChartProvider]] object.


---
### createEntitiesPanelWidget
▸ createEntitiesPanelWidget(placeholderElement: `HTMLElement`): [Widget](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/widget-class)

#### Parameters:
- placeholderElement: `HTMLElement`


**Returns** [Widget](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/widget-class)

---
### createQueryPanelWidget
▸ createQueryPanelWidget(placeholderElement: `HTMLElement`): [Widget](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/widget-class)

#### Parameters:
- placeholderElement: `HTMLElement`


**Returns** [Widget](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/widget-class)

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
