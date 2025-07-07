---
title: ColumnRendererCB class
slug: api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class
sidebar:
  order: 100
---

## Index
### [Constructors](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#constructor)

### [Public Properties](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#public-properties-1)
- [onHideButtonsMobile](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#onhidebuttonsmobile)
- [onShowButtonsMobile](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#onshowbuttonsmobile)

### [Protected Properties](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#protected-properties-1)
- [bar](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#bar)
- [baseAttr](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#baseattr)
- [column](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#column)
- [element](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#element)
- [functionMenu](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#functionmenu)
- [isMouseOverBlock](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#ismouseoverblock)
- [keepShowingButtons](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#keepshowingbuttons)

### [Protected Accessors](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#protected-accessors-1)
- [cssPrefix](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#cssprefix)

### [Public Methods](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#public-methods-1)
- [buttonDeleteClickHandler](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#buttondeleteclickhandler)
- [buttonSortingClickHandler](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#buttonsortingclickhandler)
- [buttonTypeClickHandler](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#buttontypeclickhandler)
- [fireColumnChanged](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#firecolumnchanged)
- [refresh](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#refresh)
- [render](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#render)

### [Protected Methods](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#protected-methods-1)
- [adjustButtonsVisibility](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#adjustbuttonsvisibility)
- [changeTypeHandler](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#changetypehandler)
- [createFunctionMenu](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#createfunctionmenu)
- [enterButtonBlock](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#enterbuttonblock)
- [getAttribute](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#getattribute)
- [getClassesToAdd](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#getclassestoadd)
- [getDefaultCaption](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#getdefaultcaption)
- [getDefaultTitleText](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#getdefaulttitletext)
- [getUIS](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#getuis)
- [hideButtons](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#hidebuttons)
- [isColumnActive](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#iscolumnactive)
- [isEditable](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#iseditable)
- [leaveButtonBlock](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#leavebuttonblock)
- [renderButtonsBlock](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#renderbuttonsblock)
- [renderButtonsBlockMobile](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#renderbuttonsblockmobile)
- [renderCaptionBlock](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#rendercaptionblock)
- [renderCaptionEditorMobile](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#rendercaptioneditormobile)
- [renderColumnTypeButton](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#rendercolumntypebutton)
- [renderDeleteButton](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#renderdeletebutton)
- [renderSortingButton](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#rendersortingbutton)
- [renderSortingImage](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#rendersortingimage)
- [showButtons](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class#showbuttons)


## Constructors

---
#### constructor

⊕ new ColumnRendererCB(panel: [ColumnsBar](api-reference-7x/easyquery-packages/ui-package/classes/columnsbar-class),column: [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class),slot?: `HTMLDivElement`): [ColumnRendererCB](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercb-class)

#### Parameters:
- panel: [ColumnsBar](api-reference-7x/easyquery-packages/ui-package/classes/columnsbar-class)
- column: [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)
- slot: `HTMLDivElement`, *Optional* 


---

## Public Properties

---
### onHideButtonsMobile

● onHideButtonsMobile: () => `void`

---
### onShowButtonsMobile

● onShowButtonsMobile: () => `void`

---
## Protected Properties

---
### bar

● bar: [ColumnsBar](api-reference-7x/easyquery-packages/ui-package/classes/columnsbar-class)

---
### baseAttr

● baseAttr: [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class)

---
### column

● column: [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)

---
### element

● element: `HTMLDivElement`

---
### functionMenu

● functionMenu: [PopupMenu](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class) = ` null`

---
### isMouseOverBlock

● isMouseOverBlock: `boolean` = `false`

---
### keepShowingButtons

● keepShowingButtons: `boolean` = `false`

---
## Protected Accessors

---
### cssPrefix
⇄ get cssPrefix(): `string`


**Returns** `string`


---
## Public Methods

---
### buttonDeleteClickHandler
▸ buttonDeleteClickHandler(ev: `Event`): `boolean`

#### Parameters:
- ev: `Event`


**Returns** `boolean`


---
### buttonSortingClickHandler
▸ buttonSortingClickHandler(ev: `Event`,anchor: `HTMLDivElement`): `boolean`

#### Parameters:
- ev: `Event`
- anchor: `HTMLDivElement`


**Returns** `boolean`


---
### buttonTypeClickHandler
▸ buttonTypeClickHandler(ev: `Event`): `boolean`

#### Parameters:
- ev: `Event`


**Returns** `boolean`


---
### fireColumnChanged
▸ fireColumnChanged(): `void`


**Returns** `void`


---
### refresh
▸ refresh(): `void`


**Returns** `void`


---
### render
▸ render(): `HTMLDivElement`


**Returns** `HTMLDivElement`


---
## Protected Methods

---
### adjustButtonsVisibility
▸ adjustButtonsVisibility(): `void`


**Returns** `void`


---
### changeTypeHandler
▸ changeTypeHandler(ev: `Event`): `any`

#### Parameters:
- ev: `Event`


**Returns** `any`


---
### createFunctionMenu
▸ createFunctionMenu(): `void`


**Returns** `void`


---
### enterButtonBlock
▸ enterButtonBlock(): `void`


**Returns** `void`


---
### getAttribute
▸ getAttribute(): [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class)


**Returns** [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class)


---
### getClassesToAdd
▸ getClassesToAdd(): `string`


**Returns** `string`


---
### getDefaultCaption
▸ getDefaultCaption(): `string`


**Returns** `string`


---
### getDefaultTitleText
▸ getDefaultTitleText(attr: [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class)): `string`

#### Parameters:
- attr: [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class)


**Returns** `string`


---
### getUIS
▸ getUIS(): `boolean`


**Returns** `boolean`


---
### hideButtons
▸ hideButtons(): `void`


**Returns** `void`


---
### isColumnActive
▸ isColumnActive(): `boolean`


**Returns** `boolean`


---
### isEditable
▸ isEditable(): `boolean`


**Returns** `boolean`


---
### leaveButtonBlock
▸ leaveButtonBlock(): `void`


**Returns** `void`


---
### renderButtonsBlock
▸ renderButtonsBlock(): `HTMLDivElement`


**Returns** `HTMLDivElement`


---
### renderButtonsBlockMobile
▸ renderButtonsBlockMobile(): `HTMLDivElement`


**Returns** `HTMLDivElement`


---
### renderCaptionBlock
▸ renderCaptionBlock(): `HTMLDivElement`


**Returns** `HTMLDivElement`


---
### renderCaptionEditorMobile
▸ renderCaptionEditorMobile(): `HTMLDivElement`


**Returns** `HTMLDivElement`


---
### renderColumnTypeButton
▸ renderColumnTypeButton(): `HTMLDivElement`


**Returns** `HTMLDivElement`


---
### renderDeleteButton
▸ renderDeleteButton(): `HTMLDivElement`


**Returns** `HTMLDivElement`


---
### renderSortingButton
▸ renderSortingButton(): `HTMLDivElement`


**Returns** `HTMLDivElement`


---
### renderSortingImage
▸ renderSortingImage(): `HTMLDivElement`


**Returns** `HTMLDivElement`


---
### showButtons
▸ showButtons(): `void`


**Returns** `void`


---
