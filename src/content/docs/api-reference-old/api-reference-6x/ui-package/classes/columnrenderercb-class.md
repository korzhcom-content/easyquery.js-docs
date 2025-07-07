---
title: ColumnRendererCB class
slug: api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class
sidebar:
  order: 100
---

## Index
### [Constructors](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#constructors-1)
- [constructor](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#constructor)

### [Public Properties](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#public-properties-1)
- [onHideButtonsMobile](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#onhidebuttonsmobile)
- [onShowButtonsMobile](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#onshowbuttonsmobile)

### [Protected Properties](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#protected-properties-1)
- [bar](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#bar)
- [baseAttr](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#baseattr)
- [column](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#column)
- [element](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#element)
- [functionMenu](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#functionmenu)
- [isMouseOverBlock](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#ismouseoverblock)
- [keepShowingButtons](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#keepshowingbuttons)

### [Protected Accessors](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#protected-accessors-1)
- [cssPrefix](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#cssprefix)

### [Public Methods](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#public-methods-1)
- [buttonDeleteClickHandler](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#buttondeleteclickhandler)
- [buttonSortingClickHandler](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#buttonsortingclickhandler)
- [buttonTypeClickHandler](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#buttontypeclickhandler)
- [fireColumnChanged](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#firecolumnchanged)
- [refresh](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#refresh)
- [render](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#render)

### [Protected Methods](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#protected-methods-1)
- [adjustButtonsVisibility](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#adjustbuttonsvisibility)
- [changeTypeHandler](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#changetypehandler)
- [createFunctionMenu](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#createfunctionmenu)
- [enterButtonBlock](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#enterbuttonblock)
- [getAttribute](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#getattribute)
- [getClassesToAdd](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#getclassestoadd)
- [getDefaultCaption](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#getdefaultcaption)
- [getDefaultTitleText](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#getdefaulttitletext)
- [getUIS](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#getuis)
- [hideButtons](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#hidebuttons)
- [isColumnActive](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#iscolumnactive)
- [isEditable](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#iseditable)
- [leaveButtonBlock](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#leavebuttonblock)
- [renderButtonsBlock](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#renderbuttonsblock)
- [renderButtonsBlockMobile](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#renderbuttonsblockmobile)
- [renderCaptionBlock](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#rendercaptionblock)
- [renderCaptionEditorMobile](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#rendercaptioneditormobile)
- [renderColumnTypeButton](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#rendercolumntypebutton)
- [renderDeleteButton](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#renderdeletebutton)
- [renderSortingButton](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#rendersortingbutton)
- [renderSortingImage](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#rendersortingimage)
- [showButtons](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class#showbuttons)


## Constructors

---
#### constructor

⊕ new ColumnRendererCB(panel: [ColumnsBar](api-reference-old/api-reference-6x/ui-package/classes/columnsbar-class),column: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class),slot?: `HTMLDivElement`): [ColumnRendererCB](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercb-class)

#### Parameters:
- panel: [ColumnsBar](api-reference-old/api-reference-6x/ui-package/classes/columnsbar-class)
- column: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)
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

● bar: [ColumnsBar](api-reference-old/api-reference-6x/ui-package/classes/columnsbar-class)

---
### baseAttr

● baseAttr: [EntityAttr](api-reference-old/api-reference-6x/core-package/classes/entityattr-class)

---
### column

● column: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)

---
### element

● element: `HTMLDivElement`

---
### functionMenu

● functionMenu: [PopupMenu](api-reference-old/api-reference-6x/ui-package/classes/popupmenu-class) = ` null`

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
▸ getAttribute(): [EntityAttr](api-reference-old/api-reference-6x/core-package/classes/entityattr-class)


**Returns** [EntityAttr](api-reference-old/api-reference-6x/core-package/classes/entityattr-class)


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
▸ getDefaultTitleText(attr: [EntityAttr](api-reference-old/api-reference-6x/core-package/classes/entityattr-class)): `string`

#### Parameters:
- attr: [EntityAttr](api-reference-old/api-reference-6x/core-package/classes/entityattr-class)


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
