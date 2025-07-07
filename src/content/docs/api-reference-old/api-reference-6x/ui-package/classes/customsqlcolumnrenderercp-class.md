---
title: CustomSqlColumnRendererCP class
slug: >-
  api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class
sidebar:
  order: 100
---

## Extends
[SimpleColumnRendererCP](api-reference-old/api-reference-6x/ui-package/classes/simplecolumnrenderercp-class)

## Index
### [Constructors](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#constructors-1)
- [constructor](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#constructor)

### [Protected Properties](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#protected-properties-1)
- [baseAttr](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#baseattr)
- [column](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#column)
- [element](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#element)
- [functionMenu](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#functionmenu)
- [isMouseOverBlock](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#ismouseoverblock)
- [keepShowingButtons](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#keepshowingbuttons)
- [panel](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#panel)

### [Protected Accessors](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#protected-accessors-1)
- [cssPrefix](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#cssprefix)

### [Public Methods](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#public-methods-1)
- [changeTypeToSimple](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#changetypetosimple)
- [fireColumnChanged](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#firecolumnchanged)
- [refresh](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#refresh)
- [render](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#render)

### [Protected Methods](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#protected-methods-1)
- [adjustButtonsVisibility](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#adjustbuttonsvisibility)
- [baseExpressionItemSelectedCallback](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#baseexpressionitemselectedcallback)
- [changeTypeHandler](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#changetypehandler)
- [changeTypeToAggr](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#changetypetoaggr)
- [changeTypeToCustomSql](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#changetypetocustomsql)
- [createFunctionMenu](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#createfunctionmenu)
- [enterButtonBlock](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#enterbuttonblock)
- [getAttribute](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#getattribute)
- [getAttributeCaption](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#getattributecaption)
- [getClassesToAdd](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#getclassestoadd)
- [getDefaultColumnCaption](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#getdefaultcolumncaption)
- [getDefaultTitleText](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#getdefaulttitletext)
- [getDefaultValue](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#getdefaultvalue)
- [getUIS](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#getuis)
- [hideButtons](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#hidebuttons)
- [isColumnActive](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#iscolumnactive)
- [isEditable](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#iseditable)
- [leaveButtonBlock](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#leavebuttonblock)
- [renderBaseExpression](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#renderbaseexpression)
- [renderCaptionBlock](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#rendercaptionblock)
- [renderColumnTypeButton](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#rendercolumntypebutton)
- [renderDeleteButton](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#renderdeletebutton)
- [renderEnabledButton](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#renderenabledbutton)
- [renderExpressionBlock](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#renderexpressionblock)
- [renderSoringButton](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#rendersoringbutton)
- [showButtons](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class#showbuttons)


## Constructors

---
#### constructor

⊕ new CustomSqlColumnRendererCP(panel: [ColumnsPanel](api-reference-old/api-reference-6x/ui-package/classes/columnspanel-class),column: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class),slot?: `HTMLDivElement`): [CustomSqlColumnRendererCP](api-reference-old/api-reference-6x/ui-package/classes/customsqlcolumnrenderercp-class)

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
### getDefaultValue
▸ getDefaultValue(): `string`


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
