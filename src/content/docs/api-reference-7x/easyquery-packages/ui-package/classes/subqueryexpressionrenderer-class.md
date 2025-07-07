---
title: SubQueryExpressionRenderer class
slug: >-
  api-reference-7x/easyquery-packages/ui-package/classes/subqueryexpressionrenderer-class
sidebar:
  order: 100
---

## Extends
[ExpressionRenderer](api-reference-7x/easyquery-packages/ui-package/classes/expressionrenderer-class)

## Index
### [Constructors](api-reference-7x/easyquery-packages/ui-package/classes/subqueryexpressionrenderer-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/ui-package/classes/subqueryexpressionrenderer-class#constructor)

### [Protected Properties](api-reference-7x/easyquery-packages/ui-package/classes/subqueryexpressionrenderer-class#protected-properties-1)
- [colEntitiesList](api-reference-7x/easyquery-packages/ui-package/classes/subqueryexpressionrenderer-class#colentitieslist)
- [colEntitiesMenu](api-reference-7x/easyquery-packages/ui-package/classes/subqueryexpressionrenderer-class#colentitiesmenu)
- [columnBlock](api-reference-7x/easyquery-packages/ui-package/classes/subqueryexpressionrenderer-class#columnblock)
- [columnElement](api-reference-7x/easyquery-packages/ui-package/classes/subqueryexpressionrenderer-class#columnelement)
- [dialogBackground](api-reference-7x/easyquery-packages/ui-package/classes/subqueryexpressionrenderer-class#dialogbackground)
- [dialogBlock](api-reference-7x/easyquery-packages/ui-package/classes/subqueryexpressionrenderer-class#dialogblock)
- [dialogBlockBody](api-reference-7x/easyquery-packages/ui-package/classes/subqueryexpressionrenderer-class#dialogblockbody)
- [element](api-reference-7x/easyquery-packages/ui-package/classes/subqueryexpressionrenderer-class#element)
- [expression](api-reference-7x/easyquery-packages/ui-package/classes/subqueryexpressionrenderer-class#expression)
- [labelElement](api-reference-7x/easyquery-packages/ui-package/classes/subqueryexpressionrenderer-class#labelelement)
- [panel](api-reference-7x/easyquery-packages/ui-package/classes/subqueryexpressionrenderer-class#panel)
- [queryPanel](api-reference-7x/easyquery-packages/ui-package/classes/subqueryexpressionrenderer-class#querypanel)
- [queryPanelBlock](api-reference-7x/easyquery-packages/ui-package/classes/subqueryexpressionrenderer-class#querypanelblock)
- [valueEditor](api-reference-7x/easyquery-packages/ui-package/classes/subqueryexpressionrenderer-class#valueeditor)

### [Protected Accessors](api-reference-7x/easyquery-packages/ui-package/classes/subqueryexpressionrenderer-class#protected-accessors-1)
- [cssPrefix](api-reference-7x/easyquery-packages/ui-package/classes/subqueryexpressionrenderer-class#cssprefix)

### [Public Methods](api-reference-7x/easyquery-packages/ui-package/classes/subqueryexpressionrenderer-class#public-methods-1)
- [adjustWidth](api-reference-7x/easyquery-packages/ui-package/classes/subqueryexpressionrenderer-class#adjustwidth)
- [refresh](api-reference-7x/easyquery-packages/ui-package/classes/subqueryexpressionrenderer-class#refresh)
- [render](api-reference-7x/easyquery-packages/ui-package/classes/subqueryexpressionrenderer-class#render)

### [Protected Methods](api-reference-7x/easyquery-packages/ui-package/classes/subqueryexpressionrenderer-class#protected-methods-1)
- [closeEditor](api-reference-7x/easyquery-packages/ui-package/classes/subqueryexpressionrenderer-class#closeeditor)
- [getAttributeText](api-reference-7x/easyquery-packages/ui-package/classes/subqueryexpressionrenderer-class#getattributetext)
- [getClassesToAdd](api-reference-7x/easyquery-packages/ui-package/classes/subqueryexpressionrenderer-class#getclassestoadd)
- [getContext](api-reference-7x/easyquery-packages/ui-package/classes/subqueryexpressionrenderer-class#getcontext)
- [getEmptyText](api-reference-7x/easyquery-packages/ui-package/classes/subqueryexpressionrenderer-class#getemptytext)
- [getLabelText](api-reference-7x/easyquery-packages/ui-package/classes/subqueryexpressionrenderer-class#getlabeltext)
- [getSubQuery](api-reference-7x/easyquery-packages/ui-package/classes/subqueryexpressionrenderer-class#getsubquery)
- [getValue](api-reference-7x/easyquery-packages/ui-package/classes/subqueryexpressionrenderer-class#getvalue)
- [isEditable](api-reference-7x/easyquery-packages/ui-package/classes/subqueryexpressionrenderer-class#iseditable)
- [isEmptyValue](api-reference-7x/easyquery-packages/ui-package/classes/subqueryexpressionrenderer-class#isemptyvalue)
- [isReadOnly](api-reference-7x/easyquery-packages/ui-package/classes/subqueryexpressionrenderer-class#isreadonly)
- [renderEditor](api-reference-7x/easyquery-packages/ui-package/classes/subqueryexpressionrenderer-class#rendereditor)
- [renderLabelElement](api-reference-7x/easyquery-packages/ui-package/classes/subqueryexpressionrenderer-class#renderlabelelement)
- [setValue](api-reference-7x/easyquery-packages/ui-package/classes/subqueryexpressionrenderer-class#setvalue)
- [showEditor](api-reference-7x/easyquery-packages/ui-package/classes/subqueryexpressionrenderer-class#showeditor)
- [showValidationError](api-reference-7x/easyquery-packages/ui-package/classes/subqueryexpressionrenderer-class#showvalidationerror)
- [validateInput](api-reference-7x/easyquery-packages/ui-package/classes/subqueryexpressionrenderer-class#validateinput)


## Constructors

---
#### constructor

⊕ new SubQueryExpressionRenderer(panel: [QueryPanel](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class),expression: [Expression](api-reference-7x/easyquery-packages/core-package/classes/expression-class),valueEditor: [EqValueEditor](api-reference-7x/easyquery-packages/core-package/classes/eqvalueeditor-class),slot?: `HTMLDivElement`): [SubQueryExpressionRenderer](api-reference-7x/easyquery-packages/ui-package/classes/subqueryexpressionrenderer-class)

#### Parameters:
- panel: [QueryPanel](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class)
- expression: [Expression](api-reference-7x/easyquery-packages/core-package/classes/expression-class)
- valueEditor: [EqValueEditor](api-reference-7x/easyquery-packages/core-package/classes/eqvalueeditor-class)
- slot: `HTMLDivElement`, *Optional* 


---

## Protected Properties

---
### colEntitiesList

● colEntitiesList: [Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class)[]

---
### colEntitiesMenu

● colEntitiesMenu: [PopupMenu](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class)

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
### element

● element: `HTMLDivElement`

---
### expression

● expression: [Expression](api-reference-7x/easyquery-packages/core-package/classes/expression-class)

---
### labelElement

● labelElement: `HTMLElement`

---
### panel

● panel: [QueryPanel](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class)

---
### queryPanel

● queryPanel: [QueryPanel](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class)

---
### queryPanelBlock

● queryPanelBlock: `HTMLElement`

---
### valueEditor

● valueEditor: [EqValueEditor](api-reference-7x/easyquery-packages/core-package/classes/eqvalueeditor-class)

---
## Protected Accessors

---
### cssPrefix
⇄ get cssPrefix(): `string`


**Returns** `string`


---
## Public Methods

---
### adjustWidth
▸ adjustWidth(): `void`


**Returns** `void`


---
### refresh
▸ refresh(): `void`


**Returns** `void`


---
### render
▸ render(isEditMode?: `boolean`): `HTMLDivElement`

#### Parameters:
- isEditMode: `boolean`, *Default value* = `false`


**Returns** `HTMLDivElement`


---
## Protected Methods

---
### closeEditor
▸ closeEditor(): `void`


**Returns** `void`


---
### getAttributeText
▸ getAttributeText(attribute: [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class)): `string`

#### Parameters:
- attribute: [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class)


**Returns** `string`


---
### getClassesToAdd
▸ getClassesToAdd(): `string`


**Returns** `string`


---
### getContext
▸ getContext(): [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)


**Returns** [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)


---
### getEmptyText
▸ getEmptyText(): `string`


**Returns** `string`


---
### getLabelText
▸ getLabelText(): `string`


**Returns** `string`


---
### getSubQuery
▸ getSubQuery(): [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)


**Returns** [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)


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
### isReadOnly
▸ isReadOnly(): `boolean`


**Returns** `boolean`


---
### renderEditor
▸ renderEditor(): `void`


**Returns** `void`


---
### renderLabelElement
▸ renderLabelElement(): `HTMLElement`


**Returns** `HTMLElement`


---
### setValue
▸ setValue(value: `string` | [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class),silent?: `boolean`): `void`

#### Parameters:
- value: `string` | [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)
- silent: `boolean`, *Optional* 


**Returns** `void`


---
### showEditor
▸ showEditor(): `void`


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
▸ validateInput(value: `string`): [ValidationResult](api-reference-7x/easyquery-packages/ui-package/interfaces/validationresult-interface)

#### Parameters:
- value: `string`


**Returns** [ValidationResult](api-reference-7x/easyquery-packages/ui-package/interfaces/validationresult-interface)


---
