---
title: SimpleColumnRendererCP class
slug: >-
  api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class
sidebar:
  order: 100
---

## Extends
[ColumnRendererCP](api-reference-old/api-reference-6x/ui-package/classes/columnrenderercp-class)

## Index
### [Constructors](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#constructors-1)
- [constructor](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#constructor)

### [Protected Properties](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#protected-properties-1)
- [baseAttr](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#baseattr)
- [buttonMenu](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#buttonmenu)
- [column](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#column)
- [element](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#element)
- [functionMenu](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#functionmenu)
- [isMouseOverBlock](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#ismouseoverblock)
- [keepShowingButtons](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#keepshowingbuttons)
- [panel](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#panel)

### [Public Methods](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#public-methods-1)
- [fireColumnChanged](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#firecolumnchanged)
- [refresh](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#refresh)
- [render](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#render)

### [Protected Methods](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#protected-methods-1)
- [adjustButtonsVisibility](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#adjustbuttonsvisibility)
- [baseExpressionItemSelectedCallback](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#baseexpressionitemselectedcallback)
- [buttonMenuHandler](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#buttonmenuhandler)
- [changeTypeHandler](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#changetypehandler)
- [changeTypeToAggr](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#changetypetoaggr)
- [changeTypeToCustomSql](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#changetypetocustomsql)
- [createFunctionMenu](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#createfunctionmenu)
- [enterButtonBlock](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#enterbuttonblock)
- [getAttribute](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#getattribute)
- [getAttributeCaption](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#getattributecaption)
- [getButtonMenuSelectedItems](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#getbuttonmenuselecteditems)
- [getButtonsToShow](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#getbuttonstoshow)
- [getClassesToAdd](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#getclassestoadd)
- [getDefaultColumnCaption](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#getdefaultcolumncaption)
- [getDefaultTitleText](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#getdefaulttitletext)
- [getExtraButtonMenuItems](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#getextrabuttonmenuitems)
- [getUIS](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#getuis)
- [hideButtons](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#hidebuttons)
- [isColumnActive](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#iscolumnactive)
- [isEditable](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#iseditable)
- [leaveButtonBlock](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#leavebuttonblock)
- [processExtraButtonMenuItems](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#processextrabuttonmenuitems)
- [renderBaseExpression](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#renderbaseexpression)
- [renderCaptionBlock](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#rendercaptionblock)
- [renderColumnTypeButton](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#rendercolumntypebutton)
- [renderDeleteButton](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#renderdeletebutton)
- [renderEnabledButton](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#renderenabledbutton)
- [renderExpressionBlock](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#renderexpressionblock)
- [renderMenuButton](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#rendermenubutton)
- [renderSoringButton](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#rendersoringbutton)
- [showButtons](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class#showbuttons)


## Constructors

---
#### constructor

⊕ new SimpleColumnRendererCP(panel: [ColumnsPanel](api-reference-old/api-reference-6x/ui-package/classes/columnspanel-class),column: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class),slot?: `HTMLDivElement`): [SimpleColumnRendererCP](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class)

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
### buttonMenu

● buttonMenu: [PopupMenu](api-reference-old/api-reference-6x/ui-package/classes/popupmenu-class) = ` null`

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
### baseExpressionItemSelectedCallback
▸ baseExpressionItemSelectedCallback(data: `any`,item: `any`): `boolean`

#### Parameters:
- data: `any`
- item: `any`


**Returns** `boolean`

---
### buttonMenuHandler
▸ buttonMenuHandler(action: [ColumnAction](api-reference-old/api-reference-6x/ui-package/enumerations/columnaction-enum),evt: `Event`): `boolean`

#### Parameters:
- action: [ColumnAction](api-reference-old/api-reference-6x/ui-package/enumerations/columnaction-enum)
- evt: `Event`


**Returns** `boolean`

---
### changeTypeHandler
▸ changeTypeHandler(ev: `Event`): `void`

#### Parameters:
- ev: `Event`


**Returns** `void`

---
### changeTypeToAggr
▸ changeTypeToAggr(funcId: `string`): `void`

#### Parameters:
- funcId: `string`


**Returns** `void`

---
### changeTypeToCustomSql
▸ changeTypeToCustomSql(): `void`


**Returns** `void`

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
▸ getDefaultTitleText(attr: [EntityAttr](api-reference-old/api-reference-6x/core-package/classes/entityattr-class)): `string`

#### Parameters:
- attr: [EntityAttr](api-reference-old/api-reference-6x/core-package/classes/entityattr-class)


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
▸ processExtraButtonMenuItems(action: [ColumnAction](api-reference-old/api-reference-6x/ui-package/enumerations/columnaction-enum) | `string`,evt: `Event`): `boolean`

#### Parameters:
- action: [ColumnAction](api-reference-old/api-reference-6x/ui-package/enumerations/columnaction-enum) | `string`
- evt: `Event`


**Returns** `boolean`

---
### renderBaseExpression
▸ renderBaseExpression(): `HTMLElement`


**Returns** `HTMLElement`

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
### renderMenuButton
▸ renderMenuButton(): `HTMLDivElement`


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
