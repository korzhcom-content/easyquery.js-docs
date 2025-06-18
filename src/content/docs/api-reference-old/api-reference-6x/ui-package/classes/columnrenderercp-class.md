---
title: ColumnRendererCP class
slug: api-reference-old/api-reference-6x/ui-package/classes/columnrenderercp-class
sidebar:
  order: 100
---

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnrenderercp-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnrenderercp-class/#constructor)

### [Protected Properties](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnrenderercp-class/#protected-properties-1)
- [baseAttr](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnrenderercp-class/#baseattr)
- [column](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnrenderercp-class/#column)
- [element](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnrenderercp-class/#element)
- [functionMenu](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnrenderercp-class/#functionmenu)
- [isMouseOverBlock](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnrenderercp-class/#ismouseoverblock)
- [keepShowingButtons](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnrenderercp-class/#keepshowingbuttons)
- [panel](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnrenderercp-class/#panel)

### [Protected Accessors](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnrenderercp-class/#protected-accessors-1)
- [cssPrefix](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnrenderercp-class/#cssprefix)

### [Public Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnrenderercp-class/#public-methods-1)
- [fireColumnChanged](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnrenderercp-class/#firecolumnchanged)
- [refresh](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnrenderercp-class/#refresh)
- [render](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnrenderercp-class/#render)

### [Protected Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnrenderercp-class/#protected-methods-1)
- [adjustButtonsVisibility](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnrenderercp-class/#adjustbuttonsvisibility)
- [changeTypeHandler](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnrenderercp-class/#changetypehandler)
- [createFunctionMenu](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnrenderercp-class/#createfunctionmenu)
- [enterButtonBlock](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnrenderercp-class/#enterbuttonblock)
- [getAttribute](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnrenderercp-class/#getattribute)
- [getAttributeCaption](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnrenderercp-class/#getattributecaption)
- [getClassesToAdd](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnrenderercp-class/#getclassestoadd)
- [getDefaultColumnCaption](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnrenderercp-class/#getdefaultcolumncaption)
- [getDefaultTitleText](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnrenderercp-class/#getdefaulttitletext)
- [getUIS](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnrenderercp-class/#getuis)
- [hideButtons](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnrenderercp-class/#hidebuttons)
- [isColumnActive](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnrenderercp-class/#iscolumnactive)
- [isEditable](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnrenderercp-class/#iseditable)
- [leaveButtonBlock](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnrenderercp-class/#leavebuttonblock)
- [renderCaptionBlock](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnrenderercp-class/#rendercaptionblock)
- [renderColumnTypeButton](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnrenderercp-class/#rendercolumntypebutton)
- [renderDeleteButton](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnrenderercp-class/#renderdeletebutton)
- [renderEnabledButton](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnrenderercp-class/#renderenabledbutton)
- [renderExpressionBlock](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnrenderercp-class/#renderexpressionblock)
- [renderSoringButton](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnrenderercp-class/#rendersoringbutton)
- [showButtons](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnrenderercp-class/#showbuttons)


## Constructors

---
#### constructor

⊕ new ColumnRendererCP(panel: [ColumnsPanel](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnspanel-class),column: [Column](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/column-class),slot?: `HTMLDivElement`): [ColumnRendererCP](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnrenderercp-class)

#### Parameters:
- panel: [ColumnsPanel](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnspanel-class)
- column: [Column](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/column-class)
- slot: `HTMLDivElement`, *Optional* 


---

## Protected Properties

---
### baseAttr

● baseAttr: [EntityAttr](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/entityattr-class)

---
### column

● column: [Column](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/column-class)

---
### element

● element: `HTMLDivElement`

---
### functionMenu

● functionMenu: [PopupMenu](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/popupmenu-class) = ` null`

---
### isMouseOverBlock

● isMouseOverBlock: `boolean` = `false`

---
### keepShowingButtons

● keepShowingButtons: `boolean` = `false`

---
### panel

● panel: [ColumnsPanel](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/columnspanel-class)

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
▸ getAttribute(): [EntityAttr](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/entityattr-class)


**Returns** [EntityAttr](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/entityattr-class)


---
### getAttributeCaption
▸ getAttributeCaption(attr: [EntityAttr](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/entityattr-class),format?: `string`): `string`

#### Parameters:
- attr: [EntityAttr](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/entityattr-class)
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
▸ getDefaultTitleText(attr: [EntityAttr](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/entityattr-class)): `string`

#### Parameters:
- attr: [EntityAttr](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/entityattr-class)


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
▸ renderSoringButton(sorting: [SortDirection](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/enumerations/sortdirection-enum)): `HTMLDivElement`

#### Parameters:
- sorting: [SortDirection](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/enumerations/sortdirection-enum)


**Returns** `HTMLDivElement`


---
### showButtons
▸ showButtons(): `void`


**Returns** `void`


---
