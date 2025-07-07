---
title: AdvancedSearchView class
slug: >-
  api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class
sidebar:
  order: 100
---

The EasyQuery client-side view that represents the UI for advanced search page

## Extends
[View](api-reference-7x/easyquery-packages/ui-package/classes/view-class)

## Index
### [Constructors](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#constructor)

### [Protected Properties](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#protected-properties-1)
- [chartWidget](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#chartwidget)
- [clearQueryButton](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#clearquerybutton)
- [columnsBarWidget](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#columnsbarwidget)
- [columnsPanelWidget](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#columnspanelwidget)
- [context](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#context)
- [copyQueryButton](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#copyquerybutton)
- [disabledClass](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#disabledclass)
- [domRoots](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#domroots)
- [dropdownButtonClass](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#dropdownbuttonclass)
- [dropdownContainerClass](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#dropdowncontainerclass)
- [dropdownContentClass](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#dropdowncontentclass)
- [dropdownShowClass](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#dropdownshowclass)
- [enableExport](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#enableexport)
- [entitiesPanelWidget](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#entitiespanelwidget)
- [exportButtons](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#exportbuttons)
- [exportWidget](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#exportwidget)
- [fetchDataButton](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#fetchdatabutton)
- [filterBarWidget](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#filterbarwidget)
- [loadQueryButton](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#loadquerybutton)
- [loadQueryFromFileButton](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#loadqueryfromfilebutton)
- [loadQueryFromFileInput](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#loadqueryfromfileinput)
- [localeWidget](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#localewidget)
- [newQueryButton](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#newquerybutton)
- [processWidget](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#processwidget)
- [queryListPanel](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#querylistpanel)
- [queryListSelector](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#querylistselector)
- [queryNameLabel](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#querynamelabel)
- [queryNameWidget](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#querynamewidget)
- [queryPanelWidget](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#querypanelwidget)
- [removeQueryButton](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#removequerybutton)
- [resultCountSlot](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#resultcountslot)
- [resultFacetPanelWidget](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#resultfacetpanelwidget)
- [resultGridWidget](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#resultgridwidget)
- [resultOptions](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#resultoptions)
- [resultPanelSlot](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#resultpanelslot)
- [saveQueryButton](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#savequerybutton)
- [saveQueryToFileButton](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#savequerytofilebutton)
- [sortingBarWidget](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#sortingbarwidget)
- [statementPanelWidget](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#statementpanelwidget)
- [statementWidget](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#statementwidget)
- [storageDropButton](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#storagedropbutton)

### [Public Methods](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#public-methods-1)
- [checkIfQueryModified](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#checkifquerymodified)
- [detach](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#detach)
- [executeQuery](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#executequery)
- [fetchData](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#fetchdata)
- [getContext](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#getcontext)
- [init](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#init)
- [loadQuery](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#loadquery)
- [setDialogService](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#setdialogservice)
- [showLoadQueryFromFileDialog](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#showloadqueryfromfiledialog)
- [syncQuery](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#syncquery)

### [Protected Methods](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#protected-methods-1)
- [clearQueryButtonClick](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#clearquerybuttonclick)
- [copyQueryButtonClick](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#copyquerybuttonclick)
- [createChartWidget](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#createchartwidget)
- [createColumnsBarWidget](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#createcolumnsbarwidget)
- [createColumnsPanelWidget](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#createcolumnspanelwidget)
- [createEntitiesPanelWidget](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#createentitiespanelwidget)
- [createExportWidget](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#createexportwidget)
- [createFilterBarWidget](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#createfilterbarwidget)
- [createLocaleWidget](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#createlocalewidget)
- [createNewQuery](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#createnewquery)
- [createProcessWidget](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#createprocesswidget)
- [createQueryNameWidget](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#createquerynamewidget)
- [createQueryPanelWidget](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#createquerypanelwidget)
- [createResultFacetsPanel](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#createresultfacetspanel)
- [createResultGridWidget](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#createresultgridwidget)
- [createSortingBarWidget](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#createsortingbarwidget)
- [createStatementPanelWidget](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#createstatementpanelwidget)
- [disableExportButtons](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#disableexportbuttons)
- [displayRecordsCount](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#displayrecordscount)
- [enableExportButtons](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#enableexportbuttons)
- [fetchDataButtonClick](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#fetchdatabuttonclick)
- [fillLoadQueryButtonMenu](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#fillloadquerybuttonmenu)
- [hideExportButtons](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#hideexportbuttons)
- [hideResultSpinner](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#hideresultspinner)
- [initDone](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#initdone)
- [initOptions](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#initoptions)
- [initWidgets](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#initwidgets)
- [loadQueryButtonClick](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#loadquerybuttonclick)
- [loadQueryFromFileButtonClick](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#loadqueryfromfilebuttonclick)
- [loadQueryFromFileInputSelect](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#loadqueryfromfileinputselect)
- [newQueryButtonClick](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#newquerybuttonclick)
- [refreshQueryList](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#refreshquerylist)
- [removeCurrentQuery](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#removecurrentquery)
- [removeQueryButtonClick](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#removequerybuttonclick)
- [renderSaveToFileDialogBody](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#rendersavetofiledialogbody)
- [resolveElement](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#resolveelement)
- [resolveElementsByClassName](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#resolveelementsbyclassname)
- [saveCurrentQuery](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#savecurrentquery)
- [saveQuery](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#savequery)
- [saveQueryButtonClick](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#savequerybuttonclick)
- [saveQueryToFileButtonClick](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#savequerytofilebuttonclick)
- [showNewQueryDialog](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#shownewquerydialog)
- [showQueryChangedDialog](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#showquerychangeddialog)
- [showRemoveQueryDialog](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#showremovequerydialog)
- [showResultSpinner](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#showresultspinner)
- [showSaveQueryDialog](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#showsavequerydialog)
- [showSaveQueryToFileDialog](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#showsavequerytofiledialog)
- [storageDropButtonClick](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#storagedropbuttonclick)
- [toggleExportButtons](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class#toggleexportbuttons)


## Constructors

---
#### constructor

⊕ new AdvancedSearchView(): [AdvancedSearchView](api-reference-7x/easyquery-packages/ui-package/classes/advancedsearchview-class)


---

## Protected Properties

---
### chartWidget

● chartWidget?: [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class)

---
### clearQueryButton

● clearQueryButton: `HTMLElement`

---
### columnsBarWidget

● columnsBarWidget?: [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class)

---
### columnsPanelWidget

● columnsPanelWidget?: [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class)

---
### context

● context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)

---
### copyQueryButton

● copyQueryButton: `HTMLElement`

---
### disabledClass

● disabledClass: `string` = `"eqjs-disabled"`

---
### domRoots

● domRoots: `Array`&lt;`Document` | `ShadowRoot`&gt; = ` [ document ]`

---
### dropdownButtonClass

● dropdownButtonClass: `string` = `"eqv-drop-button"`

---
### dropdownContainerClass

● dropdownContainerClass: `string` = `"eqv-dropdown-container"`

---
### dropdownContentClass

● dropdownContentClass: `string` = `"eqv-dropdown-content"`

---
### dropdownShowClass

● dropdownShowClass: `string` = `"eqv-dropdown-show"`

---
### enableExport

● enableExport: `boolean` = `false`

---
### entitiesPanelWidget

● entitiesPanelWidget?: [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class)

---
### exportButtons

● exportButtons: `HTMLElement`[] = ` []`

---
### exportWidget

● exportWidget?: [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class)

---
### fetchDataButton

● fetchDataButton: `HTMLElement`

---
### filterBarWidget

● filterBarWidget?: [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class)

---
### loadQueryButton

● loadQueryButton: `HTMLElement`

---
### loadQueryFromFileButton

● loadQueryFromFileButton: `HTMLElement`

---
### loadQueryFromFileInput

● loadQueryFromFileInput: `HTMLInputElement`

---
### localeWidget

● localeWidget?: [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class)

---
### newQueryButton

● newQueryButton: `HTMLElement`

---
### processWidget

● processWidget?: [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class)

---
### queryListPanel

● queryListPanel: `HTMLElement`

---
### queryListSelector

● queryListSelector: `HTMLSelectElement`

---
### queryNameLabel

● queryNameLabel: `HTMLElement`

---
### queryNameWidget

● queryNameWidget?: [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class)

---
### queryPanelWidget

● queryPanelWidget?: [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class)

---
### removeQueryButton

● removeQueryButton: `HTMLElement`

---
### resultCountSlot

● resultCountSlot?: `HTMLElement`

---
### resultFacetPanelWidget

● resultFacetPanelWidget?: [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class)

---
### resultGridWidget

● resultGridWidget?: [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class)

---
### resultOptions

● resultOptions: [EqResultOptions](api-reference-7x/easyquery-packages/ui-package/interfaces/eqresultoptions-interface)

---
### resultPanelSlot

● resultPanelSlot?: `HTMLElement`

---
### saveQueryButton

● saveQueryButton: `HTMLElement`

---
### saveQueryToFileButton

● saveQueryToFileButton: `HTMLElement`

---
### sortingBarWidget

● sortingBarWidget?: [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class)

---
### statementPanelWidget

● statementPanelWidget?: [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class)

---
### statementWidget

● statementWidget?: [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class)

---
### storageDropButton

● storageDropButton: `HTMLElement`

---
## Public Methods

---
### checkIfQueryModified
▸ checkIfQueryModified(callback: `any`): `void`

#### Parameters:
- callback: `any`


**Returns** `void`


---
### detach
▸ detach(): `void`


**Returns** `void`


---
### executeQuery
▸ executeQuery(options?: `any`): `void`

#### Parameters:
- options: `any`, *Optional* 


**Returns** `void`


---
### fetchData
Fetches the data according to the query and other options defined in the context.

▸ fetchData(options?: `any`): `void`

#### Parameters:
- options: `any`, *Optional*  - The options.



**Returns** `void`


---
### getContext
▸ getContext(): [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)


**Returns** [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)


---
### init
▸ init(options?: [EqViewOptions](api-reference-7x/easyquery-packages/ui-package/interfaces/eqviewoptions-interface)): `void`

#### Parameters:
- options: [EqViewOptions](api-reference-7x/easyquery-packages/ui-package/interfaces/eqviewoptions-interface), *Optional* 


**Returns** `void`


---
### loadQuery
▸ loadQuery(queryId: `string`): `void`

#### Parameters:
- queryId: `string`


**Returns** `void`


---
### setDialogService
Sets dialog service for the view

▸ setDialogService(dialogService: `DialogService`): `void`

#### Parameters:
- dialogService: `DialogService` - The dialog service.



**Returns** `void`


---
### showLoadQueryFromFileDialog
▸ showLoadQueryFromFileDialog(): `void`


**Returns** `void`


---
### syncQuery
Sends current query to the backend.

▸ syncQuery(): `void`


**Returns** `void`


---
## Protected Methods

---
### clearQueryButtonClick
▸ clearQueryButtonClick(): `void`


**Returns** `void`


---
### copyQueryButtonClick
▸ copyQueryButtonClick(): `void`


**Returns** `void`


---
### createChartWidget
Creates the widget that represents Chart Widget.

▸ createChartWidget(slotElement: `HTMLElement`): [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class)

#### Parameters:
- slotElement: `HTMLElement`


**Returns** [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class) - the created Widget object.



---
### createColumnsBarWidget
Creates the widget that represents Columns Bar.

▸ createColumnsBarWidget(slot: `HTMLElement`): [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class)

#### Parameters:
- slot: `HTMLElement` - The HTMLElement to place the created widget in.


**Returns** [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class) - the created Widget object.



---
### createColumnsPanelWidget
Creates the widget that represents Columns Panel.

▸ createColumnsPanelWidget(slot: `HTMLElement`): [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class)

#### Parameters:
- slot: `HTMLElement` - The HTMLElement to place the created widget in.


**Returns** [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class) - the created Widget object.



---
### createEntitiesPanelWidget
Creates the widget that represents Entity Panel.

▸ createEntitiesPanelWidget(slot: `HTMLElement`): [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class)

#### Parameters:
- slot: `HTMLElement` - The HTMLElement to place the created widget in.


**Returns** [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class) - the created Widget object.



---
### createExportWidget
Creates the widget that represents Export funcionality.

▸ createExportWidget(slot: `HTMLElement`): [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class)

#### Parameters:
- slot: `HTMLElement` - 



**Returns** [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class)


---
### createFilterBarWidget
Creates the widget that represents Filter Bar.

▸ createFilterBarWidget(slot: `HTMLElement`): [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class)

#### Parameters:
- slot: `HTMLElement` - The HTMLElement to place the created widget in.


**Returns** [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class) - the created Widget object.



---
### createLocaleWidget
Creates the widget that represents Locale Widget.

▸ createLocaleWidget(slot: `HTMLElement`): [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class)

#### Parameters:
- slot: `HTMLElement` - The HTMLElement to place the created widget in.


**Returns** [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class) - the created Widget object.



---
### createNewQuery
▸ createNewQuery(options?: [ContextNewQueryOptions](api-reference-7x/easyquery-packages/core-package/interfaces/contextnewqueryoptions-interface)): [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)

#### Parameters:
- options: [ContextNewQueryOptions](api-reference-7x/easyquery-packages/core-package/interfaces/contextnewqueryoptions-interface), *Optional* 


**Returns** [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)


---
### createProcessWidget
Creates the widget that represents Process Widget.

▸ createProcessWidget(slot: `HTMLElement`): [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class)

#### Parameters:
- slot: `HTMLElement` - The HTMLElement to place the created widget in.


**Returns** [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class) - the created Widget object.



---
### createQueryNameWidget
Creates the widget that represents Query Name Widget.

▸ createQueryNameWidget(slot: `HTMLElement`): [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class)

#### Parameters:
- slot: `HTMLElement` - The HTMLElement to place the created widget in.


**Returns** [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class) - the created Widget object.



---
### createQueryPanelWidget
Creates the widget that represents Query Panel.

▸ createQueryPanelWidget(slot: `HTMLElement`): [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class)

#### Parameters:
- slot: `HTMLElement` - The HTMLElement to place the created widget in.


**Returns** [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class) - the created Widget object.



---
### createResultFacetsPanel
Creates the widget that represents Result Facets Panel Widget.

▸ createResultFacetsPanel(slot: `HTMLElement`): [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class)

#### Parameters:
- slot: `HTMLElement` - 



**Returns** [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class)


---
### createResultGridWidget
Creates the widget that represents Grid Widget.

▸ createResultGridWidget(slotElement: `HTMLElement`): [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class)

#### Parameters:
- slotElement: `HTMLElement`


**Returns** [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class) - the created Widget object.



---
### createSortingBarWidget
Creates the widget that represents Sorting Bar.

▸ createSortingBarWidget(slot: `HTMLElement`): [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class)

#### Parameters:
- slot: `HTMLElement` - The HTMLElement to place the created widget in.


**Returns** [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class) - the created Widget object.



---
### createStatementPanelWidget
Creates the widget that represents Statement Panel Widget.

▸ createStatementPanelWidget(slot: `HTMLElement`): [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class)

#### Parameters:
- slot: `HTMLElement` - 



**Returns** [Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class)


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
### fetchDataButtonClick
▸ fetchDataButtonClick(): `void`


**Returns** `void`


---
### fillLoadQueryButtonMenu
▸ fillLoadQueryButtonMenu(queryList: `any`): `void`

#### Parameters:
- queryList: `any`


**Returns** `void`


---
### hideExportButtons
Hides export buttons.

▸ hideExportButtons(): `void`


**Returns** `void`


---
### hideResultSpinner
▸ hideResultSpinner(): `void`


**Returns** `void`


---
### initDone
▸ initDone(): `void`


**Returns** `void`


---
### initOptions
▸ initOptions(options?: [EqViewOptions](api-reference-7x/easyquery-packages/ui-package/interfaces/eqviewoptions-interface)): [EqViewOptions](api-reference-7x/easyquery-packages/ui-package/interfaces/eqviewoptions-interface)

#### Parameters:
- options: [EqViewOptions](api-reference-7x/easyquery-packages/ui-package/interfaces/eqviewoptions-interface), *Optional* 


**Returns** [EqViewOptions](api-reference-7x/easyquery-packages/ui-package/interfaces/eqviewoptions-interface)


---
### initWidgets
▸ initWidgets(options?: [EqViewOptions](api-reference-7x/easyquery-packages/ui-package/interfaces/eqviewoptions-interface)): `void`

#### Parameters:
- options: [EqViewOptions](api-reference-7x/easyquery-packages/ui-package/interfaces/eqviewoptions-interface), *Optional* 


**Returns** `void`


---
### loadQueryButtonClick
▸ loadQueryButtonClick(): `void`


**Returns** `void`


---
### loadQueryFromFileButtonClick
▸ loadQueryFromFileButtonClick(): `void`


**Returns** `void`


---
### loadQueryFromFileInputSelect
▸ loadQueryFromFileInputSelect(): `void`


**Returns** `void`


---
### newQueryButtonClick
▸ newQueryButtonClick(): `void`


**Returns** `void`


---
### refreshQueryList
▸ refreshQueryList(): `void`


**Returns** `void`


---
### removeCurrentQuery
▸ removeCurrentQuery(): `void`


**Returns** `void`


---
### removeQueryButtonClick
▸ removeQueryButtonClick(): `void`


**Returns** `void`


---
### renderSaveToFileDialogBody
▸ renderSaveToFileDialogBody(name: `string`,format?: `string`): `HTMLElement`

#### Parameters:
- name: `string`
- format: `string`, *Default value* = `"json"`


**Returns** `HTMLElement`


---
### resolveElement
▸ resolveElement(elementOrId: `string` | `HTMLElement`): `HTMLElement`

#### Parameters:
- elementOrId: `string` | `HTMLElement`


**Returns** `HTMLElement`


---
### resolveElementsByClassName
▸ resolveElementsByClassName(className: `string`): `Element`[]

#### Parameters:
- className: `string`


**Returns** `Element`[]


---
### saveCurrentQuery
▸ saveCurrentQuery(copyQuery?: `boolean`,callback?: `any`): `void`

#### Parameters:
- copyQuery: `boolean`, *Default value* = `false`
- callback: `any`, *Optional* 


**Returns** `void`


---
### saveQuery
▸ saveQuery(success: `any`,error?: `any`): `void`

#### Parameters:
- success: `any`
- error: `any`, *Optional* 


**Returns** `void`


---
### saveQueryButtonClick
▸ saveQueryButtonClick(): `void`


**Returns** `void`


---
### saveQueryToFileButtonClick
▸ saveQueryToFileButtonClick(): `void`


**Returns** `void`


---
### showNewQueryDialog
▸ showNewQueryDialog(callback: (result: `string`) => `Promise`&lt;`DlgCallbackResult`&gt;): `void`

#### Parameters:
- callback: (result: `string`) => `Promise`&lt;`DlgCallbackResult`&gt;


**Returns** `void`


---
### showQueryChangedDialog
▸ showQueryChangedDialog(callback: (result: `boolean`) => `void`): `void`

#### Parameters:
- callback: (result: `boolean`) => `void`


**Returns** `void`


---
### showRemoveQueryDialog
▸ showRemoveQueryDialog(callback: (result: `boolean`) => `void`): `void`

#### Parameters:
- callback: (result: `boolean`) => `void`


**Returns** `void`


---
### showResultSpinner
▸ showResultSpinner(): `void`


**Returns** `void`


---
### showSaveQueryDialog
▸ showSaveQueryDialog(callback: (result: `string`) => `Promise`&lt;`DlgCallbackResult`&gt;): `void`

#### Parameters:
- callback: (result: `string`) => `Promise`&lt;`DlgCallbackResult`&gt;


**Returns** `void`


---
### showSaveQueryToFileDialog
▸ showSaveQueryToFileDialog(callback: (fileName: `string`, format: `string`) => `Promise`&lt;`DlgCallbackResult`&gt;): `void`

#### Parameters:
- callback: (fileName: `string`, format: `string`) => `Promise`&lt;`DlgCallbackResult`&gt;


**Returns** `void`


---
### storageDropButtonClick
▸ storageDropButtonClick(): `void`


**Returns** `void`


---
### toggleExportButtons
▸ toggleExportButtons(): `void`


**Returns** `void`


---
