---
title: ReportView class
slug: api-reference-old/api-reference-5-x/ui-package/classes/reportview-class
sidebar:
  order: 100
---

The EasyQuery client-side view that represents the UI for ad-hoc reporting page

## Index
### [Public Methods](api-reference-old/api-reference-5-x/ui-package/classes/reportview-class#public-methods-1)
- [buildAndExecute](api-reference-old/api-reference-5-x/ui-package/classes/reportview-class#buildandexecute)
- [getContext](api-reference-old/api-reference-5-x/ui-package/classes/reportview-class#getcontext)
- [init](api-reference-old/api-reference-5-x/ui-package/classes/reportview-class#init)
- [loadReport](api-reference-old/api-reference-5-x/ui-package/classes/reportview-class#loadreport)
- [newReport](api-reference-old/api-reference-5-x/ui-package/classes/reportview-class#newreport)
- [removeCurrentReport](api-reference-old/api-reference-5-x/ui-package/classes/reportview-class#removecurrentreport)
- [renderCurrentReport](api-reference-old/api-reference-5-x/ui-package/classes/reportview-class#rendercurrentreport)
- [renderReportList](api-reference-old/api-reference-5-x/ui-package/classes/reportview-class#renderreportlist)
- [saveCurrentReportAs](api-reference-old/api-reference-5-x/ui-package/classes/reportview-class#savecurrentreportas)
- [setActiveReport](api-reference-old/api-reference-5-x/ui-package/classes/reportview-class#setactivereport)
- [syncReport](api-reference-old/api-reference-5-x/ui-package/classes/reportview-class#syncreport)

### [Protected Methods](api-reference-old/api-reference-5-x/ui-package/classes/reportview-class#protected-methods-1)
- [clearErrors](api-reference-old/api-reference-5-x/ui-package/classes/reportview-class#clearerrors)
- [clearReportButtonClick](api-reference-old/api-reference-5-x/ui-package/classes/reportview-class#clearreportbuttonclick)
- [createColumnsBarWidget](api-reference-old/api-reference-5-x/ui-package/classes/reportview-class#createcolumnsbarwidget)
- [createDefaultBroker](api-reference-old/api-reference-5-x/ui-package/classes/reportview-class#createdefaultbroker)
- [createDefaultChartProvider](api-reference-old/api-reference-5-x/ui-package/classes/reportview-class#createdefaultchartprovider)
- [createQueryPanelWidget](api-reference-old/api-reference-5-x/ui-package/classes/reportview-class#createquerypanelwidget)
- [disableExportButtons](api-reference-old/api-reference-5-x/ui-package/classes/reportview-class#disableexportbuttons)
- [displayRecordsCount](api-reference-old/api-reference-5-x/ui-package/classes/reportview-class#displayrecordscount)
- [enableExportButtons](api-reference-old/api-reference-5-x/ui-package/classes/reportview-class#enableexportbuttons)
- [errorHandler](api-reference-old/api-reference-5-x/ui-package/classes/reportview-class#errorhandler)
- [hideExportButtons](api-reference-old/api-reference-5-x/ui-package/classes/reportview-class#hideexportbuttons)
- [insertIntoReportList](api-reference-old/api-reference-5-x/ui-package/classes/reportview-class#insertintoreportlist)
- [loadReportButtonClick](api-reference-old/api-reference-5-x/ui-package/classes/reportview-class#loadreportbuttonclick)
- [newReportButtonClick](api-reference-old/api-reference-5-x/ui-package/classes/reportview-class#newreportbuttonclick)
- [removeFromReportList](api-reference-old/api-reference-5-x/ui-package/classes/reportview-class#removefromreportlist)
- [removeReportButtonClick](api-reference-old/api-reference-5-x/ui-package/classes/reportview-class#removereportbuttonclick)
- [renderReportItemInList](api-reference-old/api-reference-5-x/ui-package/classes/reportview-class#renderreportiteminlist)
- [renderReportPanels](api-reference-old/api-reference-5-x/ui-package/classes/reportview-class#renderreportpanels)
- [saveReportButtonClick](api-reference-old/api-reference-5-x/ui-package/classes/reportview-class#savereportbuttonclick)
- [showExportButtons](api-reference-old/api-reference-5-x/ui-package/classes/reportview-class#showexportbuttons)
- [updateReportButtonClick](api-reference-old/api-reference-5-x/ui-package/classes/reportview-class#updatereportbuttonclick)



## Public Methods

---
### buildAndExecute
Builds and executes current report's query.

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

▸ init(options?: [ReportViewOptions](api-reference-old/api-reference-5-x/ui-package/interfaces/reportviewoptions-interface)): `void`

#### Parameters:
- options: [ReportViewOptions](api-reference-old/api-reference-5-x/ui-package/interfaces/reportviewoptions-interface), *Optional*  - The [[ReportViewOptions]] object.



**Returns** `void`

---
### loadReport
Loads report by ID.

▸ loadReport(reportId: `string`): `void`

#### Parameters:
- reportId: `string` - The ID of the report to load.



**Returns** `void`

---
### newReport
Creates the new report.

▸ newReport(): `void`


**Returns** `void`

---
### removeCurrentReport
Removes current report.

▸ removeCurrentReport(): `void`


**Returns** `void`

---
### renderCurrentReport
Renders current report.

▸ renderCurrentReport(): `void`


**Returns** `void`

---
### renderReportList
Renders the list of reports.

▸ renderReportList(options?: `any`): `void`

#### Parameters:
- options: `any`, *Optional*  - The options. In particular, `options.reportIndex` defines which report should be active.



**Returns** `void`

---
### saveCurrentReportAs
Shows the dialog to save the report with new name.

▸ saveCurrentReportAs(): `void`


**Returns** `void`

---
### setActiveReport
Sets active report.

▸ setActiveReport(reportId: `string`): `void`

#### Parameters:
- reportId: `string` - The ID of the report to make active.



**Returns** `void`

---
### syncReport
Sends current report's query to back-end.

▸ syncReport(): `void`


**Returns** `void`

---
## Protected Methods

---
### clearErrors
Clears the errors.

▸ clearErrors(): `void`


**Returns** `void`

---
### clearReportButtonClick
The handler of the "Clear" button click.

▸ clearReportButtonClick(): `void`


**Returns** `void`

---
### createColumnsBarWidget
Creates the widget that represents Columns Bar.

▸ createColumnsBarWidget(placeholderElement: `HTMLElement`): [Widget](api-reference-old/api-reference-5-x/core-package/classes/widget-class)

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
### errorHandler
The handler of errors.

▸ errorHandler(error: `any`): `void`

#### Parameters:
- error: `any` - The error object.



**Returns** `void`

---
### hideExportButtons
Hides export buttons.

▸ hideExportButtons(): `void`


**Returns** `void`

---
### insertIntoReportList
Inserts the report to the list of reports.

▸ insertIntoReportList(report: [Report](api-reference-old/api-reference-5-x/ui-package/interfaces/report-interface)): `void`

#### Parameters:
- report: [Report](api-reference-old/api-reference-5-x/ui-package/interfaces/report-interface) - The [[Report]] object to be inserted.



**Returns** `void`

---
### loadReportButtonClick
The handler of the "Load" button click.

▸ loadReportButtonClick(): `void`


**Returns** `void`

---
### newReportButtonClick
The handler of the "New" button click.

▸ newReportButtonClick(): `void`


**Returns** `void`

---
### removeFromReportList
Removes the report from the list of reports.

▸ removeFromReportList(reportId: `string`): `number`

#### Parameters:
- reportId: `string` - The ID of the report to be removed.


**Returns** `number` - the index of removed report.


---
### removeReportButtonClick
The handler of the "Remove" button click.

▸ removeReportButtonClick(): `void`


**Returns** `void`

---
### renderReportItemInList
Renders a single item in the list of reports.

▸ renderReportItemInList(report: [Report](api-reference-old/api-reference-5-x/ui-package/interfaces/report-interface),ul: `HTMLUListElement`): `void`

#### Parameters:
- report: [Report](api-reference-old/api-reference-5-x/ui-package/interfaces/report-interface) - The [[Report]] object to render.
- ul: `HTMLUListElement` - The [[HTMLUListElement]] to add the item to.



**Returns** `void`

---
### renderReportPanels
Renders report panels.

▸ renderReportPanels(): `void`


**Returns** `void`

---
### saveReportButtonClick
The handler of the "Save" button click.

▸ saveReportButtonClick(): `void`


**Returns** `void`

---
### showExportButtons
Shows export buttons.

▸ showExportButtons(): `void`


**Returns** `void`

---
### updateReportButtonClick
The handler of the "Update" button click.

▸ updateReportButtonClick(): `void`


**Returns** `void`

---
