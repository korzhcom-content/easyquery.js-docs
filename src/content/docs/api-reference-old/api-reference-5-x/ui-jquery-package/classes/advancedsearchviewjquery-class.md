---
title: AdvancedSearchViewJQuery class
slug: >-
  api-reference-old/api-reference-5-x/ui-jquery-package/classes/advancedsearchviewjquery-class
sidebar:
  order: 100
---

## Extends
[AdvancedSearchView](api-reference-old/api-reference-5-x/ui-package/classes/advancedsearchview-class)

## Index
### [Constructors](api-reference-old/api-reference-5-x/ui-jquery-package/classes/advancedsearchviewjquery-class#constructors-1)
- [constructor](api-reference-old/api-reference-5-x/ui-jquery-package/classes/advancedsearchviewjquery-class#constructor)

### [Public Properties](api-reference-old/api-reference-5-x/ui-jquery-package/classes/advancedsearchviewjquery-class#public-properties-1)
- [context](api-reference-old/api-reference-5-x/ui-jquery-package/classes/advancedsearchviewjquery-class#context)

### [Protected Properties](api-reference-old/api-reference-5-x/ui-jquery-package/classes/advancedsearchviewjquery-class#protected-properties-1)
- [disabledClass](api-reference-old/api-reference-5-x/ui-jquery-package/classes/advancedsearchviewjquery-class#disabledclass)

### [Public Methods](api-reference-old/api-reference-5-x/ui-jquery-package/classes/advancedsearchviewjquery-class#public-methods-1)
- [buildAndExecute](api-reference-old/api-reference-5-x/ui-jquery-package/classes/advancedsearchviewjquery-class#buildandexecute)
- [getContext](api-reference-old/api-reference-5-x/ui-jquery-package/classes/advancedsearchviewjquery-class#getcontext)
- [init](api-reference-old/api-reference-5-x/ui-jquery-package/classes/advancedsearchviewjquery-class#init)
- [syncQuery](api-reference-old/api-reference-5-x/ui-jquery-package/classes/advancedsearchviewjquery-class#syncquery)

### [Protected Methods](api-reference-old/api-reference-5-x/ui-jquery-package/classes/advancedsearchviewjquery-class#protected-methods-1)
- [createColumnsPanelWidget](api-reference-old/api-reference-5-x/ui-jquery-package/classes/advancedsearchviewjquery-class#createcolumnspanelwidget)
- [createDefaultBroker](api-reference-old/api-reference-5-x/ui-jquery-package/classes/advancedsearchviewjquery-class#createdefaultbroker)
- [createDefaultChartProvider](api-reference-old/api-reference-5-x/ui-jquery-package/classes/advancedsearchviewjquery-class#createdefaultchartprovider)
- [createEntitiesPanelWidget](api-reference-old/api-reference-5-x/ui-jquery-package/classes/advancedsearchviewjquery-class#createentitiespanelwidget)
- [createQueryPanelWidget](api-reference-old/api-reference-5-x/ui-jquery-package/classes/advancedsearchviewjquery-class#createquerypanelwidget)
- [disableExportButtons](api-reference-old/api-reference-5-x/ui-jquery-package/classes/advancedsearchviewjquery-class#disableexportbuttons)
- [displayRecordsCount](api-reference-old/api-reference-5-x/ui-jquery-package/classes/advancedsearchviewjquery-class#displayrecordscount)
- [enableExportButtons](api-reference-old/api-reference-5-x/ui-jquery-package/classes/advancedsearchviewjquery-class#enableexportbuttons)
- [hideExportButtons](api-reference-old/api-reference-5-x/ui-jquery-package/classes/advancedsearchviewjquery-class#hideexportbuttons)


## Constructors

---
#### constructor

⊕ new AdvancedSearchViewJQuery(): [AdvancedSearchViewJQuery](api-reference-old/api-reference-5-x/ui-jquery-package/classes/advancedsearchviewjquery-class)


---

## Public Properties

---
### context

● context: [EqContext](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class)

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
▸ createColumnsPanelWidget(placeholderElement: `HTMLElement`): [Widget](api-reference-old/api-reference-5-x/core-package/classes/widget-class)

#### Parameters:
- placeholderElement: `HTMLElement`


**Returns** [Widget](api-reference-old/api-reference-5-x/core-package/classes/widget-class)

---
### createDefaultBroker
▸ createDefaultBroker(context: [EqContext](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class)): [EqBroker](api-reference-old/api-reference-5-x/core-package/interfaces/eqbroker-interface)

#### Parameters:
- context: [EqContext](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class)


**Returns** [EqBroker](api-reference-old/api-reference-5-x/core-package/interfaces/eqbroker-interface)

---
### createDefaultChartProvider
Creates the default chart provider for the view.

▸ createDefaultChartProvider(): [ChartProvider](api-reference-old/api-reference-5-x/ui-package/interfaces/chartprovider-interface)


**Returns** [ChartProvider](api-reference-old/api-reference-5-x/ui-package/interfaces/chartprovider-interface) - the created [[ChartProvider]] object.


---
### createEntitiesPanelWidget
▸ createEntitiesPanelWidget(placeholderElement: `HTMLElement`): [Widget](api-reference-old/api-reference-5-x/core-package/classes/widget-class)

#### Parameters:
- placeholderElement: `HTMLElement`


**Returns** [Widget](api-reference-old/api-reference-5-x/core-package/classes/widget-class)

---
### createQueryPanelWidget
▸ createQueryPanelWidget(placeholderElement: `HTMLElement`): [Widget](api-reference-old/api-reference-5-x/core-package/classes/widget-class)

#### Parameters:
- placeholderElement: `HTMLElement`


**Returns** [Widget](api-reference-old/api-reference-5-x/core-package/classes/widget-class)

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
