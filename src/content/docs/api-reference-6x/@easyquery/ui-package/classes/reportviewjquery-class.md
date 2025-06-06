---
title: ReportViewJQuery class
slug: api-reference-6x/@easyquery/ui-package/classes/reportviewjquery-class
sidebar:
  order: 100
---

## Extends
[ReportView](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/reportview-class)

## Index
### [Public Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/reportviewjquery-class/#public-methods-1)
- [executeQuery](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/reportviewjquery-class/#executequery)
- [getContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/reportviewjquery-class/#getcontext)
- [init](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/reportviewjquery-class/#init)
- [loadReport](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/reportviewjquery-class/#loadreport)
- [newReport](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/reportviewjquery-class/#newreport)
- [removeCurrentReport](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/reportviewjquery-class/#removecurrentreport)
- [renderReportList](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/reportviewjquery-class/#renderreportlist)
- [renderReportProps](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/reportviewjquery-class/#renderreportprops)
- [saveCurrentReportAs](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/reportviewjquery-class/#savecurrentreportas)
- [setActiveReport](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/reportviewjquery-class/#setactivereport)
- [syncReport](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/reportviewjquery-class/#syncreport)

### [Protected Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/reportviewjquery-class/#protected-methods-1)
- [clearErrors](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/reportviewjquery-class/#clearerrors)
- [clearReportButtonClick](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/reportviewjquery-class/#clearreportbuttonclick)
- [createChartWidget](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/reportviewjquery-class/#createchartwidget)
- [createColumnsBarWidget](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/reportviewjquery-class/#createcolumnsbarwidget)
- [createQueryPanelWidget](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/reportviewjquery-class/#createquerypanelwidget)
- [createResultGridWidget](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/reportviewjquery-class/#createresultgridwidget)
- [disableExportButtons](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/reportviewjquery-class/#disableexportbuttons)
- [displayRecordsCount](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/reportviewjquery-class/#displayrecordscount)
- [enableExportButtons](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/reportviewjquery-class/#enableexportbuttons)
- [errorHandler](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/reportviewjquery-class/#errorhandler)
- [getReportContentFromCache](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/reportviewjquery-class/#getreportcontentfromcache)
- [hideExportButtons](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/reportviewjquery-class/#hideexportbuttons)
- [insertIntoReportList](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/reportviewjquery-class/#insertintoreportlist)
- [loadReportButtonClick](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/reportviewjquery-class/#loadreportbuttonclick)
- [newReportButtonClick](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/reportviewjquery-class/#newreportbuttonclick)
- [removeFromReportList](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/reportviewjquery-class/#removefromreportlist)
- [removeReportButtonClick](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/reportviewjquery-class/#removereportbuttonclick)
- [renderReportItemInList](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/reportviewjquery-class/#renderreportiteminlist)
- [renderReportPanels](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/reportviewjquery-class/#renderreportpanels)
- [saveReportButtonClick](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/reportviewjquery-class/#savereportbuttonclick)
- [saveReportContentInCache](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/reportviewjquery-class/#savereportcontentincache)
- [showExportButtons](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/reportviewjquery-class/#showexportbuttons)
- [updateReportButtonClick](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/reportviewjquery-class/#updatereportbuttonclick)



## Public Methods

---
### executeQuery
Builds and executes current report's query.

▸ executeQuery(options?: `any`): `void`

#### Parameters:
- options: `any`, *Optional*  - The options. In particular, `options.page` defines what page of data to query.



**Returns** `void`

---
### getContext
Returns the context.

▸ getContext(): [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)


**Returns** [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class) - [[EqContext]] object.


---
### init
Initializes the view.

▸ init(options?: [ReportViewOptions](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/reportviewoptions-interface)): `void`

#### Parameters:
- options: [ReportViewOptions](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/reportviewoptions-interface), *Optional*  - The [[ReportViewOptions]] object.



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
### renderReportList
Renders the list of reports.

▸ renderReportList(options?: `any`): `void`

#### Parameters:
- options: `any`, *Optional*  - The options. In particular, `options.reportIndex` defines which report should be active.



**Returns** `void`

---
### renderReportProps
Renders current report.

▸ renderReportProps(): `void`


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
### createChartWidget
▸ createChartWidget(slotElement: `HTMLElement`): [Widget](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/widget-class)

#### Parameters:
- slotElement: `HTMLElement`


**Returns** [Widget](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/widget-class)

---
### createColumnsBarWidget
Creates the widget that represents Columns Bar.

▸ createColumnsBarWidget(placeholderElement: `HTMLElement`): [Widget](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/widget-class)

#### Parameters:
- placeholderElement: `HTMLElement` - The [[HTMLElement]] to place the created widget in.


**Returns** [Widget](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/widget-class) - the created [[Widget]] object.


---
### createQueryPanelWidget
Creates the widget that represents Query Panel.

▸ createQueryPanelWidget(placeholderElement: `HTMLElement`): [Widget](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/widget-class)

#### Parameters:
- placeholderElement: `HTMLElement` - The [[HTMLElement]] to place the created widget in.


**Returns** [Widget](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/widget-class) - the created [[Widget]] object.


---
### createResultGridWidget
Creates the widget that represents the result grid.

▸ createResultGridWidget(slotElement: `HTMLElement`): [Widget](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/widget-class)

#### Parameters:
- slotElement: `HTMLElement` - The [[HTMLElement]] to place the created widget in.


**Returns** [Widget](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/widget-class) - the created [[Widget]] object.


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
### getReportContentFromCache
Gets the report content from cache.

▸ getReportContentFromCache(report: [Report](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/report-interface)): `string` | `null`

#### Parameters:
- report: [Report](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/report-interface) - The report.


**Returns** `string` | `null` - Content of the report (Query in JSOn string)


---
### hideExportButtons
Hides export buttons.

▸ hideExportButtons(): `void`


**Returns** `void`

---
### insertIntoReportList
Inserts the report to the list of reports.

▸ insertIntoReportList(report: [Report](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/report-interface)): `void`

#### Parameters:
- report: [Report](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/report-interface) - The [[Report]] object to be inserted.



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

▸ renderReportItemInList(report: [Report](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/report-interface),ul: `HTMLUListElement`): `void`

#### Parameters:
- report: [Report](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/report-interface) - The [[Report]] object to render.
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
### saveReportContentInCache
Saves reports content to the cache.

▸ saveReportContentInCache(report: [Report](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/report-interface),content: `string`): `void`

#### Parameters:
- report: [Report](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/report-interface) - The report.
- content: `string` - The content (Query serialized into JSON).



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
