---
title: ColumnRendererCP class
slug: api-reference-old/api-reference-6x/ui-package/classes/columnrenderercp-class
sidebar:
  order: 100
---

## Index
### [Constructors](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercp-class#constructors-1)
- [constructor](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercp-class#constructor)

### [Protected Properties](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercp-class#protected-properties-1)
- [baseAttr](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercp-class#baseattr)
- [column](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercp-class#column)
- [element](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercp-class#element)
- [functionMenu](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercp-class#functionmenu)
- [isMouseOverBlock](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercp-class#ismouseoverblock)
- [keepShowingButtons](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercp-class#keepshowingbuttons)
- [panel](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercp-class#panel)

### [Protected Accessors](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercp-class#protected-accessors-1)
- [cssPrefix](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercp-class#cssprefix)

### [Public Methods](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercp-class#public-methods-1)
- [fireColumnChanged](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercp-class#firecolumnchanged)
- [refresh](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercp-class#refresh)
- [render](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercp-class#render)

### [Protected Methods](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercp-class#protected-methods-1)
- [adjustButtonsVisibility](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercp-class#adjustbuttonsvisibility)
- [changeTypeHandler](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercp-class#changetypehandler)
- [createFunctionMenu](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercp-class#createfunctionmenu)
- [enterButtonBlock](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercp-class#enterbuttonblock)
- [getAttribute](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercp-class#getattribute)
- [getAttributeCaption](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercp-class#getattributecaption)
- [getClassesToAdd](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercp-class#getclassestoadd)
- [getDefaultColumnCaption](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercp-class#getdefaultcolumncaption)
- [getDefaultTitleText](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercp-class#getdefaulttitletext)
- [getUIS](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercp-class#getuis)
- [hideButtons](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercp-class#hidebuttons)
- [isColumnActive](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercp-class#iscolumnactive)
- [isEditable](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercp-class#iseditable)
- [leaveButtonBlock](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercp-class#leavebuttonblock)
- [renderCaptionBlock](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercp-class#rendercaptionblock)
- [renderColumnTypeButton](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercp-class#rendercolumntypebutton)
- [renderDeleteButton](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercp-class#renderdeletebutton)
- [renderEnabledButton](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercp-class#renderenabledbutton)
- [renderExpressionBlock](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercp-class#renderexpressionblock)
- [renderSoringButton](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercp-class#rendersoringbutton)
- [showButtons](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercp-class#showbuttons)


## Constructors

---
#### constructor

⊕ new ColumnRendererCP(panel: [ColumnsPanel](api-reference-old/api-reference-6x/ui-package/classes/columnspanel-class),column: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class),slot?: `HTMLDivElement`): [ColumnRendererCP](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercp-class)

#### Parameters:
- panel: [ColumnsPanel](api-reference-old/api-reference-6x/ui-package/classes/columnspanel-class)
- column: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)
- slot: `HTMLDivElement`, *Optional* 


---

## Protected Properties

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
### panel

● panel: [ColumnsPanel](api-reference-old/api-reference-6x/ui-package/classes/columnspanel-class)

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
### getAttributeCaption
▸ getAttributeCaption(attr: [EntityAttr](api-reference-old/api-reference-6x/core-package/classes/entityattr-class),format?: `string`): `string`

#### Parameters:
- attr: [EntityAttr](api-reference-old/api-reference-6x/core-package/classes/entityattr-class)
- format: `string`, *Optional* 


**Returns** `string`


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
### renderCaptionBlock
▸ renderCaptionBlock(): `HTMLDivElement`


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
### renderEnabledButton
▸ renderEnabledButton(): `HTMLDivElement`


**Returns** `HTMLDivElement`


---
### renderExpressionBlock
▸ renderExpressionBlock(): `HTMLDivElement`


**Returns** `HTMLDivElement`


---
### renderSoringButton
▸ renderSoringButton(sorting: [SortDirection](api-reference-old/api-reference-6x/core-package/enumerations/sortdirection-enum)): `HTMLDivElement`

#### Parameters:
- sorting: [SortDirection](api-reference-old/api-reference-6x/core-package/enumerations/sortdirection-enum)


**Returns** `HTMLDivElement`


---
### showButtons
▸ showButtons(): `void`


**Returns** `void`


---
