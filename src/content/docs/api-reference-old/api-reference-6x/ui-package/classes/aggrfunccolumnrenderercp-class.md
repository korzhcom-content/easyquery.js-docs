---
title: AggrFuncColumnRendererCP class
slug: >-
  api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class
sidebar:
  order: 100
---

## Extends
[SimpleColumnRendererCP](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class)

## Index
### [Constructors](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class#constructors-1)
- [constructor](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class#constructor)

### [Protected Properties](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class#protected-properties-1)
- [baseAttr](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class#baseattr)
- [column](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class#column)
- [element](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class#element)
- [functionMenu](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class#functionmenu)
- [isMouseOverBlock](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class#ismouseoverblock)
- [keepShowingButtons](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class#keepshowingbuttons)
- [panel](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class#panel)

### [Protected Accessors](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class#protected-accessors-1)
- [cssPrefix](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class#cssprefix)

### [Public Methods](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class#public-methods-1)
- [changeTypeToSimple](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class#changetypetosimple)
- [fireColumnChanged](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class#firecolumnchanged)
- [refresh](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class#refresh)
- [render](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class#render)

### [Protected Methods](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class#protected-methods-1)
- [adjustButtonsVisibility](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class#adjustbuttonsvisibility)
- [baseExpressionItemSelectedCallback](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class#baseexpressionitemselectedcallback)
- [changeTypeHandler](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class#changetypehandler)
- [changeTypeToAggr](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class#changetypetoaggr)
- [changeTypeToCustomSql](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class#changetypetocustomsql)
- [createFunctionMenu](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class#createfunctionmenu)
- [enterButtonBlock](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class#enterbuttonblock)
- [getAttribute](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class#getattribute)
- [getAttributeCaption](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class#getattributecaption)
- [getClassesToAdd](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class#getclassestoadd)
- [getDefaultColumnCaption](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class#getdefaultcolumncaption)
- [getDefaultTitleText](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class#getdefaulttitletext)
- [getUIS](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class#getuis)
- [hideButtons](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class#hidebuttons)
- [isColumnActive](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class#iscolumnactive)
- [isEditable](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class#iseditable)
- [leaveButtonBlock](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class#leavebuttonblock)
- [renderBaseExpression](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class#renderbaseexpression)
- [renderCaptionBlock](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class#rendercaptionblock)
- [renderColumnTypeButton](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class#rendercolumntypebutton)
- [renderDeleteButton](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class#renderdeletebutton)
- [renderEnabledButton](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class#renderenabledbutton)
- [renderExpressionBlock](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class#renderexpressionblock)
- [renderSoringButton](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class#rendersoringbutton)
- [showButtons](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class#showbuttons)


## Constructors

---
#### constructor

⊕ new AggrFuncColumnRendererCP(panel: [ColumnsPanel](api-reference-old/api-reference-6x/ui-package/classes/columnspanel-class),column: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class),slot?: `HTMLDivElement`): [AggrFuncColumnRendererCP](api-reference-old/api-reference-6x/ui-package/classes/aggrfunccolumnrenderercp-class)

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
### changeTypeToSimple
▸ changeTypeToSimple(): `void`


**Returns** `void`


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
▸ baseExpressionItemSelectedCallback(data: `any`,item: `any`): `void`

#### Parameters:
- data: `any`
- item: `any`


**Returns** `void`


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
