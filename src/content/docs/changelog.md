---
title: Changelog
slug: changelog
sidebar:
  order: 100
---

> The .NET version changelog is available by [this link](//easyquery/javascript/docs/easyquery/javascript/docs/).


<div id="changelog-start"></div>
<div id="eq-js/7.3.3" data-released="2024-04-14"></div>

## Version 7.3.3

<div class="aist-article-updated"><span>2024-04-14</span></div>


<div id="eq-js/7.3.1" data-released="2024-03-04"></div>

## Version 7.3.1

<div class="aist-article-updated"><span>2024-03-04</span></div>


<div id="eq-js/7.3.0" data-released="2024-02-12"></div>

## Version 7.3.0-rc02

<div class="aist-article-updated"><span>2024-02-12</span></div>


- __[New]__: nameTemplate option in QueryNameWidghet    

- __[Upd]__: Activate column row on caption or button click    

- __[Upd]__: Remove MIN, MAX, COUNT DISTINCT from the list of functions in Aggregation Settings dialog    

- __[Fix]__: Exception on operator change if the value can't be converted to date    

- __[Fix]__: 'ready' event wasn't raised if the default query could not be found    

- __[Fix]__: getConditionsText() missed sub-queries    

- __[Fix]__: Get License dialog    

- __[Fix]__: Title column header width when showCheckboxes is on    

- __[Fix]__: 'hasOwnProperty is not a function' error on condition creation    

- __[Fix]__: Aggregate settings were not updated on query change    

<div id="eq-js/7.2.5" data-released="2024-01-09"></div>

## Version 7.2.5-rc02

<div class="aist-article-updated"><span>2024-01-09</span></div>


- __[New]__: nameTemplate option in QueryNameWidghet    

- __[Fix]__: 'hasOwnProperty is not a function' error on condition creation    

- __[Fix]__: Aggregate settings were not updated on query change    

<div id="eq-js/7.2.4" data-released="2023-11-15"></div>

## Version 7.2.4

<div class="aist-article-updated"><span>2023-11-15</span></div>


- __[Upd]__: Support for Custom SQL and constant columns in the ColumnsBar    

- __[Upd]__: Support for constant columns    

- __[Fix]__: Query.addColumn worked incorrectly for Custom SQL columns    

- __[Fix]__: Exception on the wrong column type    

- __[Fix]__: Query.getConditionsText() raises an error in some cases    

- __[Fix]__: Add Condition Group threw an error    

- __[Fix]__: Wrong responseType for CSV and HTML exporters    

- __[Fix]__: Wrong format of the query file returned by QueryFileLoader    

- __[Fix]__: Error saving query file locally    

<div id="eq-js/7.2.3" data-released="2023-03-15"></div>

## Version 7.2.3

<div class="aist-article-updated"><span>2023-03-15</span></div>


- __[Fix]__: Excel-HTML exports was always turned on    

- __[Fix]__: Lookup attribute was not used on column creation    

- __[Fix]__: show validation errors for inputs    

<div id="eq-js/7.2.2" data-released="2022-07-16"></div>

## Version 7.2.2

<div class="aist-article-updated"><span>2022-07-16</span></div>


- __[Fix]__: Pass client data in beforeExportResult    

<div id="eq-js/7.2.1" data-released="2022-02-24"></div>

## Version 7.2.1

<div class="aist-article-updated"><span>2022-02-24</span></div>


- __[New]__: showIdsForListItems option for QueryPanel widget    

- __[Fix]__: An exception in GoogleChartWidget on NULL boolean data    

- __[Fix]__: fetchDataOnChange option didn't work on EasyQuery.JS views    

- __[Fix]__: extraParams didn't work properly in CustomValueEditor    

<div id="eq-js/7.2.0" data-released="2022-01-31"></div>

## Version 7.2.0

<div class="aist-article-updated"><span>2022-01-31</span></div>


- __[New]__: DataModelStorage inteface    

- __[Upd]__: Smar aggregation update on query columns change    

- __[Upd]__: Don't call Fetch on empty queries by default    

- __[Fix]__: Null reference exception on ReportView.detach    

- __[Fix]__: Clear result datatable on report change    

- __[Fix]__: Wrong default caption on column type change    

- __[Fix]__: Apply case insensitivity only to string values while grouping    

- __[Fix]__: Old-style date/time macros were not processed    

<div id="eq-js/7.1.3" data-released="2021-10-20"></div>

## Version 7.1.3-beta01

<div class="aist-article-updated"><span>2021-10-20</span></div>


- __[Fix]__: Old-style date/time macros were not processed    

<div id="eq-js/7.1.2" data-released="2021-10-15"></div>

## Version 7.1.2

<div class="aist-article-updated"><span>2021-10-15</span></div>


- __[Fix]__: Support for old dateFormatDisplay option in QueryPanel    

- __[Fix]__: Avoid a request for record count on group data fetching    

- __[Fix]__: Setting aggregation for Custom SQL columns    

- __[Fix]__: wrong sorting indexes of non-grouped columns when we set enableAggregation = true    

- __[Fix]__: Support for different data types in Custom SQL columns    

- __[Fix]__: Unnecessary sorting for non-grouping columns in "aggregated" queries    

<div id="eq-js/7.1.1" data-released="2021-09-01"></div>

## Version 7.1.1

<div class="aist-article-updated"><span>2021-09-01</span></div>


- __[New]__: groupFetchSuccess callback in ContextFetchDataOptions    

- __[Fix]__: Wrong expr.dataType value for new columns    

- __[Fix]__: Handle errors on group data fetching    

<div id="eq-js/7.1.0" data-released="2021-07-27"></div>

## Version 7.1.0

<div class="aist-article-updated"><span>2021-07-27</span></div>


- __[New]__: fetchDataOnChange option in ReportView    

- __[New]__: Add debugMode option    

- __[Upd]__: Allow string colums as cells in pivot with COUNT aggr function    

- __[Upd]__: Add counts to aggregate settings    

- __[Upd]__: elasticPaging option for EqContext    

- __[Upd]__: Add description editing in AdHoc Reporting scenario    

- __[Upd]__: Allow empty integer values in condition panel    

- __[Upd]__: Add `columnTitleFormat` option for context    

- __[Upd]__: Add `columnCaptionFormat` for entities panel    

- __[Fix]__: Setting description ReportView.newReport    

- __[Fix]__: QueryPanel behaviour with unrecognized operator    

- __[Fix]__: widgets behaviour when query contains unrecognized attributes    

- __[Fix]__: 'Unable to change operator...' error    

- __[Fix]__: Don't send aggregation 'fetch' requests on paging    

- __[Fix]__: Issue with columnsBar options    

- __[Fix]__: Issue with FilterBar options    


<div id="eq-js/7.0.12" data-released="2021-06-30"></div>

## Version 7.0.12

<div class="aist-article-updated"><span>2021-06-30</span></div>

- __[Fix]__: Fix "No tag property for undefined" error

- __[Fix]__: Fix NPM packages descriptions

- __[Fix]__: Fix buttons behavior in QueryPanel (they were not show for the active row)


<div id="eq-js/7.0.11" data-released="2021-06-16"></div>

## Version 7.0.11

<div class="aist-article-updated"><span>2021-06-16</span></div>

- __[Upd]__: Add "Description" field to Save Query dialog    
 
- __[Fix]__: Fix string resources for ReportView

<div id="eq-js/7.0.9" data-released="2021-05-28"></div>

## Version 7.0.9

<div class="aist-article-updated"><span>2021-05-28</span></div>

- __[Fix]__: Error message insinde ChartWidget     

- __[Fix]__: Clear the value in a condition if the operator's kind is changed from "Scalar" to "List"  

<div id="eq-js/7.0.8" data-released="2021-05-21"></div>

## Version 7.0.8

<div class="aist-article-updated"><span>2021-05-21</span></div>


- __[Fix]__: Issue with FilterBar options    

- __[Fix]__: Issue with columnsBar options    


<div id="eq-js/7.0.7" data-released="2021-04-22"></div>

## Version 7.0.7

<div class="aist-article-updated"><span>2021-04-22</span></div>


- __[New]__: `Query.getConditionTextAsHtml` method    

- __[Upd]__: Totals in pivot are calculated as given aggr func, not only as sum.    

- __[Fix]__: Error callback processing on context.loadQuery    

- __[Fix]__: Totals settings edit dialog refreshing on remove aggr columns    

- __[Fix]__: Issue with community mode error on cal totals when query has condition groups    

<div id="eq-js/7.0.6" data-released="2021-04-09"></div>

## Version 7.0.6

<div class="aist-article-updated"><span>2021-04-09</span></div>

- __[Upd]__: EasyData version to 1.2.4    

<div id="eq-js/7.0.5" data-released="2021-03-31"></div>

## Version 7.0.5

<div class="aist-article-updated"><span>2021-03-31</span></div>


- __[Upd]__: Add `columnTitleFormat` option for context    

<div id="eq-js/7.0.4" data-released="2021-03-29"></div>

## Version 7.0.4

<div class="aist-article-updated"><span>2021-03-29</span></div>

- __[Upd]__: Send totals options with export request.

<div id="eq-js/7.0.3" data-released="2021-03-19"></div>

## Version 7.0.3

<div class="aist-article-updated"><span>2021-03-19</span></div>


- __[Fix]__: Small changes in facets rendering to fit the screen size    

<div id="eq-js/7.0.2" data-released="2021-03-18"></div>

## Version 7.0.2

<div class="aist-article-updated"><span>2021-03-18</span></div>


- __[Upd]__: Add QueryChangePart.Facets to handle facets changed event    

- __[Upd]__: Add facet restrictions based on query    

- __[Upd]__: Improve Pivot facet settings dialog. Add Swipe column and row button    

- __[Upd]__: Make chart legend optional. Add show legend option in chart facet    

- __[Fix]__: Filter in EntitiesPanl    

- __[Fix]__: Pivot display format for `Total` column and first column    

- __[Fix]__: Apply display format in pivot as well    

- __[Fix]__: Disable drag-n-drop on CusomSQLExpression value editing.    

<div id="eq-js/7.0.1" data-released="2021-03-11"></div>

## Version 7.0.1

<div class="aist-article-updated"><span>2021-03-11</span></div>

- __[Fix]__: Disable drag-n-drop on CusomSQLExpression value editing.    

- __[Fix]__: Apply display format in pivot cell.    


<div id="eq-js/7.0.0" data-released="2021-02-26"></div>

## Version 7.0.0

<div class="aist-article-updated"><span>2021-02-26</span></div>


- __[New]__: hideButtons option in Popup Menu    

- __[New]__: submitOnBlur option for Popup Menu    

- __[Upd]__: Refactor `Column` -> `QueryColumn`    

- __[Upd]__: Introduce `context.useEnpoint() method. `endpoint` option is deprecated    

- __[Upd]__: Add `shadowRoot` option for view to support rendering in shadow DOM. Slot options of view not supports either ids or html elements.    

- __[Upd]__: entity filter now support sections separted by > symbol    

- __[Upd]__: Load default date formats from browser    

- __[Upd]__: Popup menu now shows matched groups (not only items) when filtered    

- __[Upd]__: Support string representation of `subQueryDialogHeight` and `subQueryDialogWidth` options    

- __[Upd]__: `i18.setLocale` is deprecated. Use `i18n.setCurrentLocale`    

- __[Upd]__: Add possibility to set aggrFuncId or customSql in addColumn method of query    

- __[Upd]__: Add `context` parameter to onInit event handler    

- __[Upd]__: Add width and height options for dialogs. subQueryDialogHeight, subQueryDialogWidth options are fixed    

- __[Upd]__: Add possibility to get widget from context    

- __[Upd]__: Return syncWithColumns option for EntitiesPanel    

- __[Fix]__: Menu error in column bar when model is empty    

- __[Fix]__: Setting InJoin for condition    

- __[Fix]__: ReportView dialogs' texts    

- __[Fix]__: Close calendar on Now button click if oneClickDateSelection is turned on    

- __[Fix]__: Problem with QueryPanelwidth in subquery dialog    

- __[Fix]__: SubQuery dialog reopening on submit when `autoEditNewCondition` option is turned on.    

- __[Fix]__: Set default time to 00:00:00 if it is not set in date string.    

- __[Fix]__: Error processing in some promises    

- __[Fix]__: `M` and `d` date formats were not correctly processed.    


<div id="eq-js/6.1.4" data-released="2020-12-23"></div>

## Version 6.1.4

<div class="aist-article-updated"><span>2020-12-23</span></div>


- __[New]__: `executeQueryOnChange` option for AdvancedSearchView.    

- __[New]__: `showDateTimeInput` options to show edit input in calendar    

- __[Upd]__: Add `shadowRoot` option for view to support rendering in shadow DOM. Slot options of view not supports either ids or html elements.    

- __[Upd]__: entity filter now support sections separted by > symbol    

- __[Upd]__: Load default date formats from browser    

- __[Upd]__: Popup menu now shows matched groups (not only items) when filtered    

- __[Upd]__: Support string representation of `subQueryDialogHeight` and `subQueryDialogWidth` options    

- __[Fix]__: ReportView dialogs' texts    

- __[Fix]__: Close calendar on Now button click if oneClickDateSelection is turned on    

- __[Fix]__: Problem with QueryPanelwidth in subquery dialog    

<div id="eq-js/6.1.3" data-released="2020-11-12"></div>

## Version 6.1.3

<div class="aist-article-updated"><span>2020-11-12</span></div>


- __[Upd]__: Support string representation of `subQueryDialogHeight` and `subQueryDialogWidth` options    

- __[Fix]__: Problem with QueryPanelwidth in subquery dialog    

<div id="eq-js/6.1.2" data-released="2020-09-30"></div>

## Version 6.1.2

<div class="aist-article-updated"><span>2020-09-30</span></div>


- __[New]__: queryFileExtensions option for views    

- __[Upd]__: Return syncWithColumns option for EntitiesPanel    

- __[Fix]__: query ID was set to null on newReport in ReportView    

- __[Fix]__: Problem with widgets rerendering on sync query    

- __[Fix]__: IE 11 porblem with Object.values error in grid.    

<div id="eq-js/6.1.1" data-released="2020-09-18"></div>

## Version 6.1.1

<div class="aist-article-updated"><span>2020-09-18</span></div>


- __[Upd]__: chunkSize get, set accessor in EasyDataTable    

- __[Fix]__: Paging/chunk processing in EasyDataTable    

<div id="eq-js/6.1.0" data-released="2020-09-12"></div>

## Version 6.1.0

<div class="aist-article-updated"><span>2020-09-12</span></div>


- __[New]__: disableConfirmationOnQueryChange  options for view    

- __[New]__: supportedChartTypes options    

- __[New]__: Support for pivot table functionality (via ResultFacetsPanel)    

- __[New]__: ResultFacetsPanel widget    
This new widget allows to represent the query result set in several different views (facets): as a simple table (grid), a chart or pivot table.


- __[New]__: New grid widget (EasyGrid): more functionality, better styling, increased perfomance.    

- __[New]__: New data flow: lightweight format, data chunks, automatic data load.    

- __[New]__: Introduce @easydata packages    

- __[New]__: Process special date times value editors    

- __[New]__: Spinner in ResultPanel and result option shosProcessIndicator to turn on/off it.    

- __[New]__: Entity scan method    

- __[Upd]__: Modifying condition supports autoEdit    

- __[Upd]__: SyncQueryOnChange option of EqContext    

- __[Upd]__: Reset query modified if query was saved on sync (Advanced Search View)    

- __[Fix]__: Wrong grid cell rendering for multiline values    

- __[Fix]__: Operand's value editor was not applied for date/time attributes.    

- __[Fix]__: "No such endpoint" error message in error.sourceError    

- __[Fix]__:  newQuery method sets wrong query name in BrowserQueryStorage    

- __[Fix]__: Throw error on success query create in context    

- __[Fix]__:  Remove calling  sync after query removal in AdvancedSearchView    

- __[Fix]__: Problem with filter bar on loadModel    

<div id="eq-js/6.0.16" data-released="2020-08-14"></div>

## Version 6.0.16

<div class="aist-article-updated"><span>2020-08-14</span></div>


<div id="eq-js/6.0.15" data-released="2020-08-06"></div>

## Version 6.0.15

<div class="aist-article-updated"><span>2020-08-06</span></div>


- __[New]__:  ColumnsPanel in ReportView    

- __[New]__: ColumnsBar in AdvancedSearchView    

- __[Fix]__: Bug with save report as    

- __[Fix]__: Do not drag column in edit mode    

- __[Fix]__: Data model createQuery method for Enterprise    

- __[Fix]__: Processing non easyquery error reponses    

- __[Fix]__: Setting default text for default value in custom list  and sql list editors    

- __[Fix]__: Setting text for default operant with constant list value editor    

<div id="eq-js/6.0.14" data-released="2020-07-15"></div>

## Version 6.0.14

<div class="aist-article-updated"><span>2020-07-15</span></div>


<div id="eq-js/6.0.13" data-released="2020-06-25"></div>

## Version 6.0.13

<div class="aist-article-updated"><span>2020-06-25</span></div>


- __[Fix]__: Setting default text for default value in custom list  and sql list editors    

- __[Fix]__: Setting text for default operant with constant list value editor    

<div id="eq-js/6.0.12" data-released="2020-06-25"></div>

## Version 6.0.12

<div class="aist-article-updated"><span>2020-06-25</span></div>


- __[Fix]__: Setting default text for default value in custom list  and sql list editors    

- __[Fix]__: Setting text for default operant with constant list value editor    

<div id="eq-js/6.0.11" data-released="2020-05-29"></div>

## Version 6.0.11

<div class="aist-article-updated"><span>2020-05-29</span></div>


<div id="eq-js/6.0.10" data-released="2020-05-18"></div>

## Version 6.0.10

<div class="aist-article-updated"><span>2020-05-18</span></div>


<div id="eq-js/6.0.9" data-released="2020-04-30"></div>

## Version 6.0.9

<div class="aist-article-updated"><span>2020-04-30</span></div>


- __[Fix]__: Condition elements rendering for long values    

- __[Fix]__: Angular problem with TypeScript compiler    

<div id="eq-js/6.0.8" data-released="2020-04-25"></div>

## Version 6.0.8

<div class="aist-article-updated"><span>2020-04-25</span></div>


- __[New]__: Implemented insertColumn, removeColumn methods of EqDataTable class    

- __[Fix]__: dateTimeToStr() for 'hh' and 'tt' formats    

- __[Fix]__: Extra parameters processing in list value editors    


<div id="eq-js/6.0.7" data-released="2020-03-25"></div>

## Version 6.0.7
<div class="aist-article-updated"><span>2020-03-25</span></div>

* Update:  **DateTimePicker styles**   
Control's size can be changed by single font-size style of the root div.

* Fix: **Incorrect  calendar display**   
Count of days in a month were shifted to one month

* Fix:  **DateTimePicker hiding bug**   
DateTimePicker was not always closed on mouse click outside the control


<div id="eq-js/6.0.6" data-released="2020-03-10"</div>

## Version 6.0.6
<div class="aist-article-updated"><span>2020-03-10</span></div>

- New: **editableParts options for QueryPanel**   
This options can be used to allow or restrict addition, delete, editing values, operators and use other actions of QueryPanel

- Fix: **Processing array of columns/conditions on attachQueryObserver in widgets**

- Fix: **Error with stopPropogation on changing order**

- Fix: **Proglem with text field of expression**   
Fixes problem with queries shown in WinForms edition

- Fix: **Wrong content type on export request**

- Fix: **Reading lattr of EntityAttr from JSON format**   
lattr  property was not processed coreclty

<div id="eq-js/6.0.5" data-released="2020-03-06"></div>

## Version 6.0.5
<div class="aist-article-updated"><span>2020-03-06</span></div>

* Add: `showCheckboxes` options in ColumnsPanel.
* Fix: Wrong text message on sucessfull `endProcess` event. 
* Fix: Remove validation for disabled conditions.
* Fix: Wrong behavior in ReportView: `createResultGridWidget` was not called.
* Fix: Setting and removing aggregate function behavior in ColumsnPanel.
* Fix: View styles for mobile representation.

<div id="eq-js/6.0.4" data-released="2020-02-13"></div>

## Version 6.0.4
<div class="aist-article-updated"><span>2020-02-13</span></div>

* Fix: Calendar appeared behind sub-query dialog.
* Fix: Export all renderes (there were not visible outside).
* Fix: Translations of menu items in QueryPanel or ColumnsPanel were not processed properly.
* Fix: `userData` was not accessible in entity attributes (EntityAttr objects).

<div id="eq-js/6.0.3" data-released="2020-01-21"></div>

## Version 6.0.3
<div class="aist-article-updated"><span>2020-01-21</span></div>

* New: Make ColumnsPanel mobile-friendly.
* New: Highlight input elements with invalid values with a red border.

<div id="eq-js/6.0.2" data-released="2020-01-13"></div>

## Version 6.0.2
<div class="aist-article-updated"><span>2020-01-13</span></div>

* New: Now you can call `useEnterprise` with a callback function for initialization. The license key is taken from the server-side (on `/.easyquery/lck` endpoint by default).
* New: Showing a landing area in QueryPanel during drag-n-drop operations.
* Fix: Drag-n-drop problems in FilterBar.
* Fix: Loading/saving behavior for entity attributes and expressions
* New: Add `queryPanel` argument in `onGetExpressionRenderer` event


<div id="eq-js/6.0.1" data-released="2020-01-03"></div>

## Version 6.0.1
<div class="aist-article-updated"><span>2020-01-03</span></div>

* Fix: enum processing in OData 
* Fix: `init` function in views changed the widgets behavior if called twice
* Fix: Wrong event on `clear` in FilterBar
* Fix: Drag-n-drop style in ColumnsPanel

<div id="eq-js/6.0.0" data-released="2019-12-02"></div>

## Version 6.0.0
<div class="aist-article-updated"><span>2019-12-02</span></div>

Despite of the version number this is an initial release of EasyQuery.JS with the new arthitecture and composition.

EasyQuery.JS is a separate product now with two main editions now: Community and Enterprise. Its UI part was totally rewritten and now does not depend on JQuery.

For more information please read the [Release Notes for version 6.0.0](//easyquery/javascript/docs/easyquery/javascript/docs/)
