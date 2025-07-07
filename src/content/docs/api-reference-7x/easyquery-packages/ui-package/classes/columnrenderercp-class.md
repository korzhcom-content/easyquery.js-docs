---
title: ColumnRendererCP class
slug: api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class
sidebar:
  order: 100
---

## Index
### [Constructors](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#constructor)

### [Protected Properties](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#protected-properties-1)
- [baseAttr](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#baseattr)
- [buttonMenu](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#buttonmenu)
- [column](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#column)
- [element](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#element)
- [functionMenu](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#functionmenu)
- [isMouseOverBlock](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#ismouseoverblock)
- [keepShowingButtons](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#keepshowingbuttons)
- [panel](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#panel)

### [Protected Accessors](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#protected-accessors-1)
- [cssPrefix](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#cssprefix)

### [Public Methods](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#public-methods-1)
- [fireColumnChanged](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#firecolumnchanged)
- [refresh](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#refresh)
- [render](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#render)

### [Protected Methods](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#protected-methods-1)
- [adjustButtonsVisibility](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#adjustbuttonsvisibility)
- [buttonMenuHandler](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#buttonmenuhandler)
- [changeTypeHandler](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#changetypehandler)
- [createFunctionMenu](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#createfunctionmenu)
- [enterButtonBlock](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#enterbuttonblock)
- [getAttribute](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#getattribute)
- [getAttributeCaption](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#getattributecaption)
- [getButtonMenuSelectedItems](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#getbuttonmenuselecteditems)
- [getButtonsToShow](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#getbuttonstoshow)
- [getClassesToAdd](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#getclassestoadd)
- [getDefaultColumnCaption](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#getdefaultcolumncaption)
- [getDefaultTitleText](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#getdefaulttitletext)
- [getExtraButtonMenuItems](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#getextrabuttonmenuitems)
- [getUIS](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#getuis)
- [hideButtons](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#hidebuttons)
- [isColumnActive](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#iscolumnactive)
- [isEditable](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#iseditable)
- [leaveButtonBlock](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#leavebuttonblock)
- [processExtraButtonMenuItems](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#processextrabuttonmenuitems)
- [renderCaptionBlock](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#rendercaptionblock)
- [renderCheckbox](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#rendercheckbox)
- [renderColumnTypeButton](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#rendercolumntypebutton)
- [renderDeleteButton](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#renderdeletebutton)
- [renderEnabledButton](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#renderenabledbutton)
- [renderExpressionBlock](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#renderexpressionblock)
- [renderMenuButton](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#rendermenubutton)
- [renderSoringButton](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#rendersoringbutton)
- [showButtons](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class#showbuttons)


## Constructors

---
#### constructor

⊕ new ColumnRendererCP(panel: [ColumnsPanel](api-reference-7x/easyquery-packages/ui-package/classes/columnspanel-class),column: [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class),slot?: `HTMLDivElement`): [ColumnRendererCP](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderercp-class)

#### Parameters:
- panel: [ColumnsPanel](api-reference-7x/easyquery-packages/ui-package/classes/columnspanel-class)
- column: [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)
- slot: `HTMLDivElement`, *Optional* 


---

## Protected Properties

---
### baseAttr

● baseAttr: [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class)

---
### buttonMenu

● buttonMenu: [PopupMenu](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class) = ` null`

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
### panel

● panel: [ColumnsPanel](api-reference-7x/easyquery-packages/ui-package/classes/columnspanel-class)

---
## Protected Accessors

---
### cssPrefix
⇄ get cssPrefix(): `string`


**Returns** `string`


---
## Public Methods

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
### buttonMenuHandler
▸ buttonMenuHandler(action: [ColumnAction](api-reference-7x/easyquery-packages/ui-package/enumerations/columnaction-enum),evt?: `Event`): `boolean`

#### Parameters:
- action: [ColumnAction](api-reference-7x/easyquery-packages/ui-package/enumerations/columnaction-enum)
- evt: `Event`, *Optional* 


**Returns** `boolean`


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
### getAttributeCaption
▸ getAttributeCaption(attr: [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class),format?: `string`): `string`

#### Parameters:
- attr: [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class)
- format: `string`, *Optional* 


**Returns** `string`


---
### getButtonMenuSelectedItems
▸ getButtonMenuSelectedItems(): `Array`&lt;`string`&gt;


**Returns** `Array`&lt;`string`&gt;


---
### getButtonsToShow
▸ getButtonsToShow(): `Array`&lt;`string`&gt;


**Returns** `Array`&lt;`string`&gt;


---
### getClassesToAdd
▸ getClassesToAdd(): `string`


**Returns** `string`


---
### getDefaultColumnCaption
▸ getDefaultColumnCaption(): `string`


**Returns** `string`


---
### getDefaultTitleText
▸ getDefaultTitleText(attr: [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class)): `string`

#### Parameters:
- attr: [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class)


**Returns** `string`


---
### getExtraButtonMenuItems
▸ getExtraButtonMenuItems(): `Array`&lt;`any`&gt;


**Returns** `Array`&lt;`any`&gt;


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
### processExtraButtonMenuItems
▸ processExtraButtonMenuItems(action: [ColumnAction](api-reference-7x/easyquery-packages/ui-package/enumerations/columnaction-enum) | `string`,evt: `Event`): `boolean`

#### Parameters:
- action: [ColumnAction](api-reference-7x/easyquery-packages/ui-package/enumerations/columnaction-enum) | `string`
- evt: `Event`


**Returns** `boolean`


---
### renderCaptionBlock
▸ renderCaptionBlock(): `HTMLDivElement`


**Returns** `HTMLDivElement`


---
### renderCheckbox
▸ renderCheckbox(): `HTMLElement`


**Returns** `HTMLElement`


---
### renderColumnTypeButton
▸ renderColumnTypeButton(): `HTMLDivElement`


**Returns** `HTMLDivElement`


---
### renderDeleteButton
▸ renderDeleteButton(): `HTMLDivElement`


**Returns** `HTMLDivElement`


---
### renderEnabledButton
▸ renderEnabledButton(): `HTMLDivElement`


**Returns** `HTMLDivElement`


---
### renderExpressionBlock
▸ renderExpressionBlock(): `HTMLDivElement`


**Returns** `HTMLDivElement`


---
### renderMenuButton
▸ renderMenuButton(): `HTMLDivElement`


**Returns** `HTMLDivElement`


---
### renderSoringButton
▸ renderSoringButton(sorting: [SortDirection](api-reference-7x/easyquery-packages/core-package/enumerations/sortdirection-enum)): `HTMLDivElement`

#### Parameters:
- sorting: [SortDirection](api-reference-7x/easyquery-packages/core-package/enumerations/sortdirection-enum)


**Returns** `HTMLDivElement`


---
### showButtons
▸ showButtons(): `void`


**Returns** `void`


---
