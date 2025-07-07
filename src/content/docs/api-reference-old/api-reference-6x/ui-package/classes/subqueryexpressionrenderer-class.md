---
title: SubQueryExpressionRenderer class
slug: >-
  api-reference-old/api-reference-6x/ui-package/classes/subqueryexpressionrenderer-class
sidebar:
  order: 100
---

## Extends
[ExpressionRenderer](api-reference-old/api-reference-6x/ui-package/classes/expressionrenderer-class)

## Index
### [Constructors](api-reference-old/api-reference-6x/ui-package/classes/subqueryexpressionrenderer-class#constructors-1)
- [constructor](api-reference-old/api-reference-6x/ui-package/classes/subqueryexpressionrenderer-class#constructor)

### [Protected Properties](api-reference-old/api-reference-6x/ui-package/classes/subqueryexpressionrenderer-class#protected-properties-1)
- [colEntitiesList](api-reference-old/api-reference-6x/ui-package/classes/subqueryexpressionrenderer-class#colentitieslist)
- [colEntitiesMenu](api-reference-old/api-reference-6x/ui-package/classes/subqueryexpressionrenderer-class#colentitiesmenu)
- [columnBlock](api-reference-old/api-reference-6x/ui-package/classes/subqueryexpressionrenderer-class#columnblock)
- [columnElement](api-reference-old/api-reference-6x/ui-package/classes/subqueryexpressionrenderer-class#columnelement)
- [dialogBackground](api-reference-old/api-reference-6x/ui-package/classes/subqueryexpressionrenderer-class#dialogbackground)
- [dialogBlock](api-reference-old/api-reference-6x/ui-package/classes/subqueryexpressionrenderer-class#dialogblock)
- [dialogBlockBody](api-reference-old/api-reference-6x/ui-package/classes/subqueryexpressionrenderer-class#dialogblockbody)
- [displayedTextElement](api-reference-old/api-reference-6x/ui-package/classes/subqueryexpressionrenderer-class#displayedtextelement)
- [element](api-reference-old/api-reference-6x/ui-package/classes/subqueryexpressionrenderer-class#element)
- [expression](api-reference-old/api-reference-6x/ui-package/classes/subqueryexpressionrenderer-class#expression)
- [panel](api-reference-old/api-reference-6x/ui-package/classes/subqueryexpressionrenderer-class#panel)
- [queryPanel](api-reference-old/api-reference-6x/ui-package/classes/subqueryexpressionrenderer-class#querypanel)
- [queryPanelBlock](api-reference-old/api-reference-6x/ui-package/classes/subqueryexpressionrenderer-class#querypanelblock)
- [valueEditor](api-reference-old/api-reference-6x/ui-package/classes/subqueryexpressionrenderer-class#valueeditor)

### [Public Methods](api-reference-old/api-reference-6x/ui-package/classes/subqueryexpressionrenderer-class#public-methods-1)
- [refresh](api-reference-old/api-reference-6x/ui-package/classes/subqueryexpressionrenderer-class#refresh)
- [render](api-reference-old/api-reference-6x/ui-package/classes/subqueryexpressionrenderer-class#render)

### [Protected Methods](api-reference-old/api-reference-6x/ui-package/classes/subqueryexpressionrenderer-class#protected-methods-1)
- [appear](api-reference-old/api-reference-6x/ui-package/classes/subqueryexpressionrenderer-class#appear)
- [disappear](api-reference-old/api-reference-6x/ui-package/classes/subqueryexpressionrenderer-class#disappear)
- [getAttributeText](api-reference-old/api-reference-6x/ui-package/classes/subqueryexpressionrenderer-class#getattributetext)
- [getClassesToAdd](api-reference-old/api-reference-6x/ui-package/classes/subqueryexpressionrenderer-class#getclassestoadd)
- [getContext](api-reference-old/api-reference-6x/ui-package/classes/subqueryexpressionrenderer-class#getcontext)
- [getDisplayedElementText](api-reference-old/api-reference-6x/ui-package/classes/subqueryexpressionrenderer-class#getdisplayedelementtext)
- [getEmptyText](api-reference-old/api-reference-6x/ui-package/classes/subqueryexpressionrenderer-class#getemptytext)
- [getSubQuery](api-reference-old/api-reference-6x/ui-package/classes/subqueryexpressionrenderer-class#getsubquery)
- [getValue](api-reference-old/api-reference-6x/ui-package/classes/subqueryexpressionrenderer-class#getvalue)
- [isEditable](api-reference-old/api-reference-6x/ui-package/classes/subqueryexpressionrenderer-class#iseditable)
- [isEmptyValue](api-reference-old/api-reference-6x/ui-package/classes/subqueryexpressionrenderer-class#isemptyvalue)
- [renderDisplayedText](api-reference-old/api-reference-6x/ui-package/classes/subqueryexpressionrenderer-class#renderdisplayedtext)
- [renderEditor](api-reference-old/api-reference-6x/ui-package/classes/subqueryexpressionrenderer-class#rendereditor)
- [setValue](api-reference-old/api-reference-6x/ui-package/classes/subqueryexpressionrenderer-class#setvalue)
- [showValidationError](api-reference-old/api-reference-6x/ui-package/classes/subqueryexpressionrenderer-class#showvalidationerror)
- [validateInput](api-reference-old/api-reference-6x/ui-package/classes/subqueryexpressionrenderer-class#validateinput)


## Constructors

---
#### constructor

⊕ new SubQueryExpressionRenderer(panel: [QueryPanel](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class),expression: [Expression](api-reference-old/api-reference-6x/core-package/classes/expression-class),valueEditor: [ValueEditor](api-reference-old/api-reference-6x/core-package/classes/valueeditor-class),slot?: `HTMLDivElement`): [SubQueryExpressionRenderer](api-reference-old/api-reference-6x/ui-package/classes/subqueryexpressionrenderer-class)

#### Parameters:
- panel: [QueryPanel](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class)
- expression: [Expression](api-reference-old/api-reference-6x/core-package/classes/expression-class)
- valueEditor: [ValueEditor](api-reference-old/api-reference-6x/core-package/classes/valueeditor-class)
- slot: `HTMLDivElement`, *Optional* 


---

## Protected Properties

---
### colEntitiesList

● colEntitiesList: [Entity](api-reference-old/api-reference-6x/core-package/classes/entity-class)[]

---
### colEntitiesMenu

● colEntitiesMenu: [PopupMenu](api-reference-old/api-reference-6x/ui-package/classes/popupmenu-class)

---
### columnBlock

● columnBlock: `HTMLElement`

---
### columnElement

● columnElement: `HTMLElement`

---
### dialogBackground

● dialogBackground: `HTMLElement`

---
### dialogBlock

● dialogBlock: `HTMLElement`

---
### dialogBlockBody

● dialogBlockBody: `HTMLElement`

---
### displayedTextElement

● displayedTextElement: `HTMLElement`

---
### element

● element: `HTMLDivElement`

---
### expression

● expression: [Expression](api-reference-old/api-reference-6x/core-package/classes/expression-class)

---
### panel

● panel: [QueryPanel](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class)

---
### queryPanel

● queryPanel: [QueryPanel](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class)

---
### queryPanelBlock

● queryPanelBlock: `HTMLElement`

---
### valueEditor

● valueEditor: [ValueEditor](api-reference-old/api-reference-6x/core-package/classes/valueeditor-class)

---
## Public Methods

---
### refresh
▸ refresh(): `void`


**Returns** `void`

---
### render
▸ render(appeared?: `boolean`): `HTMLDivElement`

#### Parameters:
- appeared: `boolean`, *Default value* = `false`


**Returns** `HTMLDivElement`

---
## Protected Methods

---
### appear
▸ appear(): `void`


**Returns** `void`

---
### disappear
▸ disappear(): `void`


**Returns** `void`

---
### getAttributeText
▸ getAttributeText(attribute: [EntityAttr](api-reference-old/api-reference-6x/core-package/classes/entityattr-class)): `string`

#### Parameters:
- attribute: [EntityAttr](api-reference-old/api-reference-6x/core-package/classes/entityattr-class)


**Returns** `string`

---
### getClassesToAdd
▸ getClassesToAdd(): `string`


**Returns** `string`

---
### getContext
▸ getContext(): [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)


**Returns** [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)

---
### getDisplayedElementText
▸ getDisplayedElementText(): `string`


**Returns** `string`

---
### getEmptyText
▸ getEmptyText(): `string`


**Returns** `string`

---
### getSubQuery
▸ getSubQuery(): [Query](api-reference-old/api-reference-6x/core-package/classes/query-class)


**Returns** [Query](api-reference-old/api-reference-6x/core-package/classes/query-class)

---
### getValue
▸ getValue(): `string`


**Returns** `string`

---
### isEditable
▸ isEditable(): `boolean`


**Returns** `boolean`

---
### isEmptyValue
▸ isEmptyValue(): `boolean`


**Returns** `boolean`

---
### renderDisplayedText
▸ renderDisplayedText(): `HTMLElement`


**Returns** `HTMLElement`

---
### renderEditor
▸ renderEditor(): `void`


**Returns** `void`

---
### setValue
▸ setValue(value: `string` | [Query](api-reference-old/api-reference-6x/core-package/classes/query-class),silent?: `boolean`): `void`

#### Parameters:
- value: `string` | [Query](api-reference-old/api-reference-6x/core-package/classes/query-class)
- silent: `boolean`, *Optional* 


**Returns** `void`

---
### showValidationError
▸ showValidationError(message: `string`,target?: `EventTarget`): `void`

#### Parameters:
- message: `string`
- target: `EventTarget`, *Optional* 


**Returns** `void`

---
### validateInput
▸ validateInput(value: `string`): [ValidationResult](api-reference-old/api-reference-6x/ui-package/interfaces/validationresult-interface)

#### Parameters:
- value: `string`


**Returns** [ValidationResult](api-reference-old/api-reference-6x/ui-package/interfaces/validationresult-interface)

---
