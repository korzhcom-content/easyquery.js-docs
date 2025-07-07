---
title: AdvancedSearchView class
slug: api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class
sidebar:
  order: 100
---

The EasyQuery client-side view that represents the UI for advanced search page

## Index
### [Public Properties](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#public-properties-1)
- [context](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#context)

### [Protected Properties](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#protected-properties-1)
- [clearQueryButton](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#clearquerybutton)
- [copyQueryButton](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#copyquerybutton)
- [disabledClass](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#disabledclass)
- [dropdownButtonClass](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#dropdownbuttonclass)
- [dropdownContainerClass](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#dropdowncontainerclass)
- [dropdownContentClass](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#dropdowncontentclass)
- [dropdownShowClass](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#dropdownshowclass)
- [executeQueryButton](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#executequerybutton)
- [loadQueryButton](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#loadquerybutton)
- [newQueryButton](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#newquerybutton)
- [queryListSelector](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#querylistselector)
- [queryNameLabel](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#querynamelabel)
- [removeQueryButton](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#removequerybutton)
- [saveQueryButton](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#savequerybutton)
- [storageDropButton](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#storagedropbutton)

### [Public Methods](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#public-methods-1)
- [executeQuery](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#executequery)
- [getContext](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#getcontext)
- [init](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#init)
- [loadQuery](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#loadquery)
- [setDialogService](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#setdialogservice)
- [syncQuery](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#syncquery)

### [Protected Methods](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#protected-methods-1)
- [checkIfQueryModified](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#checkifquerymodified)
- [createChartWidget](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#createchartwidget)
- [createColumnsPanelWidget](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#createcolumnspanelwidget)
- [createEntitiesPanelWidget](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#createentitiespanelwidget)
- [createLocaleWidget](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#createlocalewidget)
- [createQueryPanelWidget](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#createquerypanelwidget)
- [createResultGridWidget](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#createresultgridwidget)
- [disableExportButtons](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#disableexportbuttons)
- [displayRecordsCount](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#displayrecordscount)
- [enableExportButtons](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#enableexportbuttons)
- [fillLoadQueryButtonMenu](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#fillloadquerybuttonmenu)
- [hideExportButtons](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#hideexportbuttons)
- [initDone](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#initdone)
- [saveCurrentQuery](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#savecurrentquery)
- [showNewQueryDialog](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#shownewquerydialog)
- [showQueryChangedDialog](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#showquerychangeddialog)
- [showRemoveQueryDialog](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#showremovequerydialog)
- [showSaveQueryDialog](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#showsavequerydialog)
- [updateQuerySelector](api-reference-old/api-reference-6x/ui-package/classes/advancedsearchview-class#updatequeryselector)



## Public Properties

---
### context

● context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class) = ` new EqContext()`

---
## Protected Properties

---
### clearQueryButton

● clearQueryButton: `HTMLElement`

---
### copyQueryButton

● copyQueryButton: `HTMLElement`

---
### disabledClass

Name of the class to add to disabled elements.

● disabledClass: `string` = `"eqjs-disabled"`

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
### executeQueryButton

● executeQueryButton: `HTMLElement`

---
### loadQueryButton

● loadQueryButton: `HTMLElement`

---
### newQueryButton

● newQueryButton: `HTMLElement`

---
### queryListSelector

● queryListSelector: `HTMLSelectElement`

---
### queryNameLabel

● queryNameLabel: `HTMLElement`

---
### removeQueryButton

● removeQueryButton: `HTMLElement`

---
### saveQueryButton

● saveQueryButton: `HTMLElement`

---
### storageDropButton

● storageDropButton: `HTMLElement`

---
## Public Methods

---
### executeQuery
Builds and executes current query.

▸ executeQuery(options?: `any`): `void`

#### Parameters:
- options: `any`, *Optional*  - The options. In particular, `options.page` defines what page of data to query.



**Returns** `void`


---
### getContext
Returns the context.

▸ getContext(): [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)


**Returns** [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class) - [[EqContext]] object.



---
### init
Initializes the view.

▸ init(options?: [EqViewOptions](api-reference-old/api-reference-6x/ui-package/interfaces/eqviewoptions-interface)): `void`

#### Parameters:
- options: [EqViewOptions](api-reference-old/api-reference-6x/ui-package/interfaces/eqviewoptions-interface), *Optional*  - The [[EqViewOptions]] object.



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

▸ setDialogService(dialogService: [DialogService](api-reference-old/api-reference-6x/ui-package/interfaces/dialogservice-interface)): `void`

#### Parameters:
- dialogService: [DialogService](api-reference-old/api-reference-6x/ui-package/interfaces/dialogservice-interface) - The dialog service.



**Returns** `void`


---
### syncQuery
Sends current query to back-end.

▸ syncQuery(): `void`


**Returns** `void`


---
## Protected Methods

---
### checkIfQueryModified
▸ checkIfQueryModified(callback: `any`): `void`

#### Parameters:
- callback: `any`


**Returns** `void`


---
### createChartWidget
▸ createChartWidget(slotElement: `HTMLElement`): [Widget](api-reference-old/api-reference-6x/core-package/classes/widget-class)

#### Parameters:
- slotElement: `HTMLElement`


**Returns** [Widget](api-reference-old/api-reference-6x/core-package/classes/widget-class)


---
### createColumnsPanelWidget
Creates the widget that represents Columns Panel.

▸ createColumnsPanelWidget(placeholderElement: `HTMLElement`): [Widget](api-reference-old/api-reference-6x/core-package/classes/widget-class)

#### Parameters:
- placeholderElement: `HTMLElement` - The [[HTMLElement]] to place the created widget in.


**Returns** [Widget](api-reference-old/api-reference-6x/core-package/classes/widget-class) - the created [[Widget]] object.



---
### createEntitiesPanelWidget
Creates the widget that represents Entity Panel.

▸ createEntitiesPanelWidget(placeholderElement: `HTMLElement`): [Widget](api-reference-old/api-reference-6x/core-package/classes/widget-class)

#### Parameters:
- placeholderElement: `HTMLElement` - The [[HTMLElement]] to place the created widget in.


**Returns** [Widget](api-reference-old/api-reference-6x/core-package/classes/widget-class) - the created [[Widget]] object.



---
### createLocaleWidget
▸ createLocaleWidget(placeholderElement: `HTMLElement`): [Widget](api-reference-old/api-reference-6x/core-package/classes/widget-class)

#### Parameters:
- placeholderElement: `HTMLElement`


**Returns** [Widget](api-reference-old/api-reference-6x/core-package/classes/widget-class)


---
### createQueryPanelWidget
Creates the widget that represents Query Panel.

▸ createQueryPanelWidget(placeholderElement: `HTMLElement`): [Widget](api-reference-old/api-reference-6x/core-package/classes/widget-class)

#### Parameters:
- placeholderElement: `HTMLElement` - The [[HTMLElement]] to place the created widget in.


**Returns** [Widget](api-reference-old/api-reference-6x/core-package/classes/widget-class) - the created [[Widget]] object.



---
### createResultGridWidget
▸ createResultGridWidget(slotElement: `HTMLElement`): [Widget](api-reference-old/api-reference-6x/core-package/classes/widget-class)

#### Parameters:
- slotElement: `HTMLElement`


**Returns** [Widget](api-reference-old/api-reference-6x/core-package/classes/widget-class)


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
### fillLoadQueryButtonMenu
▸ fillLoadQueryButtonMenu(queryList: `any`,onQuerySelect: (queryId: `string`) => `void`): `void`

#### Parameters:
- queryList: `any`
- onQuerySelect: (queryId: `string`) => `void`


**Returns** `void`


---
### hideExportButtons
Hides export buttons.

▸ hideExportButtons(): `void`


**Returns** `void`


---
### initDone
▸ initDone(): `void`


**Returns** `void`


---
### saveCurrentQuery
▸ saveCurrentQuery(copyQuery?: `boolean`,callback?: `any`): `void`

#### Parameters:
- copyQuery: `boolean`, *Default value* = `false`
- callback: `any`, *Optional* 


**Returns** `void`


---
### showNewQueryDialog
▸ showNewQueryDialog(callback: `any`): `void`

#### Parameters:
- callback: `any`


**Returns** `void`


---
### showQueryChangedDialog
▸ showQueryChangedDialog(callback: `any`): `void`

#### Parameters:
- callback: `any`


**Returns** `void`


---
### showRemoveQueryDialog
▸ showRemoveQueryDialog(callback: `any`): `void`

#### Parameters:
- callback: `any`


**Returns** `void`


---
### showSaveQueryDialog
▸ showSaveQueryDialog(callback: `any`): `void`

#### Parameters:
- callback: `any`


**Returns** `void`


---
### updateQuerySelector
▸ updateQuerySelector(): `void`


**Returns** `void`


---
